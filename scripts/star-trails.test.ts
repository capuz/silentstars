import { test } from 'node:test';
import assert from 'node:assert/strict';
import { graduateCandidates, buildTrails, starsQuery, readStars, GRAD_STARS, GRAD_FROM_MAX, MIN_WEEKS } from './star-trails.ts';
import type { WeekEntry, History } from './weekly.ts';

function entry(stars: number, status = 'quiet'): WeekEntry {
  return { name: 'proj', stars, forks: 0, closedIssues: 0, lastCommitAt: '2026-09-01T00:00:00Z', status, healthScore: 50, hasPage: true };
}

// weeks W01..W06; `rows` maps repo -> stars per week (null = not measured that week)
function history(rows: Record<string, Array<number | null>>): History {
  const h: History = {};
  for (let i = 0; i < 6; i++) {
    const projects: Record<string, WeekEntry> = {};
    for (const [repo, stars] of Object.entries(rows)) if (stars[i] != null) projects[repo] = entry(stars[i]!);
    h[`2026-W0${i + 1}`] = { collectedAt: `2026-01-0${i + 1}T00:00:00Z`, projects };
  }
  return h;
}

test('graduateCandidates: last seen under GRAD_FROM_MAX and gone before the latest week', () => {
  const h = history({
    'a/small-gone': [10, 20, null, null, null, null],
    'a/big-gone': [GRAD_FROM_MAX, null, null, null, null, null],
    'a/still-here': [5, 5, 5, 5, 5, 5],
    'a/dropped-later': [300, 50, null, null, null, null],
  });
  assert.deepEqual(graduateCandidates(h), ['a/dropped-later', 'a/small-gone']);
});

test('buildTrails: keeps repos with MIN_WEEKS measured weeks, drops shorter ones', () => {
  const h = history({
    'a/long': [1, 2, 3, 4, null, null],
    'a/short': [1, 2, 3, null, null, null],
  });
  const d = buildTrails(h, { checkedAt: '', stars: {} }, new Set());
  assert.equal(MIN_WEEKS, 4);
  assert.deepEqual(d.weeks, ['2026-W01', '2026-W02', '2026-W03', '2026-W04', '2026-W05', '2026-W06']);
  assert.deepEqual(d.repos.map(r => r.r), ['a/long']);
  assert.deepEqual(d.repos[0].s, { 0: [1, 'quiet'], 1: [2, 'quiet'], 2: [3, 'quiet'], 3: [4, 'quiet'] });
  assert.equal(d.repos[0].g, undefined);
  assert.equal(d.gradStars, GRAD_STARS);
});

test('buildTrails: a graduate gets a today point on the latest week and its measured weeks', () => {
  const h = history({ 'a/rocket': [12, 40, null, null, null, null] });
  const d = buildTrails(h, { checkedAt: '', stars: { 'a/rocket': 900 } }, new Set());
  assert.equal(d.repos.length, 1);
  assert.deepEqual(d.repos[0], { r: 'a/rocket', s: { 0: [12, 'quiet'], 1: [40, 'quiet'], 5: [900, 'graduated'] }, m: [0, 1], g: 1 });
});

test('buildTrails: no graduation when last seen at GRAD_FROM_MAX or more, or still under GRAD_STARS', () => {
  const h = history({
    'a/near': [80, GRAD_FROM_MAX, null, null, null, null],
    'a/slow': [10, 20, null, null, null, null],
  });
  const d = buildTrails(h, { checkedAt: '', stars: { 'a/near': 2000, 'a/slow': GRAD_STARS - 1 } }, new Set());
  assert.deepEqual(d.repos, []);
});

test('buildTrails: p flags repos that still have a project page', () => {
  const h = history({ 'a/one': [1, 1, 1, 1, 1, 1], 'a/two': [2, 2, 2, 2, 2, 2] });
  const d = buildTrails(h, { checkedAt: '', stars: {} }, new Set(['a/two']));
  assert.equal(d.repos.find(r => r.r === 'a/one')!.p, undefined);
  assert.equal(d.repos.find(r => r.r === 'a/two')!.p, 1);
});

test('starsQuery: one aliased repository field per repo, names JSON-quoted', () => {
  assert.equal(
    starsQuery(['o/a', 'x/b"c']),
    'query { r0: repository(owner: "o", name: "a") { stargazerCount } r1: repository(owner: "x", name: "b\\"c") { stargazerCount } }',
  );
});

test('readStars: maps aliases back to repos, skipping missing (renamed/deleted) ones', () => {
  const stars = readStars(['o/a', 'o/b', 'o/c'], { r0: { stargazerCount: 7 }, r1: null, r2: { stargazerCount: 600 } });
  assert.deepEqual(stars, { 'o/a': 7, 'o/c': 600 });
});
