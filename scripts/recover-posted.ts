/**
 * recover-posted.ts — scan Bluesky posts for SilentStars project URLs and
 * rebuild posted.json so the nightly collect re-creates any deleted .md files.
 *
 * Run:  npx tsx scripts/recover-posted.ts [--dry-run]
 * Env:  BSKY_IDENTIFIER, BSKY_APP_PASSWORD, BASE_URL
 */

import { BskyAgent } from '@atproto/api';
import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, '..');

const DRY_RUN = process.argv.includes('--dry-run') || process.env.DRY_RUN === 'true';
const BASE_URL = (process.env.BASE_URL ?? 'https://capuz.github.io/silentstars').replace(/\/$/, '');
const PROJECT_PREFIX = `${BASE_URL}/projects/`;

interface PostedEntry {
  repo: string;
  slug: string;
  postedAt: string;
  platforms: Record<string, { url: string; postedAt: string }>;
}

const POSTED_PATH = resolve(ROOT, 'data/posted.json');

function loadPosted(): PostedEntry[] {
  return existsSync(POSTED_PATH) ? JSON.parse(readFileSync(POSTED_PATH, 'utf8')) : [];
}

function savePosted(entries: PostedEntry[]): void {
  writeFileSync(POSTED_PATH, JSON.stringify(entries, null, 2));
}

function slugToRepo(slug: string): string {
  const parts = slug.split('--');
  const owner = parts[0];
  const repo  = parts.slice(1).join('--');
  return `${owner}/${repo}`;
}

async function main(): Promise<void> {
  const identifier = (process.env.BSKY_IDENTIFIER ?? '').replace(/^@/, '');
  const password   = process.env.BSKY_APP_PASSWORD;
  if (!identifier || !password) {
    throw new Error('BSKY_IDENTIFIER and BSKY_APP_PASSWORD env vars are required');
  }

  const agent = new BskyAgent({ service: 'https://bsky.social' });
  await agent.login({ identifier, password });

  console.log(`🔍  Scanning Bluesky posts for @${identifier}…`);
  console.log(`    Looking for: ${PROJECT_PREFIX}{slug}/\n`);

  const found: Array<{ slug: string; repo: string; url: string; postedAt: string }> = [];
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
      if (!slug || slug.includes('/')) continue; // guard against unexpected URL shapes

      const repo     = slugToRepo(slug);
      const rkey     = item.post.uri.split('/').pop() ?? '';
      const postUrl  = `https://bsky.app/profile/${identifier}/post/${rkey}`;
      const postedAt = (record.createdAt as string) ?? new Date().toISOString();

      found.push({ slug, repo, url: postUrl, postedAt });
      console.log(`  ✓ ${repo}`);
      console.log(`    ${postUrl}`);
    }

    cursor = res.data.cursor;
    if (cursor) await new Promise(r => setTimeout(r, 200)); // be polite to the API
  } while (cursor);

  console.log(`\n📋  Found ${found.length} SilentStars post(s) across ${page} page(s)`);

  if (found.length === 0) {
    console.log('Nothing to recover.');
    return;
  }

  if (DRY_RUN) {
    console.log('\nDry run — not updating posted.json.');
    return;
  }

  const entries = loadPosted();
  let added   = 0;
  let updated = 0;
  let skipped = 0;

  for (const { slug, repo, url, postedAt } of found) {
    const existing = entries.find(e => e.repo.toLowerCase() === repo.toLowerCase());
    if (existing) {
      if (!existing.platforms.bsky) {
        existing.platforms.bsky = { url, postedAt };
        updated++;
        console.log(`  ↑ Updated: ${repo}`);
      } else {
        skipped++;
      }
    } else {
      entries.push({ repo, slug, postedAt, platforms: { bsky: { url, postedAt } } });
      added++;
      console.log(`  + Added:   ${repo}`);
    }
  }

  savePosted(entries);
  console.log(`\n✅  posted.json: ${added} added, ${updated} updated, ${skipped} already recorded`);
  console.log('    Next: npm run collect will re-create any missing .md files');
}

main().catch(err => { console.error(err); process.exit(1); });
