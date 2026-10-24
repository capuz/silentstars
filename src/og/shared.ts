// Shared by the satori OG routes (src/pages/og.png.ts → /og.png, og/weekly/*).
// The display font has no ★ or emoji glyphs (they render as tofu boxes), so the
// wordmark uses the logo PNG and decorations are drawn shapes.
import { readFileSync } from 'fs';
import { resolve } from 'path';

export const fonts = [
  { name: 'Bricolage', data: readFileSync(resolve('public/fonts/BricolageGrotesque-Bold.ttf')),   weight: 700 as const, style: 'normal' as const },
  { name: 'Bricolage', data: readFileSync(resolve('public/fonts/BricolageGrotesque-Medium.ttf')), weight: 500 as const, style: 'normal' as const },
];

export const ACCENT = '#e8452e';
export const INK    = '#17150f';
export const PAPER  = '#f7f5ef';
export const MUTED  = '#6b6456';
export const SHADOW = '#c9c0af';

const logoSrc = `data:image/png;base64,${readFileSync(resolve('public/logo-star.png')).toString('base64')}`;

export function wordmark(marginBottom: string, extra: unknown[] = []) {
  return {
    type: 'div',
    props: {
      style: { display: 'flex', alignItems: 'center', gap: '12px', marginBottom },
      children: [
        { type: 'img', props: { src: logoSrc, width: 40, height: 40 } },
        { type: 'span', props: { style: { color: INK, fontSize: 30, fontWeight: 700, letterSpacing: '-0.02em' }, children: 'SilentStars' } },
        ...extra,
      ],
    },
  };
}

export function stat(value: string, label: string) {
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
