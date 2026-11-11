---
repo: "tradeux/tradeux"
name: "tradeux"
description: "POE TradeUX enhances the Path of Exile 2 trade-search interface while continuing to use the website’s native search form."
readmeQualityOk: true
url: "https://github.com/tradeux/tradeux"
language: "JavaScript"
languages: ["JavaScript", "TypeScript"]
languagePcts: [60, 36]
stars: 8
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-09-02T07:07:06Z"
lastCommitAt: "2026-11-11T19:46:11Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 64
undervaluedScore: 15
maintainers: ["tradeux"]
openGraphImageUrl: "https://opengraph.githubassets.com/72a11e3f66aead3fd4aaa279342b24fc9ea5b0f8376c9587371128e03c3772c3/tradeux/tradeux"
---

# POE TradeUX

POE TradeUX is one Chrome extension for the Path of Exile 1 and Path of Exile 2 trade-search interfaces. It adds compact search helpers, item presets, stat-filter tools, and optional layout changes while continuing to use each site's native trade form.

The URL selects the game automatically: `/trade/*` for PoE1 and `/trade2/*` for PoE2. Search helpers stay off exchange and settings pages. Appearance preferences are shared; enabled controls and favourites are stored separately per game. Existing saved settings migrate into PoE2.

PoE1 data targets **Allflame 3.29**. It excludes confirmed legacy items and does not switch the site's selected league. See the [implementation plan](https://github.com/tradeux/tradeux/blob/HEAD/docs/plans/POE1-POE2-IMPLEMENTATION-PLAN.md) and [validation progress](https://github.com/tradeux/tradeux/blob/HEAD/docs/plans/POE1-POE2-PROGRESS.md) for evidence and remaining acceptance checks.

## Features

### Layout and appearance

- Two-column layout with filters on the left and results on the right.
- Full-width layout up to 1920 pixels.
- Sticky filters and search controls.
- Optional removal of the page background.
- Optional hiding of…
