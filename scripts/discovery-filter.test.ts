import { test } from 'node:test';
import assert from 'node:assert/strict';
import { isExcludedRepo, isListable, isShownOnSite } from './discovery-filter.ts';

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

const RULES = { maxStars: 500, excludeOwners: ['Adobe', 'camunda'] };

test('isListable: small independent repos are listed', () => {
  assert.equal(isListable('someone/tool', 12, RULES), true);
});

test('isListable: the star ceiling is inclusive', () => {
  assert.equal(isListable('someone/tool', 500, RULES), true);
  assert.equal(isListable('someone/tool', 501, RULES), false);
});

test('isListable: excluded owners match on the owner only, regardless of case', () => {
  assert.equal(isListable('adobe/da-nx', 8, RULES), false);
  assert.equal(isListable('CAMUNDA/camunda-distributions', 30, RULES), false);
  assert.equal(isListable('someone/adobe', 8, RULES), true);
});

test('isListable: defaults to data/discovery.config.json', () => {
  assert.equal(isListable('adobe/da-nx', 8), false);
  assert.equal(isListable('Orkas-AI/Orkas', 9034), false);
  assert.equal(isListable('someone/tool', 12), true);
});

const SHOWN = { repo: 'someone/tool', name: 'tool', stars: 12, status: 'thriving', description: 'A small tool.' };

test('isShownOnSite: a listable project with a real description is shown', () => {
  assert.equal(isShownOnSite(SHOWN, RULES), true);
});

test('isShownOnSite: archived, unlistable or description-less projects are hidden', () => {
  assert.equal(isShownOnSite({ ...SHOWN, status: 'archived' }, RULES), false);
  assert.equal(isShownOnSite({ ...SHOWN, stars: 501 }, RULES), false);
  assert.equal(isShownOnSite({ ...SHOWN, repo: 'adobe/tool' }, RULES), false);
  assert.equal(isShownOnSite({ ...SHOWN, description: '   ' }, RULES), false);
  assert.equal(isShownOnSite({ ...SHOWN, description: ' Tool ' }, RULES), false);
});
