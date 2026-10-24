import satori from 'satori';
import { Resvg } from '@resvg/resvg-js';
import { listEditions, formatWeekRange } from '../../../../scripts/weekly.ts';
import type { History, NumberedEdition } from '../../../../scripts/weekly.ts';
import historyJson from '../../../../data/history.json';

import { fonts, ACCENT, INK, PAPER, MUTED, SHADOW, wordmark, stat } from '../../../og/shared.ts';

// Card for each /weekly/ edition: its page's og:image and the Bluesky thread's embed.

export function getStaticPaths() {
  return listEditions(historyJson as History, new Date()).map(edition => ({
    params: { week: edition.week },
    props: { edition },
  }));
}

export async function GET({ props }: { props: { edition: NumberedEdition } }) {
  const { edition } = props;
  const top = edition.rising.slice(0, 3).map(i => i.name);

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
          // ── Wordmark + issue ──
          wordmark('36px', [
            { type: 'span', props: { style: { color: MUTED, fontSize: 24, fontWeight: 500, marginLeft: 'auto' }, children: `Issue #${edition.issue}` } },
          ]),

          // ── Headline ──
          {
            type: 'div',
            props: {
              style: { color: INK, fontSize: 72, fontWeight: 700, lineHeight: 1.05, letterSpacing: '-0.03em', marginBottom: '14px' },
              children: 'This week in small open source',
            },
          },
          {
            type: 'div',
            props: {
              style: { color: ACCENT, fontSize: 30, fontWeight: 700, marginBottom: '28px' },
              children: formatWeekRange(edition.week),
            },
          },

          // ── Top rising ──
          {
            type: 'div',
            props: {
              style: { display: 'flex', flexWrap: 'wrap', gap: '12px', marginBottom: 'auto' },
              children: top.map(name => ({
                type: 'div',
                props: {
                  style: { display: 'flex', alignItems: 'center', gap: '10px', color: INK, fontSize: 24, fontWeight: 700, padding: '6px 16px', border: `2px solid ${INK}`, borderRadius: '999px' },
                  children: [
                    { type: 'div', props: { style: { width: 12, height: 12, borderRadius: '50%', background: ACCENT } } },
                    { type: 'span', props: { children: name } },
                  ],
                },
              })),
            },
          },

          // ── Counts ──
          {
            type: 'div',
            props: {
              style: { display: 'flex', alignItems: 'center', gap: '40px', paddingTop: '24px', borderTop: `1.5px solid ${SHADOW}` },
              children: [
                stat(String(edition.rising.length), 'rising'),
                stat(String(edition.newcomers.length), 'new this week'),
                stat(String(edition.revived.length), 'came back'),
                stat(String(edition.cooling.length), 'cooling off'),
              ],
            },
          },
        ],
      },
    },
    {
      width: 1200,
      height: 630,
      fonts,
    },
  );

  const resvg = new Resvg(svg, { fitTo: { mode: 'width', value: 1200 } });
  return new Response(resvg.render().asPng(), {
    headers: { 'Content-Type': 'image/png', 'Cache-Control': 'public, max-age=3600' },
  });
}

