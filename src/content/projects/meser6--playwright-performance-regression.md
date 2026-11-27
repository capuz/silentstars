---
repo: "Meser6/playwright-performance-regression"
name: "playwright-performance-regression"
description: "Catch backend performance regressions from the Playwright tests you already have."
readmeQualityOk: true
url: "https://github.com/Meser6/playwright-performance-regression"
language: "TypeScript"
languages: ["TypeScript", "HTML"]
languagePcts: [65, 31]
stars: 6
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 6
createdAt: "2026-11-18T18:55:45Z"
lastCommitAt: "2026-11-27T12:23:55Z"
lastReleaseAt: "2026-11-25T16:56:20Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 89
undervaluedScore: 54
maintainers: ["Meser6"]
openGraphImageUrl: "https://opengraph.githubassets.com/fc1daffcbc4fb708c1f49f85e63fcb91823a8487cb8a772c945e73da3c67beb7/Meser6/playwright-performance-regression"
---

# playwright-performance-regression

Catch backend performance regressions from the Playwright tests you already have.

Live demo reports of an example project: [a slow endpoint and a fast failure](https://meser6.github.io/playwright-performance-regression/).

## How it works

1. **Measures** the backend requests your browser makes (and the `request` calls of API tests)
   while your existing e2e tests run, in a separate measurement run
   (`PW_PERF_MODE=test npm run e2e`): your test command runs a few times in a row (passes), and
   all passes are evaluated together.
2. **Groups** the requests into endpoint keys such as `GET /api/orders/:id`, and computes
   statistics per key: median, p95, p99, error rate and more.
3. **Derives thresholds** from a run and writes them to JSON files that you review and commit like
   code.
4. **Fails the run** when an endpoint gets slower, returns more errors or fails fast more often
   (a 401 in 8 ms instead of a 200 in 120 ms) than its thresholds allow, with a console summary
   and a self-contained HTML report.

Your normal `npx playwright test` runs are not changed.

## Install

```sh
npm init playwright-performance-regression
```
