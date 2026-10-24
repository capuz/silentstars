import { test } from 'node:test';
import assert from 'node:assert/strict';
import { buildWeeklyThread, ITEMS_PER_SECTION } from './weekly-post-build.ts';
import type { NumberedEdition, EditionItem } from './weekly.ts';

const BASE = 'https://silentstars.dev';

function item(repo: string, reason = 'closed 4 issues · new commits'): EditionItem {
  const name = repo.split('/')[1]!;
  return { repo, slug: repo.replace('/', '--').toLowerCase(), name, stars: 10, signals: [], reason };
}

function edition(over: Partial<NumberedEdition> = {}): NumberedEdition {
  return {
    week: '2026-W42', issue: 17, start: '2026-10-12T00:00:00.000Z', end: '2026-10-19T00:00:00.000Z',
    rising: [item('a/alpha'), item('b/beta'), item('c/gamma'), item('d/delta')],
    newcomers: [item('n/newbie', 'featured on Bluesky')],
    revived: [],
    cooling: [item('q/quiet', 'went from thriving to quiet')],
    ...over,
  };
}

const graphemes = (s: string) => [...new Intl.Segmenter().segment(s)].length;
const bytes = (s: string) => new TextEncoder().encode(s);
const sliceBytes = (s: string, start: number, end: number) => new TextDecoder().decode(bytes(s).slice(start, end));

test('root: issue, date range and section counts, with a card to the edition', () => {
  const { root } = buildWeeklyThread(edition(), {}, BASE, { tags: ['#opensource'] });
  assert.match(root.text, /Issue #17/);
  assert.match(root.text, /Oct 12 – 18, 2026/);
  assert.match(root.text, /4 rising/);
  assert.match(root.text, /1 new/);
  assert.match(root.text, /1 cooling off/);
  assert.doesNotMatch(root.text, /back/, 'empty sections are not counted');
  assert.equal(root.embed.external.uri, `${BASE}/weekly/2026-W42/`);
  const tag = root.facets.find(f => f.features[0].$type === 'app.bsky.richtext.facet#tag');
  assert.ok(tag, 'hashtags are tagged');
});

test('one reply per non-empty section, in edition order, then the archive link', () => {
  const { replies } = buildWeeklyThread(edition(), {}, BASE);
  assert.equal(replies.length, 4);
  assert.match(replies[0]!.text, /^🔥 Rising/);
  assert.match(replies[1]!.text, /^🌱 New this week/);
  assert.match(replies[2]!.text, /^🧊 Cooling off/);
  assert.match(replies[3]!.text, /silentstars\.dev\/weekly/);
  const link = replies[3]!.facets.find(f => f.features[0].$type === 'app.bsky.richtext.facet#link');
  assert.equal(link?.features[0].uri, `${BASE}/weekly/`);
});

test('sections show the top items, notes first, template reason as fallback', () => {
  const { replies } = buildWeeklyThread(edition(), { 'a/alpha': 'Shipped v2 with ARM builds.' }, BASE);
  const rising = replies[0]!.text;
  assert.ok(rising.includes('alpha — Shipped v2 with ARM builds.'));
  assert.ok(rising.includes('beta — closed 4 issues · new commits'));
  assert.equal(ITEMS_PER_SECTION, 3);
  assert.ok(!rising.includes('delta'), 'capped at ITEMS_PER_SECTION');
  assert.match(rising, /\+1 more/);
});

test('every post fits Bluesky\'s 300 graphemes even with long notes', () => {
  const long = 'Rewrote the scheduler, added retries with jittered backoff, and documented every flag in the CLI reference. '.repeat(2);
  const notes = Object.fromEntries(['a/alpha', 'b/beta', 'c/gamma'].map(r => [r, long]));
  const { root, replies } = buildWeeklyThread(edition(), notes, BASE, { tags: ['#opensource', '#indiedev'] });
  for (const post of [root, ...replies]) assert.ok(graphemes(post.text) <= 300, `${graphemes(post.text)}: ${post.text}`);
  assert.match(replies[0]!.text, /…/);
});

test('project names link to their pages, with byte offsets that survive emoji', () => {
  const { replies } = buildWeeklyThread(edition(), { 'a/alpha': 'Añadió soporte 🚀 para ARM.' }, BASE);
  const post = replies[0]!;
  const links = post.facets.filter(f => f.features[0].$type === 'app.bsky.richtext.facet#link');
  assert.deepEqual(
    links.map(f => sliceBytes(post.text, f.index.byteStart, f.index.byteEnd)),
    ['alpha', 'beta', 'gamma'],
  );
  assert.equal(links[0]!.features[0].uri, `${BASE}/projects/a--alpha/`);
});

test('rising owners with a Bluesky account are mentioned', () => {
  const { replies } = buildWeeklyThread(edition(), {}, BASE, {
    owners: { 'b/beta': { handle: 'beta.dev', did: 'did:plc:beta' } },
  });
  const post = replies[0]!;
  assert.ok(post.text.includes('beta (@beta.dev) —'));
  const mention = post.facets.find(f => f.features[0].$type === 'app.bsky.richtext.facet#mention');
  assert.equal(mention?.features[0].did, 'did:plc:beta');
  assert.equal(sliceBytes(post.text, mention!.index.byteStart, mention!.index.byteEnd), '@beta.dev');
});

test('truncated notes end on a whole word, without dangling punctuation', () => {
  const note = 'Removed blanket warning suppressions so NuGet audit fails on known advisories; build SDK 10.0.402 (#780); 8 issues closed and the release notes rewritten.';
  const notes = Object.fromEntries(['a/alpha', 'b/beta', 'c/gamma'].map(r => [r, note]));
  const { replies } = buildWeeklyThread(edition(), notes, BASE);
  const words = new Set(note.split(/\s+/).map(w => w.replace(/[;,.]$/, '')));
  for (const line of replies[0]!.text.split('\n').filter(l => l.startsWith('• '))) {
    const clipped = line.split(' — ')[1]!;
    assert.match(clipped, /[^\s;,:·—-]…$/, line);
    const last = clipped.slice(0, -1).split(' ').at(-1)!.replace(/[;,.]$/, '');
    assert.ok(words.has(last), `"${last}" is a cut word in: ${line}`);
    assert.doesNotMatch(clipped, /\s(and|or|with|the|to|of)…$/, line);
  }
});
