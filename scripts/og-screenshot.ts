import { chromium } from 'playwright';
import { readdirSync, mkdirSync } from 'fs';
import { resolve } from 'path';

const distOgCard = resolve('dist/og-card');
const distOg     = resolve('dist/og');

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

let done = 0;
for (const slug of slugs) {
  const file = `file://${distOgCard}/${slug}/index.html`;
  await page.goto(file, { waitUntil: 'networkidle' });
  await page.screenshot({
    path: `${distOg}/${slug}.png`,
    clip: { x: 0, y: 0, width: 1200, height: 630 },
  });
  done++;
  if (done % 20 === 0) console.log(`  ${done}/${slugs.length}`);
}

await browser.close();
console.log(`✓ ${done} OG images saved to dist/og/`);
