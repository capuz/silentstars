import { test } from 'node:test';
import assert from 'node:assert/strict';
import {
  isoWeekKey, weekBounds, formatWeekRange, toSnapshot, upsertWeek, computeEdition, listEditions, renderReason,
} from './weekly.ts';
import type { WeekEntry, WeekSnapshot, History } from './weekly.ts';

function entry(overrides: Partial<WeekEntry> = {}): WeekEntry {
  return {
    name: 'proj',
    stars: 10,
    forks: 1,
    closedIssues: 0,
    lastCommitAt: '2026-09-01T00:00:00Z',
    status: 'quiet',
    healthScore: 50,
    hasPage: true,
    ...overrides,
  };
}

function week(projects: Record<string, WeekEntry>, collectedAt = '2026-10-18T09:00:00Z'): WeekSnapshot {
  return { collectedAt, projects };
}

// 2026-W42 runs Mon 2026-10-12 → Sun 2026-10-18
const W42 = '2026-W42';
const IN_W42 = '2026-10-14T12:00:00Z';

test('isoWeekKey: mid-year date', () => {
  assert.equal(isoWeekKey(new Date('2026-10-14T12:00:00Z')), '2026-W42');
});

test('isoWeekKey: Monday 00:00 UTC starts a new week, Sunday ends the old one', () => {
  assert.equal(isoWeekKey(new Date('2026-10-18T23:59:59Z')), '2026-W42');
  assert.equal(isoWeekKey(new Date('2026-10-19T00:00:00Z')), '2026-W43');
});

test('isoWeekKey: year boundaries follow ISO rules', () => {
  // 2027-01-01 is a Friday → belongs to 2026-W53
  assert.equal(isoWeekKey(new Date('2027-01-01T00:00:00Z')), '2026-W53');
  // 2025-12-29 is a Monday → 2026-W01
  assert.equal(isoWeekKey(new Date('2025-12-29T00:00:00Z')), '2026-W01');
});

test('weekBounds: Monday to next Monday, UTC', () => {
  const { start, end } = weekBounds(W42);
  assert.equal(start.toISOString(), '2026-10-12T00:00:00.000Z');
  assert.equal(end.toISOString(), '2026-10-19T00:00:00.000Z');
  assert.equal(isoWeekKey(start), W42);
});

test('weekBounds: inverse of isoWeekKey across the year boundary', () => {
  assert.equal(weekBounds('2026-W53').start.toISOString(), '2026-12-28T00:00:00.000Z');
  assert.equal(weekBounds('2026-W01').start.toISOString(), '2025-12-29T00:00:00.000Z');
});

test('toSnapshot keeps only the compact fields', () => {
  const snap = toSnapshot({
    collectedAt: IN_W42,
    projects: [{
      repo: 'a/b', name: 'b', stars: 3, forks: 0, closedIssues: 2, lastCommitAt: IN_W42,
      lastReleaseAt: undefined, status: 'thriving', healthScore: 70, hasPage: true,
      description: 'drop me', topics: ['x'],
    }],
  });
  assert.deepEqual(snap, {
    collectedAt: IN_W42,
    projects: {
      'a/b': {
        name: 'b', stars: 3, forks: 0, closedIssues: 2, lastCommitAt: IN_W42,
        status: 'thriving', healthScore: 70, hasPage: true,
      },
    },
  });
});

test('upsertWeek overwrites the current week and leaves closed weeks alone', () => {
  const history: History = {
    '2026-W41': week({ 'a/b': entry({ stars: 1 }) }, '2026-10-11T09:00:00Z'),
    '2026-W42': week({ 'a/b': entry({ stars: 2 }) }, '2026-10-13T09:00:00Z'),
  };
  const latest = { collectedAt: '2026-10-15T09:00:00Z', projects: [{ repo: 'a/b', ...entry({ stars: 5 }) }] };
  const next = upsertWeek(history, latest);
  assert.equal(next['2026-W41']!.projects['a/b']!.stars, 1);
  assert.equal(next['2026-W42']!.projects['a/b']!.stars, 5);
  assert.equal(next['2026-W42']!.collectedAt, '2026-10-15T09:00:00Z');
});

test('upsertWeek ignores a snapshot older than the stored one for that week', () => {
  const history: History = { [W42]: week({ 'a/b': entry({ stars: 9 }) }, '2026-10-16T09:00:00Z') };
  const latest = { collectedAt: '2026-10-14T09:00:00Z', projects: [{ repo: 'a/b', ...entry({ stars: 1 }) }] };
  assert.equal(upsertWeek(history, latest)[W42]!.projects['a/b']!.stars, 9);
});

test('newcomers: posted to Bluesky during the week', () => {
  const prev = week({ 'new/one': entry({ name: 'one' }) });
  const curr = week({ 'new/one': entry({ name: 'one', postedAt: IN_W42 }) });
  const ed = computeEdition(prev, curr, W42);
  assert.deepEqual(ed.newcomers.map(i => i.repo), ['new/one']);
  assert.equal(ed.newcomers[0]!.slug, 'new--one');
});

test('newcomers: freshly promoted (submitted) projects', () => {
  const ed = computeEdition(week({}), week({ 'sub/mit': entry({ promoted: true }) }), W42);
  assert.deepEqual(ed.newcomers.map(i => i.repo), ['sub/mit']);
});

test('newcomers: a discovered project merely appearing is not news', () => {
  const ed = computeEdition(week({}), week({ 'disc/overed': entry() }), W42);
  assert.equal(ed.newcomers.length, 0);
});

test('newcomers: posted in an earlier week is not new', () => {
  const posted = entry({ postedAt: '2026-10-01T00:00:00Z' });
  const ed = computeEdition(week({ 'a/b': posted }), week({ 'a/b': posted }), W42);
  assert.equal(ed.newcomers.length, 0);
});

test('rising: needs last week\'s snapshot to compare against', () => {
  const curr = week({ 'a/b': entry({ lastCommitAt: IN_W42, lastReleaseAt: IN_W42 }) });
  assert.equal(computeEdition(week({}), curr, W42).rising.length, 0);
});

test('projects without a page never appear in any section', () => {
  const prev = week({ 'a/b': entry({ hasPage: false, stars: 10 }) });
  const curr = week({ 'a/b': entry({ hasPage: false, stars: 40, lastReleaseAt: IN_W42, lastCommitAt: IN_W42 }) });
  const ed = computeEdition(prev, curr, W42);
  assert.equal(ed.newcomers.length + ed.rising.length + ed.revived.length + ed.cooling.length, 0);
});

test('rising: release + commits in the week, with signals', () => {
  const prev = week({ 'a/b': entry() });
  const curr = week({ 'a/b': entry({ lastCommitAt: IN_W42, lastReleaseAt: IN_W42, status: 'thriving' }) });
  const ed = computeEdition(prev, curr, W42);
  assert.deepEqual(ed.rising.map(i => i.repo), ['a/b']);
  const kinds = ed.rising[0]!.signals.map(s => s.kind);
  assert.ok(kinds.includes('release'));
  assert.ok(kinds.includes('commits'));
});

test('rising: a lone commit is not enough', () => {
  const prev = week({ 'a/b': entry({ lastCommitAt: '2026-10-08T00:00:00Z' }) });
  const curr = week({ 'a/b': entry({ lastCommitAt: IN_W42 }) });
  assert.equal(computeEdition(prev, curr, W42).rising.length, 0);
});

test('rising: a release published before the week does not count', () => {
  const prev = week({ 'a/b': entry() });
  const curr = week({ 'a/b': entry({ lastReleaseAt: '2026-10-01T00:00:00Z' }) });
  assert.equal(computeEdition(prev, curr, W42).rising.length, 0);
});

test('rising: relative star growth counts, tiny absolute bumps do not', () => {
  const prev = week({ 'big/jump': entry({ stars: 10 }), 'tiny/bump': entry({ stars: 100 }) });
  const curr = week({
    'big/jump': entry({ stars: 14, lastCommitAt: IN_W42 }),
    'tiny/bump': entry({ stars: 102, lastCommitAt: IN_W42 }),
  });
  const ed = computeEdition(prev, curr, W42);
  assert.deepEqual(ed.rising.map(i => i.repo), ['big/jump']);
});

test('rising: ordered by score, highest first, and capped', () => {
  const prev: Record<string, WeekEntry> = {};
  const curr: Record<string, WeekEntry> = {};
  for (let k = 0; k < 20; k++) {
    prev[`o/p${k}`] = entry({ closedIssues: 0 });
    curr[`o/p${k}`] = entry({ closedIssues: k % 3 === 0 ? 3 : 2, lastCommitAt: IN_W42, lastReleaseAt: k === 7 ? IN_W42 : undefined });
  }
  const ed = computeEdition(week(prev), week(curr), W42);
  assert.equal(ed.rising[0]!.repo, 'o/p7');
  assert.ok(ed.rising.length <= 8);
});

test('rising: issue spikes from automation (status-page bots) are ignored', () => {
  const prev = week({ 'bot/upptime': entry({ closedIssues: 1000 }) });
  const curr = week({ 'bot/upptime': entry({ closedIssues: 1175, lastCommitAt: IN_W42 }) });
  const ed = computeEdition(prev, curr, W42);
  assert.equal(ed.rising.length, 0);
});

test('newcomers carry why they are new', () => {
  const ed = computeEdition(
    week({ 'p/osted': entry() }),
    week({ 'p/osted': entry({ postedAt: IN_W42 }), 's/ub': entry({ promoted: true }) }),
    W42,
  );
  const byRepo = Object.fromEntries(ed.newcomers.map(i => [i.repo, i.signals[0]!.kind]));
  assert.deepEqual(byRepo, { 'p/osted': 'posted', 's/ub': 'submitted' });
});

test('revived: first commit in the week after a long silence', () => {
  const prev = week({ 'a/b': entry({ lastCommitAt: '2026-07-01T00:00:00Z' }) });
  const curr = week({ 'a/b': entry({ lastCommitAt: IN_W42, closedIssues: 5, lastReleaseAt: IN_W42 }) });
  const ed = computeEdition(prev, curr, W42);
  assert.deepEqual(ed.revived.map(i => i.repo), ['a/b']);
  assert.equal(ed.rising.length, 0, 'revived projects are not repeated in rising');
  const back = ed.revived[0]!.signals.find(s => s.kind === 'returnAfter');
  assert.ok(back && back.kind === 'returnAfter' && back.days >= 100);
});

test('cooling: drops from an active status to quiet/at_risk', () => {
  const prev = week({ 'a/b': entry({ status: 'thriving' }), 'c/d': entry({ status: 'quiet' }) });
  const curr = week({ 'a/b': entry({ status: 'quiet' }), 'c/d': entry({ status: 'at_risk' }) });
  const ed = computeEdition(prev, curr, W42);
  assert.deepEqual(ed.cooling.map(i => i.repo), ['a/b']);
});

test('cooling: a large health score drop', () => {
  const prev = week({ 'a/b': entry({ healthScore: 60 }) });
  const curr = week({ 'a/b': entry({ healthScore: 45 }) });
  const ed = computeEdition(prev, curr, W42);
  assert.deepEqual(ed.cooling.map(i => i.repo), ['a/b']);
});

test('a project lands in at most one section', () => {
  const prev = week({ 'a/b': entry({ lastCommitAt: '2026-10-08T00:00:00Z' }) });
  const curr = week({ 'a/b': entry({ lastCommitAt: IN_W42, lastReleaseAt: IN_W42, closedIssues: 9, postedAt: IN_W42 }) });
  const ed = computeEdition(prev, curr, W42);
  const all = [...ed.newcomers, ...ed.rising, ...ed.revived, ...ed.cooling].map(i => i.repo);
  assert.deepEqual(all, ['a/b']);
});

test('listEditions: one edition per consecutive pair of closed weeks, numbered from 1', () => {
  const history: History = {
    '2026-W40': week({ 'a/b': entry() }),
    '2026-W41': week({ 'a/b': entry(), 'n/1': entry({ postedAt: '2026-10-06T10:00:00Z' }) }),
    '2026-W42': week({ 'a/b': entry(), 'n/1': entry({ postedAt: '2026-10-06T10:00:00Z' }), 'n/2': entry({ postedAt: IN_W42 }) }),
    '2026-W43': week({ 'a/b': entry(), 'n/2': entry({ postedAt: IN_W42 }), 'n/3': entry({ postedAt: '2026-10-20T10:00:00Z' }) }),
  };
  // "now" is inside W43, so W43 is still open
  const eds = listEditions(history, new Date('2026-10-21T00:00:00Z'));
  assert.deepEqual(eds.map(e => [e.issue, e.week]), [[1, '2026-W41'], [2, '2026-W42']]);
  assert.deepEqual(eds[0]!.newcomers.map(i => i.repo), ['n/1']);
  assert.deepEqual(eds[1]!.newcomers.map(i => i.repo), ['n/2']);
});

test('renderReason joins signals into one human line', () => {
  assert.equal(
    renderReason([{ kind: 'release' }, { kind: 'issuesClosed', delta: 4 }, { kind: 'stars', delta: 6 }]),
    'shipped a new release · closed 4 issues · +6 stars',
  );
  assert.equal(renderReason([{ kind: 'returnAfter', days: 120 }]), 'first commit in 120 days');
  assert.equal(renderReason([{ kind: 'posted' }, { kind: 'commits' }]), 'featured on Bluesky · new commits');
  assert.equal(renderReason([{ kind: 'submitted' }]), 'submitted by its maintainer');
  assert.equal(renderReason([{ kind: 'issuesClosed', delta: 1 }]), 'closed 1 issue');
  assert.equal(renderReason([{ kind: 'statusChange', from: 'thriving', to: 'quiet' }]), 'went from thriving to quiet');
});

test('formatWeekRange: same month, month boundary, year boundary', () => {
  assert.equal(formatWeekRange('2026-W42'), 'Oct 12 – 18, 2026');
  assert.equal(formatWeekRange('2026-W44'), 'Oct 26 – Nov 1, 2026');
  assert.equal(formatWeekRange('2026-W01'), 'Dec 29, 2025 – Jan 4, 2026');
});
