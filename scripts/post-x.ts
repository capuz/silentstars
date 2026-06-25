import { TwitterApi } from 'twitter-api-v2';
import { readFileSync } from 'fs';
import { join } from 'path';

const DRY_RUN = process.argv.includes('--dry-run') || process.env.DRY_RUN === 'true';

const LANG_EMOJI: Record<string, string> = {
  TypeScript: '🟦', JavaScript: '🟨', Python: '🐍', Go: '🐹',
  Rust: '🦀', Java: '☕', 'C#': '#️⃣', Ruby: '💎', PHP: '🐘',
  'C++': '⚡', C: '⚡', Swift: '🍎', Kotlin: '🟣', Dart: '🎯',
  Shell: '🐚', HTML: '🌐', CSS: '🎨', Nix: '❄️', Lua: '🌙',
  Elixir: '💜', Haskell: '🟣', Scala: '🔴', Zig: '⚡',
};

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

function buildTweet(p: Project, baseUrl: string): string {
  const desc    = truncate(p.description ?? '', 90);
  const lang    = p.language ?? '';
  const emoji   = lang ? (LANG_EMOJI[lang] ?? '') : '';
  const langStr = lang ? ` · ${emoji ? emoji + ' ' : ''}${lang}` : '';
  const slug    = p.repo.toLowerCase().replace('/', '--');
  const siteUrl = `${baseUrl}/projects/${slug}/`;

  const lines = [
    '★ Hidden build of the day',
    '',
    `${p.name} — ${desc}`,
    `↑${p.undervaluedScore} undervalued · ♥${p.healthScore} health · ${p.stars} ★${langStr}`,
    '',
    '#opensource #buildinpublic',
    '',
    siteUrl,
  ];
  return lines.join('\n');
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
  await client.v1.tweet(text);
  console.log(`✓ Posted to X: ${project.name} (undervalued ${project.undervaluedScore})`);
}

main().catch(err => { console.error(err); process.exit(1); });
