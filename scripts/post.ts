import { BskyAgent } from '@atproto/api';
import { readFileSync } from 'fs';
import { join } from 'path';

const DRY_RUN = process.argv.includes('--dry-run');

interface Project {
  repo: string;
  name: string;
  description: string;
  url: string;
  language: string | null;
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

function truncate(str: string, max: number): string {
  if (str.length <= max) return str;
  return str.slice(0, max - 1).trimEnd() + '…';
}

function buildPost(p: Project, baseUrl: string): string {
  const desc  = truncate(p.description ?? '', 90);
  const lang  = p.language ? ` · ${p.language}` : '';
  const slug  = p.repo.toLowerCase().replace('/', '--');
  const link  = `${baseUrl}/projects/${slug}`;

  return [
    '★ Hidden build of the day',
    '',
    `${p.name} — ${desc}`,
    `↑${p.undervaluedScore} undervalued · ♥${p.healthScore} health · ${p.stars} ★${lang}`,
    '',
    link,
    '',
    '#opensource #buildinpublic',
  ].join('\n');
}

async function main(): Promise<void> {
  const data: LatestData = JSON.parse(
    readFileSync(join(process.cwd(), 'data', 'latest.json'), 'utf8'),
  );

  const active = data.projects
    .filter(p => ['thriving', 'newborn', 'revived', 'watched'].includes(p.status))
    .sort((a, b) => b.undervaluedScore - a.undervaluedScore)
    .slice(0, 20);

  if (active.length === 0) throw new Error('No active projects found in latest.json');

  const today   = new Date().toISOString().slice(0, 10);
  const project = active[seededIndex(today, active.length)];
  const baseUrl = (process.env.BASE_URL ?? 'https://capuz.github.io/silentstars').replace(/\/$/, '');
  const text    = buildPost(project, baseUrl);

  console.log('─── post preview ───');
  console.log(text);
  console.log(`─── ${[...text].length} graphemes ───`);

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
  await agent.post({ text, createdAt: new Date().toISOString() });
  console.log(`✓ Posted: ${project.name} (undervalued ${project.undervaluedScore})`);
}

main().catch(err => { console.error(err); process.exit(1); });
