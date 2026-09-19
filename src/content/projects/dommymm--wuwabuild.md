---
repo: "DommyMM/wuwabuild"
name: "wuwabuild"
description: "Build Cards and Leaderboards for Wuthering Waves. Runs off of custom, robust OCR backend as WuWa has no API yet. "
readmeQualityOk: true
url: "https://github.com/DommyMM/wuwabuild"
homepage: "https://wuwa.build"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [83]
stars: 5
forks: 0
openIssues: 0
closedIssues: 1
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2024-10-14T04:28:47Z"
lastCommitAt: "2026-09-19T08:15:25Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 99
undervaluedScore: 83
maintainers: ["DommyMM"]
openGraphImageUrl: "https://opengraph.githubassets.com/5c0a10097dc5d7564dba5573da769fb77f270a81b164e8654556d73da6bce9a9/DommyMM/wuwabuild"
---

# WuWaBuilds Frontend

Next.js App Router frontend for [wuwa.build](https://wuwa.build), a Wuthering Waves build creator and leaderboard.

Stack: Next.js 16, React 19, TypeScript 6, Tailwind CSS 4, Motion (`motion` on npm).

Routes live under `app/`. The `(game)` route group wraps every page that needs game-data providers.
Ten languages ship: English, Japanese, Korean, Chinese (Simplified and Traditional), German, Spanish,
French, Thai, Ukrainian.

## Where to look

[AGENTS.md](https://github.com/DommyMM/wuwabuild/blob/HEAD/AGENTS.md) routes by area. [docs/README.md](https://github.com/DommyMM/wuwabuild/blob/HEAD/docs/README.md) routes by topic.

| Question | Doc |
| --- | --- |
| How a route fetches, caches and renders leaderboard data | [docs/leaderboards.md](https://github.com/DommyMM/wuwabuild/blob/HEAD/docs/leaderboards.md) |
| Provider boundaries and editor state flow | [docs/editor-and-state.md](https://github.com/DommyMM/wuwabuild/blob/HEAD/docs/editor-and-state.md) |
| OCR import flow, sync scripts, image mirror | [docs/data-pipeline.md](https://github.com/DommyMM/wuwabuild/blob/HEAD/docs/data-pipeline.md) |
| Why Wuthery is the default data source |…
