import { test } from 'node:test';
import assert from 'node:assert/strict';
import { isExcludedRepo } from './discovery-filter.ts';

test('excludes a listed repo regardless of case', () => {
  assert.equal(isExcludedRepo('capuz/silentstars', ['capuz/silentstars']), true);
  assert.equal(isExcludedRepo('Capuz/SilentStars', ['capuz/silentstars']), true);
  assert.equal(isExcludedRepo('capuz/silentstars', ['Capuz/SilentStars']), true);
});

test('lets every other repo through', () => {
  assert.equal(isExcludedRepo('capuz/other', ['capuz/silentstars']), false);
  assert.equal(isExcludedRepo('someone/silentstars', ['capuz/silentstars']), false);
});

test('an empty or missing list excludes nothing', () => {
  assert.equal(isExcludedRepo('capuz/silentstars', []), false);
  assert.equal(isExcludedRepo('capuz/silentstars', undefined), false);
});
