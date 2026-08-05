/**
 * recover-posted.ts — scan Bluesky posts for SilentStars project URLs
 * and rebuild posted.json so the nightly collect re-creates any deleted .md files.
 *
 * Run:  npx tsx scripts/recover-posted.ts [--dry-run]
 * Env:  BSKY_IDENTIFIER, BSKY_APP_PASSWORD (required)
 *       BASE_URL
 */

import { BskyAgent } from '@atproto/api';
import { type PostedEntry, loadPosted, savePosted } from './post-shared.ts';

const DRY_RUN = process.argv.includes('--dry-run') || process.env.DRY_RUN === 'true';
const BASE_URL = (process.env.BASE_URL ?? 'https://capuz.github.io/silentstars').replace(/\/$/, '');
const PROJECT_PREFIX = `${BASE_URL}/projects/`;

function slugToRepo(slug: string): string {
  const parts = slug.split('--');
  const owner = parts[0];
  const repo  = parts.slice(1).join('--');
  return `${owner}/${repo}`;
}

type ScannedPost = { slug: string; repo: string; url: string; postedAt: string };

// ── Bluesky scanner ──────────────────────────────────────────────────────────

async function scanBluesky(): Promise<ScannedPost[]> {
  const identifier = (process.env.BSKY_IDENTIFIER ?? '').replace(/^@/, '');
  const password   = process.env.BSKY_APP_PASSWORD;
  if (!identifier || !password) {
    throw new Error('BSKY_IDENTIFIER and BSKY_APP_PASSWORD env vars are required');
  }

  const agent = new BskyAgent({ service: 'https://bsky.social' });
  await agent.login({ identifier, password });

  console.log(`🔍  Scanning Bluesky posts for @${identifier}…`);

  const found: ScannedPost[] = [];
  let cursor: string | undefined;
  let page = 0;

  do {
    page++;
    const res = await agent.getAuthorFeed({ actor: identifier, limit: 100, cursor });

    for (const item of res.data.feed) {
      const record  = item.post.record as Record<string, unknown>;
      const embed   = record.embed as Record<string, unknown> | undefined;

      if (embed?.$type !== 'app.bsky.embed.external') continue;

      const external = embed.external as Record<string, unknown> | undefined;
      const uri      = external?.uri as string | undefined;

      if (!uri?.startsWith(PROJECT_PREFIX)) continue;

      const slug = uri.slice(PROJECT_PREFIX.length).replace(/\/$/, '');
      if (!slug || slug.includes('/')) continue;

      const repo     = slugToRepo(slug);
      const rkey     = item.post.uri.split('/').pop() ?? '';
      const postUrl  = `https://bsky.app/profile/${identifier}/post/${rkey}`;
      const postedAt = (record.createdAt as string) ?? new Date().toISOString();

      found.push({ slug, repo, url: postUrl, postedAt });
      console.log(`  ✓ ${repo}`);
    }

    cursor = res.data.cursor;
    if (cursor) await new Promise(r => setTimeout(r, 200));
  } while (cursor);

  console.log(`    ${found.length} project post(s) found across ${page} page(s)\n`);
  return found;
}

// ── merge into posted.json ───────────────────────────────────────────────────

function merge(
  entries: PostedEntry[],
  posts: ScannedPost[],
  platform: 'bsky',
): { added: number; updated: number; skipped: number } {
  let added = 0, updated = 0, skipped = 0;

  for (const { slug, repo, url, postedAt } of posts) {
    const existing = entries.find(e => e.repo.toLowerCase() === repo.toLowerCase());
    if (existing) {
      if (!existing.platforms[platform]) {
        existing.platforms[platform] = { url, postedAt };
        updated++;
      } else {
        skipped++;
      }
    } else {
      entries.push({ repo, slug, postedAt, platforms: { [platform]: { url, postedAt } } });
      added++;
    }
  }

  return { added, updated, skipped };
}

// ── main ─────────────────────────────────────────────────────────────────────

async function main(): Promise<void> {
  const bskyPosts = await scanBluesky();

  if (bskyPosts.length === 0) {
    console.log('Nothing to recover.');
    return;
  }

  if (DRY_RUN) {
    console.log(`📋  Dry run — found ${bskyPosts.length} Bluesky post(s). No files written.`);
    return;
  }

  const entries = loadPosted();

  const bsky = merge(entries, bskyPosts, 'bsky');

  savePosted(entries);

  console.log(`✅  posted.json updated`);
  console.log(`    Bluesky: ${bsky.added} added, ${bsky.updated} updated, ${bsky.skipped} skipped`);
}

main().catch(err => { console.error(err); process.exit(1); });
