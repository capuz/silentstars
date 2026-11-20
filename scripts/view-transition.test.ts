import { test } from 'node:test';
import assert from 'node:assert/strict';
import { vtName } from '../src/lib/view-transition.ts';

// view-transition-name must be a valid CSS <custom-ident>: it can't start with a
// digit, and dots or other punctuation would break the declaration.
const IDENT = /^[a-z_][a-z0-9_-]*$/;

test('vtName: slugs starting with a digit become valid idents', () => {
  const n = vtName('0rlych1kk4--0rlych1kk4', 'name');
  assert.match(n, IDENT);
  assert.equal(n, 'p-0rlych1kk4--0rlych1kk4-name');
});

test('vtName: punctuation is replaced, not dropped', () => {
  assert.match(vtName('still.fail--still.fail', 'thumb'), IDENT);
  assert.notEqual(vtName('a.b', 'name'), vtName('ab', 'name'));
});

test('vtName: name and thumb parts never collide', () => {
  assert.notEqual(vtName('x', 'name'), vtName('x', 'thumb'));
});
