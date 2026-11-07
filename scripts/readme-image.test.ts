import { test } from 'node:test';
import assert from 'node:assert/strict';
import { cardImageUrl, coverFit, readmeImageCandidates, refreshCardImages, resolveCardImage, type CardImageCache } from './readme-image.ts';

const REPO_URL = 'https://github.com/owner/repo';
const NOW = new Date('2026-11-06T00:00:00Z');
const CUSTOM = 'https://repository-images.githubusercontent.com/1/abc';
const AUTO   = 'https://opengraph.githubassets.com/abc/owner/repo';

const wide = async () => ({ width: 1280, height: 720 });

test('candidates come from markdown and html images, in README order', () => {
  const md = '![shot](https://x.dev/a.png "title")\n<img width="600" src="https://x.dev/b.webp">';
  assert.deepEqual(readmeImageCandidates(md, REPO_URL), ['https://x.dev/a.png', 'https://x.dev/b.webp']);
});

test('relative paths resolve to the raw file on the default branch', () => {
  const md = '![a](docs/screenshot.png) ![b](./assets/hero.png) ![c](/public/shot.jpg)';
  assert.deepEqual(readmeImageCandidates(md, REPO_URL), [
    `${REPO_URL}/raw/HEAD/docs/screenshot.png`,
    `${REPO_URL}/raw/HEAD/assets/hero.png`,
    `${REPO_URL}/raw/HEAD/public/shot.jpg`,
  ]);
});

test('badges, vector, animated and identity images are skipped', () => {
  const md = [
    '![b](https://img.shields.io/badge/x-y-green.png)',
    '![c](https://github.com/o/r/actions/workflows/ci.yml/badge.png)',
    '![s](docs/diagram.svg)',
    '![g](https://cdn.x.dev/opening.gif)',
    '![l](frontend/public/Logo.png)',
    '![i](docs/brand/meshlive-icon-1024.png)',
    '![f](docs/favicon.png)',
    '![a](https://avatars1.githubusercontent.com/u/63645182?s=200&v=4)',
    '![ok](docs/dashboard.png)',
  ].join('\n');
  assert.deepEqual(readmeImageCandidates(md, REPO_URL), [`${REPO_URL}/raw/HEAD/docs/dashboard.png`]);
});

test('candidates repeat once and stop at the limit', () => {
  const md = Array.from({ length: 8 }, (_, i) => `![x](https://x.dev/${i}.png) ![x](https://x.dev/${i}.png)`).join('\n');
  assert.equal(readmeImageCandidates(md, REPO_URL).length, 5);
});

test('a custom GitHub social image wins without probing anything', async () => {
  let probes = 0;
  const entry = await resolveCardImage({
    repo: 'owner/repo', repoUrl: REPO_URL, openGraphImageUrl: CUSTOM, readme: '![a](https://x.dev/a.png)',
    cache: {}, now: NOW, probe: async () => { probes++; return { width: 1280, height: 720 }; },
  });
  assert.equal(entry.url, CUSTOM);
  assert.equal(probes, 0);
});

test('the auto-generated GitHub image is not treated as a project image', async () => {
  const entry = await resolveCardImage({
    repo: 'owner/repo', repoUrl: REPO_URL, openGraphImageUrl: AUTO, readme: '![a](https://x.dev/a.png)',
    cache: {}, now: NOW, probe: wide,
  });
  assert.equal(entry.url, 'https://x.dev/a.png');
});

test('the first README image with usable size and shape is chosen', async () => {
  const sizes: Record<string, { width: number; height: number } | null> = {
    'https://x.dev/broken.png': null,
    'https://x.dev/small.png':  { width: 400, height: 200 },
    'https://x.dev/square.png': { width: 1000, height: 1000 },
    'https://x.dev/strip.png':  { width: 3000, height: 400 },
    'https://x.dev/good.png':   { width: 1600, height: 900 },
  };
  const readme = Object.keys(sizes).map(u => `![x](${u})`).join('\n');
  const entry = await resolveCardImage({
    repo: 'owner/repo', repoUrl: REPO_URL, readme, cache: {}, now: NOW, probe: async u => sizes[u] ?? null,
  });
  assert.equal(entry.url, 'https://x.dev/good.png');
});

test('a repo with no usable image is cached as null', async () => {
  const entry = await resolveCardImage({ repo: 'owner/repo', repoUrl: REPO_URL, readme: 'no images', cache: {}, now: NOW, probe: wide });
  assert.equal(entry.url, null);
  assert.equal(entry.checkedAt, NOW.toISOString());
});

test('a fresh cache entry is reused without probing', async () => {
  let probes = 0;
  const cache: CardImageCache = { 'owner/repo': { url: 'https://x.dev/old.png', checkedAt: '2026-10-20T00:00:00Z' } };
  const entry = await resolveCardImage({
    repo: 'Owner/Repo', repoUrl: REPO_URL, readme: '![a](https://x.dev/new.png)', cache, now: NOW,
    probe: async () => { probes++; return { width: 1280, height: 720 }; },
  });
  assert.equal(entry.url, 'https://x.dev/old.png');
  assert.equal(probes, 0);
});

test('a stale cache entry is checked again', async () => {
  const cache: CardImageCache = { 'owner/repo': { url: null, checkedAt: '2026-08-01T00:00:00Z' } };
  const entry = await resolveCardImage({ repo: 'owner/repo', repoUrl: REPO_URL, readme: '![a](https://x.dev/new.png)', cache, now: NOW, probe: wide });
  assert.equal(entry.url, 'https://x.dev/new.png');
});

test('a manual override beats everything, including the GitHub image, and never expires', async () => {
  const cache: CardImageCache = { 'owner/repo': { url: null, checkedAt: '2020-01-01T00:00:00Z', override: true } };
  const entry = await resolveCardImage({ repo: 'owner/repo', repoUrl: REPO_URL, openGraphImageUrl: CUSTOM, readme: '', cache, now: NOW, probe: wide });
  assert.equal(entry.url, null);
  assert.equal(entry.override, true);
});

test('a card shows the cached decision, or the GitHub image before one exists', () => {
  const cache: CardImageCache = { 'owner/repo': { url: null, checkedAt: '2026-11-01T00:00:00Z', override: true } };
  assert.equal(cardImageUrl('Owner/Repo', CUSTOM, cache), null);
  assert.equal(cardImageUrl('other/repo', CUSTOM, cache), CUSTOM);
  assert.equal(cardImageUrl('other/repo', AUTO, cache), null);
});

test('a nightly refresh keeps results and stops probing new repos at its budget', async () => {
  const items = Array.from({ length: 4 }, (_, i) => ({
    repo: `owner/r${i}`, repoUrl: `https://github.com/owner/r${i}`, readme: `![a](https://x.dev/${i}.png)`,
  }));
  let probes = 0;
  const cache = await refreshCardImages(items, {}, NOW, async () => { probes++; return { width: 1280, height: 720 }; }, 2);
  assert.equal(probes, 2);
  assert.equal(Object.keys(cache).length, 2);
});

test('repos already cached do not spend the nightly budget', async () => {
  const cached = { url: 'https://x.dev/old.png', checkedAt: '2026-11-01T00:00:00Z' };
  const items = [
    { repo: 'owner/old', repoUrl: 'https://github.com/owner/old', readme: '' },
    { repo: 'owner/new', repoUrl: 'https://github.com/owner/new', readme: '![a](https://x.dev/n.png)' },
  ];
  const cache = await refreshCardImages(items, { 'owner/old': cached }, NOW, wide, 1);
  assert.equal(cache['owner/old'], cached);
  assert.equal(cache['owner/new']?.url, 'https://x.dev/n.png');
});

test('images designed as banners are shown whole, screenshots fill the card', () => {
  assert.equal(coverFit(CUSTOM), 'contain');
  assert.equal(coverFit('https://github.com/o/r/raw/HEAD/banner.png'), 'contain');
  assert.equal(coverFit('https://github.com/o/r/raw/HEAD/assets/hero.png'), 'contain');
  assert.equal(coverFit('https://github.com/o/r/raw/HEAD/image/promotion.png'), 'contain');
  assert.equal(coverFit('https://github.com/o/r/raw/HEAD/docs/dashboard.png'), 'cover');
});
