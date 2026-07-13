---
repo: "yjl9903/anitomy"
name: "anitomy"
description: "A TypeScript port of Anitomy inspired by AnitomySharp"
readmeQualityOk: true
url: "https://github.com/yjl9903/anitomy"
homepage: "https://garden.onekuma.cn/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [100]
topics: ["anime", "anitomy", "anitomy-js", "animegarden", "animespace", "bangumi", "dmhy", "typescript"]
stars: 10
forks: 0
openIssues: 1
closedIssues: 1
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2024-01-09T17:04:56Z"
lastCommitAt: "2026-07-13T06:37:38Z"
lastReleaseAt: "2024-07-19T16:17:59Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 89
undervaluedScore: 65
maintainers: ["renovate[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/9d0bcbeca1ecd9ad520ffc8937fa76048fb9a75c8bb9299f1ea783314055a030/yjl9903/anitomy"
fundingLinks: ["GITHUB:https://github.com/yjl9903"]
---

# Anitomy

A TypeScript port of [Anitomy](https://github.com/erengy/anitomy) inspired by [AnitomySharp](https://github.com/tabratton/AnitomySharp). All credits to [erengy](https://github.com/erengy) for the actual library.

More features:

+ Implemented without any dependencies, which supports run in Node.js, Deno, Bun, and Browser
+ Optimized for parsing Chinese torrent name from [動漫花園](https://share.dmhy.org/)

> 👷‍♂️ Still work in progress.

## Installation

```bash
npm i anitomy
```

## Usage

```ts
import { parse } from 'anitomy'

const info = parse(`[Lilith-Raws] 熊熊勇闖異世界 PUNCH！ / Kuma Kuma Kuma Bear S02 - 02 [Baha][WEB-DL][1080p][AVC AAC][CHT][MP4]`)
```

```js
{
  "audio": {
    "term": "AAC",
  },
  "episode": {
    "number": 2,
    "numberAlt": undefined,
    "title": undefined,
  },
  "file": {
    "checksum": undefined,
    "extension": "MP4",
    "name": "[Lilith-Raws] 熊熊勇闖異世界 PUNCH！ / Kuma Kuma Kuma Bear S02 - 02 [Baha][WEB-DL][1080p][AVC AAC][CHT][MP4]",
  },
  "language": "CHT",
  "month": undefined,
  "release": {
    "group": "Lilith-Raws",
    "version": undefined,
  },
  "season": "2",
  "source": "WEB-DL",
  "subtitles": undefined,
  "title": "熊熊勇闖異世界 PUNCH！ /…
