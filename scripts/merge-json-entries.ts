/**
 * Git merge driver for data/promoted.json and data/standby.json — JSON arrays
 * of objects keyed by `repo` (see .gitattributes).
 *
 * Why: two submissions accepted seconds apart both append to the end of the
 * same array, so `git pull --rebase` hits the same textual conflict on every
 * retry and the push fails (issue #77 vs #76, #83 vs #82 — #83's standby entry
 * was lost). A 3-way merge by key resolves it deterministically.
 *
 * Registered only in CI, right before the rebase-retry loops:
 *   git config merge.json-entries.driver "npx tsx scripts/merge-json-entries.ts %O %A %B"
 * Git calls it with base (%O), ours (%A — during a rebase, the upstream already
 * pushed) and theirs (%B — the commit being replayed); the result goes to %A.
 * Exit 0 = merged cleanly; non-zero = git falls back to reporting a conflict.
 */
import { readFileSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

export interface Entry {
  repo: string;
  [field: string]: unknown;
}

const key = (e: Entry) => e.repo.toLowerCase();
const same = (a: Entry, b: Entry) => JSON.stringify(a) === JSON.stringify(b);

/**
 * Start from `ours` (keeps its order and its own adds/removals/edits), then
 * replay what `theirs` changed relative to `base`. When both sides changed the
 * same key, `theirs` wins: it is the newer change being replayed.
 */
export function mergeEntries(base: Entry[], ours: Entry[], theirs: Entry[]): Entry[] {
  const baseBy = new Map(base.map((e) => [key(e), e]));
  const theirsBy = new Map(theirs.map((e) => [key(e), e]));

  const removedByTheirs = new Set([...baseBy.keys()].filter((k) => !theirsBy.has(k)));
  const result = ours
    .filter((e) => !removedByTheirs.has(key(e)))
    .map((e) => {
      const t = theirsBy.get(key(e));
      const b = baseBy.get(key(e));
      return t && (!b || !same(t, b)) ? t : e;
    });

  const present = new Set(result.map(key));
  for (const t of theirs) {
    // New on their side only; an entry ours deliberately dropped stays dropped.
    if (!present.has(key(t)) && !baseBy.has(key(t))) result.push(t);
  }
  return result;
}

function parseEntries(text: string): Entry[] {
  const data: unknown = JSON.parse(text);
  if (!Array.isArray(data) || !data.every((e) => e && typeof e === 'object' && typeof e.repo === 'string')) {
    throw new Error('expected a JSON array of objects with a string "repo"');
  }
  return data as Entry[];
}

/** Merge the three files into `oursPath`. Returns false (file untouched) on bad input. */
export function mergeFiles(basePath: string, oursPath: string, theirsPath: string): boolean {
  try {
    const oursText = readFileSync(oursPath, 'utf8');
    const merged = mergeEntries(
      parseEntries(readFileSync(basePath, 'utf8')),
      parseEntries(oursText),
      parseEntries(readFileSync(theirsPath, 'utf8')),
    );
    const trailing = oursText.endsWith('\n') ? '\n' : '';
    writeFileSync(oursPath, JSON.stringify(merged, null, 2) + trailing);
    return true;
  } catch (err) {
    console.error(`merge-json-entries: ${(err as Error).message}`);
    return false;
  }
}

if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const [basePath, oursPath, theirsPath] = process.argv.slice(2);
  process.exit(basePath && oursPath && theirsPath && mergeFiles(basePath, oursPath, theirsPath) ? 0 : 1);
}
