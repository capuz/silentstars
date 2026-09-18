import { test } from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { buildPitch, readmeExcerpt } from './post-pitch.ts';

test('readmeExcerpt drops frontmatter and caps length', () => {
  const dir = mkdtempSync(join(tmpdir(), 'pitch-'));
  writeFileSync(join(dir, 'a--b.md'), '---\nrepo: "a/b"\nname: "b"\n---\n\n# b\nA dungeon crawler for friends.\n');
  assert.equal(readmeExcerpt('a--b', 1500, dir), '# b\nA dungeon crawler for friends.');
  assert.equal(readmeExcerpt('a--b', 5, dir), '# b\nA');
});

test('readmeExcerpt returns empty string when the project file does not exist', () => {
  const dir = mkdtempSync(join(tmpdir(), 'pitch-'));
  assert.equal(readmeExcerpt('nope--nope', 1500, dir), '');
});

const README = [
  '# sacrecant',
  '',
  '![build](https://img.shields.io/badge/build-passing-green.svg)',
  '',
  'Sacrecant is a co-op dungeon crawler where you and three friends descend into procedurally generated crypts. Built with Rust.',
  '',
  '## Install',
  '',
  'Run `cargo build`.',
].join('\n');

test('buildPitch keeps a description that says what the project does', () => {
  const description = 'A simple gold based Economy plugin that just works';
  assert.equal(buildPitch({ description, readme: README }), description);
});

test('buildPitch prefers the first README sentence over a status description', () => {
  assert.equal(
    buildPitch({ description: 'Work in progress dungeon romp', readme: README }),
    'Sacrecant is a co-op dungeon crawler where you and three friends descend into procedurally generated crypts.',
  );
});

test('buildPitch treats "Mirror of <url>" as unusable and falls back to the README', () => {
  assert.equal(
    buildPitch({ description: 'Mirror of https://git.fsfe.org/FSFE/fsfe-website', readme: README }),
    'Sacrecant is a co-op dungeon crawler where you and three friends descend into procedurally generated crypts.',
  );
});

test('buildPitch skips headings, badges, code fences, tables and HTML, and unwraps links', () => {
  const readme = [
    '# tool',
    '<p align="center"><img src="logo.png"></p>',
    '',
    '[![CI](https://ci/badge.svg)](https://ci)',
    '',
    '```sh',
    'npm i tool',
    '```',
    '',
    '| a | b |',
    '|---|---|',
    '',
    'Tool turns your [Markdown notes](https://example.com/notes) into a searchable knowledge base that syncs offline.',
  ].join('\n');
  assert.equal(
    buildPitch({ description: 'WIP', readme }),
    'Tool turns your Markdown notes into a searchable knowledge base that syncs offline.',
  );
});

test('buildPitch joins a short first sentence with the next one', () => {
  const readme = '# t\n\nFast and tiny. Renders SVG icons to PNG in the browser without any server round-trip.';
  assert.equal(
    buildPitch({ description: 'wip', readme }),
    'Fast and tiny. Renders SVG icons to PNG in the browser without any server round-trip.',
  );
});

test('buildPitch strips a leading status phrase when the README has no usable prose', () => {
  assert.equal(buildPitch({ description: 'Work in progress dungeon romp', readme: '' }), 'Dungeon romp');
  assert.equal(buildPitch({ description: 'WIP: tiny roguelike engine', readme: '# x\n\n## Usage\n' }), 'Tiny roguelike engine');
});

test('buildPitch ignores README prose that is itself status text', () => {
  const readme = '# x\n\nThis project is a work in progress and not ready for use yet, so expect breakage everywhere.';
  assert.equal(buildPitch({ description: 'Work in progress dungeon romp', readme }), 'Dungeon romp');
});

test('buildPitch returns the raw description when nothing better exists', () => {
  assert.equal(buildPitch({ description: 'Mirror of https://git.fsfe.org/x', readme: '' }), 'Mirror of https://git.fsfe.org/x');
});

test('buildPitch returns empty string when there is nothing at all', () => {
  assert.equal(buildPitch({ description: '', readme: '' }), '');
});
