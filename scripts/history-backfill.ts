// One-off: rebuilds data/history.json from the git history of data/latest.json,
// keeping the last nightly snapshot of each ISO week. Needs a full clone.
import { execFileSync } from 'node:child_process';
import { writeFileSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { upsertWeek, listEditions } from './weekly.ts';
import type { History, LatestLike } from './weekly.ts';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const git = (...args: string[]) =>
  execFileSync('git', args, { cwd: ROOT, encoding: 'utf8', maxBuffer: 64 * 1024 * 1024 });

const shas = git('log', '--format=%H', '--', 'data/latest.json').trim().split('\n').reverse();
let history: History = {};
for (const sha of shas) {
  let latest: LatestLike;
  try {
    latest = JSON.parse(git('show', `${sha}:data/latest.json`));
  } catch {
    console.warn(`  ⚠  ${sha.slice(0, 8)}: unreadable latest.json, skipped`);
    continue;
  }
  // Early snapshots predate some fields; hasPage defaulted to true back then.
  for (const p of latest.projects) {
    p.hasPage ??= true;
    p.closedIssues ??= 0;
  }
  history = upsertWeek(history, latest);
}

writeFileSync(resolve(ROOT, 'data/history.json'), JSON.stringify(history) + '\n');
console.log(`📈  ${shas.length} commits → ${Object.keys(history).length} weeks`);

for (const ed of listEditions(history, new Date())) {
  console.log(`  #${ed.issue} ${ed.week}  new ${ed.newcomers.length}  rising ${ed.rising.length}  revived ${ed.revived.length}  cooling ${ed.cooling.length}`);
}
