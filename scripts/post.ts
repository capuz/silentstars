import { BskyAgent } from '@atproto/api';
import { readFileSync, writeFileSync, existsSync } from 'fs';
import { join } from 'path';

const DRY_RUN = process.argv.includes('--dry-run') || process.env.DRY_RUN === 'true';

interface PostedEntry {
  repo: string;
  slug: string;
  postedAt: string;
  platforms: Record<string, { url: string; postedAt: string }>;
}

const POSTED_PATH = join(process.cwd(), 'data', 'posted.json');

function loadPosted(): PostedEntry[] {
  return existsSync(POSTED_PATH) ? JSON.parse(readFileSync(POSTED_PATH, 'utf8')) : [];
}

function savePosted(entries: PostedEntry[]): void {
  writeFileSync(POSTED_PATH, JSON.stringify(entries, null, 2));
}

function recordPost(repo: string, platform: string, url: string, entries: PostedEntry[]): PostedEntry[] {
  const slug = repo.toLowerCase().replace('/', '--');
  const now  = new Date().toISOString();
  const existing = entries.find(e => e.repo.toLowerCase() === repo.toLowerCase());
  if (existing) {
    existing.platforms[platform] = { url, postedAt: now };
    return entries;
  }
  return [...entries, { repo, slug, postedAt: now, platforms: { [platform]: { url, postedAt: now } } }];
}

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

function byteLen(str: string): number {
  return new TextEncoder().encode(str).length;
}

function hashtagFacets(text: string) {
  const encoder = new TextEncoder();
  const result  = [];
  const regex   = /#([a-zA-Z][a-zA-Z0-9]*)/g;
  let match;
  while ((match = regex.exec(text)) !== null) {
    const byteStart = encoder.encode(text.slice(0, match.index)).length;
    const byteEnd   = byteStart + encoder.encode(match[0]).length;
    result.push({
      index: { byteStart, byteEnd },
      features: [{ $type: 'app.bsky.richtext.facet#tag', tag: match[1] }],
    });
  }
  return result;
}

function buildPost(p: Project, baseUrl: string) {
  const desc     = truncate(p.description ?? '', 180);
  const lang     = p.language ?? '';
  const langTags = (p.languages ?? (lang ? [lang] : []))
    .map(l => LANG_HASHTAG[l] ?? '')
    .filter(Boolean);
  const tags     = [...loadCommunityTags(), ...langTags].join(' ');
  const slug     = p.repo.toLowerCase().replace('/', '--');
  const siteUrl  = `${baseUrl}/projects/${slug}/`;

  // Text without URL — card embed handles the link
  const lines = [
    '🌟 Silent star of the day',
    '',
    `${p.name} — ${desc}`,
    '',
    tags,
  ];
  const text = lines.join('\n');

  // Byte-offset facet: project name → GitHub repo link
  const prefix   = '🌟 Silent star of the day\n\n';
  const byteStart = byteLen(prefix);
  const byteEnd   = byteStart + byteLen(p.name);

  const facets = [
    { index: { byteStart, byteEnd }, features: [{ $type: 'app.bsky.richtext.facet#link', uri: p.url }] },
    ...hashtagFacets(text),
  ];

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

  const posted = loadPosted();
  const alreadyPostedBsky = new Set(
    posted.filter(e => e.platforms.bsky).map(e => e.repo.toLowerCase())
  );

  const active = data.projects
    .filter(p => ['thriving', 'newborn', 'revived', 'watched'].includes(p.status))
    .filter(p => !alreadyPostedBsky.has(p.repo.toLowerCase()))
    .sort((a, b) => b.undervaluedScore - a.undervaluedScore)
    .slice(0, 20);

  if (active.length === 0) throw new Error('No active projects available to post to Bluesky — all candidates already posted');

  const projectArg = process.argv.find((_, i, a) => a[i - 1] === '--project')
                  ?? process.env.PROJECT_SLUG
                  ?? null;

  let project: Project;
  if (projectArg) {
    const needle = projectArg.toLowerCase();
    const found = data.projects.find(p =>
      p.repo.toLowerCase() === needle ||
      p.repo.toLowerCase().replace('/', '--') === needle,
    );
    if (!found) throw new Error(`Project not found: "${projectArg}"`);
    project = found;
  } else {
    const today = new Date().toISOString().slice(0, 10);
    project = active[seededIndex(today, active.length)];
  }

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

  const slug   = project.repo.toLowerCase().replace('/', '--');
  const ogUrl  = `${baseUrl}/og/${slug}.png`;
  const ogRes  = await fetch(ogUrl);
  if (!ogRes.ok) throw new Error(`Failed to fetch OG image: ${ogUrl} (${ogRes.status})`);
  const ogBuf  = Buffer.from(await ogRes.arrayBuffer());
  const { data: thumb } = await agent.uploadBlob(ogBuf, { encoding: 'image/png' });

  const embedWithThumb = {
    ...embed,
    external: { ...embed.external, thumb: thumb.blob },
  };

  const posted = await agent.post({ text, facets, embed: embedWithThumb, createdAt: new Date().toISOString() });
  const rkey = posted.uri.split('/').pop();
  const bskyUrl = `https://bsky.app/profile/${identifier}/post/${rkey}`;
  console.log(`✓ Posted: ${project.name} (undervalued ${project.undervaluedScore})`);

  const updatedPosted = recordPost(project.repo, 'bsky', bskyUrl, posted);
  savePosted(updatedPosted);

  // Emitted so the GitHub Actions workflow can capture these values
  console.log(`BSKY_POST_URL=${bskyUrl}`);
  console.log(`BSKY_POST_TEXT_B64=${Buffer.from(text).toString('base64')}`);
}

main().catch(err => { console.error(err); process.exit(1); });
