---
repo: "taqelah/taqwright"
name: "taqwright"
description: "E2E mobile UI testing on the Playwright runner, with a flat locator API on top of Appium 3."
readmeQualityOk: true
url: "https://github.com/taqelah/taqwright"
homepage: "https://www.taqwright.dev"
language: "TypeScript"
languages: ["TypeScript", "JavaScript"]
languagePcts: [79, 21]
stars: 37
forks: 3
openIssues: 2
closedIssues: 4
watchers: 0
contributors: 11
recentReleases: 1
createdAt: "2026-06-04T12:28:04Z"
lastCommitAt: "2026-11-02T17:57:09Z"
lastReleaseAt: "2026-10-01T09:17:34Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 88
undervaluedScore: 40
maintainers: ["syam-taqelah", "syamsasi99", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/e3fc431caef03a327040016497081f1bb46b2c7ce12546d7f160e6627396b597/taqelah/taqwright"
discussionCount: 0
---

Taqwright

E2E mobile UI testing on the Playwright runner, with a flat locator API on top of Appium 3.

> ✅ **The 1.x API is stable.** It follows semver — breaking changes land only in a new major. Install it with `npm i -D @taqwright/taqwright`. Bug reports and feedback are very welcome — [open an issue](https://github.com/taqelah/taqwright/issues).

```ts
import { test, expect } from '@taqwright/taqwright';

test('User can login', async ({ mobile }) => {
  await mobile.getByLabel('Username').fill('admin');
  await mobile.getByLabel('Password').fill('password');
  await mobile.getByText('Login').click();
  await expect(mobile.getByText('Welcome')).toBeVisible();
});
```

> 📚 **Full documentation: [taqwright.dev/docs](https://www.taqwright.dev/docs/category/getting-started)** — install taqwright, write and generate tests, run and debug them, and scale out in parallel.

## Why Taqwright?

If you've used Playwright, you already know Taqwright. It keeps the Playwright-style API
you already write — `getByRole`, `expect`, test fixtures — and drives real iOS and Android
devices through Appium 3 over WebDriver. Record a test as you tap through the app with the
built-in `codegen`. Locate…
