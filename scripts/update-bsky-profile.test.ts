import { test } from 'node:test';
import assert from 'node:assert/strict';
import {
  DISPLAY_NAME, DESCRIPTION, PINNED_TEXT, SUBMIT_URL,
  buildProfile, pinnedPostRecord,
} from './update-bsky-profile.ts';

const graphemes = (s: string) => [...new Intl.Segmenter().segment(s)].length;

test('bio fits the 256-grapheme profile limit and points at /submit', () => {
  assert.ok(graphemes(DESCRIPTION) <= 256, `bio is ${graphemes(DESCRIPTION)}`);
  assert.ok(DESCRIPTION.includes('capuz.github.io/silentstars/submit'));
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
  assert.equal(shown, 'capuz.github.io/silentstars/submit');
  assert.equal((links[0]!.features[0] as any).uri, SUBMIT_URL);
});
