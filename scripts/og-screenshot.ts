import { chromium, type Page } from 'playwright';
import { readdirSync, mkdirSync } from 'fs';
import { resolve } from 'path';

const distOgCard = resolve('dist/og-card');
const distOg     = resolve('dist/og');

// Cards can show an image hosted by the project. A slow or dead host must not hold up
// the nightly run or lose the card: past this wait, it renders without the image.
const IMAGE_WAIT_MS = 10_000;

mkdirSync(distOg, { recursive: true });

const allSlugs = readdirSync(distOgCard);
if (allSlugs.length === 0) {
  console.error('No og-card pages found in dist/og-card/');
  process.exit(1);
}

// ONLY_SLUGS: comma-separated list of slugs to screenshot.
// If set, only those slugs are processed; otherwise all are screenshotted.
const onlyEnv = (process.env.ONLY_SLUGS ?? '').split(',').map(s => s.trim()).filter(Boolean);
const slugs   = onlyEnv.length > 0 ? allSlugs.filter(s => onlyEnv.includes(s)) : allSlugs;

if (slugs.length === 0) {
  console.warn('No matching slugs found — check ONLY_SLUGS env var');
  process.exit(0);
}

console.log(`Screenshotting ${slugs.length} OG cards${onlyEnv.length > 0 ? ` (filtered from ${allSlugs.length})` : ''}…`);

const browser = await chromium.launch();
const page    = await browser.newPage();
await page.setViewportSize({ width: 1200, height: 630 });

// Returns false when the card had to drop its image.
async function loadCard(target: Page, file: string): Promise<boolean> {
  await target.goto(file, { waitUntil: 'domcontentloaded' });
  await target.waitForFunction(
    () => [...document.images].every(img => img.complete),
    undefined,
    { timeout: IMAGE_WAIT_MS },
  ).catch(() => {});

  const imageOk = await target.evaluate(() => {
    const cover = document.querySelector<HTMLImageElement>('.cover-main');
    if (!cover) return true;
    if (cover.complete && cover.naturalWidth > 0) return true;
    document.body.dataset.variant = 'text';
    return false;
  });
  await target.evaluate(() => document.fonts.ready.then(() => undefined));
  return imageOk;
}

let done = 0;
let dropped = 0;
for (const slug of slugs) {
  const file = `file://${distOgCard}/${slug}/index.html`;
  if (!await loadCard(page, file)) {
    dropped++;
    console.warn(`  ⚠ ${slug}: image did not load, using the card without it`);
  }
  await page.screenshot({
    path: `${distOg}/${slug}.png`,
    clip: { x: 0, y: 0, width: 1200, height: 630 },
  });
  done++;
  if (done % 20 === 0) console.log(`  ${done}/${slugs.length}`);
}

await browser.close();
console.log(`✓ ${done} OG images saved to dist/og/${dropped ? ` (${dropped} without their image)` : ''}`);
