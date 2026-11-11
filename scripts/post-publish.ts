/**
 * post-publish.ts — builds and publishes one project's Bluesky post.
 *
 * Shared by post.ts (daily pick, manual posts, the post of a submission) and
 * bsky-queue-drain.ts (community picks waiting in data/bsky-queue.json), so
 * both produce exactly the same post.
 */
import { BskyAgent } from '@atproto/api';
import { type Project, loadOgImage, slugify, resolveBlueskyAccount } from './post-shared.ts';
import { buildPost } from './post-build.ts';
import { claudeEnabled } from './claude-cli.ts';
import { buildPitch, generatePitch, needsLlmPitch, readmeExcerpt } from './post-pitch.ts';

export interface PublishOptions {
  baseUrl: string;
  dryRun: boolean;
  /** GitHub login of the submitter: makes it a 🙌 Community pick and credits them. */
  submitterLogin?: string;
  githubToken?: string;
}

/** Returns the post URL, or null on a dry run. */
export async function publishProject(project: Project, opts: PublishOptions): Promise<string | null> {
  const { baseUrl, dryRun } = opts;

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
  const submitterLogin = opts.submitterLogin?.trim() || '';
  const [owner, submitter] = await Promise.all([
    resolveBlueskyAccount(project.repo.split('/')[0]!, opts.githubToken),
    submitterLogin ? resolveBlueskyAccount(submitterLogin, opts.githubToken) : Promise.resolve(null),
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

  if (dryRun) {
    console.log('Dry run — not posting.');
    return null;
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
  return bskyUrl;
}
