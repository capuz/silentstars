/**
 * discover.ts — SilentStars nightly candidate discovery
 *
 * Queries the GitHub REST Search API to find repos that are alive but invisible,
 * iterating by language to work around the 1 000-result/query limit.
 *
 * Output: data/discovered.json  { discoveredAt, candidates: ["owner/repo", ...] }
 * Run:    npm run discover
 * Env:    GITHUB_TOKEN (required — authenticated limit is 30 req/min)
 */

import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, '..');

// ──────────────────────────────────────────────────────────────────────────────
// Types
// ──────────────────────────────────────────────────────────────────────────────

interface DiscoveryConfig {
  starsRange: { min: number; max: number };
  pushedWithinDays: number;
  languages: string[];
  maxCandidatesPerNight: number;
  vitalityThreshold: number; // used by collect.ts, stored here as canonical source
}

interface DiscoveredJson {
  discoveredAt: string;
  candidates: string[]; // owner/repo strings
}

interface SearchItem {
  full_name: string;
  archived: boolean;
  fork: boolean;
}

interface SearchResponse {
  total_count: number;
  incomplete_results: boolean;
  items: SearchItem[];
  message?: string; // present on error responses
}

// ──────────────────────────────────────────────────────────────────────────────
// Search API
// ──────────────────────────────────────────────────────────────────────────────

async function searchRepos(
  token: string,
  query: string,
  retries = 4
): Promise<SearchItem[]> {
  const url = `https://api.github.com/search/repositories?q=${encodeURIComponent(query)}&sort=updated&order=desc&per_page=100`;

  for (let attempt = 0; attempt <= retries; attempt++) {
    const res = await fetch(url, {
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: 'application/vnd.github+json',
        'X-GitHub-Api-Version': '2022-11-28',
        'User-Agent': 'silentstars-discover',
      },
    });

    if (res.status === 200) {
      const body = (await res.json()) as SearchResponse;
      return body.items ?? [];
    }

    if (res.status === 403 || res.status === 429) {
      // Respect X-RateLimit-Reset if present, otherwise exponential backoff
      const resetAt = res.headers.get('X-RateLimit-Reset');
      const waitMs = resetAt
        ? Math.max(0, Number(resetAt) * 1000 - Date.now()) + 500
        : Math.pow(2, attempt + 1) * 2000;
      console.warn(`  ⏳  Rate limited — waiting ${Math.round(waitMs / 1000)}s…`);
      await new Promise(r => setTimeout(r, waitMs));
      continue;
    }

    // 422 = unprocessable query, 503 = transient — don't retry 422
    if (res.status === 422) {
      console.warn(`  ⚠  Invalid query (422): ${query}`);
      return [];
    }

    if (attempt < retries) {
      await new Promise(r => setTimeout(r, 1000 * (attempt + 1)));
    }
  }

  console.warn(`  ⚠  Giving up after ${retries + 1} attempts for query: ${query}`);
  return [];
}

// ──────────────────────────────────────────────────────────────────────────────
// Main
// ──────────────────────────────────────────────────────────────────────────────

async function main() {
  const token = process.env.GITHUB_TOKEN;
  if (!token) {
    console.error('❌  GITHUB_TOKEN is not set.');
    process.exit(1);
  }

  // Load config
  const configPath = resolve(ROOT, 'data/discovery.config.json');
  if (!existsSync(configPath)) {
    console.error('❌  data/discovery.config.json not found.');
    process.exit(1);
  }
  const config: DiscoveryConfig = JSON.parse(readFileSync(configPath, 'utf8'));

  // Build "pushed after" date string
  const pushedAfter = new Date(Date.now() - config.pushedWithinDays * 86_400_000)
    .toISOString()
    .slice(0, 10); // YYYY-MM-DD

  // Build known-repos Set from seed.txt + previous discovered.json
  // This prevents adding repos we already track
  const knownRepos = new Set<string>();

  const seedPath = resolve(ROOT, 'data/seed.txt');
  if (existsSync(seedPath)) {
    readFileSync(seedPath, 'utf8')
      .split('\n')
      .map(l => l.trim().toLowerCase())
      .filter(l => l && !l.startsWith('#'))
      .forEach(r => knownRepos.add(r));
  }

  const discoveredPath = resolve(ROOT, 'data/discovered.json');
  if (existsSync(discoveredPath)) {
    const prev: DiscoveredJson = JSON.parse(readFileSync(discoveredPath, 'utf8'));
    prev.candidates.forEach(r => knownRepos.add(r.toLowerCase()));
  }

  // Discover: one query per language, stop at cap
  const newCandidates: string[] = [];
  const { min, max } = config.starsRange;

  console.log(`🔍  Discovering repos: stars ${min}..${max}, pushed after ${pushedAfter}`);

  for (const lang of config.languages) {
    if (newCandidates.length >= config.maxCandidatesPerNight) break;

    const query = [
      `stars:${min}..${max}`,
      `pushed:>${pushedAfter}`,
      `is:public`,
      `archived:false`,
      `fork:false`,
      `language:${lang}`,
    ].join(' ');

    console.log(`  lang=${lang} …`);
    const items = await searchRepos(token, query);

    let added = 0;
    for (const item of items) {
      if (newCandidates.length >= config.maxCandidatesPerNight) break;
      if (item.archived || item.fork) continue;
      const fullName = item.full_name;
      if (!knownRepos.has(fullName.toLowerCase())) {
        newCandidates.push(fullName);
        knownRepos.add(fullName.toLowerCase());
        added++;
      }
    }

    console.log(`    → ${items.length} results, ${added} new candidates`);

    // 2-second pause between language queries to stay well within 30 req/min
    if (lang !== config.languages.at(-1)) {
      await new Promise(r => setTimeout(r, 2000));
    }
  }

  // Write discovered.json — replaces previous (nightly refresh)
  const output: DiscoveredJson = {
    discoveredAt: new Date().toISOString(),
    candidates: newCandidates,
  };
  writeFileSync(discoveredPath, JSON.stringify(output, null, 2));

  console.log(`\n✅  Discovered ${newCandidates.length} new candidates → data/discovered.json`);
}

main().catch(err => {
  console.error('Fatal error:', err);
  process.exit(1);
});
