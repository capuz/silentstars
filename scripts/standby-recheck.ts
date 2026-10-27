/**
 * standby-recheck.ts — daily pass over data/standby.json
 *
 * Expired entries (past `until`) are dropped; their issue was already closed
 * when they were parked, so it is left alone. Entries that gained a star/fork
 * from someone other than the owner are handed back to process-submission.yml
 * (workflow_dispatch), which reopens the issue, publishes and closes it — the
 * accept/reject decision lives only there.
 *
 * Env vars:
 *   GITHUB_TOKEN — required
 *   REPO_OWNER   — required (e.g. capuz)
 *   REPO_NAME    — required (e.g. silentstars)
 *   DRY_RUN      — optional, log instead of writing/dispatching
 */

import { appendFileSync } from 'node:fs';
import { fetchSignal, hasExternalSignal, isExpired, readStandby, writeStandby } from './standby.ts';

const DRY_RUN = process.argv.includes('--dry-run') || process.env.DRY_RUN === 'true';

async function dispatchReprocess(issue: number, token: string) {
  const owner = process.env.REPO_OWNER;
  const repo = process.env.REPO_NAME;
  if (DRY_RUN) { console.log(`[DRY RUN] dispatch process-submission.yml issue_number=${issue}`); return; }
  const res = await fetch(`https://api.github.com/repos/${owner}/${repo}/actions/workflows/process-submission.yml/dispatches`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: 'application/vnd.github+json',
      'X-GitHub-Api-Version': '2022-11-28',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ ref: 'main', inputs: { issue_number: String(issue) } }),
  });
  if (!res.ok) throw new Error(`dispatch for issue #${issue} failed: ${res.status}`);
}

async function main() {
  const token = process.env.GITHUB_TOKEN;
  if (!token) throw new Error('GITHUB_TOKEN is required');
  if (!process.env.REPO_OWNER || !process.env.REPO_NAME) throw new Error('REPO_OWNER and REPO_NAME are required');

  const now = new Date();
  const entries = readStandby();
  const kept = entries.filter(e => {
    if (!isExpired(e, now)) return true;
    console.log(`⌛ ${e.repo} (issue #${e.issue}) expired on ${e.until} — dropping.`);
    return false;
  });

  if (kept.length !== entries.length) {
    if (!DRY_RUN) writeStandby(kept);
    if (process.env.GITHUB_OUTPUT) appendFileSync(process.env.GITHUB_OUTPUT, 'changed=true\n');
  }

  for (const e of kept) {
    try {
      if (!hasExternalSignal(e.repo, await fetchSignal(e.repo, token))) {
        console.log(`· ${e.repo} (issue #${e.issue}) — no external signal yet, until ${e.until}.`);
        continue;
      }
      console.log(`★ ${e.repo} (issue #${e.issue}) has external signal — re-processing.`);
      await dispatchReprocess(e.issue, token);
    } catch (err) {
      // A repo gone private/deleted 404s here; it simply waits out its expiry.
      console.warn(`⚠ ${e.repo} (issue #${e.issue}): ${(err as Error).message}`);
    }
  }
}

main().catch(err => { console.error(err); process.exit(1); });
