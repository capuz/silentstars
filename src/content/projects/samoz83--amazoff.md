---
repo: "samoz83/AmazOff"
name: "AmazOff"
description: "Patch-based customization layer for the stock Amazon app on rooted LG webOS TVs."
readmeQualityOk: true
url: "https://github.com/samoz83/AmazOff"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [95]
topics: ["adblock", "homebrew", "lg-tv", "prime-video", "webos"]
stars: 5
forks: 1
openIssues: 2
closedIssues: 4
watchers: 0
contributors: 5
recentReleases: 9
createdAt: "2026-10-17T12:46:50Z"
lastCommitAt: "2026-11-23T13:29:11Z"
lastReleaseAt: "2026-11-23T13:30:02Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 90
undervaluedScore: 62
maintainers: ["samoz83", "0xkr4t0s"]
openGraphImageUrl: "https://opengraph.githubassets.com/05a3a04cbd18666be064c4be7e4a77a32433d46d8489c1308e6134a67f30a7f1/samoz83/AmazOff"
---

# AmazOff

> Patch-based customization layer for the stock Amazon app on rooted LG webOS TVs.

> **Note**
>
> AmazOff continues development of [azoffshowy/AmazOff](https://github.com/azoffshowy/AmazOff), which stopped at 0.2.3. It tracks Amazon's current player bundle and adds the fixes listed under [Changes since upstream 0.2.3](#changes-since-upstream-023).

## Changes since upstream 0.2.3

Version 0.3.6, compared with upstream 0.2.3:

**Supported**
- Amazon's current player bundles (mid-November 2026). `onebox1` (webOS 4.x), `wave1` and `wave3` each serve their own bundle, and `wave2` serves the same one as `wave1`. The no-ads patch is built per route and checked by hash.
- Prime Video app 6.3.42, including blocking its pre-rolls.
- [Glasshouse](https://github.com/rorygallagher2024/glasshouse) 0.100 or later with its ad blocker on. Glasshouse keeps AmazOff's hosts entry in its table.
