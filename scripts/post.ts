import { BskyAgent } from '@atproto/api';
import { readFileSync } from 'fs';
import { join } from 'path';
import {
  type PostedEntry, type Project, type LatestData,
  LANG_HASHTAG,
  loadPosted, savePosted, recordPost, fetchOgImage,
  loadCommunityTags, seededIndex, truncate,
} from './post-shared.ts';

const DRY_RUN = process.argv.includes('--dry-run') || process.env.DRY_RUN === 'true';

function byteLen(str: string): number {
  return new TextEncoder().encode(str).length;
}

function hashtagFacets(text: string) {
  const encoder = new TextEncoder();
  const result  = [];
  const regex   = /#([a-zA-Z][a-zA-Z0-9]*)/g;
  let match;
  while ((match = regex.exec(text)) !== null) {
    const byteStart = encoder.encode(text.slice(0, match.index)).length;
    const byteEnd   = byteStart + encoder.encode(match[0]).length;
    result.push({
      index: { byteStart, byteEnd },
      features: [{ $type: 'app.bsky.richtext.facet#tag', tag: match[1] }],
    });
  }
  return result;
}

function buildPost(p: Project, baseUrl: string) {
  const desc     = truncate(p.description ?? '', 180);
  const lang     = p.language ?? '';
  const langTags = (p.languages ?? (lang ? [lang] : []))
    .map(l => LANG_HASHTAG[l] ?? '')
    .filter(Boolean);
  const tags     = [...loadCommunityTags(), ...langTags].join(' ');
  const slug     = p.repo.toLowerCase().replace('/', '--');
  const siteUrl  = `${baseUrl}/projects/${slug}/`;

  // Text without URL — card embed handles the link
  const lines = [
    '🌟 Silent star of the day',
    '',
    `${p.name} — ${desc}`,
    '',
    tags,
  ];
  const text = lines.join('\n');

  // Byte-offset facet: project name → GitHub repo link
  const prefix   = '🌟 Silent star of the day\n\n';
  const byteStart = byteLen(prefix);
  const byteEnd   = byteStart + byteLen(p.name);

  const facets = [
    { index: { byteStart, byteEnd }, features: [{ $type: 'app.bsky.richtext.facet#link', uri: p.url }] },
    ...hashtagFacets(text),
  ];

  // External card → SilentStars project page
  const embed = {
    $type: 'app.bsky.embed.external',
    external: {
      uri: siteUrl,
      title: `${p.name} · SilentStars`,
      description: p.description ?? '',
    },
  };

  return { text, facets, embed, siteUrl };
}

async function main(): Promise<void> {
  const data: LatestData = JSON.parse(
    readFileSync(join(process.cwd(), 'data', 'latest.json'), 'utf8'),
  );

  const posted = loadPosted();
  const alreadyPostedBsky = new Set(
    posted.filter(e => e.platforms.bsky).map(e => e.repo.toLowerCase())
  );

  const active = data.projects
    .filter(p => ['thriving', 'newborn', 'revived', 'watched'].includes(p.status))
    .filter(p => !alreadyPostedBsky.has(p.repo.toLowerCase()))
    .sort((a, b) => b.undervaluedScore - a.undervaluedScore)
    .slice(0, 20);

  if (active.length === 0) throw new Error('No active projects available to post to Bluesky — all candidates already posted');

  const projectArg = process.argv.find((_, i, a) => a[i - 1] === '--project')
                  ?? process.env.PROJECT_SLUG
                  ?? null;

  let project: Project;
  if (projectArg) {
    const needle = projectArg.toLowerCase();
    const found = data.projects.find(p =>
      p.repo.toLowerCase() === needle ||
      p.repo.toLowerCase().replace('/', '--') === needle,
    );
    if (!found) throw new Error(`Project not found: "${projectArg}"`);
    project = found;
  } else {
    const today = new Date().toISOString().slice(0, 10);
    project = active[seededIndex(today, active.length)];
  }

  const baseUrl = (process.env.BASE_URL ?? 'https://capuz.github.io/silentstars').replace(/\/$/, '');

  const { text, facets, embed, siteUrl } = buildPost(project, baseUrl);

  console.log('─── post preview ───');
  console.log(text);
  console.log(`─── ${[...text].length} graphemes ───`);
  console.log(`─── card → ${siteUrl}`);
  console.log(`─── name link → ${project.url}`);

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

  const slug   = project.repo.toLowerCase().replace('/', '--');
  const ogUrl  = `${baseUrl}/og/${slug}.png`;
  const ogBuf  = await fetchOgImage(ogUrl);
  const { data: thumb } = await agent.uploadBlob(ogBuf, { encoding: 'image/png' });

  const embedWithThumb = {
    ...embed,
    external: { ...embed.external, thumb: thumb.blob },
  };

  const bskyPost = await agent.post({ text, facets, embed: embedWithThumb, createdAt: new Date().toISOString() });
  const rkey = bskyPost.uri.split('/').pop();
  const bskyUrl = `https://bsky.app/profile/${identifier}/post/${rkey}`;
  console.log(`✓ Posted: ${project.name} (undervalued ${project.undervaluedScore})`);

  const updatedPosted = recordPost(project.repo, 'bsky', bskyUrl, posted);
  savePosted(updatedPosted);

  // Emitted so the GitHub Actions workflow can capture these values
  console.log(`BSKY_POST_URL=${bskyUrl}`);
  console.log(`BSKY_POST_TEXT_B64=${Buffer.from(text).toString('base64')}`);
}

main().catch(err => { console.error(err); process.exit(1); });
