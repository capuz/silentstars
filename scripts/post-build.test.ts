import { test } from 'node:test';
import assert from 'node:assert/strict';
import { buildPost, isSubmitCtaDay } from './post-build.ts';
import { blueskyHandleFromSocialAccounts } from './post-shared.ts';
import type { Project } from './post-shared.ts';

const BASE = 'https://capuz.github.io/silentstars';

const project: Project = {
  repo: 'Peon-sh/Peon',
  name: 'Peon',
  description: 'Self-hostable deployment platform',
  url: 'https://github.com/Peon-sh/Peon',
  language: 'TypeScript',
  topics: ['coolify'],
  createdAt: '2025-01-01',
  stars: 40,
  healthScore: 80,
  undervaluedScore: 90,
  status: 'thriving',
  tags: [],
  readmeQualityOk: true,
  hasPage: true,
};

const OWNER     = { handle: 'peon.dev', did: 'did:plc:owner' };
const SUBMITTER = { handle: 'fan.bsky.social', did: 'did:plc:fan' };

const WEEKDAY = '2026-10-07'; // Wednesday
const SUNDAY  = '2026-10-11';

// Slices the UTF-8 bytes a facet points at, so offsets are checked against
// the real text (emoji openers make char and byte offsets diverge).
function facetText(text: string, f: { index: { byteStart: number; byteEnd: number } }): string {
  const bytes = new TextEncoder().encode(text);
  return new TextDecoder().decode(bytes.slice(f.index.byteStart, f.index.byteEnd));
}

function featuresOf(facets: any[], type: string) {
  return facets.filter(f => f.features[0].$type === `app.bsky.richtext.facet#${type}`);
}

test('plain weekday post keeps today\'s shape: no mention, no submit link', () => {
  const { text, facets } = buildPost(project, BASE, 'Deploy apps to your own servers.', { today: WEEKDAY });
  assert.equal(featuresOf(facets, 'mention').length, 0);
  assert.equal(featuresOf(facets, 'link').length, 1);
  const [link] = featuresOf(facets, 'link');
  assert.equal(facetText(text, link), 'Peon');
  assert.equal(link.features[0].uri, project.url);
  assert.ok(!text.includes('Submit'));
});

test('owner with Bluesky gets a "by @handle" mention facet at the right bytes', () => {
  const { text, facets } = buildPost(project, BASE, 'Deploy apps.', { today: WEEKDAY, owner: OWNER });
  assert.ok(text.includes('\nby @peon.dev\n'));
  const [m] = featuresOf(facets, 'mention');
  assert.equal(facetText(text, m), '@peon.dev');
  assert.equal(m.features[0].did, OWNER.did);
});

test('Sunday swaps the CTA for a submit link to /submit/', () => {
  assert.equal(isSubmitCtaDay(SUNDAY), true);
  assert.equal(isSubmitCtaDay(WEEKDAY), false);
  const { text, facets } = buildPost(project, BASE, 'Deploy apps.', { today: SUNDAY });
  const submit = featuresOf(facets, 'link').find(f => f.features[0].uri === `${BASE}/submit/`);
  assert.ok(submit, 'submit link facet present');
  assert.ok(text.endsWith(facetText(text, submit!)));
  assert.match(facetText(text, submit!), /Submit/);
});

test('community pick credits the submitter and invites more submissions', () => {
  const { text, facets } = buildPost(project, BASE, 'Deploy apps.', {
    today: WEEKDAY, owner: OWNER, submitter: SUBMITTER,
  });
  assert.ok(text.startsWith('🙌 Community pick — submitted by @fan.bsky.social'));
  const mentions = featuresOf(facets, 'mention');
  assert.deepEqual(mentions.map(m => facetText(text, m)), ['@fan.bsky.social', '@peon.dev']);
  assert.deepEqual(mentions.map(m => m.features[0].did), [SUBMITTER.did, OWNER.did]);
  const [name] = featuresOf(facets, 'link');
  assert.equal(facetText(text, name), 'Peon');
  assert.ok(featuresOf(facets, 'link').some(f => f.features[0].uri === `${BASE}/submit/`));
});

test('community pick without a submitter handle still labels the post', () => {
  const { text, facets } = buildPost(project, BASE, 'Deploy apps.', { today: WEEKDAY, submitter: null, communityPick: true });
  assert.ok(text.startsWith('🙌 Community pick\n'));
  assert.equal(featuresOf(facets, 'mention').length, 0);
});

test('owner who submitted their own project is mentioned once', () => {
  const { facets } = buildPost(project, BASE, 'Deploy apps.', { today: WEEKDAY, owner: OWNER, submitter: OWNER });
  assert.equal(featuresOf(facets, 'mention').length, 1);
});

test('long pitch still fits the 300-grapheme cap with every extra line', () => {
  const { text } = buildPost(project, BASE, 'x'.repeat(400), {
    today: SUNDAY, owner: OWNER, submitter: SUBMITTER,
  });
  assert.ok([...text].length <= 300, `got ${[...text].length}`);
});

test('hashtag facets still cover every tag', () => {
  const { text, facets } = buildPost(project, BASE, 'Deploy apps.', { today: WEEKDAY, owner: OWNER });
  const tags = featuresOf(facets, 'tag').map(f => facetText(text, f));
  assert.ok(tags.includes('#typescript'));
  assert.ok(tags.includes('#coolify'));
});

test('blueskyHandleFromSocialAccounts reads handle from provider=bluesky URL', () => {
  assert.equal(blueskyHandleFromSocialAccounts([
    { provider: 'twitter', url: 'https://twitter.com/x' },
    { provider: 'bluesky', url: 'https://bsky.app/profile/zitadel.com' },
  ]), 'zitadel.com');
  assert.equal(blueskyHandleFromSocialAccounts([
    { provider: 'generic', url: 'https://bsky.app/profile/someone.bsky.social/' },
  ]), 'someone.bsky.social');
  assert.equal(blueskyHandleFromSocialAccounts([{ provider: 'twitter', url: 'https://twitter.com/x' }]), null);
  assert.equal(blueskyHandleFromSocialAccounts([]), null);
});
