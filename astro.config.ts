import { defineConfig } from 'astro/config';
import { unified } from '@astrojs/markdown-remark';
import { existsSync, readFileSync, readdirSync } from 'node:fs';
import { postedRedirects } from './scripts/posted-renames.ts';
import type { PostedEntry } from './scripts/post-shared.ts';

// Posted repos renamed after their post keep their old URL alive (the Bluesky post
// links to it) as a redirect to the current page — see scripts/posted-renames.ts.
const posted: PostedEntry[] = existsSync('data/posted.json')
  ? JSON.parse(readFileSync('data/posted.json', 'utf8'))
  : [];
const livePages = new Set(
  readdirSync('src/content/projects').filter(f => f.endsWith('.md')).map(f => f.slice(0, -3)),
);

export default defineConfig({
  site: 'https://silentstars.dev',
  base: '/',
  output: 'static',
  // Astro 7 defaults to 'jsx', which drops the whitespace between inline elements
  // that the templates rely on ("last commit today" → "last committoday").
  compressHTML: true,
  // Astro 7's default Sätteri processor reads a README that opens with `---` as a
  // second frontmatter block and drops it; unified() keeps the remark output (and
  // smartypants dashes) the project pages were built with.
  markdown: { processor: unified() },
  redirects: postedRedirects(posted, livePages),
});
