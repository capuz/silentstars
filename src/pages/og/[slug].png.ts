import { getCollection } from 'astro:content';
import satori from 'satori';
import { Resvg } from '@resvg/resvg-js';
import { readFileSync } from 'fs';
import { resolve } from 'path';

export async function getStaticPaths() {
  const projects = await getCollection('projects');
  return projects.map(p => ({
    params: { slug: p.slug },
    props: { data: p.data },
  }));
}

const fontBold   = readFileSync(resolve('public/fonts/BricolageGrotesque-Bold.ttf'));
const fontMedium = readFileSync(resolve('public/fonts/BricolageGrotesque-Medium.ttf'));

const ACCENT  = '#e8452e';
const INK     = '#17150f';
const PAPER   = '#f7f5ef';
const MUTED   = '#6b6456';
const SHADOW  = '#c9c0af';

const STATUS_MAP: Record<string, { label: string; bg: string }> = {
  newborn:  { label: 'Newborn',  bg: '#bdebd0' },
  thriving: { label: 'Thriving', bg: '#ffe08a' },
  quiet:    { label: 'Quiet',    bg: '#e6e0d2' },
  at_risk:  { label: 'At Risk',  bg: '#ffd5cc' },
  revived:  { label: 'Revived',  bg: '#e8d5f5' },
  watched:  { label: 'Watched',  bg: '#d5eeff' },
  archived: { label: 'Archived', bg: '#e2e0da' },
};

function truncate(str: string, max: number) {
  if (!str || str.length <= max) return str ?? '';
  return str.slice(0, max - 1).trimEnd() + '…';
}

function healthColor(h: number) {
  if (h >= 80) return '#1f9d55';
  if (h >= 60) return '#c98a1e';
  if (h >= 40) return '#d4691e';
  return '#d8392b';
}

// SVG star rendered as a Satori-native element (avoids font glyph issues)
function starSvg(size: number, color: string) {
  return {
    type: 'svg',
    props: {
      width: size,
      height: size,
      viewBox: '0 0 24 24',
      children: [{
        type: 'path',
        props: {
          fill: color,
          d: 'M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z',
        },
      }],
    },
  };
}

export async function GET({ props }: { props: { data: any } }) {
  const d      = props.data;
  const desc   = truncate(d.description ?? '', 100);
  const hColor = healthColor(d.healthScore);
  const status = STATUS_MAP[d.status] ?? STATUS_MAP.quiet!;

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
          padding: '48px 64px 44px',
          fontFamily: 'Bricolage',
          boxSizing: 'border-box',
          border: `5px solid ${INK}`,
        },
        children: [

          // ── Top row: wordmark + status badge ──
          {
            type: 'div',
            props: {
              style: { display: 'flex', alignItems: 'center', justifyContent: 'space-between' },
              children: [
                // Wordmark
                {
                  type: 'div',
                  props: {
                    style: { display: 'flex', alignItems: 'center', gap: '10px' },
                    children: [
                      starSvg(30, ACCENT),
                      { type: 'span', props: { style: { color: INK, fontSize: 22, fontWeight: 700, letterSpacing: '-0.02em' }, children: 'SilentStars' } },
                    ],
                  },
                },
                // Status badge
                {
                  type: 'div',
                  props: {
                    style: {
                      background: status.bg,
                      color: INK,
                      fontSize: 16,
                      fontWeight: 700,
                      padding: '5px 14px',
                      borderRadius: '999px',
                      border: `1.5px solid ${INK}`,
                      letterSpacing: '0.03em',
                    },
                    children: status.label.toUpperCase(),
                  },
                },
              ],
            },
          },

          // ── Project name ──
          {
            type: 'div',
            props: {
              style: {
                color: INK,
                fontSize: 68,
                fontWeight: 700,
                lineHeight: 1.0,
                letterSpacing: '-0.03em',
                marginTop: '36px',
                maxWidth: '1060px',
              },
              children: truncate(d.name, 36),
            },
          },

          // ── Description ──
          {
            type: 'div',
            props: {
              style: {
                color: MUTED,
                fontSize: 26,
                fontWeight: 500,
                lineHeight: 1.4,
                marginTop: '14px',
                maxWidth: '960px',
                flexShrink: 0,
              },
              children: desc,
            },
          },

          // ── Stats row — 3 columns ──
          {
            type: 'div',
            props: {
              style: {
                display: 'flex',
                alignItems: 'stretch',
                marginTop: 'auto',
                marginBottom: '24px',
                border: `1.5px solid ${SHADOW}`,
                borderRadius: '12px',
                overflow: 'hidden',
              },
              children: [
                // Undervalued
                {
                  type: 'div',
                  props: {
                    style: { display: 'flex', flexDirection: 'column', flex: 1, alignItems: 'center', padding: '20px 0 16px' },
                    children: [
                      {
                        type: 'div',
                        props: {
                          style: { display: 'flex', alignItems: 'baseline', gap: '4px' },
                          children: [
                            { type: 'span', props: { style: { color: ACCENT, fontSize: 52, fontWeight: 700, lineHeight: 1 }, children: '↑' } },
                            { type: 'span', props: { style: { color: ACCENT, fontSize: 72, fontWeight: 700, letterSpacing: '-0.04em', lineHeight: 1 }, children: String(d.undervaluedScore) } },
                          ],
                        },
                      },
                      { type: 'span', props: { style: { color: MUTED, fontSize: 18, fontWeight: 500, marginTop: '6px' }, children: 'undervalued' } },
                    ],
                  },
                },
                // Divider
                { type: 'div', props: { style: { width: '1.5px', background: SHADOW, flexShrink: 0 } } },
                // Health
                {
                  type: 'div',
                  props: {
                    style: { display: 'flex', flexDirection: 'column', flex: 1, alignItems: 'center', padding: '20px 0 16px' },
                    children: [
                      { type: 'span', props: { style: { color: hColor, fontSize: 72, fontWeight: 700, letterSpacing: '-0.04em', lineHeight: 1 }, children: String(d.healthScore) } },
                      { type: 'span', props: { style: { color: MUTED, fontSize: 18, fontWeight: 500, marginTop: '6px' }, children: 'health' } },
                    ],
                  },
                },
                // Divider
                { type: 'div', props: { style: { width: '1.5px', background: SHADOW, flexShrink: 0 } } },
                // Stars
                {
                  type: 'div',
                  props: {
                    style: { display: 'flex', flexDirection: 'column', flex: 1, alignItems: 'center', padding: '20px 0 16px' },
                    children: [
                      {
                        type: 'div',
                        props: {
                          style: { display: 'flex', alignItems: 'center', gap: '8px' },
                          children: [
                            starSvg(48, INK),
                            { type: 'span', props: { style: { color: INK, fontSize: 72, fontWeight: 700, letterSpacing: '-0.04em', lineHeight: 1 }, children: String(d.stars) } },
                          ],
                        },
                      },
                      { type: 'span', props: { style: { color: MUTED, fontSize: 18, fontWeight: 500, marginTop: '6px' }, children: 'stars' } },
                    ],
                  },
                },
              ],
            },
          },

          // ── Footer ──
          {
            type: 'div',
            props: {
              style: {
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingTop: '18px',
                borderTop: `1.5px solid ${SHADOW}`,
              },
              children: [
                { type: 'span', props: { style: { color: MUTED, fontSize: 18, fontWeight: 500, fontStyle: 'italic' }, children: 'Not famous. Not abandoned. Just building.' } },
                { type: 'span', props: { style: { color: MUTED, fontSize: 16, fontWeight: 500 }, children: 'capuz.github.io/silentstars' } },
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
    headers: { 'Content-Type': 'image/png', 'Cache-Control': 'public, max-age=86400' },
  });
}
