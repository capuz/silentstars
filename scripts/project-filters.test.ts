import { test } from 'node:test';
import assert from 'node:assert/strict';
import { parseFilters, serializeFilters } from '../src/lib/project-filters.ts';

const allowed = { statuses: ['thriving', 'quiet', 'newborn'], tags: ['hidden_gem', 'solo_builder'] };
const parse = (qs: string) => parseFilters(new URLSearchParams(qs), allowed);

test('parseFilters: reads comma lists and the search query', () => {
  assert.deepEqual(parse('status=thriving,quiet&tag=hidden_gem&q=Rust'),
    { statuses: ['thriving', 'quiet'], tags: ['hidden_gem'], q: 'rust' });
});

test('parseFilters: drops unknown values and empty parts', () => {
  assert.deepEqual(parse('status=thriving,,bogus&tag=nope&q=%20%20'),
    { statuses: ['thriving'], tags: [], q: '' });
});

test('parseFilters: no params means no filters', () => {
  assert.deepEqual(parse(''), { statuses: [], tags: [], q: '' });
});

test('serializeFilters: omits empty filters and sorts values for stable URLs', () => {
  assert.equal(serializeFilters({ statuses: ['quiet', 'thriving'], tags: [], q: '' }), 'status=quiet%2Cthriving');
  assert.equal(serializeFilters({ statuses: [], tags: [], q: '' }), '');
});

test('round trip', () => {
  const s = { statuses: ['newborn', 'thriving'], tags: ['hidden_gem', 'solo_builder'], q: 'cli tool' };
  assert.deepEqual(parse(serializeFilters(s)), s);
});
