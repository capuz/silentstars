---
repo: "LeagueToolkit/lol-meta-wiki"
name: "lol-meta-wiki"
description: "Wiki for documenting League of Legends Meta (.bin) classes and properties"
readmeQualityOk: true
url: "https://github.com/LeagueToolkit/lol-meta-wiki"
homepage: "https://meta-wiki.leaguetoolkit.dev/"
language: "TypeScript"
languages: ["TypeScript", "Astro"]
languagePcts: [52, 32]
topics: ["api", "data", "league", "league-client", "league-toolkit", "leagueoflegends", "lol", "ltk", "meta", "wiki"]
stars: 5
forks: 2
openIssues: 0
closedIssues: 5
watchers: 0
contributors: 7
recentReleases: 0
createdAt: "2025-10-31T13:30:38Z"
lastCommitAt: "2026-10-21T21:14:48Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 99
undervaluedScore: 87
maintainers: ["Crauzer", "actions-user"]
openGraphImageUrl: "https://opengraph.githubassets.com/27968a94a7e4e1ce961ba4beb622e4efb3f829884ddde349a84c31c428a41d04/LeagueToolkit/lol-meta-wiki"
---

Browsable documentation for the League of Legends meta (`.bin`) classes and properties, live at
[meta-wiki.leaguetoolkit.dev](https://meta-wiki.leaguetoolkit.dev/). The structure - 5,000+ classes,
their inheritance, property types and defaults, and what changed each patch - is generated from
[lol-meta-classes](https://github.com/LeagueToolkit/lol-meta-classes) and refreshes itself when a new
patch is dumped. **What each class and property actually means is written by hand, by contributors,
in YAML files in this repo.** The same dataset is served as a public JSON API.

**[Contributing documentation](#contributing-documentation)** · **[Public API](#public-api)** · **[Development](#development)** · **[How it stays current](#how-it-stays-current)**

## Features

- **Class reference**: inheritance trees, own and inherited properties, types, defaults, and the
  builds each one existed in.
- **Patch changelog**: what was added, removed, or changed type per build.
- **Community documentation**: prose, examples, and notes contributed as YAML and rendered as
  Markdown on the class pages.
- **Public JSON API**: the same data behind `/v1/*`, no key, permissive CORS.

## Contributing…
