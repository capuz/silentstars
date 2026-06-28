import { TwitterApi } from 'twitter-api-v2';
import { readFileSync, existsSync } from 'fs';
import { join } from 'path';

const DRY_RUN = process.argv.includes('--dry-run') || process.env.DRY_RUN === 'true';

const LANG_HASHTAG: Record<string, string> = {
  // Web
  HTML: '#html5', 'HTML5': '#html5', CSS: '#css3',
  JavaScript: '#javascript', TypeScript: '#typescript',
  Sass: '#sass', SCSS: '#sass', WebAssembly: '#webassembly',
  // General purpose
  Python: '#python', Rust: '#rust', Go: '#golang',
  Java: '#java', Kotlin: '#kotlin', Swift: '#swift',
  'C#': '#csharp', 'C++': '#cpp', C: '#c', Ruby: '#ruby',
  PHP: '#php', Scala: '#scala', Elixir: '#elixir',
  Haskell: '#haskell', Lua: '#lua', Dart: '#dart',
  Julia: '#julia', OCaml: '#ocaml', 'F#': '#fsharp',
  Erlang: '#erlang', Clojure: '#clojure', Groovy: '#groovy',
  Crystal: '#crystal', Nim: '#nim', Zig: '#zig',
  CoffeeScript: '#coffeescript', Elm: '#elm', Perl: '#perl',
  Shell: '#bash', Bash: '#bash', PowerShell: '#powershell',
  R: '#r', Solidity: '#solidity', 'Objective-C': '#objectivec',
  Fortran: '#fortran', COBOL: '#cobol', D: '#d',
  Haxe: '#haxe', MATLAB: '#matlab', Processing: '#processing',
};

function loadCommunityTags(): string[] {
  const p = join(process.cwd(), 'data', 'community-tags.txt');
  if (!existsSync(p)) return ['#indiedev', '#opensource'];
  return readFileSync(p, 'utf8')
    .split('\n')
    .map(l => l.trim())
    .filter(l => l.startsWith('#'));
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

function truncate(str: string, max: number): string {
  if (str.length <= max) return str;
  return str.slice(0, max - 1).trimEnd() + '…';
}

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

  const allActive = data.projects
    .filter(p => ['thriving', 'newborn', 'revived', 'watched'].includes(p.status));

  if (allActive.length === 0) throw new Error('No active projects found in latest.json');

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

  const { data: tweet } = await client.v2.tweet({ text });
  console.log(`✓ Posted to X: ${project.name} — https://x.com/i/web/status/${tweet.id}`);
  console.log(`X_POST_URL=https://x.com/i/web/status/${tweet.id}`);
}

main().catch(err => { console.error(err); process.exit(1); });
