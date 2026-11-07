import { test } from 'node:test';
import assert from 'node:assert/strict';
import {
  DISPLAY_NAME, DESCRIPTION, PINNED_TEXT, SUBMIT_URL,
  buildProfile, pinnedPostRecord, bannerIsCurrent,
} from './update-bsky-profile.ts';

const graphemes = (s: string) => [...new Intl.Segmenter().segment(s)].length;

test('bio fits the 256-grapheme profile limit and points at /submit', () => {
  assert.ok(graphemes(DESCRIPTION) <= 256, `bio is ${graphemes(DESCRIPTION)}`);
  assert.ok(DESCRIPTION.includes('silentstars.dev/submit'));
  assert.ok(SUBMIT_URL.startsWith('https://silentstars.dev/'));
});

test('display name fits the 64-grapheme limit', () => {
  assert.ok(graphemes(DISPLAY_NAME) <= 64);
});

test('buildProfile keeps avatar/banner and replaces only the three fields', () => {
  const avatar = { $type: 'blob', ref: { $link: 'a' }, mimeType: 'image/jpeg', size: 1 };
  const banner = { $type: 'blob', ref: { $link: 'b' }, mimeType: 'image/jpeg', size: 2 };
  const pinned = { uri: 'at://did:plc:x/app.bsky.feed.post/1', cid: 'bafy' };
  const out = buildProfile(
    { displayName: 'SilentStars', description: 'old', avatar, banner, createdAt: '2024-11-19T00:00:00Z' } as any,
    pinned,
  );
  assert.deepEqual(out, {
    displayName: DISPLAY_NAME, description: DESCRIPTION, avatar, banner,
    createdAt: '2024-11-19T00:00:00Z', pinnedPost: pinned,
  });
});

test('pinned post fits 300 graphemes and links the submit URL at the right bytes', () => {
  const rec = pinnedPostRecord('2026-10-08T00:00:00Z');
  assert.equal(rec.text, PINNED_TEXT);
  assert.ok(graphemes(rec.text) <= 300, `post is ${graphemes(rec.text)}`);
  const links = (rec.facets ?? []).filter(f => (f.features[0] as any).$type === 'app.bsky.richtext.facet#link');
  assert.equal(links.length, 1);
  const bytes = new TextEncoder().encode(rec.text);
  const shown = new TextDecoder().decode(bytes.slice(links[0]!.index.byteStart, links[0]!.index.byteEnd));
  assert.equal(shown, 'silentstars.dev/submit');
  assert.equal((links[0]!.features[0] as any).uri, 'https://silentstars.dev/submit');
});

test('profile copy no longer promises a single pick a day', () => {
  assert.ok(!/daily pick|one pick a day/i.test(DESCRIPTION));
  assert.ok(!/one pick a day/i.test(PINNED_TEXT));
});

test('buildProfile swaps the banner only when a new one is given', () => {
  const old = { $type: 'blob', ref: { $link: 'old' }, mimeType: 'image/png', size: 1 };
  const fresh = { $type: 'blob', ref: { $link: 'new' }, mimeType: 'image/png', size: 2 };
  const pinned = { uri: 'at://did:plc:x/app.bsky.feed.post/1', cid: 'bafy' };
  assert.equal(buildProfile({ banner: old } as any, pinned).banner, old);
  assert.equal(buildProfile({ banner: old } as any, pinned, fresh as any).banner, fresh);
});

test('bannerIsCurrent compares the uploaded blob size, so re-runs do not re-upload', () => {
  const banner = { size: 1234 };
  assert.equal(bannerIsCurrent({ banner } as any, 1234), true);
  assert.equal(bannerIsCurrent({ banner } as any, 999), false);
  assert.equal(bannerIsCurrent({} as any, 999), false);
});
