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

export async function GET({ props }: { props: { data: any } }) {
  const d = props.data;
  const desc     = truncate(d.description ?? '', 80);
  const hColor   = healthColor(d.healthScore);
  const fillPct  = `${d.healthScore}%`;

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
          padding: '52px 60px',
          fontFamily: 'Bricolage',
          boxSizing: 'border-box',
          border: `5px solid ${INK}`,
          position: 'relative',
        },
        children: [
          // ── Wordmark ──
          {
            type: 'div',
            props: {
              style: { display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '36px' },
              children: [
                { type: 'span', props: { style: { color: ACCENT, fontSize: 28, fontWeight: 700 }, children: '★' } },
                { type: 'span', props: { style: { color: INK, fontSize: 22, fontWeight: 700, letterSpacing: '-0.02em' }, children: 'SilentStars' } },
              ],
            },
          },

          // ── Project name ──
          {
            type: 'div',
            props: {
              style: { color: INK, fontSize: 56, fontWeight: 700, lineHeight: 1.05, letterSpacing: '-0.03em', marginBottom: '16px', maxWidth: '900px' },
              children: truncate(d.name, 42),
            },
          },

          // ── Description ──
          {
            type: 'div',
            props: {
              style: { color: MUTED, fontSize: 24, fontWeight: 500, lineHeight: 1.4, marginBottom: '32px', maxWidth: '860px' },
              children: desc,
            },
          },

          // ── Stats row ──
          {
            type: 'div',
            props: {
              style: { display: 'flex', alignItems: 'center', gap: '28px', marginBottom: '28px' },
              children: [
                // Undervalued score
                {
                  type: 'div',
                  props: {
                    style: { display: 'flex', alignItems: 'baseline', gap: '4px' },
                    children: [
                      { type: 'span', props: { style: { color: ACCENT, fontSize: 40, fontWeight: 700 }, children: '↑' } },
                      { type: 'span', props: { style: { color: ACCENT, fontSize: 44, fontWeight: 700, letterSpacing: '-0.03em' }, children: String(d.undervaluedScore) } },
                      { type: 'span', props: { style: { color: MUTED, fontSize: 16, fontWeight: 500, marginLeft: '4px' }, children: 'undervalued' } },
                    ],
                  },
                },
                // Separator
                { type: 'span', props: { style: { color: SHADOW, fontSize: 28 }, children: '·' } },
                // Health
                {
                  type: 'div',
                  props: {
                    style: { display: 'flex', alignItems: 'baseline', gap: '4px' },
                    children: [
                      { type: 'span', props: { style: { color: hColor, fontSize: 32, fontWeight: 700 }, children: String(d.healthScore) } },
                      { type: 'span', props: { style: { color: MUTED, fontSize: 16, fontWeight: 500 }, children: 'health' } },
                    ],
                  },
                },
                // Stars
                { type: 'span', props: { style: { color: SHADOW, fontSize: 28 }, children: '·' } },
                {
                  type: 'div',
                  props: {
                    style: { display: 'flex', alignItems: 'baseline', gap: '4px' },
                    children: [
                      { type: 'span', props: { style: { color: INK, fontSize: 28, fontWeight: 700 }, children: '★' } },
                      { type: 'span', props: { style: { color: INK, fontSize: 28, fontWeight: 700 }, children: String(d.stars) } },
                    ],
                  },
                },
                // Language
                ...(d.language ? [
                  { type: 'span', props: { style: { color: SHADOW, fontSize: 28 }, children: '·' } },
                  {
                    type: 'div',
                    props: {
                      style: {
                        display: 'flex', alignItems: 'center',
                        background: '#fff', border: `1.5px solid ${INK}`,
                        borderRadius: '999px', padding: '4px 14px',
                        fontSize: 18, fontWeight: 700, color: INK,
                      },
                      children: d.language,
                    },
                  },
                ] : []),
              ],
            },
          },

          // ── Health bar ──
          {
            type: 'div',
            props: {
              style: { display: 'flex', flexDirection: 'column', gap: '6px', marginBottom: 'auto' },
              children: [
                {
                  type: 'div',
                  props: {
                    style: {
                      width: '340px', height: '8px',
                      background: '#e2ddd5',
                      border: `1.5px solid ${INK}`,
                      borderRadius: '999px',
                      overflow: 'hidden',
                      display: 'flex',
                    },
                    children: [{
                      type: 'div',
                      props: { style: { width: fillPct, height: '100%', background: hColor } },
                    }],
                  },
                },
              ],
            },
          },

          // ── Bottom tagline ──
          {
            type: 'div',
            props: {
              style: {
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingTop: '20px',
                borderTop: `1.5px solid ${SHADOW}`,
              },
              children: [
                {
                  type: 'span',
                  props: {
                    style: { color: MUTED, fontSize: 18, fontWeight: 500, fontStyle: 'italic' },
                    children: 'Not famous. Not abandoned. Just building.',
                  },
                },
                {
                  type: 'span',
                  props: {
                    style: { color: MUTED, fontSize: 16, fontWeight: 500 },
                    children: 'capuz.github.io/silentstars',
                  },
                },
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
