import { test } from 'node:test';
import assert from 'node:assert/strict';
import satori from 'satori';
import { borderBox, fonts } from '../src/og/shared.ts';

// satori ≥0.27 follows CSS and defaults to content-box, so a 1200×630 root with
// padding and a border overflows the canvas. The cards were laid out for the old
// border-box default; borderBox() restores it for the whole tree.
const card = (child: object) => ({
  type: 'div',
  props: {
    style: { display: 'flex', width: 200, height: 100, padding: '20px', border: '5px solid #000' },
    children: child,
  },
});
const fill = { type: 'div', props: { style: { display: 'flex', flexGrow: 1, background: 'red' } } };
const redRect = (svg: string) => svg.match(/<rect[^>]*fill="red"[^>]*>/)?.[0];

test('borderBox: padding and border stay inside the declared size', async () => {
  const svg = await satori(borderBox(card(fill)) as any, { width: 200, height: 100, fonts });
  assert.match(redRect(svg) ?? '', /width="150" height="50"/);
});

test('borderBox: applies to nested nodes and keeps an explicit boxSizing', () => {
  const tree = borderBox({
    type: 'div',
    props: { style: { boxSizing: 'content-box' }, children: ['text', { type: 'span', props: {} }] },
  }) as any;
  assert.equal(tree.props.style.boxSizing, 'content-box');
  assert.equal(tree.props.children[0], 'text');
  assert.equal(tree.props.children[1].props.style.boxSizing, 'border-box');
});
