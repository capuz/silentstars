import { test } from 'node:test';
import assert from 'node:assert/strict';
import { rewriteRelativeLinks, rewriteRelativeImages } from './readme-links.ts';

const REPO = 'https://github.com/owner/repo';
const RAW  = 'https://raw.githubusercontent.com/owner/repo/HEAD';

test('rewriteRelativeImages points a relative <img src> at the raw file in the repo', () => {
  assert.equal(
    rewriteRelativeImages('<img src="docs/favicon.png" width="32" alt="">', REPO),
    `<img src="${RAW}/docs/favicon.png" width="32" alt="">`,
  );
});

test('rewriteRelativeImages handles ./ and repo-root / prefixes', () => {
  assert.equal(rewriteRelativeImages('<img src="./a/b.png">', REPO), `<img src="${RAW}/a/b.png">`);
  assert.equal(rewriteRelativeImages('<img src="/docs/x.png">', REPO), `<img src="${RAW}/docs/x.png">`);
});

test('rewriteRelativeImages handles single quotes and tags split across lines', () => {
  assert.equal(rewriteRelativeImages("<img alt='x' src='logo.svg'>", REPO), `<img alt='x' src='${RAW}/logo.svg'>`);
  assert.equal(
    rewriteRelativeImages('<img\n    src="assets/icons/tisty-256.png"\n    width="140">', REPO),
    `<img\n    src="${RAW}/assets/icons/tisty-256.png"\n    width="140">`,
  );
});

test('rewriteRelativeImages leaves absolute, protocol-relative and data: URLs alone', () => {
  for (const src of ['https://x.io/a.png', 'http://x.io/a.png', '//cdn.x.io/a.png', 'data:image/png;base64,AAA']) {
    const html = `<img src="${src}">`;
    assert.equal(rewriteRelativeImages(html, REPO), html);
  }
});

test('rewriteRelativeImages only touches <img>, not links or other tags', () => {
  const html = '<a href="docs/x.md">x</a> <script src="a.js"></script>';
  assert.equal(rewriteRelativeImages(html, REPO), html);
});

test('rewriteRelativeLinks still sends relative markdown links to the repo on GitHub', () => {
  assert.equal(rewriteRelativeLinks('[docs](./docs/x.md)', REPO), `[docs](${REPO}/blob/HEAD/docs/x.md)`);
  assert.equal(rewriteRelativeLinks('[site](https://x.io)', REPO), '[site](https://x.io)');
});
