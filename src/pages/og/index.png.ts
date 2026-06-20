import { getCollection } from 'astro:content';
import satori from 'satori';
import { Resvg } from '@resvg/resvg-js';
import { readFileSync } from 'fs';
import { resolve } from 'path';

const fontBold   = readFileSync(resolve('public/fonts/BricolageGrotesque-Bold.ttf'));
const fontMedium = readFileSync(resolve('public/fonts/BricolageGrotesque-Medium.ttf'));

const ACCENT = '#e8452e';
const INK    = '#17150f';
const PAPER  = '#f7f5ef';
const MUTED  = '#6b6456';
const SHADOW = '#c9c0af';

export async function GET() {
  const projects = await getCollection('projects');
  const total    = projects.filter(p => p.data.status !== 'archived').length;
  const thriving = projects.filter(p => p.data.status === 'thriving').length;
  const stars    = projects.reduce((s, p) => s + p.data.stars, 0);
  const starsK   = stars >= 1000 ? `${(stars / 1000).toFixed(1)}k` : String(stars);

  const svg = await satori(
    {
      type: 'div',
      props: {
        style: {
          display: 'flex',
          flexDirection: 'column',
          width: 1200,
          height: 630,
          background: PAPER,
          padding: '60px',
          fontFamily: 'Bricolage',
          border: `5px solid ${INK}`,
        },
        children: [
          // ── Wordmark ──
          {
            type: 'div',
            props: {
              style: { display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '40px' },
              children: [
                { type: 'span', props: { style: { color: ACCENT, fontSize: 36, fontWeight: 700 }, children: '★' } },
                { type: 'span', props: { style: { color: INK, fontSize: 30, fontWeight: 700, letterSpacing: '-0.02em' }, children: 'SilentStars' } },
              ],
            },
          },

          // ── Headline ──
          {
            type: 'div',
            props: {
              style: { color: INK, fontSize: 68, fontWeight: 700, lineHeight: 1.05, letterSpacing: '-0.03em', marginBottom: '20px', maxWidth: '900px' },
              children: 'Not famous.\nNot abandoned.\nJust building.',
            },
          },

          // ── Subtitle ──
          {
            type: 'div',
            props: {
              style: { color: MUTED, fontSize: 24, fontWeight: 500, lineHeight: 1.4, marginBottom: 'auto', maxWidth: '700px' },
              children: 'Open source is more than stars. We track what GitHub Trending ignores.',
            },
          },

          // ── Stats row ──
          {
            type: 'div',
            props: {
              style: {
                display: 'flex',
                alignItems: 'center',
                gap: '40px',
                paddingTop: '24px',
                borderTop: `1.5px solid ${SHADOW}`,
              },
              children: [
                stat(String(total),    'projects tracked'),
                { type: 'span', props: { style: { color: SHADOW, fontSize: 28 }, children: '·' } },
                stat(String(thriving), 'thriving now'),
                { type: 'span', props: { style: { color: SHADOW, fontSize: 28 }, children: '·' } },
                stat(`★ ${starsK}`,   'combined stars'),
              ],
            },
          },
        ],
      },
    },
    {
      width: 1200,
      height: 630,
      fonts: [
        { name: 'Bricolage', data: fontBold,   weight: 700, style: 'normal' },
        { name: 'Bricolage', data: fontMedium, weight: 500, style: 'normal' },
      ],
    },
  );

  const resvg = new Resvg(svg, { fitTo: { mode: 'width', value: 1200 } });
  return new Response(resvg.render().asPng(), {
    headers: { 'Content-Type': 'image/png', 'Cache-Control': 'public, max-age=3600' },
  });
}

function stat(value: string, label: string) {
  return {
    type: 'div',
    props: {
      style: { display: 'flex', flexDirection: 'column', gap: '2px' },
      children: [
        { type: 'span', props: { style: { color: ACCENT, fontSize: 36, fontWeight: 700, letterSpacing: '-0.02em' }, children: value } },
        { type: 'span', props: { style: { color: MUTED, fontSize: 15, fontWeight: 500 }, children: label } },
      ],
    },
  };
}
