import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, statSync } from 'node:fs';
import {
  BANNER_FILE, DISPLAY_NAME, DESCRIPTION, PINNED_TEXT, SUBMIT_URL,
  buildProfile, pinnedPostRecord,
} from './update-bsky-profile.ts';

const graphemes = (s: string) => [...new Intl.Segmenter().segment(s)].length;

test('bio fits the 256-grapheme profile limit and points at /submit', () => {
  assert.ok(graphemes(DESCRIPTION) <= 256, `bio is ${graphemes(DESCRIPTION)}`);
  assert.ok(DESCRIPTION.includes('silentstars.dev/submit'));
  assert.ok(DESCRIPTION.includes('silentstars.dev/weekly'));
  assert.ok(!/\bsmall\b/i.test(DESCRIPTION), 'projects are never called small');
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

test('buildProfile swaps the banner only when a new one is given', () => {
  const avatar = { $type: 'blob', ref: { $link: 'a' }, mimeType: 'image/jpeg', size: 1 };
  const oldBanner = { $type: 'blob', ref: { $link: 'b' }, mimeType: 'image/jpeg', size: 2 };
  const newBanner = { $type: 'blob', ref: { $link: 'c' }, mimeType: 'image/png', size: 3 };
  const pinned = { uri: 'at://did:plc:x/app.bsky.feed.post/1', cid: 'bafy' };
  const out = buildProfile({ avatar, banner: oldBanner } as any, pinned, newBanner as any);
  assert.equal(out.banner, newBanner);
  assert.equal(out.avatar, avatar);
  assert.equal(out.pinnedPost, pinned);
});

test('committed banner is a 3:1 PNG under the 1 MB blob limit', () => {
  assert.ok(statSync(BANNER_FILE).size < 1_000_000);
  const png = readFileSync(BANNER_FILE);
  assert.equal(png.toString('ascii', 1, 4), 'PNG');
  const w = png.readUInt32BE(16), h = png.readUInt32BE(20);
  assert.equal(w, h * 3, `banner is ${w}×${h}`);
});
