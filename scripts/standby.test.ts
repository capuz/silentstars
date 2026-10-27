import { test } from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import {
  addEntry, removeEntry, findEntry, isExpired, hasExternalSignal,
  readStandby, writeStandby, STANDBY_DAYS,
} from './standby.ts';

const NOW = new Date('2026-10-27T12:00:00Z');

test('addEntry stores issue number and a 90-day window', () => {
  const out = addEntry([], 'Owner/Repo', 30, NOW);
  assert.equal(STANDBY_DAYS, 90);
  assert.deepEqual(out, [{ repo: 'Owner/Repo', issue: 30, since: '2026-10-27', until: '2027-01-25' }]);
});

test('addEntry replaces an existing entry for the same repo (case-insensitive)', () => {
  const first = addEntry([], 'owner/repo', 30, NOW);
  const out = addEntry(first, 'Owner/Repo', 31, NOW);
  assert.equal(out.length, 1);
  assert.equal(out[0].issue, 31);
});

test('findEntry and removeEntry match case-insensitively', () => {
  const list = addEntry(addEntry([], 'a/one', 1, NOW), 'b/two', 2, NOW);
  assert.equal(findEntry(list, 'A/ONE')?.issue, 1);
  assert.equal(findEntry(list, 'c/three'), undefined);
  assert.deepEqual(removeEntry(list, 'A/One').map(e => e.repo), ['b/two']);
});

test('isExpired is false inside the window and true once until has passed', () => {
  const [e] = addEntry([], 'a/one', 1, NOW);
  assert.equal(isExpired(e, new Date('2027-01-24T23:59:00Z')), false);
  assert.equal(isExpired(e, new Date('2027-01-25T00:00:00Z')), true);
  assert.equal(isExpired(e, new Date('2027-03-01T00:00:00Z')), true);
});

test('hasExternalSignal ignores the owner starring or forking their own repo', () => {
  assert.equal(hasExternalSignal('owner/repo', { stars: 0, ownerStarred: false, forkOwners: [] }), false);
  assert.equal(hasExternalSignal('owner/repo', { stars: 1, ownerStarred: true, forkOwners: ['Owner'] }), false);
});

test('hasExternalSignal is true for a star or a fork from someone else', () => {
  assert.equal(hasExternalSignal('owner/repo', { stars: 1, ownerStarred: false, forkOwners: [] }), true);
  assert.equal(hasExternalSignal('owner/repo', { stars: 2, ownerStarred: true, forkOwners: [] }), true);
  assert.equal(hasExternalSignal('owner/repo', { stars: 0, ownerStarred: false, forkOwners: ['bob'] }), true);
});

test('readStandby/writeStandby round-trip, missing file reads as empty', () => {
  const dir = mkdtempSync(join(tmpdir(), 'standby-'));
  try {
    const p = join(dir, 'standby.json');
    assert.deepEqual(readStandby(p), []);
    const list = addEntry([], 'a/one', 1, NOW);
    writeStandby(list, p);
    assert.deepEqual(readStandby(p), list);
  } finally {
    rmSync(dir, { recursive: true, force: true });
  }
});
