/**
 * post-weekly.ts — posts the latest closed /weekly/ edition to Bluesky as a thread
 * (see weekly-post-build.ts). Runs Monday afternoon UTC from post-weekly.yml, hours
 * after the nightly has deployed the edition and written its notes.
 *
 * Idempotent: data/posted-weekly.json records each posted week, and an already posted
 * edition is a no-op, so a re-run never doubles the thread.
 *
 * Usage: tsx scripts/post-weekly.ts [--dry-run]
 * Env:   BSKY_IDENTIFIER, BSKY_APP_PASSWORD (unless dry run), GITHUB_TOKEN (owner
 *        mentions, optional), BASE_URL, DRY_RUN
 */

import { BskyAgent } from '@atproto/api';
import { existsSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { fetchOgImage, loadCommunityTags, resolveBlueskyAccount } from './post-shared.ts';
import type { BskyAccount } from './post-shared.ts';
import { listEditions } from './weekly.ts';
import type { History } from './weekly.ts';
import type { NotesCache } from './weekly-notes.ts';
import { buildWeeklyThread, ITEMS_PER_SECTION } from './weekly-post-build.ts';

const DRY_RUN = process.argv.includes('--dry-run') || process.env.DRY_RUN === 'true';
const DATA = join(process.cwd(), 'data');
const POSTED_WEEKLY_PATH = join(DATA, 'posted-weekly.json');

type PostedWeekly = Record<string, { url: string; postedAt: string }>;

const readJson = <T>(path: string, fallback: T): T =>
  existsSync(path) ? JSON.parse(readFileSync(path, 'utf8')) as T : fallback;

async function main(): Promise<void> {
  const history = readJson<History>(join(DATA, 'history.json'), {});
  const notes = readJson<NotesCache>(join(DATA, 'weekly-notes.json'), {});
  const posted = readJson<PostedWeekly>(POSTED_WEEKLY_PATH, {});

  const edition = listEditions(history, new Date()).at(-1);
  if (!edition) throw new Error('No closed weekly edition in data/history.json');
  if (posted[edition.week]) {
    console.log(`Edition ${edition.week} already posted: ${posted[edition.week]!.url} — nothing to do.`);
    return;
  }

  const baseUrl = (process.env.BASE_URL ?? 'https://silentstars.dev').replace(/\/$/, '');
  const editionNotes = notes[edition.week] ?? {};
  if (Object.keys(editionNotes).length === 0) console.warn(`⚠ No Claude notes for ${edition.week}: using template lines`);

  // Mentions notify owners, who tend to repost. Best-effort, Rising only.
  const githubToken = process.env.GITHUB_TOKEN || undefined;
  const owners: Record<string, BskyAccount> = {};
  await Promise.all(edition.rising.slice(0, ITEMS_PER_SECTION).map(async i => {
    const account = await resolveBlueskyAccount(i.repo.split('/')[0]!, githubToken);
    if (account) owners[i.repo] = account;
  }));

  const thread = buildWeeklyThread(edition, editionNotes, baseUrl, { tags: loadCommunityTags(), owners });

  console.log(`─── weekly thread: ${edition.week} (issue #${edition.issue}) ───`);
  for (const [n, post] of [thread.root, ...thread.replies].entries()) {
    console.log(`\n[${n + 1}/${thread.replies.length + 1}] (${[...new Intl.Segmenter().segment(post.text)].length} graphemes)`);
    console.log(post.text);
  }
  console.log(`\n─── card → ${thread.root.embed.external.uri}`);

  // Fetched before the dry-run gate so dry runs verify the edition is deployed.
  const ogBuf = await fetchOgImage(`${baseUrl}/og/weekly/${edition.week}.png`);
  console.log(`─── OG image: ${ogBuf.length} bytes`);

  if (DRY_RUN) {
    console.log('Dry run — not posting.');
    return;
  }

  const identifier = (process.env.BSKY_IDENTIFIER ?? '').replace(/^@/, '');
  const password = process.env.BSKY_APP_PASSWORD;
  if (!identifier || !password) throw new Error('BSKY_IDENTIFIER and BSKY_APP_PASSWORD env vars are required');

  const agent = new BskyAgent({ service: 'https://bsky.social' });
  await agent.login({ identifier, password });

  const { data: thumb } = await agent.uploadBlob(ogBuf, { encoding: 'image/png' });
  const root = await agent.post({
    text: thread.root.text,
    facets: thread.root.facets,
    embed: { ...thread.root.embed, external: { ...thread.root.embed.external, thumb: thumb.blob } },
    createdAt: new Date().toISOString(),
  });
  // DID, not handle: stays valid if the account handle ever changes.
  const url = `https://bsky.app/profile/${agent.session!.did}/post/${root.uri.split('/').pop()}`;

  // Recorded before the replies: if one fails, a re-run must not post a second root.
  posted[edition.week] = { url, postedAt: new Date().toISOString() };
  writeFileSync(POSTED_WEEKLY_PATH, JSON.stringify(posted, null, 2) + '\n');
  console.log(`✓ Posted root: ${url}`);
  console.log(`BSKY_POST_URL=${url}`);

  let parent = { uri: root.uri, cid: root.cid };
  for (const reply of thread.replies) {
    const res = await agent.post({
      text: reply.text,
      facets: reply.facets,
      reply: { root: { uri: root.uri, cid: root.cid }, parent },
      createdAt: new Date().toISOString(),
    });
    parent = { uri: res.uri, cid: res.cid };
  }
  console.log(`✓ Posted ${thread.replies.length} replies`);
}

main().catch(err => { console.error(err); process.exit(1); });
