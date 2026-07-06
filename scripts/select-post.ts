/**
 * select-post.ts — determine which project would be posted today for a given platform,
 * without making any API calls or posting anything.
 *
 * Usage: npx tsx scripts/select-post.ts <bsky|x>
 * Env:   PROJECT_SLUG (optional — forces a specific slug, same as post.ts/post-x.ts)
 * Output: slug written to stdout (no newline), e.g. "owner--repo"
 * Exit 1: no candidates found
 */

import { readFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';
import { type PostedEntry, type Project, type LatestData, POSTED_PATH, seededIndex, selectTop20, slugify } from './post-shared.ts';

const platform = process.argv[2] as 'bsky' | 'x' | undefined;
if (platform !== 'bsky' && platform !== 'x') {
  process.stderr.write('Usage: select-post.ts <bsky|x>\n');
  process.exit(1);
}

const LATEST_PATH = join(process.cwd(), 'data', 'latest.json');

if (!existsSync(LATEST_PATH)) {
  process.stderr.write('data/latest.json not found\n');
  process.exit(1);
}

const data: LatestData = JSON.parse(readFileSync(LATEST_PATH, 'utf8'));
const posted: PostedEntry[] = existsSync(POSTED_PATH)
  ? JSON.parse(readFileSync(POSTED_PATH, 'utf8'))
  : [];

const alreadyPosted = new Set(
  posted.filter(e => e.platforms[platform]).map(e => e.repo.toLowerCase()),
);

// Unfiltered by README quality — an explicit PROJECT_SLUG override should still work
// even if the project wouldn't organically qualify for the daily pick.
const allActive = data.projects
  .filter(p => ['thriving', 'newborn', 'revived', 'watched'].includes(p.status))
  .filter(p => !alreadyPosted.has(p.repo.toLowerCase()));

const top20 = selectTop20(data.projects, posted, platform);

const projectSlug = process.env.PROJECT_SLUG ?? '';

let project: Project | undefined;
if (projectSlug) {
  project = allActive.find(
    p => slugify(p.repo) === projectSlug ||
         p.repo.toLowerCase() === projectSlug,
  );
}
if (!project) {
  if (top20.length === 0) {
    process.stderr.write(`No candidates for platform ${platform}\n`);
    process.exit(1);
  }
  const today = new Date().toISOString().slice(0, 10);
  project = top20[seededIndex(today, top20.length)];
}

process.stdout.write(slugify(project.repo));
