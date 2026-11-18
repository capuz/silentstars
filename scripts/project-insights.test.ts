import { test } from 'node:test';
import assert from 'node:assert/strict';
import { editionsByRepo, starsSince, whyItsHere, relatedProjects, helpLinks } from './project-insights.ts';
import type { ProjectFacts, RelatedCandidate } from './project-insights.ts';
import type { NumberedEdition, EditionItem, History, WeekEntry } from './weekly.ts';

const NOW = new Date('2026-11-17T12:00:00Z');

function item(repo: string, reason = 'shipped a new release'): EditionItem {
  return { repo, slug: repo.replace('/', '--').toLowerCase(), name: repo.split('/')[1]!, stars: 10, signals: [], reason };
}

function edition(week: string, issue: number, parts: Partial<Pick<NumberedEdition, 'newcomers' | 'rising' | 'revived' | 'cooling'>>): NumberedEdition {
  return { week, issue, start: '', end: '', newcomers: [], rising: [], revived: [], cooling: [], ...parts };
}

function facts(overrides: Partial<ProjectFacts> = {}): ProjectFacts {
  return {
    repo: 'a/proj',
    url: 'https://github.com/a/proj',
    status: 'quiet',
    tags: [],
    stars: 40,
    watchers: 2,
    forks: 1,
    openIssues: 0,
    healthScore: 70,
    recentReleases: 0,
    createdAt: '2025-01-01T00:00:00Z',
    lastCommitAt: '2026-11-10T00:00:00Z',
    fundingLinks: [],
    ...overrides,
  };
}

// ── editionsByRepo ────────────────────────────────────────────

test('editionsByRepo indexes positive sections, newest first, and skips cooling', () => {
  const eds = [
    edition('2026-W45', 1, { newcomers: [item('a/x', 'new')] }),
    edition('2026-W46', 2, { rising: [item('a/x', '+30 stars')], cooling: [item('b/y')] }),
    edition('2026-W47', 3, { cooling: [item('a/x', 'no commits')] }),
  ];
  const idx = editionsByRepo(eds);
  assert.deepEqual(idx.get('a/x'), [
    { week: '2026-W46', issue: 2, section: 'rising', reason: '+30 stars' },
    { week: '2026-W45', issue: 1, section: 'newcomers', reason: 'new' },
  ]);
  assert.equal(idx.has('b/y'), false);
});

// ── starsSince ────────────────────────────────────────────────

function snap(stars: number): WeekEntry {
  return { name: 'x', stars, forks: 0, closedIssues: 0, lastCommitAt: '', status: 'quiet', healthScore: 50, hasPage: true };
}
const history: History = {
  '2026-W44': { collectedAt: '', projects: { 'a/x': snap(5) } },
  '2026-W45': { collectedAt: '', projects: { 'a/x': snap(10) } },
  '2026-W46': { collectedAt: '', projects: { 'a/x': snap(26) } },
  '2026-W47': { collectedAt: '', projects: { 'a/x': snap(56) } },
};

test('starsSince measures from the snapshot of the given week to the current stars', () => {
  assert.deepEqual(starsSince(history, 'a/x', '2026-W46', 60), { week: '2026-W46', from: 26, delta: 34 });
});

test('starsSince falls back to the first later snapshot when the week is missing', () => {
  assert.deepEqual(starsSince(history, 'a/x', '2026-W40', 56), { week: '2026-W44', from: 5, delta: 51 });
});

test('starsSince returns null for unknown repos or weeks after the last snapshot', () => {
  assert.equal(starsSince(history, 'z/z', '2026-W44', 1), null);
  assert.equal(starsSince(history, 'a/x', '2026-W50', 1), null);
});

// ── whyItsHere ────────────────────────────────────────────────

test('whyItsHere turns tags into sentences with the real numbers', () => {
  const lines = whyItsHere(facts({
    tags: ['release_machine', 'hidden_gem', 'funded'],
    recentReleases: 10, healthScore: 99, stars: 56,
    fundingLinks: ['KO_FI:https://ko-fi.com/x', 'GITHUB:https://github.com/sponsors/x'],
  }), NOW);
  assert.ok(lines.includes('10 releases in the last 90 days'));
  assert.ok(lines.includes('Health 99/100 with only 56 stars'));
  assert.ok(lines.includes('Accepts sponsorship (ko fi, github)'));
});

test('whyItsHere explains the status first', () => {
  const lines = whyItsHere(facts({ status: 'newborn', createdAt: '2026-10-26T00:00:00Z' }), NOW);
  assert.equal(lines[0], 'Created 3 weeks ago and already shipping');
});

test('whyItsHere covers revived with its gap', () => {
  const lines = whyItsHere(facts({ status: 'revived', revivedAfterMonths: 9 }), NOW);
  assert.equal(lines[0], 'Back after 9 months of silence');
});

test('whyItsHere covers every tag and never says "small"', () => {
  const all = ['solo_builder', 'needs_contributors', 'hidden_gem', 'legacy_hero', 'community_watch',
    'funded', 'release_machine', 'under_pressure', 'community_hub', 'fork_magnet'] as const;
  const lines = whyItsHere(facts({ tags: [...all], discussionCount: 30, fundingLinks: ['GITHUB:x'] }), NOW);
  assert.equal(lines.length, all.length); // status quiet adds no line
  for (const l of lines) assert.doesNotMatch(l, /small/i);
});

// ── helpLinks ─────────────────────────────────────────────────

test('helpLinks always offers star, adds try/open issues/sponsor when available', () => {
  const basic = helpLinks(facts());
  assert.deepEqual(basic.map(l => l.label), ['Star it']);

  const full = helpLinks(facts({
    homepage: 'https://proj.dev', tags: ['needs_contributors'], fundingLinks: ['KO_FI:https://ko-fi.com/x'],
  }));
  assert.deepEqual(full.map(l => l.label), ['Try it', 'Star it', 'Help with an open issue', 'Sponsor on ko fi']);
  // Both labels that earn needs_contributors, not just "good first issue" (/contribute lists only that one).
  const issues = full.find(l => l.label === 'Help with an open issue')!.href;
  assert.equal(issues, 'https://github.com/a/proj/issues?q='
    + encodeURIComponent('is:issue is:open label:"good first issue","help wanted"'));
  assert.equal(full.at(-1)!.href, 'https://ko-fi.com/x');
});

test('helpLinks points to the first issues section when the project is listed there', () => {
  const links = helpLinks(facts({ tags: ['needs_contributors'] }), { firstIssuesSlug: 'a--proj' });
  assert.equal(links.find(l => l.label === 'Help with an open issue')!.href, '/first-issues/#a--proj');
  // Listed there even when the tag is missing: the section is the source of truth.
  const untagged = helpLinks(facts(), { firstIssuesSlug: 'a--proj' });
  assert.equal(untagged.find(l => l.label === 'Help with an open issue')!.href, '/first-issues/#a--proj');
});

test('helpLinks never sends visitors to open a new issue', () => {
  const all = helpLinks(facts({ homepage: 'https://proj.dev', tags: ['needs_contributors'], fundingLinks: ['GITHUB:https://github.com/sponsors/x'] }));
  for (const l of all) assert.doesNotMatch(l.href, /\/issues\/new/);
});

// ── relatedProjects ───────────────────────────────────────────

function cand(repo: string, o: Partial<RelatedCandidate> = {}): RelatedCandidate {
  return { repo, status: 'thriving', language: 'Go', topics: [], undervaluedScore: 10, ...o };
}

// A catalog-sized background so topic rarity means something: 400 Python
// projects, 40 of them tagged with the ubiquitous "open-source".
function filler(): RelatedCandidate[] {
  return Array.from({ length: 400 }, (_, i) =>
    cand(`filler/${i}`, { language: 'Python', topics: i < 40 ? ['open-source'] : [] }));
}

test('relatedProjects weighs shared topics by rarity, adds half a language match, tie-broken by undervalued score', () => {
  const target = cand('me/me', { topics: ['cli', 'tui', 'git', 'open-source'], language: 'Go' });
  const all = [
    ...filler(),
    target,
    cand('a/lang-only', { language: 'Go', undervaluedScore: 99 }),
    cand('b/common-topic-lang', { topics: ['open-source'], language: 'Go', undervaluedScore: 99 }),
    cand('c/rare-topic', { topics: ['TUI'], language: 'Rust', undervaluedScore: 5 }),
    cand('d/topic-lang', { topics: ['git'], language: 'Go', undervaluedScore: 50 }),
    cand('e/two-topics', { topics: ['cli', 'git'], language: 'Rust' }),
    cand('f/archived', { topics: ['cli'], status: 'archived' }),
  ];
  assert.deepEqual(relatedProjects(target, all, 4).map(p => p.repo),
    ['e/two-topics', 'd/topic-lang', 'c/rare-topic']);
});

test('relatedProjects breaks equal scores by undervalued score', () => {
  const target = cand('me/me', { topics: ['alpha', 'beta'], language: 'Go' });
  const all = [
    ...filler(),
    target,
    cand('x/lo', { topics: ['alpha'], language: 'Rust', undervaluedScore: 5 }),
    cand('y/hi', { topics: ['beta'], language: 'Rust', undervaluedScore: 50 }),
  ];
  assert.deepEqual(relatedProjects(target, all).map(p => p.repo), ['y/hi', 'x/lo']);
});

test('relatedProjects ignores a shared markup/config language on its own', () => {
  const target = cand('me/me', { language: 'HTML', topics: ['iptv'] });
  const all = [...filler(), target, cand('a/html-only', { language: 'HTML', undervaluedScore: 99 }), cand('b/topic', { language: 'Go', topics: ['IPTV'] })];
  assert.deepEqual(relatedProjects(target, all).map(p => p.repo), ['b/topic']);
});

test('relatedProjects returns nothing when no candidate shares anything', () => {
  const target = cand('me/me', { language: undefined });
  assert.deepEqual(relatedProjects(target, [target, cand('x/y', { language: 'Go' })]), []);
});
