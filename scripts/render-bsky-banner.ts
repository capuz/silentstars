/**
 * render-bsky-banner.ts — renders the Bluesky profile banner to
 * assets/bsky-banner.png with the same satori stack as the OG cards.
 *
 * Run by hand after changing the design, then commit the PNG:
 *   npx tsx scripts/render-bsky-banner.ts
 * The update-bsky-profile workflow uploads it when update_banner=true.
 *
 * Content is static on purpose (no counters), so the banner never goes stale.
 * Bluesky lays the avatar over the bottom-left corner and crops the sides on
 * mobile, so the text sits in the middle band and the star trails on the right.
 */

import satori from 'satori';
import { Resvg } from '@resvg/resvg-js';
import { mkdirSync, writeFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { pathToFileURL } from 'node:url';
import { fonts, ACCENT, INK, PAPER, MUTED, SHADOW, wordmark } from '../src/og/shared.ts';

export const BANNER_PATH = resolve('assets/bsky-banner.png');
export const WIDTH  = 1500;
export const HEIGHT = 500;
const SCALE = 2; // rendered at 3000×1000

// Concentric arcs around a pole above the top-right corner: the star-trails
// motif from the site hero, drawn as plain SVG because satori has no canvas.
function trailsSvg(): string {
  const cx = 1340, cy = -130, minX = 1090; // trails never reach left of minX (text column)
  const arcs: string[] = [];
  for (let i = 0; i < 16; i++) {
    const r = 170 + i * 34;
    const wanted = 0.35 + (i % 5) * 0.11;   // radians, varied so trails look staggered
    const start = Math.min(wanted, Math.asin(Math.min(1, (cx - minX) / r)));
    const sweep = 0.55 + ((i * 7) % 6) * 0.12;
    const x1 = cx + r * Math.cos(Math.PI / 2 + start), y1 = cy + r * Math.sin(Math.PI / 2 + start);
    const x2 = cx + r * Math.cos(Math.PI / 2 + start - sweep), y2 = cy + r * Math.sin(Math.PI / 2 + start - sweep);
    const accent = i === 6 || i === 11;
    arcs.push(
      `<path d="M ${x1.toFixed(1)} ${y1.toFixed(1)} A ${r} ${r} 0 0 0 ${x2.toFixed(1)} ${y2.toFixed(1)}" ` +
      `fill="none" stroke="${accent ? ACCENT : SHADOW}" stroke-width="${accent ? 3.5 : 2}" stroke-linecap="round" opacity="${accent ? 1 : 0.75}"/>`,
    );
    if (accent) arcs.push(`<circle cx="${x2.toFixed(1)}" cy="${y2.toFixed(1)}" r="5" fill="${ACCENT}"/>`);
  }
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${WIDTH}" height="${HEIGHT}" viewBox="0 0 ${WIDTH} ${HEIGHT}">${arcs.join('')}</svg>`;
}

export async function renderBanner(): Promise<Buffer> {
  const trails = `data:image/svg+xml;base64,${Buffer.from(trailsSvg()).toString('base64')}`;
  const svg = await satori(
    {
      type: 'div',
      props: {
        style: { display: 'flex', position: 'relative', width: WIDTH, height: HEIGHT, background: PAPER, fontFamily: 'Bricolage' },
        children: [
          { type: 'img', props: { src: trails, width: WIDTH, height: HEIGHT, style: { position: 'absolute', top: 0, left: 0 } } },
          {
            type: 'div',
            props: {
              style: { display: 'flex', flexDirection: 'column', position: 'absolute', left: 300, top: 92 },
              children: [
                wordmark('16px'),
                ...['Not famous. Not abandoned.', 'Just building.'].map(line => ({
                  type: 'div',
                  props: { style: { color: INK, fontSize: 66, fontWeight: 700, lineHeight: 1.04, letterSpacing: '-0.03em' }, children: line },
                })),
                {
                  type: 'div',
                  props: {
                    style: { color: MUTED, fontSize: 25, fontWeight: 500, marginTop: '18px' },
                    children: 'One open-source pick a day, still shipping under the radar.',
                  },
                },
                {
                  type: 'div',
                  props: { style: { color: ACCENT, fontSize: 25, fontWeight: 700, marginTop: '4px' }, children: 'silentstars.dev' },
                },
              ],
            },
          },
        ],
      },
    },
    { width: WIDTH, height: HEIGHT, fonts },
  );
  return new Resvg(svg, { fitTo: { mode: 'width', value: WIDTH * SCALE } }).render().asPng();
}

if (import.meta.url === pathToFileURL(process.argv[1] ?? '').href) {
  const png = await renderBanner();
  mkdirSync(dirname(BANNER_PATH), { recursive: true });
  writeFileSync(BANNER_PATH, png);
  console.log(`✓ ${BANNER_PATH} (${png.length} bytes)`);
}
