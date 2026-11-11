import { defineConfig } from 'astro/config';
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
  redirects: postedRedirects(posted, livePages),
});
