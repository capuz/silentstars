/**
 * generate-bsky-banner.ts — renders public/bsky-banner.png, the Bluesky profile banner.
 *
 * Run by hand when the banner changes: `npx tsx scripts/generate-bsky-banner.ts`. The text
 * sits on the right because the avatar covers the bottom left of the banner on Bluesky,
 * and it carries no counts or project names, so it doesn't age.
 */

import { chromium } from 'playwright';
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';

const WIDTH = 1500;
const HEIGHT = 500;
const OUTPUT = resolve('public/bsky-banner.png');

const fontData = readFileSync(resolve('public/fonts/BricolageGrotesque-Bold.ttf')).toString('base64');
const logoData = readFileSync(resolve('public/logo-star.png')).toString('base64');

// mulberry32 with a fixed seed: the sky stays identical between runs, so the file only
// changes on purpose. seededIndex won't do here, its nearby seeds fall on visible lines.
function createRandom(seed: number) {
  return (max: number) => {
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return Math.floor((((t ^ (t >>> 14)) >>> 0) / 4294967296) * max);
  };
}

const random = createRandom(2026);
const dimStars = Array.from({ length: 150 }, () => {
  const size = 4 + random(2) * 4;
  return `<i style="left:${random(WIDTH)}px;top:${random(HEIGHT)}px;width:${size}px;height:${size}px"></i>`;
}).join('');

const LIT_STARS = [[70, 40, 52], [300, 118, 36], [212, 300, 28], [492, 62, 64], [610, 322, 36], [760, 66, 28], [1420, 56, 40]] as const;
const litStars = LIT_STARS
  .map(([x, y, size]) => `<img src="data:image/png;base64,${logoData}" style="left:${x}px;top:${y}px;width:${size}px;height:${size}px" alt="">`)
  .join('');

const html = `<!doctype html><html><head><meta charset="utf-8"><style>
  @font-face { font-family: 'Bricolage'; src: url(data:font/ttf;base64,${fontData}) format('truetype'); font-weight: 700; }
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body { width: ${WIDTH}px; height: ${HEIGHT}px; overflow: hidden; position: relative; background: #f7f5ef; color: #17150f; font-family: 'Bricolage', sans-serif; }
  i { position: absolute; background: #c9c0af; }
  img { position: absolute; image-rendering: pixelated; }
  .sign { position: absolute; right: 72px; bottom: 76px; padding: 26px 0 30px 56px; background: #f7f5ef; text-align: right; box-shadow: 0 0 44px 34px #f7f5ef; }
  h1 { font-size: 116px; font-weight: 700; line-height: 1; letter-spacing: -0.035em; }
  p { font-size: 52px; font-weight: 700; color: #e8452e; margin-top: 18px; letter-spacing: -0.02em; }
</style></head><body>${dimStars}${litStars}<div class="sign"><h1>Alive but invisible.</h1><p>silentstars.dev</p></div></body></html>`;

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: WIDTH, height: HEIGHT }, deviceScaleFactor: 2 });
await page.setContent(html, { waitUntil: 'load' });
await page.evaluate(() => document.fonts.ready.then(() => undefined));
await page.screenshot({ path: OUTPUT });
await browser.close();
console.log(`✓ Banner saved to ${OUTPUT}`);
