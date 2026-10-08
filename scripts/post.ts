import { BskyAgent } from '@atproto/api';
import { readFileSync } from 'fs';
import { join } from 'path';
import {
  type Project, type LatestData,
  loadPosted, savePosted, recordPost, loadOgImage, selectTop20,
  seededIndex, slugify, resolveBlueskyAccount,
} from './post-shared.ts';
import { buildPost } from './post-build.ts';
import { claudeEnabled } from './claude-cli.ts';
import { buildPitch, generatePitch, needsLlmPitch, readmeExcerpt } from './post-pitch.ts';

const DRY_RUN = process.argv.includes('--dry-run') || process.env.DRY_RUN === 'true';

async function main(): Promise<void> {
  const data: LatestData = JSON.parse(
    readFileSync(join(process.cwd(), 'data', 'latest.json'), 'utf8'),
  );

  const posted = loadPosted();
  const active = selectTop20(data.projects, posted, 'bsky');

  if (active.length === 0) throw new Error('No active projects available to post to Bluesky — all candidates already posted');

  const projectArg = process.argv.find((_, i, a) => a[i - 1] === '--project')
                  ?? process.env.PROJECT_SLUG
                  ?? null;

  let project: Project;
  if (projectArg) {
    const needle = projectArg.toLowerCase();
    const found = data.projects.find(p =>
      p.repo.toLowerCase() === needle ||
      slugify(p.repo) === needle,
    );
    if (!found) throw new Error(`Project not found: "${projectArg}"`);
    project = found;
  } else {
    const today = new Date().toISOString().slice(0, 10);
    project = active[seededIndex(today, active.length)];
  }

  const baseUrl = (process.env.BASE_URL ?? 'https://capuz.github.io/silentstars').replace(/\/$/, '');

  // The raw GitHub description is often status text ("Work in progress …"), so
  // the post leads with what the project does, taken from its README/description.
  // Claude only writes it when that would come out weak (needsLlmPitch): a status,
  // empty or very short description and no clear sentence in the README.
  const description = project.description ?? '';
  const readme      = readmeExcerpt(slugify(project.repo));
  const weak        = needsLlmPitch({ description, readme });
  const claudePitch = weak && claudeEnabled()
    ? await generatePitch({ name: project.name, description, readme })
    : null;
  const pitch  = claudePitch ?? buildPitch({ description, readme });
  const source = claudePitch ? 'claude' : weak ? 'fallback: weak pitch, claude unavailable' : 'readme/description';

  // Mentions notify the owner (and the submitter, for community picks) so the
  // post reaches people who will actually repost it. Both are best-effort.
  const githubToken    = process.env.GITHUB_TOKEN || undefined;
  const submitterLogin = process.env.SUBMITTER_LOGIN?.trim() || '';
  const [owner, submitter] = await Promise.all([
    resolveBlueskyAccount(project.repo.split('/')[0]!, githubToken),
    submitterLogin ? resolveBlueskyAccount(submitterLogin, githubToken) : Promise.resolve(null),
  ]);

  const { text, facets, embed, siteUrl } = buildPost(project, baseUrl, pitch, {
    owner, submitter, communityPick: Boolean(submitterLogin),
  });

  console.log('─── post preview ───');
  console.log(`─── pitch (${source}): ${pitch}`);
  console.log(text);
  console.log(`─── ${[...text].length} graphemes ───`);
  console.log(`─── card → ${siteUrl}`);
  console.log(`─── name link → ${project.url}`);
  console.log(`─── owner bsky → ${owner ? `@${owner.handle}` : 'none'}${submitterLogin ? ` · submitter ${submitterLogin} bsky → ${submitter ? `@${submitter.handle}` : 'none'}` : ''}`);

  const slug = slugify(project.repo);
  console.log(`PROJECT_SLUG=${slug}`);

  // Loaded before the dry-run gate so dry runs verify image availability too
  const ogBuf = await loadOgImage(slug, baseUrl);
  console.log(`─── OG image: ${ogBuf.length} bytes`);

  if (DRY_RUN) {
    console.log('Dry run — not posting.');
    return;
  }

  const identifier = (process.env.BSKY_IDENTIFIER ?? '').replace(/^@/, '');
  const password   = process.env.BSKY_APP_PASSWORD;
  if (!identifier || !password) {
    throw new Error('BSKY_IDENTIFIER and BSKY_APP_PASSWORD env vars are required');
  }

  const agent = new BskyAgent({ service: 'https://bsky.social' });
  await agent.login({ identifier, password });

  const { data: thumb } = await agent.uploadBlob(ogBuf, { encoding: 'image/png' });

  const embedWithThumb = {
    ...embed,
    external: { ...embed.external, thumb: thumb.blob },
  };

  const bskyPost = await agent.post({ text, facets, embed: embedWithThumb, createdAt: new Date().toISOString() });
  const rkey = bskyPost.uri.split('/').pop();
  // DID, not handle: stays valid if the account handle ever changes.
  const bskyUrl = `https://bsky.app/profile/${agent.session!.did}/post/${rkey}`;
  console.log(`✓ Posted: ${project.name} (undervalued ${project.undervaluedScore})`);

  const updatedPosted = recordPost(project.repo, 'bsky', bskyUrl, posted);
  savePosted(updatedPosted);

  // Emitted so the GitHub Actions workflow can capture this value
  console.log(`BSKY_POST_URL=${bskyUrl}`);
}

main().catch(err => { console.error(err); process.exit(1); });
