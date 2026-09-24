---
repo: "opentabs-app/opentabs"
name: "opentabs"
description: "A new tab page for Chrome, Edge and Firefox that shows the tabs you already have open — grouped by site, closable — above a briefing you choose. Free, no account, nothing about you leaves your browser. Rust/WebAssembly core, AGPL-3.0."
readmeQualityOk: true
url: "https://github.com/opentabs-app/opentabs"
homepage: "https://opentabs.app"
language: "TypeScript"
languages: ["TypeScript", "Rust"]
languagePcts: [46, 43]
topics: ["browser-extension", "chrome-extension", "edge-extension", "firefox-extension", "local-first", "manifest-v3", "new-tab-page", "open-source", "privacy", "rust"]
stars: 22
forks: 2
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 4
createdAt: "2026-09-06T05:50:44Z"
lastCommitAt: "2026-09-24T08:42:17Z"
lastReleaseAt: "2026-09-22T10:57:00Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 79
undervaluedScore: 35
maintainers: ["opentabs-app"]
openGraphImageUrl: "https://opengraph.githubassets.com/32bf371f55a003b943740981cae8979086a4375ed4a1088539e03679b23ecf68/opentabs-app/opentabs"
---

# OpenTabs

A new tab page that shows your **actual open tabs** — grouped by site and
closable — above a calm briefing you choose: web apps, markets, weather,
news topics, repos, calendar, to-dos.

Built on the OpenApps design system.

```
crates/tabs-core      pure Rust — parsing, ranking, grouping, dates. native + wasm
crates/tabs-feedgen   the daily feeds: two static files, no database
crates/tabs-market    the marketplace's ranking, moderation and privacy core
apps/extension        MV3 extension (Chrome + Firefox), vanilla TS
apps/market-api       the marketplace API: axum + SQLite, one binary
deploy/               the market API's Docker and nginx pieces
docs/config.schema.json  the published config schema
```

The website — opentabs.app, market.opentabs.app, and the deploy scripts and
nginx configs that serve them — is not here. It is private, at
`opentabs-app/opentabs-website`, checked out beside this repo as
`openapps/opentabs-website/`. This repository is the extension and the market
API, and nothing a visitor to the site reads.

## Where it runs

| | |
|---|---|
| `opentabs.app` | the site, and the two daily feed files the extension reads |
| `market.opentabs.app` | the…
