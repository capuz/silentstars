import { test } from 'node:test';
import assert from 'node:assert/strict';
import { withRef } from '../src/lib/ref.ts';

test('adds ref to a plain URL', () => {
  assert.equal(withRef('https://github.com/acme/rocket'), 'https://github.com/acme/rocket?ref=silentstars');
});

test('appends ref to a URL that already has a query', () => {
  assert.equal(withRef('https://bsky.app/profile/x/post/abc?foo=1'), 'https://bsky.app/profile/x/post/abc?foo=1&ref=silentstars');
});

test('does not duplicate ref and overrides a different value', () => {
  assert.equal(withRef('https://github.com/acme/rocket?ref=silentstars'), 'https://github.com/acme/rocket?ref=silentstars');
  assert.equal(withRef('https://github.com/acme/rocket?ref=other'), 'https://github.com/acme/rocket?ref=silentstars');
});

test('keeps the encoded text param of a Bluesky compose intent byte-for-byte', () => {
  const text = encodeURIComponent('★ Rocket — a thing\n\nhttps://silentstars.dev/projects/acme--rocket/');
  const out = withRef(`https://bsky.app/intent/compose?text=${text}`);
  assert.equal(out, `https://bsky.app/intent/compose?text=${text}&ref=silentstars`);
  const u = new URL(out);
  assert.equal(u.searchParams.get('text'), '★ Rocket — a thing\n\nhttps://silentstars.dev/projects/acme--rocket/');
  assert.equal(u.searchParams.get('ref'), 'silentstars');
});

test('keeps the fragment after the query', () => {
  assert.equal(withRef('https://github.com/acme/rocket#readme'), 'https://github.com/acme/rocket?ref=silentstars#readme');
});

test('returns falsy or unparseable input unchanged', () => {
  assert.equal(withRef(''), '');
  assert.equal(withRef(undefined), undefined);
  assert.equal(withRef('not a url'), 'not a url');
});
