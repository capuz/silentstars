import { test } from 'node:test';
import assert from 'node:assert/strict';
import { resolveNotFound } from './not-found.ts';

const live = new Set(['acme--rocket', 'keiretsu-labs--kubernetes-manifests']);

test('removed /dashboard/ page goes home', () => {
  assert.deepEqual(resolveNotFound('/dashboard/', live), { kind: 'redirect', to: '/' });
  assert.deepEqual(resolveNotFound('/dashboard', live), { kind: 'redirect', to: '/' });
});

test('removed RSS feed goes to the weekly editions', () => {
  for (const p of ['/rss.xml', '/feed.xml', '/feed/', '/rss']) {
    assert.deepEqual(resolveNotFound(p, live), { kind: 'redirect', to: '/weekly/' }, p);
  }
});

test('legacy /silentstars/ base path is stripped', () => {
  assert.deepEqual(resolveNotFound('/silentstars/', live), { kind: 'redirect', to: '/' });
  assert.deepEqual(resolveNotFound('/silentstars/projects/', live), { kind: 'redirect', to: '/projects/' });
  assert.deepEqual(
    resolveNotFound('/silentstars/projects/acme--rocket/', live),
    { kind: 'redirect', to: '/projects/acme--rocket/' },
  );
});

test('live project with odd casing or owner/repo form is normalised', () => {
  assert.deepEqual(resolveNotFound('/projects/Acme--Rocket', live), { kind: 'redirect', to: '/projects/acme--rocket/' });
  assert.deepEqual(resolveNotFound('/projects/acme/rocket/', live), { kind: 'redirect', to: '/projects/acme--rocket/' });
  assert.deepEqual(resolveNotFound('/project/acme--rocket/', live), { kind: 'redirect', to: '/projects/acme--rocket/' });
});

test('project no longer in the directory is reported as retired with its GitHub owner', () => {
  assert.deepEqual(resolveNotFound('/projects/dcgo2--dcgo/', live), {
    kind: 'retired', slug: 'dcgo2--dcgo', owner: 'dcgo2', repoHint: 'dcgo',
  });
  // repo names may start with a hyphen once dots/underscores were slugified away
  assert.deepEqual(resolveNotFound('/projects/cizzko---270-on-celsius/', live), {
    kind: 'retired', slug: 'cizzko---270-on-celsius', owner: 'cizzko', repoHint: '-270-on-celsius',
  });
  assert.deepEqual(resolveNotFound('/silentstars/projects/gone--repo/', live), {
    kind: 'retired', slug: 'gone--repo', owner: 'gone', repoHint: 'repo',
  });
});

test('anything else is unknown', () => {
  assert.deepEqual(resolveNotFound('/wp-login.php', live), { kind: 'unknown' });
  assert.deepEqual(resolveNotFound('/projects/no-separator/', live), { kind: 'unknown' });
  assert.deepEqual(resolveNotFound('/silentstars/wp-admin', live), { kind: 'unknown' });
});
