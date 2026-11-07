import { test } from 'node:test';
import assert from 'node:assert/strict';
import { activityLabel, whyLine } from './post-signal.ts';

const NOW = new Date('2026-11-06T12:00:00Z');
const base = { createdAt: '2024-01-01T00:00:00Z', lastCommitAt: '2026-11-03T12:00:00Z', recentReleases: 0, contributors: 3 };

test('several recent releases are the strongest activity signal', () => {
  assert.equal(activityLabel({ ...base, recentReleases: 3 }, NOW), '3 releases in 90 days');
});

test('a single release is named as such', () => {
  assert.equal(activityLabel({ ...base, recentReleases: 1 }, NOW), '1 release in 90 days');
});

test('without releases, the last commit date describes the activity', () => {
  assert.equal(activityLabel(base, NOW), 'updated 3 days ago');
  assert.equal(activityLabel({ ...base, lastCommitAt: '2026-11-05T12:00:00Z' }, NOW), 'updated yesterday');
  assert.equal(activityLabel({ ...base, lastCommitAt: '2026-11-06T09:00:00Z' }, NOW), 'updated today');
});

test('activity older than a month says nothing', () => {
  assert.equal(activityLabel({ ...base, lastCommitAt: '2026-09-01T00:00:00Z' }, NOW), null);
});

test('a revived project leads with how long it was gone', () => {
  assert.equal(whyLine({ ...base, revivedAfterMonths: 7 }, NOW), 'Back after 7 months away, updated 3 days ago.');
});

test('a young project leads with its age', () => {
  assert.equal(whyLine({ ...base, createdAt: '2026-10-07T12:00:00Z', recentReleases: 2 }, NOW), 'Started 30 days ago, 2 releases so far.');
});

test('a solo project says one person is behind it', () => {
  assert.equal(whyLine({ ...base, contributors: 1 }, NOW), 'One maintainer, updated 3 days ago.');
});

test('other projects state the activity on its own', () => {
  assert.equal(whyLine(base, NOW), 'Updated 3 days ago.');
});

test('no real signal means no line, never a filler one', () => {
  assert.equal(whyLine({ ...base, lastCommitAt: '2026-09-01T00:00:00Z' }, NOW), null);
  assert.equal(whyLine({}, NOW), null);
});
