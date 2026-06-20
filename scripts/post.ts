import { BskyAgent } from '@atproto/api';
import { readFileSync } from 'fs';
import { join } from 'path';

const DRY_RUN = process.argv.includes('--dry-run');

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

function byteLen(str: string): number {
  return new TextEncoder().encode(str).length;
}

function buildPost(p: Project, baseUrl: string) {
  const desc    = truncate(p.description ?? '', 90);
  const lang    = p.language ?? '';
  const emoji   = lang ? (LANG_EMOJI[lang] ?? '') : '';
  const langStr = lang ? ` · ${emoji ? emoji + ' ' : ''}${lang}` : '';
  const slug    = p.repo.toLowerCase().replace('/', '--');
  const siteUrl = `${baseUrl}/projects/${slug}/`;

  // Text without URL — card embed handles the link
  const lines = [
    '★ Hidden build of the day',
    '',
    `${p.name} — ${desc}`,
    `↑${p.undervaluedScore} undervalued · ♥${p.healthScore} health · ${p.stars} ★${langStr}`,
    '',
    '#opensource #buildinpublic',
  ];
  const text = lines.join('\n');

  // Byte-offset facet: project name → GitHub repo link
  const prefix   = '★ Hidden build of the day\n\n';
  const byteStart = byteLen(prefix);
  const byteEnd   = byteStart + byteLen(p.name);

  const facets = [{
    index: { byteStart, byteEnd },
    features: [{ $type: 'app.bsky.richtext.facet#link', uri: p.url }],
  }];

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

  const active = data.projects
    .filter(p => ['thriving', 'newborn', 'revived', 'watched'].includes(p.status))
    .sort((a, b) => b.undervaluedScore - a.undervaluedScore)
    .slice(0, 20);

  if (active.length === 0) throw new Error('No active projects found in latest.json');

  const today   = new Date().toISOString().slice(0, 10);
  const project = active[seededIndex(today, active.length)];
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
  await agent.post({ text, facets, embed, createdAt: new Date().toISOString() });
  console.log(`✓ Posted: ${project.name} (undervalued ${project.undervaluedScore})`);
}

main().catch(err => { console.error(err); process.exit(1); });
