import { test } from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import {
  enqueue, dequeue, position, communityPostsToday, takeDue, queuedComment, postedComment,
  readQueue, writeQueue, DAILY_COMMUNITY_CAP, type QueueEntry,
} from './bsky-queue.ts';
import type { PostedEntry } from './post-shared.ts';

const NOW = new Date('2026-11-12T15:00:00Z');

const entry = (repo: string, issue: number, since = '2026-11-12'): QueueEntry =>
  ({ repo, issue, submitter: 'fan', since });

function posted(repo: string, at: string, communityPick?: true): PostedEntry {
  return {
    repo, slug: repo.toLowerCase().replace('/', '--'), postedAt: at,
    platforms: { bsky: { url: `https://bsky.app/x/${repo}`, postedAt: at } },
    ...(communityPick ? { communityPick } : {}),
  };
}

test('enqueue appends in arrival order and records the date', () => {
  const q = enqueue(enqueue([], 'a/one', 1, 'alice', NOW), 'b/two', 2, 'bob', NOW, 77);
  assert.deepEqual(q, [
    { repo: 'a/one', issue: 1, submitter: 'alice', since: '2026-11-12' },
    { repo: 'b/two', issue: 2, submitter: 'bob', since: '2026-11-12', ackCommentId: 77 },
  ]);
});

test('enqueue is idempotent per repo (case-insensitive) and keeps the original place in line', () => {
  const q = enqueue(enqueue(enqueue([], 'a/one', 1, 'alice', NOW), 'b/two', 2, 'bob', NOW), 'A/ONE', 9, 'alice', NOW, 5);
  assert.deepEqual(q.map(e => [e.repo, e.issue]), [['a/one', 9], ['b/two', 2]]);
  assert.equal(q[0].ackCommentId, 5);
});

test('dequeue and position match case-insensitively', () => {
  const q = [entry('a/one', 1), entry('b/two', 2), entry('c/three', 3)];
  assert.equal(position(q, 'C/Three'), 2);
  assert.equal(position(q, 'x/missing'), -1);
  assert.deepEqual(dequeue(q, 'B/TWO').map(e => e.repo), ['a/one', 'c/three']);
});

test('communityPostsToday counts only community picks posted on the current UTC day', () => {
  const list = [
    posted('a/one', '2026-11-12T03:40:00Z'),                 // daily pick: doesn't count
    posted('b/two', '2026-11-12T09:17:00Z', true),
    posted('c/three', '2026-11-11T23:59:00Z', true),         // yesterday
    posted('d/four', '2026-11-12T00:00:00Z', true),
  ];
  assert.equal(communityPostsToday(list, NOW), 2);
});

test('takeDue returns the oldest entries that fit under the daily cap', () => {
  assert.equal(DAILY_COMMUNITY_CAP, 3);
  const q = [entry('a/1', 1), entry('a/2', 2), entry('a/3', 3), entry('a/4', 4), entry('a/5', 5)];
  assert.deepEqual(takeDue(q, [], NOW).map(e => e.repo), ['a/1', 'a/2', 'a/3']);
  const twoToday = [posted('x/1', '2026-11-12T01:00:00Z', true), posted('x/2', '2026-11-12T02:00:00Z', true)];
  assert.deepEqual(takeDue(q, twoToday, NOW).map(e => e.repo), ['a/1']);
  const full = [...twoToday, posted('x/3', '2026-11-12T03:00:00Z', true)];
  assert.deepEqual(takeDue(q, full, NOW), []);
});

test('takeDue: a new UTC day resets the count', () => {
  const q = [entry('a/1', 1)];
  const yesterday = [1, 2, 3].map(i => posted(`x/${i}`, `2026-11-11T2${i}:00:00Z`, true));
  assert.deepEqual(takeDue(q, yesterday, NOW).map(e => e.repo), ['a/1']);
});

test('takeDue skips a repo that already has a Bluesky post', () => {
  const q = [entry('a/1', 1), entry('a/2', 2)];
  assert.deepEqual(takeDue(q, [posted('A/1', '2026-11-01T00:00:00Z')], NOW).map(e => e.repo), ['a/2']);
});

test('queuedComment explains the queue, with the count ahead and no manual promise', () => {
  const body = queuedComment({ author: 'alice', name: 'Proj', cardUrl: 'https://silentstars.dev/projects/a--b/', ahead: 2 });
  assert.match(body, /@alice/);
  assert.match(body, /\*\*Proj\*\* has been accepted/);
  assert.match(body, /\[View your card\]\(https:\/\/silentstars\.dev\/projects\/a--b\/\)/);
  assert.match(body, /queued/);
  assert.match(body, /there are \*\*2\*\* ahead of it/);
  assert.match(body, /up to 3 community picks go out per day/);
  assert.doesNotMatch(body, /manually/i);
  assert.match(queuedComment({ author: 'a', name: 'P', cardUrl: 'u', ahead: 1 }), /there is \*\*1\*\* ahead of it/);
  assert.match(queuedComment({ author: 'a', name: 'P', cardUrl: 'u', ahead: 0 }), /it's next in line/);
});

test('postedComment links the card and the Bluesky post', () => {
  const body = postedComment({ author: 'alice', name: 'Proj', cardUrl: 'https://c/', bskyUrl: 'https://b/' });
  assert.match(body, /\[View your card\]\(https:\/\/c\/\)/);
  assert.match(body, /\[Post on Bluesky\]\(https:\/\/b\/\)/);
});

test('readQueue/writeQueue round-trip; a missing file is an empty queue', () => {
  const dir = mkdtempSync(join(tmpdir(), 'bsky-queue-'));
  try {
    const path = join(dir, 'bsky-queue.json');
    assert.deepEqual(readQueue(path), []);
    writeQueue([entry('a/1', 1)], path);
    assert.deepEqual(readQueue(path), [entry('a/1', 1)]);
  } finally {
    rmSync(dir, { recursive: true, force: true });
  }
});

test('recordPost marks community picks so the daily cap can count them', async () => {
  const { recordPost } = await import('./post-shared.ts');
  const out = recordPost('a/one', 'bsky', 'https://b/1', [], { communityPick: true });
  assert.equal(out[0].communityPick, true);
  assert.equal(recordPost('a/two', 'bsky', 'https://b/2', [])[0].communityPick, undefined);
});
