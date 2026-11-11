import { test } from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { mergeEntries, mergeFiles } from './merge-json-entries.ts';

const p = (repo: string, until = '2026-12-09') => ({ repo, until });

test('both sides append at the end: keeps both (issue #77 vs #76)', () => {
  const base = [p('a/a')];
  const ours = [p('a/a'), p('dra/bio')];   // upstream, already pushed
  const theirs = [p('a/a'), p('it/mk')];   // commit being replayed
  assert.deepEqual(mergeEntries(base, ours, theirs), [p('a/a'), p('dra/bio'), p('it/mk')]);
});

test('upstream prune + replayed add: prune survives, add lands', () => {
  const base = [p('old/x', '2026-11-01'), p('a/a')];
  const ours = [p('a/a')];
  const theirs = [p('old/x', '2026-11-01'), p('a/a'), p('new/y')];
  assert.deepEqual(mergeEntries(base, ours, theirs), [p('a/a'), p('new/y')]);
});

test('replayed removal is applied on top of an upstream add', () => {
  const base = [p('a/a'), p('b/b')];
  const ours = [p('a/a'), p('b/b'), p('c/c')];
  const theirs = [p('a/a')];
  assert.deepEqual(mergeEntries(base, ours, theirs), [p('a/a'), p('c/c')]);
});

test('same key changed on both sides: replayed side wins', () => {
  const base = [p('a/a', '2026-12-01')];
  const ours = [p('a/a', '2026-12-05')];
  const theirs = [p('a/a', '2026-12-09')];
  assert.deepEqual(mergeEntries(base, ours, theirs), [p('a/a', '2026-12-09')]);
});

test('same key added on both sides is not duplicated', () => {
  const ours = [p('a/a', '2026-12-05')];
  const theirs = [p('A/a', '2026-12-09')];
  assert.deepEqual(mergeEntries([], ours, theirs), [p('A/a', '2026-12-09')]);
});

test('upstream edit is kept when the replayed side left the entry alone', () => {
  const base = [p('a/a', '2026-12-01'), p('b/b')];
  const ours = [p('a/a', '2026-12-05'), p('b/b')];
  const theirs = [p('a/a', '2026-12-01'), p('b/b'), p('c/c')];
  assert.deepEqual(mergeEntries(base, ours, theirs), [p('a/a', '2026-12-05'), p('b/b'), p('c/c')]);
});

function withFiles(base: string, ours: string, theirs: string) {
  const dir = mkdtempSync(join(tmpdir(), 'mje-'));
  const f = { o: join(dir, 'o'), a: join(dir, 'a'), b: join(dir, 'b') };
  writeFileSync(f.o, base); writeFileSync(f.a, ours); writeFileSync(f.b, theirs);
  return { f, done: () => rmSync(dir, { recursive: true, force: true }) };
}

test('mergeFiles writes into %A and keeps its trailing-newline style', () => {
  for (const nl of ['', '\n']) {
    const { f, done } = withFiles('[]', JSON.stringify([p('x/x')], null, 2) + nl, JSON.stringify([p('y/y')]));
    try {
      assert.equal(mergeFiles(f.o, f.a, f.b), true);
      assert.equal(readFileSync(f.a, 'utf8'), JSON.stringify([p('x/x'), p('y/y')], null, 2) + nl);
    } finally { done(); }
  }
});

test('mergeFiles refuses invalid JSON or non-array input and leaves %A untouched', () => {
  for (const bad of ['{"repo":"x"}', '[{"no":"key"}]', 'not json']) {
    const { f, done } = withFiles('[]', '[]', bad);
    try {
      assert.equal(mergeFiles(f.o, f.a, f.b), false);
      assert.equal(readFileSync(f.a, 'utf8'), '[]');
    } finally { done(); }
  }
});
