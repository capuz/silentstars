---
repo: "VladyslavDmitriiev/playwright-mutation-gate"
name: "playwright-mutation-gate"
description: "Mutation gate for Playwright: inverts each test's primary assertion and fails the run if it stays green. A passing test only means something if it can fail."
readmeQualityOk: true
url: "https://github.com/VladyslavDmitriiev/playwright-mutation-gate"
homepage: "https://dmitriiev.dev"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [95]
topics: ["assertions", "ci", "e2e", "mutation-testing", "playwright", "test-automation", "testing", "typescript"]
stars: 5
forks: 0
openIssues: 0
closedIssues: 2
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-07-13T15:41:00Z"
lastCommitAt: "2026-11-24T14:08:29Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 85
undervaluedScore: 27
maintainers: ["VladyslavDmitriiev"]
openGraphImageUrl: "https://opengraph.githubassets.com/f7ca206e55423fe435740077ab31049e3a50ed10ea971b7f31b59722b0b3f987/VladyslavDmitriiev/playwright-mutation-gate"
---

# playwright-mutation-gate

> A passing test only means something if it can fail.

`playwright-mutation-gate` inverts the assertion you marked as primary and
re-runs the test. If it stays green, the assertion is hollow and the gate
fails your CI run instead of reporting a lie.

```
fixtures/demo.spec.ts
  killed         shows error for invalid email  :8
  killed         hides error for valid email    :16
  killed         shows success for valid email  :24
  survived       hides success initially        :31

3 killed, 1 survived, 0 cannot-mutate, 0 errors
Gate FAILED: hollow, unverified or broken assertions above.
```

## Quick start

Requires **Node >= 20** and a working **Playwright** setup (any version that
supports `playwright test`).

```bash
npm install -D playwright-mutation-gate
```

Mark the primary assertion in each test with `// @primary-assert`. Put it at
the end of the assertion line, or on its own line right above it. The assertion
itself must be a single-line `expect(...)` call.
