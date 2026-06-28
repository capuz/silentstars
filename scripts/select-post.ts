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

const platform = process.argv[2] as 'bsky' | 'x' | undefined;
if (platform !== 'bsky' && platform !== 'x') {
  process.stderr.write('Usage: select-post.ts <bsky|x>\n');
  process.exit(1);
}

interface PostedEntry {
  repo: string;
  slug: string;
  postedAt: string;
  platforms: Record<string, { url: string; postedAt: string }>;
}

interface Project {
  repo: string;
  name: string;
  description: string;
  url: string;
  language: string | null;
  languages?: string[];
  stars: number;
  healthScore: number;
  undervaluedScore: number;
  status: string;
  tags: string[];
}

interface LatestData {
  collectedAt: string;
  projects: Project[];
}

function seededIndex(seed: string, max: number): number {
  let h = 0;
  for (let i = 0; i < seed.length; i++) {
    h = Math.imul(31, h) + seed.charCodeAt(i) | 0;
  }
  return Math.abs(h) % max;
}

const LATEST_PATH = join(process.cwd(), 'data', 'latest.json');
const POSTED_PATH = join(process.cwd(), 'data', 'posted.json');

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

const allActive = data.projects
  .filter(p => ['thriving', 'newborn', 'revived', 'watched'].includes(p.status))
  .filter(p => !alreadyPosted.has(p.repo.toLowerCase()));

const top20 = [...allActive]
  .sort((a, b) => b.undervaluedScore - a.undervaluedScore)
  .slice(0, 20);

const projectSlug = process.env.PROJECT_SLUG ?? '';

let project: Project | undefined;
if (projectSlug) {
  project = allActive.find(
    p => p.repo.toLowerCase().replace('/', '--') === projectSlug ||
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

process.stdout.write(project.repo.toLowerCase().replace('/', '--'));
