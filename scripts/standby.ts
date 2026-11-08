/**
 * standby.ts — submissions on hold until they show external signal
 *
 * A submission with no external signal (no star from anyone but the owner,
 * whatever the repo's age) is parked in data/standby.json for STANDBY_DAYS and
 * its issue is closed. The daily standby-recheck workflow re-dispatches
 * process-submission for any entry that gains a star from someone other than
 * the owner (the issue is reopened, published and closed again); entries past
 * `until` are dropped. Forks don't count: mass-forking accounts fork new repos
 * within minutes, so a fork says nothing about interest.
 */

import { existsSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');
export const STANDBY_PATH = resolve(ROOT, 'data', 'standby.json');
export const STANDBY_DAYS = 90;

export interface StandbyEntry {
  repo: string;
  issue: number;
  since: string;
  until: string;
}

const same = (a: string, b: string) => a.toLowerCase() === b.toLowerCase();
const day = (d: Date) => d.toISOString().slice(0, 10);

export function readStandby(path = STANDBY_PATH): StandbyEntry[] {
  if (!existsSync(path)) return [];
  return JSON.parse(readFileSync(path, 'utf8')) as StandbyEntry[];
}

export function writeStandby(entries: StandbyEntry[], path = STANDBY_PATH) {
  writeFileSync(path, JSON.stringify(entries, null, 2) + '\n');
}

export function findEntry(entries: StandbyEntry[], repo: string): StandbyEntry | undefined {
  return entries.find(e => same(e.repo, repo));
}

export function removeEntry(entries: StandbyEntry[], repo: string): StandbyEntry[] {
  return entries.filter(e => !same(e.repo, repo));
}

export function addEntry(entries: StandbyEntry[], repo: string, issue: number, now: Date): StandbyEntry[] {
  const until = new Date(now.getTime() + STANDBY_DAYS * 86_400_000);
  return [...removeEntry(entries, repo), { repo, issue, since: day(now), until: day(until) }];
}

export function isExpired(entry: StandbyEntry, now: Date): boolean {
  return new Date(entry.until) <= now;
}

export interface Signal {
  stars: number;
  ownerStarred: boolean;
}

/** True once anyone other than the repo owner has starred it. */
export function hasExternalSignal(_repo: string, signal: Signal): boolean {
  return signal.stars - (signal.ownerStarred ? 1 : 0) > 0;
}

// GitHub no longer lists a repo's stargazers to anyone but its owner (404), so
// the owner's own star is detected from their public starred list instead.
const OWNER_STARRED_PAGES = 10;

export async function fetchSignal(repo: string, token: string): Promise<Signal> {
  const get = async <T>(path: string): Promise<T> => {
    const res = await fetch(`https://api.github.com/${path}`, {
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: 'application/vnd.github+json',
        'X-GitHub-Api-Version': '2022-11-28',
      },
    });
    if (!res.ok) throw new Error(`GitHub API /${path}: ${res.status}`);
    return res.json() as Promise<T>;
  };
  const owner = repo.split('/')[0] ?? '';
  const meta = await get<{ stargazers_count: number }>(`repos/${repo}`);
  let ownerStarred = false;
  if (meta.stargazers_count > 0) {
    for (let page = 1; page <= OWNER_STARRED_PAGES && !ownerStarred; page++) {
      const starred = await get<Array<{ full_name: string }>>(`users/${owner}/starred?per_page=100&page=${page}`);
      ownerStarred = starred.some(r => same(r.full_name, repo));
      if (starred.length < 100) break;
    }
  }
  return { stars: meta.stargazers_count, ownerStarred };
}
