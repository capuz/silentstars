import { test } from 'node:test';
import assert from 'node:assert/strict';
import { stripReadmeNoise, clipReadme } from './readme-clean.ts';

const openAlive = [
  '# OpenAlive',
  '',
  '<p align="center">',
  '  <a href="https://opn-build.github.io/">',
  '    <picture>',
  '      <source media="(prefers-color-scheme: light)" srcset="https://opn-build.github.io/og-image-light.png" />',
  '      <img src="https://opn-build.github.io/og-image.png" alt="OpenAlive" width="600" />',
  '    </picture>',
  '  </a>',
  '</p>',
  '',
  '> Keep your PC active. Automatically.',
].join('\n');

test('drops a nested <picture> header block entirely', () => {
  assert.equal(stripReadmeNoise(openAlive), '# OpenAlive\n\n> Keep your PC active. Automatically.');
});

test('drops bare opening and closing tags of any kind', () => {
  const input = '<h1 align="center">Tool</h1>\n<p>\n<br>\n</div>\nReal prose here.';
  assert.equal(stripReadmeNoise(input), 'Real prose here.');
});

test('keeps HTML inside fenced code blocks', () => {
  const input = 'Usage:\n\n```html\n<div id="app"></div>\n    <script src="x.js"></script>\n```';
  assert.equal(stripReadmeNoise(input), input);
});

test('leaves prose, lists and inline tags mid-line alone', () => {
  const input = '## Features\n\n- Fast <b>and</b> small\n- Uses a < b comparisons\n\nSee <https://example.com>.';
  assert.equal(stripReadmeNoise(input), input);
});

// ── GitHub alerts ─────────────────────────────────────────────

test('turns a GitHub alert marker into a bold label on its own quote paragraph', () => {
  const input = '> [!IMPORTANT]\n> **New in 2.63:** Friends.';
  assert.equal(stripReadmeNoise(input), '> **Important**\n>\n> **New in 2.63:** Friends.');
  assert.equal(stripReadmeNoise('> [!tip]\n> Use it.'), '> **Tip**\n>\n> Use it.');
});

// ── clipReadme ────────────────────────────────────────────────

const words = (n: number) => Array.from({ length: n }, (_, i) => `word${i}`).join(' ');

test('clipReadme leaves text within the limit untouched', () => {
  assert.equal(clipReadme('Short.\n\nText.', 100), 'Short.\n\nText.');
});

test('clipReadme ends on the last whole paragraph, without an ellipsis', () => {
  const p1 = 'A'.repeat(50) + '.';
  const p2 = 'B'.repeat(30) + '.';
  const text = `${p1}\n\n${p2}\n\n${'C'.repeat(80)}`;
  assert.equal(clipReadme(text, 100), `${p1}\n\n${p2}`);
});

test('clipReadme never ends inside a link (MKCinema case)', () => {
  const intro = 'MKCinema brings everything you watch into one place. ' + words(60);
  const text = `${intro}\n\n> **New in 2.63:** Friends and more. [See what's new](https://example.com/changelog) today.`;
  const out = clipReadme(text, intro.length + 60);
  assert.equal(out, intro);
});

test('clipReadme falls back to the last full sentence when the first paragraph is too long', () => {
  const text = `First sentence here. Second one ends here. ${words(40)}`;
  assert.equal(clipReadme(text, 60), 'First sentence here. Second one ends here.');
});

test('clipReadme cuts at a word with an ellipsis as a last resort and drops an open link', () => {
  const text = `${words(10)} [a link that goes on](https://example.com/x) ${words(10)}`;
  const out = clipReadme(text, 85);
  assert.equal(out, `${words(10)}…`);
});

test('clipReadme drops a heading left dangling at the end', () => {
  const p1 = 'Intro paragraph that is long enough to keep. '.repeat(2).trim();
  const text = `${p1}\n\n## Install\n\n${'x '.repeat(80)}`;
  assert.equal(clipReadme(text, p1.length + 20), p1);
});

test('clipReadme never leaves a code fence open', () => {
  const p1 = 'Intro paragraph that is long enough to keep around.';
  const text = `${p1}\n\n\`\`\`sh\nnpm install thing\n\nnpm run build\n${'y '.repeat(40)}\n\`\`\``;
  assert.equal(clipReadme(text, p1.length + 35), p1);
});

test('clipReadme drops a half-written table row instead of breaking the table', () => {
  const rows = Array.from({ length: 12 }, (_, i) => `| Device ${i} | [download](https://example.com/d${i}) |`).join('\n');
  const text = `| Device | Link |\n|---|---|\n${rows}`;
  const out = clipReadme(text, 200);
  const lines = out.split('\n');
  assert.ok(lines.every(l => l.startsWith('|') && l.endsWith('|')), out);
  assert.ok(!out.endsWith('…'));
});
