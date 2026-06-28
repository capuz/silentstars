import { TwitterApi, EUploadMimeType } from 'twitter-api-v2';
import { readFileSync } from 'fs';
import { join } from 'path';
import {
  type PostedEntry, type Project, type LatestData,
  LANG_HASHTAG,
  loadPosted, savePosted, recordPost,
  loadCommunityTags, seededIndex, truncate,
} from './post-shared.ts';

const DRY_RUN = process.argv.includes('--dry-run') || process.env.DRY_RUN === 'true';

function buildTweet(p: Project, baseUrl: string): string {
  const desc     = truncate(p.description ?? '', 200);
  const lang     = p.language ?? '';
  const langTags = (p.languages ?? (lang ? [lang] : []))
    .map(l => LANG_HASHTAG[l] ?? '')
    .filter(Boolean);
  const slug     = p.repo.toLowerCase().replace('/', '--');
  const siteUrl  = `${baseUrl}/projects/${slug}/`;
  const tags     = [...loadCommunityTags(), ...langTags].join(' ');

  const lines = [
    '🌟 Silent star of the day',
    '',
    `${p.name} — ${desc}`,
    '',
    tags,
    '',
    siteUrl,
  ];
  return lines.join('\n');
}

async function main(): Promise<void> {
  const data: LatestData = JSON.parse(
    readFileSync(join(process.cwd(), 'data', 'latest.json'), 'utf8'),
  );

  const posted = loadPosted();
  const alreadyPostedX = new Set(
    posted.filter(e => e.platforms.x).map(e => e.repo.toLowerCase())
  );

  const allActive = data.projects
    .filter(p => ['thriving', 'newborn', 'revived', 'watched'].includes(p.status))
    .filter(p => !alreadyPostedX.has(p.repo.toLowerCase()));

  if (allActive.length === 0) throw new Error('No active projects available to post to X — all candidates already posted');

  const top20 = [...allActive]
    .sort((a, b) => b.undervaluedScore - a.undervaluedScore)
    .slice(0, 20);

  const today       = new Date().toISOString().slice(0, 10);
  const projectSlug = process.env.PROJECT_SLUG ?? '';
  // When a specific project is requested, search all active (not just top-20)
  const project     = projectSlug
    ? (allActive.find(p => p.repo.toLowerCase().replace('/', '--') === projectSlug) ?? top20[seededIndex(today, top20.length)])
    : top20[seededIndex(today, top20.length)];
  const baseUrl = (process.env.BASE_URL ?? 'https://capuz.github.io/silentstars').replace(/\/$/, '');

  const text = buildTweet(project, baseUrl);

  // Twitter counts all URLs as 23 chars (t.co shortener), regardless of actual length
  const urlMatch  = text.match(/https?:\/\/\S+/g) ?? [];
  const urlSaving = urlMatch.reduce((acc, u) => acc + ([...u].length - 23), 0);
  const twitterLen = [...text].length - urlSaving;

  console.log('─── tweet preview ───');
  console.log(text);
  console.log(`─── ${twitterLen} Twitter chars (${[...text].length} actual) ───`);

  if (DRY_RUN) {
    console.log('Dry run — not posting.');
    return;
  }

  const apiKey       = process.env.X_API_KEY;
  const apiSecret    = process.env.X_API_SECRET;
  const accessToken  = process.env.X_ACCESS_TOKEN;
  const accessSecret = process.env.X_ACCESS_TOKEN_SECRET;

  if (!apiKey || !apiSecret || !accessToken || !accessSecret) {
    throw new Error('X_API_KEY, X_API_SECRET, X_ACCESS_TOKEN, X_ACCESS_TOKEN_SECRET env vars are required');
  }

  const client = new TwitterApi({ appKey: apiKey, appSecret: apiSecret, accessToken, accessSecret });

  const slug     = project.repo.toLowerCase().replace('/', '--');
  const ogUrl    = `${baseUrl}/og/${slug}.png`;
  const ogRes    = await fetch(ogUrl);
  if (!ogRes.ok) throw new Error(`Failed to fetch OG image: ${ogUrl} (${ogRes.status})`);
  const ogBuf    = Buffer.from(await ogRes.arrayBuffer());
  const mediaId  = await client.v1.uploadMedia(ogBuf, { mimeType: EUploadMimeType.Png });

  const { data: tweet } = await client.v2.tweet({ text, media: { media_ids: [mediaId] } });
  const xUrl = `https://x.com/i/web/status/${tweet.id}`;
  console.log(`✓ Posted to X: ${project.name} — ${xUrl}`);

  const updatedPosted = recordPost(project.repo, 'x', xUrl, posted);
  savePosted(updatedPosted);

  console.log(`X_POST_URL=${xUrl}`);
}

main().catch(err => { console.error(err); process.exit(1); });
