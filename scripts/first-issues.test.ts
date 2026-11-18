import { test } from 'node:test';
import assert from 'node:assert/strict';
import { eligibleIssues, projectSignals, buildFirstIssueProject, rankFirstIssueProjects } from './first-issues.ts';
import type { RawIssue, RawMergedPR, FirstIssueProject } from './first-issues.ts';

const NOW = Date.parse('2026-11-17T12:00:00Z');
const daysAgo = (d: number) => new Date(NOW - d * 86_400_000).toISOString();

function issue(number: number, o: Partial<RawIssue> & { labelNames?: string[] } = {}): RawIssue {
  const { labelNames = ['good first issue'], ...rest } = o;
  return {
    number,
    title: `Issue ${number}`,
    url: `https://github.com/a/proj/issues/${number}`,
    createdAt: daysAgo(30),
    updatedAt: daysAgo(5),
    locked: false,
    labels: { nodes: labelNames.map(name => ({ name })) },
    assignees: { totalCount: 0 },
    comments: { totalCount: 1 },
    closedByPullRequestsReferences: { totalCount: 0 },
    ...rest,
  };
}

// ── eligibleIssues ────────────────────────────────────────────

test('eligibleIssues keeps open, unclaimed, recent issues', () => {
  const out = eligibleIssues([issue(1)], NOW);
  assert.equal(out.length, 1);
  assert.deepEqual(out[0], {
    number: 1, title: 'Issue 1', url: 'https://github.com/a/proj/issues/1',
    kind: 'good first issue', createdAt: daysAgo(30), comments: 1,
  });
});

test('eligibleIssues drops issues someone already took', () => {
  const out = eligibleIssues([
    issue(1, { assignees: { totalCount: 1 } }),
    issue(2, { closedByPullRequestsReferences: { totalCount: 1 } }),
    issue(3, { locked: true }),
    issue(4, { comments: { totalCount: 9 } }),
    issue(5, { updatedAt: daysAgo(366) }),
    issue(6, { comments: { totalCount: 8 } }),
  ], NOW);
  assert.deepEqual(out.map(i => i.number), [6]);
});

test('eligibleIssues puts good first issues before help wanted, newest first, five at most', () => {
  const out = eligibleIssues([
    issue(1, { labelNames: ['help wanted'], updatedAt: daysAgo(1) }),
    issue(2, { labelNames: ['Good First Issue'], updatedAt: daysAgo(20) }),
    issue(3, { labelNames: ['good first issue'], updatedAt: daysAgo(2) }),
    issue(4, { labelNames: ['help wanted'], updatedAt: daysAgo(3) }),
    issue(5, { labelNames: ['help wanted'], updatedAt: daysAgo(4) }),
    issue(6, { labelNames: ['help wanted'], updatedAt: daysAgo(5) }),
  ], NOW);
  assert.deepEqual(out.map(i => i.number), [3, 2, 1, 4, 5]);
  assert.equal(out[0]!.kind, 'good first issue');
  assert.equal(out[2]!.kind, 'help wanted');
});

test('eligibleIssues tags an issue with both labels as a good first issue', () => {
  const [out] = eligibleIssues([issue(1, { labelNames: ['help wanted', 'good first issue'] })], NOW);
  assert.equal(out!.kind, 'good first issue');
});

// ── projectSignals ────────────────────────────────────────────

function pr(association: string, mergedDaysAgo: number): RawMergedPR {
  return { authorAssociation: association, mergedAt: daysAgo(mergedDaysAgo) };
}

test('projectSignals counts recent PRs merged from people outside the project', () => {
  const s = projectSignals([
    pr('OWNER', 3), pr('MEMBER', 3), pr('COLLABORATOR', 3),
    pr('CONTRIBUTOR', 10), pr('FIRST_TIME_CONTRIBUTOR', 20), pr('NONE', 179),
    pr('CONTRIBUTOR', 181),
  ], 400_000, NOW);
  assert.equal(s.outsidePRsMerged, 3);
  assert.equal(s.outsidePRsCapped, false);
});

test('projectSignals marks the count as capped when every fetched PR qualifies', () => {
  const prs = Array.from({ length: 30 }, () => pr('CONTRIBUTOR', 5));
  assert.equal(projectSignals(prs, 0, NOW).outsidePRsCapped, true);
});

test('projectSignals estimates lines of code only in the readable range', () => {
  assert.equal(projectSignals([], 40 * 13_000, NOW).approxKloc, 13);
  assert.equal(projectSignals([], 40 * 400, NOW).approxKloc, 1); // rounds up, never 0
  assert.equal(projectSignals([], 0, NOW).approxKloc, undefined);
  // Past ~50k lines the byte count is mostly vendored or generated code: say nothing.
  assert.equal(projectSignals([], 40 * 60_000, NOW).approxKloc, undefined);
});

// ── buildFirstIssueProject ────────────────────────────────────

test('buildFirstIssueProject needs a commit in the last 90 days and a free issue', () => {
  const base = { repo: 'a/proj', slug: 'a--proj', lastCommitAt: daysAgo(10), issues: [issue(1)], mergedPRs: [], languagesTotalSize: 0, goodFirstIssueCount: 1 };
  assert.ok(buildFirstIssueProject(base, NOW));
  assert.equal(buildFirstIssueProject({ ...base, lastCommitAt: daysAgo(91) }, NOW), null);
  assert.equal(buildFirstIssueProject({ ...base, issues: [issue(1, { assignees: { totalCount: 1 } })] }, NOW), null);
});

// ── rankFirstIssueProjects ────────────────────────────────────

function proj(repo: string, outside: number, gfi: number): FirstIssueProject {
  return {
    repo, slug: repo.replace('/', '--').toLowerCase(), lastCommitAt: daysAgo(1),
    signals: { outsidePRsMerged: outside, outsidePRsCapped: false },
    goodFirstIssueCount: gfi, issues: [],
  };
}

test('rankFirstIssueProjects favours projects that merge outside PRs, then good first issues', () => {
  const ranked = rankFirstIssueProjects([proj('a/none', 0, 9), proj('a/some', 2, 1), proj('a/more', 8, 0), proj('a/some-gfi', 2, 4)]);
  assert.deepEqual(ranked.map(p => p.repo), ['a/more', 'a/some-gfi', 'a/some', 'a/none']);
});
