import { test } from 'node:test';
import assert from 'node:assert/strict';
import { randomBytes } from 'node:crypto';
import sharp from 'sharp';
import { toThumbnail, MAX_THUMB_BYTES } from './post-thumb.ts';

test('a heavy screenshot becomes a JPEG under the Bluesky blob limit', async () => {
  const noise = randomBytes(1200 * 630 * 3);
  const png = await sharp(noise, { raw: { width: 1200, height: 630, channels: 3 } }).png().toBuffer();
  assert.ok(png.length > MAX_THUMB_BYTES, 'fixture must start over the limit');

  const thumb = await toThumbnail(png);
  const meta = await sharp(thumb).metadata();
  assert.equal(meta.format, 'jpeg');
  assert.equal(meta.width, 1200);
  assert.ok(thumb.length <= MAX_THUMB_BYTES, `got ${thumb.length}`);
});
