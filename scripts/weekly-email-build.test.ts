import { test } from 'node:test';
import assert from 'node:assert/strict';
import { buildWeeklyEmail } from './weekly-email-build.ts';
import { ITEMS_PER_SECTION } from './weekly-post-build.ts';
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

test('subject names the edition and its week', () => {
  const { subject } = buildWeeklyEmail(edition(), {}, BASE);
  assert.equal(subject, 'SilentStars · Edition #17 · Oct 12 – 18, 2026');
});

test('the card opens the star trails on /weekly/, the button opens the edition page', () => {
  const { html } = buildWeeklyEmail(edition(), {}, BASE);
  const card = html.match(/<a href="([^"]+)"[^>]*>\s*<img/);
  assert.equal(card?.[1], `${BASE}/weekly/`);
  const button = html.match(/<a href="([^"]+)"[^>]*><span[^>]*>This week&#39;s details →/);
  assert.equal(button?.[1], `${BASE}/weekly/2026-W42/`);
});

test('link text carries its own colour, so the newsletter template cannot repaint it', () => {
  const { html } = buildWeeklyEmail(edition(), {}, BASE);
  const anchors = html.match(/<a [^>]*>[\s\S]*?<\/a>/g) ?? [];
  const textAnchors = anchors.filter(a => !/<img/.test(a));
  assert.ok(textAnchors.length > 0);
  for (const a of textAnchors) assert.match(a, /<span style="[^"]*color:#[0-9a-f]{6}/i, a);
});

test('never calls the projects small', () => {
  const { subject, html } = buildWeeklyEmail(edition(), {}, BASE);
  assert.doesNotMatch(subject + html, /\bsmall\b/i);
  assert.match(html, /What moved under the radar, Oct 12 – 18, 2026/);
});

test('shows the edition OG image', () => {
  const { html } = buildWeeklyEmail(edition(), {}, BASE);
  assert.match(html, /src="https:\/\/silentstars\.dev\/og\/weekly\/2026-W42\.png"/);
});

test('top projects per section, empty sections left out, the rest counted', () => {
  const { html } = buildWeeklyEmail(edition(), {}, BASE);
  assert.match(html, /Rising/);
  assert.match(html, /New this week/);
  assert.match(html, /Cooling off/);
  assert.doesNotMatch(html, /Came back/);
  for (const n of ['alpha', 'beta', 'gamma']) assert.match(html, new RegExp(`>${n}</span>`));
  assert.equal(ITEMS_PER_SECTION, 3);
  assert.doesNotMatch(html, />delta</);
  assert.match(html, /\+1 more/);
  assert.match(html, new RegExp(`href="${BASE}/projects/a--alpha/"`));
});

test('uses the Claude note when there is one, the template reason otherwise', () => {
  const { html } = buildWeeklyEmail(edition(), { 'a/alpha': 'Shipped v2 with a new parser.' }, BASE);
  assert.match(html, /Shipped v2 with a new parser\./);
  assert.match(html, /closed 4 issues · new commits/);
});

test('escapes project text', () => {
  const { html } = buildWeeklyEmail(edition({ rising: [item('x/<b>bad</b>')] }), { 'x/<b>bad</b>': 'a & b "c"' }, BASE);
  assert.doesNotMatch(html, /<b>bad<\/b>/);
  assert.match(html, /&lt;b&gt;bad&lt;\/b&gt;/);
  assert.match(html, /a &amp; b &quot;c&quot;/);
});
