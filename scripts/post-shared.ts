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
}

export interface LatestData {
  collectedAt: string;
  projects: Project[];
}

export const POSTED_PATH = join(process.cwd(), 'data', 'posted.json');

// Right after a GitHub Pages deploy, a just-published asset can 404 for a few
// seconds while the CDN edge catches up — retry before giving up.
export async function fetchOgImage(url: string): Promise<Buffer> {
  const attempts = 5;
  for (let i = 1; i <= attempts; i++) {
    const res = await fetch(url);
    if (res.ok) return Buffer.from(await res.arrayBuffer());
    if (i === attempts) throw new Error(`Failed to fetch OG image: ${url} (${res.status})`);
    await new Promise(r => setTimeout(r, i * 3000));
  }
  throw new Error(`Failed to fetch OG image: ${url}`);
}

export function loadPosted(): PostedEntry[] {
  return existsSync(POSTED_PATH) ? JSON.parse(readFileSync(POSTED_PATH, 'utf8')) : [];
}

export function savePosted(entries: PostedEntry[]): void {
  writeFileSync(POSTED_PATH, JSON.stringify(entries, null, 2));
}

export function recordPost(repo: string, platform: string, url: string, entries: PostedEntry[]): PostedEntry[] {
  const slug = repo.toLowerCase().replace('/', '--');
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
