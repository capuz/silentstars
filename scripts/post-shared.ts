import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';

export interface PostedEntry {
  repo: string;
  slug: string;
  postedAt: string;
  platforms: Record<string, { url: string; postedAt: string }>;
}

export interface Project {
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
  readmeQualityOk: boolean;
  hasPage: boolean;
}

export interface LatestData {
  collectedAt: string;
  projects: Project[];
}

export const POSTED_PATH = join(process.cwd(), 'data', 'posted.json');

// Single source of truth for repo → slug: collect.ts (page/OG filenames) and
// every posting script import this one, so the OG filename a post requests
// always matches the one the build produced.
export function slugify(nameWithOwner: string): string {
  return nameWithOwner.replace('/', '--').toLowerCase().replace(/[^a-z0-9-]/g, '-');
}

// Local-first: in CI the deploy job hands the PNGs to the post jobs via a
// workflow artifact (OG_DIR), so the image never round-trips the Pages CDN.
// The CDN fetch below is the fallback for local/manual runs.
export async function loadOgImage(slug: string, baseUrl: string): Promise<Buffer> {
  const ogDir = process.env.OG_DIR;
  if (ogDir) {
    const path = join(ogDir, `${slug}.png`);
    if (existsSync(path)) return readFileSync(path);
    console.warn(`OG image not found at ${path}, falling back to CDN fetch`);
  }
  return fetchOgImage(`${baseUrl}/og/${slug}.png`);
}

// Right after a GitHub Pages deploy, a just-published asset can 404 while the
// CDN edge catches up — and Fastly caches those interim 404s, so plain retries
// keep hitting the same poisoned entry forever (observed: 8 attempts / ~3min,
// all served the cached 404). Each attempt uses a unique cache-busting query
// param to get a fresh cache key.
export async function fetchOgImage(url: string): Promise<Buffer> {
  const attempts = 8;
  for (let i = 1; i <= attempts; i++) {
    const res = await fetch(`${url}?cb=${Date.now()}`);
    if (res.ok) return Buffer.from(await res.arrayBuffer());
    if (i === attempts) throw new Error(`Failed to fetch OG image: ${url} (${res.status})`);
    await new Promise(r => setTimeout(r, i * 5000));
  }
  throw new Error(`Failed to fetch OG image: ${url}`);
}

export function loadPosted(): PostedEntry[] {
  return existsSync(POSTED_PATH) ? JSON.parse(readFileSync(POSTED_PATH, 'utf8')) : [];
}

export function savePosted(entries: PostedEntry[]): void {
  writeFileSync(POSTED_PATH, JSON.stringify(entries, null, 2));
}

const ACTIVE_STATUSES = ['thriving', 'newborn', 'revived', 'watched'];

// Shared by select-post.ts and post.ts — the candidate pool for the daily highlight:
// active status, a README with enough real prose, not already posted
// ('any' excludes repos posted on any platform, including the historical X posts
// still recorded in posted.json), ranked by undervaluedScore.
export function selectTop20(projects: Project[], posted: PostedEntry[], platform: 'bsky' | 'any'): Project[] {
  const alreadyPosted = new Set(
    posted
      .filter(e => platform === 'any'
        ? Object.keys(e.platforms).length > 0
        : e.platforms[platform])
      .map(e => e.repo.toLowerCase()),
  );
  return projects
    .filter(p => ACTIVE_STATUSES.includes(p.status))
    .filter(p => p.readmeQualityOk)
    .filter(p => p.hasPage)
    .filter(p => !alreadyPosted.has(p.repo.toLowerCase()))
    .sort((a, b) => b.undervaluedScore - a.undervaluedScore)
    .slice(0, 20);
}

export function recordPost(repo: string, platform: string, url: string, entries: PostedEntry[]): PostedEntry[] {
  const slug = slugify(repo);
  const now  = new Date().toISOString();
  const existing = entries.find(e => e.repo.toLowerCase() === repo.toLowerCase());
  if (existing) {
    existing.platforms[platform] = { url, postedAt: now };
    return entries;
  }
  return [...entries, { repo, slug, postedAt: now, platforms: { [platform]: { url, postedAt: now } } }];
}

export const LANG_HASHTAG: Record<string, string> = {
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

export function loadCommunityTags(): string[] {
  const p = join(process.cwd(), 'data', 'community-tags.txt');
  if (!existsSync(p)) return ['#indiedev', '#opensource'];
  return readFileSync(p, 'utf8')
    .split('\n')
    .map(l => l.trim())
    .filter(l => l.startsWith('#'));
}

export function seededIndex(seed: string, max: number): number {
  let h = 0;
  for (let i = 0; i < seed.length; i++) {
    h = Math.imul(31, h) + seed.charCodeAt(i) | 0;
  }
  return Math.abs(h) % max;
}

export function truncate(str: string, max: number): string {
  if (str.length <= max) return str;
  return str.slice(0, max - 1).trimEnd() + '…';
}

// Shared by process-submission.ts (submitter fallback) and notify-owners.ts
// (repo owner outreach) — public email first, then the profile page scrape
// GitHub still renders for users who opted in via "Public email on profile".
export async function resolveGithubPublicEmail(login: string, token: string): Promise<string> {
  const res = await fetch(`https://api.github.com/users/${login}`, {
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: 'application/vnd.github+json',
      'X-GitHub-Api-Version': '2022-11-28',
    },
  });
  if (res.ok) {
    const data = await res.json() as { email?: string | null };
    if (data.email) return data.email;
  }
  try {
    const profile = await fetch(`https://github.com/${login}`);
    if (!profile.ok) return '';
    const html = await profile.text();
    const m = html.match(/itemprop="email"[^>]*>([^<\s]+)/);
    return m ? m[1].trim() : '';
  } catch { return ''; }
}
