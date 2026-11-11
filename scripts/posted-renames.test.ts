import { test } from 'node:test';
import assert from 'node:assert/strict';
import { applyRenames, absorbAliasPages, postedRedirects } from './posted-renames.ts';
import type { PostedEntry } from './post-shared.ts';

const entry = (repo: string, slug: string, postedAt: string, extra: Partial<PostedEntry> = {}): PostedEntry => ({
  repo, slug, postedAt, platforms: { bsky: { url: `https://bsky.app/x/${slug}`, postedAt } }, ...extra,
});

test('applyRenames moves a renamed repo to its new name and keeps the old slug', () => {
  const entries = [entry('artabramov/hidden', 'artabramov--hidden', 'T1'), entry('a/b', 'a--b', 'T2')];
  const out = applyRenames(entries, new Map([['artabramov/hidden', 'artabramov/hidden-s3'], ['a/b', 'a/b']]));
  assert.deepEqual(out.renamed, [{ from: 'artabramov--hidden', to: 'artabramov--hidden-s3' }]);
  assert.equal(out.entries[0]!.repo, 'artabramov/hidden-s3');
  assert.equal(out.entries[0]!.slug, 'artabramov--hidden-s3');
  assert.deepEqual(out.entries[0]!.previousSlugs, ['artabramov--hidden']);
  assert.equal(out.entries[0]!.platforms.bsky!.url, 'https://bsky.app/x/artabramov--hidden');
  assert.deepEqual(out.entries[1], entries[1]);
});

test('applyRenames handles an owner transfer and a case-only change', () => {
  const entries = [entry('devdasx/oath-wallet', 'devdasx--oath-wallet', 'T1'), entry('Foo/Bar', 'foo--bar', 'T2')];
  const out = applyRenames(entries, new Map([['devdasx/oath-wallet', 'OathWallet/oath-wallet'], ['foo/bar', 'foo/bar']]));
  assert.equal(out.entries[0]!.slug, 'oathwallet--oath-wallet');
  // Same slug, only the case of the repo changed: update the name, no redirect needed.
  assert.equal(out.entries[1]!.repo, 'foo/bar');
  assert.equal(out.entries[1]!.previousSlugs, undefined);
  assert.equal(out.renamed.length, 1);
});

test('applyRenames leaves entries it has no fresh name for untouched and does not mutate input', () => {
  const entries = [entry('gone/repo', 'gone--repo', 'T1')];
  const out = applyRenames(entries, new Map());
  assert.deepEqual(out.entries, entries);
  assert.equal(entries[0]!.repo, 'gone/repo');
});

test('applyRenames does not duplicate previous slugs when renamed back and forth', () => {
  const entries = [entry('x/new', 'x--new', 'T1', { previousSlugs: ['x--old'] })];
  const out = applyRenames(entries, new Map([['x/new', 'x/old']]));
  assert.equal(out.entries[0]!.slug, 'x--old');
  assert.deepEqual(out.entries[0]!.previousSlugs, ['x--new']);
});

test('absorbAliasPages folds a stale page of the same post into previousSlugs', () => {
  // chipfighter: renamed to framekeeper, then back — the framekeeper page is a leftover.
  const entries = [entry('chipfighter/context-attachment-manager', 'chipfighter--context-attachment-manager', 'T1')];
  const pages = [
    { slug: 'chipfighter--context-attachment-manager', postedAt: 'T1' },
    { slug: 'chipfighter--framekeeper', postedAt: 'T1' },
    { slug: 'unrelated--page', postedAt: 'T9' }, // lost from posted.json: still protected
    { slug: 'not--posted' },
  ];
  const out = absorbAliasPages(entries, pages);
  assert.deepEqual(out.aliases, ['chipfighter--framekeeper']);
  assert.deepEqual(out.entries[0]!.previousSlugs, ['chipfighter--framekeeper']);
});

test('absorbAliasPages is idempotent', () => {
  const entries = [entry('x/new', 'x--new', 'T1', { previousSlugs: ['x--old'] })];
  const out = absorbAliasPages(entries, [{ slug: 'x--old', postedAt: 'T1' }]);
  assert.deepEqual(out.aliases, ['x--old']);
  assert.deepEqual(out.entries[0]!.previousSlugs, ['x--old']);
});

test('postedRedirects maps each previous slug to the current page, skipping live pages', () => {
  const entries = [
    entry('artabramov/hidden-s3', 'artabramov--hidden-s3', 'T1', { previousSlugs: ['artabramov--hidden'] }),
    entry('x/new', 'x--new', 'T2', { previousSlugs: ['x--old', 'x--still-a-page'] }),
  ];
  const redirects = postedRedirects(entries, new Set(['x--still-a-page']));
  assert.deepEqual(redirects, {
    '/projects/artabramov--hidden/': '/projects/artabramov--hidden-s3/',
    '/projects/x--old/': '/projects/x--new/',
  });
});
