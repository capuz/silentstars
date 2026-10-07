---
repo: "iterate/middlewright"
name: "middlewright"
description: "A plugin/middleware system for Playwright locator actions — spinner-aware waiting, hydration gates, UI error reporting, video highlighting, LLM-powered recovery"
readmeQualityOk: true
url: "https://github.com/iterate/middlewright"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [100]
stars: 6
forks: 0
openIssues: 1
closedIssues: 2
watchers: 0
contributors: 4
recentReleases: 3
createdAt: "2026-06-11T15:04:16Z"
lastCommitAt: "2026-10-07T10:30:22Z"
lastReleaseAt: "2026-08-13T08:02:58Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 87
undervaluedScore: 51
maintainers: ["mmkal", "jonastemplestein"]
openGraphImageUrl: "https://opengraph.githubassets.com/1154036e7e32d53a33fcd461fc6e4643607ceb4020a3d028da9727370b9e454f/iterate/middlewright"
---

# middlewright

A plugin/middleware system for Playwright locator actions — the one Playwright doesn't have.

Wrap `click`, `fill`, `inputValue`, `waitFor` and friends with composable middleware, so your tests can be smart about *why* an action is slow or failing, without sprinkling `waitForSomething()` helpers through every test.

## Quick start

Install with `pnpm add -D middlewright` then wire it once in a fixture:

```ts
// test-helpers.ts
import { test as base } from "@playwright/test";
import { addPlugins, spinnerWaiter } from "middlewright";

export const test = base.extend({
  page: async ({ page: basePage }, use, testInfo) => {
    await using page = await addPlugins({
      page: basePage,
      testInfo,
      plugins: [spinnerWaiter()],
    });
    await use(page);
  },
});
```

Then write completely ordinary tests — no special helpers, no wrapper calls:

```ts
import { test } from "./test-helpers";

test("kick off a slow report", async ({ page }) => {
  await page.goto("/reports");
  await page.getByRole("button", { name: "Generate report" }).click();
  // The report takes ~20s. The app shows "generating..." while it runs, so
  // spinnerWaiter waits patiently here —…
