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

test('the star trails page is the main link, the edition page comes after it', () => {
  const { html } = buildWeeklyEmail(edition(), {}, BASE);
  const main = html.indexOf(`href="${BASE}/weekly/"`);
  const edition42 = html.indexOf(`href="${BASE}/weekly/2026-W42/"`);
  assert.ok(main >= 0, 'links to /weekly/');
  assert.ok(edition42 >= 0, 'links to the edition page');
  assert.ok(main < edition42, '/weekly/ comes first');
  assert.match(html, /star trails/i);
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
  for (const n of ['alpha', 'beta', 'gamma']) assert.match(html, new RegExp(`>${n}<`));
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
