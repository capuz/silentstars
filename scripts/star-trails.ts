// Star trails (/weekly/): every project measured for a few weeks is a point of light
// at the height of its GitHub stars. Graduates are the ones we last measured small
// that have since crossed GRAD_STARS; their stars today come from data/graduates.json
// (scripts/graduates.ts, nightly), since they left the directory long ago.
import { existsSync, readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import type { History } from './weekly.ts';

export const GRAD_STARS = 500;
export const GRAD_FROM_MAX = 100;
// fewer measured weeks than this is a dot, not a trail
export const MIN_WEEKS = 4;
// kept off the chart at the maintainer's request
export const HIDDEN = new Set(['opn-build/OpenAlive']);

export interface Graduates {
  checkedAt: string;
  /** today's stars of every candidate at GRAD_STARS or more */
  stars: Record<string, number>;
}

export interface Trail {
  r: string;
  /** week index -> [stars, status] */
  s: Record<number, [number, string]>;
  /** graduates only: the weeks actually measured (the last point is today's count) */
  m?: number[];
  g?: 1;
  /** still has a page on the site */
  p?: 1;
}

export interface TrailsData {
  weeks: string[];
  gradStars: number;
  repos: Trail[];
}

function lastSeen(history: History): Map<string, { week: number; stars: number }> {
  const weeks = Object.keys(history).sort();
  const seen = new Map<string, { week: number; stars: number }>();
  weeks.forEach((w, i) => {
    for (const [repo, e] of Object.entries(history[w].projects)) seen.set(repo, { week: i, stars: e.stars });
  });
  return seen;
}

/** Repos that could have graduated: last measured under GRAD_FROM_MAX, no longer measured. */
export function graduateCandidates(history: History): string[] {
  const latest = Object.keys(history).length - 1;
  return [...lastSeen(history)]
    .filter(([repo, v]) => !HIDDEN.has(repo) && v.week < latest && v.stars < GRAD_FROM_MAX)
    .map(([repo]) => repo)
    .sort();
}

export function buildTrails(history: History, graduates: Graduates, withPage: Set<string>): TrailsData {
  const weeks = Object.keys(history).sort();
  const latest = weeks.length - 1;
  const points = new Map<string, Record<number, [number, string]>>();
  weeks.forEach((w, i) => {
    for (const [repo, e] of Object.entries(history[w].projects)) {
      if (!points.has(repo)) points.set(repo, {});
      points.get(repo)![i] = [e.stars, e.status];
    }
  });
  const candidates = new Set(graduateCandidates(history));

  const repos: Trail[] = [];
  for (const [r, s] of points) {
    if (HIDDEN.has(r)) continue;
    const measured = Object.keys(s).map(Number);
    const today = graduates.stars[r];
    const trail: Trail = { r, s };
    if (candidates.has(r) && today >= GRAD_STARS) {
      trail.s = { ...s, [latest]: [today, 'graduated'] };
      trail.m = measured;
      trail.g = 1;
    } else if (measured.length < MIN_WEEKS) continue;
    if (withPage.has(r)) trail.p = 1;
    repos.push(trail);
  }
  return { weeks, gradStars: GRAD_STARS, repos };
}

export function countGraduates(history: History, graduates: Graduates): number {
  return buildTrails(history, graduates, new Set()).repos.filter(r => r.g).length;
}

/** data/graduates.json, relative to the working directory (the build runs from the repo root). */
export function loadGraduates(): Graduates {
  const path = resolve('data/graduates.json');
  return existsSync(path) ? JSON.parse(readFileSync(path, 'utf8')) : { checkedAt: '', stars: {} };
}

/** One GraphQL query asking the star count of every repo, aliased r0..rN. */
export function starsQuery(repos: string[]): string {
  const fields = repos.map((repo, i) => {
    const [owner, name] = repo.split('/');
    return `r${i}: repository(owner: ${JSON.stringify(owner)}, name: ${JSON.stringify(name)}) { stargazerCount }`;
  });
  return `query { ${fields.join(' ')} }`;
}

export function readStars(
  repos: string[],
  data: Record<string, { stargazerCount: number } | null>,
): Record<string, number> {
  const stars: Record<string, number> = {};
  repos.forEach((repo, i) => {
    const node = data[`r${i}`];
    if (node) stars[repo] = node.stargazerCount;
  });
  return stars;
}
