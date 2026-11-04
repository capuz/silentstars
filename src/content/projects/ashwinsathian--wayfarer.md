---
repo: "AshwinSathian/wayfarer"
name: "wayfarer"
description: "The API client that can't rug-pull you. A local-first, no-account API testing client with collections, environments, an encrypted secrets vault, pre/post-request scripts, and a Postman-grade response viewer, entirely in the browser."
readmeQualityOk: true
url: "https://github.com/AshwinSathian/wayfarer"
homepage: "https://wayfarer.ashwinsathian.com"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [84]
topics: ["angular", "indexeddb", "api-client", "api-testing", "developer-tools", "http-client", "local-first", "primeng", "rest-client", "typescript"]
stars: 6
forks: 2
openIssues: 5
closedIssues: 83
watchers: 1
contributors: 2
recentReleases: 2
createdAt: "2020-01-04T22:38:52Z"
lastCommitAt: "2026-11-04T08:03:36Z"
lastReleaseAt: "2026-10-19T14:44:17Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 99
undervaluedScore: 91
maintainers: ["AshwinSathian"]
openGraphImageUrl: "https://opengraph.githubassets.com/7dd3a2a6e33e9d65389cb931a8466f7785da815600ad8932e937eb30064adea8/AshwinSathian/wayfarer"
---

# Wayfarer

**An API client that runs in your browser and keeps your work on your device.**

Wayfarer has no account, no server of its own and no telemetry. Your requests, collections, environments and history live in your browser's IndexedDB. The values you put in the secrets vault are encrypted, and everything else is stored as plain text. Export or back up whenever you want.

**Use it:** https://wayfarer.ashwinsathian.com/ (a release is a tag; the deployed copy may be older), or [host it yourself](https://github.com/AshwinSathian/wayfarer/blob/HEAD/docs/self-hosting.md). What changed: [CHANGELOG](https://github.com/AshwinSathian/wayfarer/blob/HEAD/CHANGELOG.md).

---

## What it does

Every line below is a claim from [`docs/claims.md`](https://github.com/AshwinSathian/wayfarer/blob/HEAD/docs/claims.md). Each claim has a test that runs in CI, in Chromium, Firefox and WebKit where it is about the page. The list is generated from that ledger (`npm run gen:readme`), so it cannot say more than the tests prove.

- No account, no cloud, no telemetry: apart from loading the app, the only network traffic is the request the user composes, sent to the host they chose, and, when its auth…
