import { test } from 'node:test';
import assert from 'node:assert/strict';
import { stripReadmeNoise } from './readme-clean.ts';

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
