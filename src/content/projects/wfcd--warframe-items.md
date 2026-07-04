---
repo: "WFCD/warframe-items"
name: "warframe-items"
description: "📘 Get all Warframe items directly from Warframe's API. No more messy wikia scraping."
readmeQualityOk: true
url: "https://github.com/WFCD/warframe-items"
language: "TypeScript"
languages: ["TypeScript", "Lua", "JavaScript"]
languagePcts: [50, 26, 24]
topics: ["warframe", "items", "api", "rivens", "ducats", "drop-rates", "patchlogs", "warframe-items", "warframe-api"]
stars: 393
forks: 72
openIssues: 6
closedIssues: 194
watchers: 8
contributors: 43
recentReleases: 0
createdAt: "2018-05-18T21:01:05Z"
lastCommitAt: "2026-07-04T22:51:26Z"
lastReleaseAt: "2018-05-24T22:06:17Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "legacy_hero"]
healthScore: 98
undervaluedScore: 38
maintainers: ["wfcd-bot-boi", "dependabot[bot]", "TobiTenno"]
openGraphImageUrl: "https://opengraph.githubassets.com/c89f6d37f1c3a2295da720c383fafcad0c7d7b51d474c20dbbbb0e614efdef0c/WFCD/warframe-items"
---

## Warframe Items

<br>

Fetches all items available on Warframe's mobile API endpoints while also
adding images, drop rates, patch logs and related rivens.

The aim of this library is to create a complete collection of data for every
item in Warframe based on the game's own data. This repo will be automatically
updated on every new release, drop rate change or image change.

<br>

### Why use this instead of any other scraper?
Because this gives you literally every item in Warframe, many of which can't even
be found on the wikia. We also make sure to include every other data aspect
that you could possibly need. To give you some idea:

- Unique ingame name - (/Lotus/Weapons/Tenno/...) - Especially useful when working with worldState
- Drop rates
- Patchlogs for each item
- Minified source images
- Rivens
- Whether items are tradable

And tons more item specific data. Check out [/data/json](/data/json) to get an
idea.

<br>

### Installation
```
npm install @wfcd/items
```

<br>

### Usage
```js
// CommonJS
const Items = require('@wfcd/items');
const items = new Items(options, ...oldItems);

// ESM
import Items from '@wfcd/items';
const items = new Items(options, ...oldItems);

//…
