// Nightly: today's stars for every graduate candidate (see star-trails.ts), so the
// /weekly/ star trails can show who crossed GRAD_STARS after leaving the directory.
// Writes only the ones at GRAD_STARS or more to data/graduates.json.
import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { graduateCandidates, starsQuery, readStars, GRAD_STARS } from './star-trails.ts';
import type { Graduates } from './star-trails.ts';
import type { History } from './weekly.ts';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const historyPath = resolve(ROOT, 'data/history.json');
const graduatesPath = resolve(ROOT, 'data/graduates.json');

const BATCH = 100;
const PARALLEL = 11;

const token = process.env.GITHUB_TOKEN;
if (!token) throw new Error('GITHUB_TOKEN is required');

async function fetchBatch(repos: string[], retries = 3): Promise<Record<string, number> | null> {
  for (let attempt = 0; attempt <= retries; attempt++) {
    try {
      const res = await fetch('https://api.github.com/graphql', {
        method: 'POST',
        headers: { Authorization: `bearer ${token}`, 'Content-Type': 'application/json', 'User-Agent': 'silentstars-collector' },
        body: JSON.stringify({ query: starsQuery(repos) }),
      });
      if (res.status === 429 || res.status === 503 || res.status === 403 || res.status === 502) {
        const retryAfter = Number(res.headers.get('retry-after'));
        await new Promise(r => setTimeout(r, retryAfter > 0 ? retryAfter * 1000 : Math.pow(2, attempt) * 2000));
        continue;
      }
      // renamed/deleted repos come back as null plus a NOT_FOUND error; the rest still has data
      const json = (await res.json()) as { data?: Record<string, { stargazerCount: number } | null> };
      if (json.data) return readStars(repos, json.data);
    } catch (err) {
      if (attempt === retries) console.warn(`  batch failed: ${err}`);
    }
    await new Promise(r => setTimeout(r, 1000 * (attempt + 1)));
  }
  return null;
}

const history: History = JSON.parse(readFileSync(historyPath, 'utf8'));
const previous: Graduates = existsSync(graduatesPath)
  ? JSON.parse(readFileSync(graduatesPath, 'utf8'))
  : { checkedAt: '', stars: {} };

const candidates = graduateCandidates(history);
const batches: string[][] = [];
for (let i = 0; i < candidates.length; i += BATCH) batches.push(candidates.slice(i, i + BATCH));

const stars: Record<string, number> = {};
let failed = 0;
for (let i = 0; i < batches.length; i += PARALLEL) {
  const group = batches.slice(i, i + PARALLEL);
  const results = await Promise.all(group.map(b => fetchBatch(b)));
  results.forEach((res, k) => {
    // a failed batch keeps last night's numbers instead of dropping its graduates
    const got = res ?? Object.fromEntries(group[k].filter(r => r in previous.stars).map(r => [r, previous.stars[r]]));
    if (!res) failed++;
    for (const [repo, n] of Object.entries(got)) if (n >= GRAD_STARS) stars[repo] = n;
  });
}

const sorted = Object.fromEntries(Object.entries(stars).sort(([a], [b]) => a.localeCompare(b)));
writeFileSync(graduatesPath, JSON.stringify({ checkedAt: new Date().toISOString(), stars: sorted }, null, 2) + '\n');
console.log(`🎓  graduates.json: ${Object.keys(sorted).length} at ${GRAD_STARS}+ ★ of ${candidates.length} candidates (${batches.length} batches, ${failed} failed)`);
if (failed === batches.length && batches.length > 0) process.exit(1);
