---
repo: "mizchi/chaosbringer"
name: "chaosbringer"
description: "Chaos engineering for Playwright tests"
readmeQualityOk: true
url: "https://github.com/mizchi/chaosbringer"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [98]
stars: 46
forks: 0
openIssues: 17
closedIssues: 36
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-01-15T13:54:16Z"
lastCommitAt: "2026-09-28T10:05:55Z"
lastReleaseAt: "2026-05-16T12:52:09Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 88
undervaluedScore: 40
maintainers: ["mizchi", "claude"]
openGraphImageUrl: "https://opengraph.githubassets.com/0505f264e7d22bc0e12671828521a53239d6a98d5c139f8e8288a8a9b2c1970f/mizchi/chaosbringer"
---

# chaosbringer

Chaos testing toolkit for web apps. A Playwright-based crawler injects faults at every layer a browser test can reach — network, page lifecycle, JS runtime — and a sibling `@mizchi/server-faults` covers the layer the browser cannot reach: inside the server process. Same `traceparent`, one report.

## Where each package fits

`chaosbringer` only injects faults that a **browser-driven** test can reach. Server-internal failure modes need a sibling library. Pick the layer before reaching for a fault provider:

| Layer | Library | What it touches | When to use |
|---|---|---|---|
| **Application state** | `chaos({ setup })` hook | Backend rows, storage state, fixtures (via Playwright `page.request`) | "Crawler needs N todos to navigate" |
| **Network** | [`chaosbringer`](https://github.com/mizchi/chaosbringer/blob/HEAD/packages/chaosbringer) `faults.*` | HTTP between browser and server (Playwright `route()`) | "What does the UI do when `/api/x` is 500 / slow / aborted" |
| **Page lifecycle / runtime** | [`chaosbringer`](https://github.com/mizchi/chaosbringer/blob/HEAD/packages/chaosbringer) `lifecycleFaults` / `runtimeFaults` | Browser DOM, storage wipe, CPU throttle,…
