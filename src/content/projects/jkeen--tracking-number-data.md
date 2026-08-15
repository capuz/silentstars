---
repo: "jkeen/tracking_number_data"
name: "tracking_number_data"
description: "Shared data for cross platform tracking number detection"
readmeQualityOk: true
url: "https://github.com/jkeen/tracking_number_data"
homepage: "http://trackingnumber.fyi/"
language: "JavaScript"
languages: ["JavaScript", "Svelte"]
languagePcts: [46, 34]
stars: 143
forks: 47
openIssues: 4
closedIssues: 32
watchers: 6
contributors: 20
recentReleases: 0
createdAt: "2017-06-15T02:18:37Z"
lastCommitAt: "2026-08-15T04:04:33Z"
lastReleaseAt: "2025-04-07T14:58:20Z"
status: "thriving"
tags: ["needs_contributors", "legacy_hero", "funded"]
healthScore: 70
undervaluedScore: 45
maintainers: ["jkeen", "semantic-release-bot", "bramp"]
openGraphImageUrl: "https://opengraph.githubassets.com/f426c0c8d54483545e212b0c9923eb575dc7cec91a3878fc8360731717794a23/jkeen/tracking_number_data"
fundingLinks: ["GITHUB:https://github.com/jkeen", "BUY_ME_A_COFFEE:https://buymeacoffee.com/jeffkeen"]
discussionCount: 2
---

# About

This repository contains json files that programatically describe how to detect, validate, and decode the following types of tracking numbers:

## Supported Tracking Numbers. Illustrated in depth on [trackingnumber.fyi](https://trackingnumber.fyi)

| Carrier | Type | Length | Examples | Data |
| --- | --- | --- | --- | --- |
| Amazon | Amazon Logistics | 15 | [`TBA000000000000`](https://trackingnumber.fyi/TBA000000000000) [`TBA010000000000`](https://trackingnumber.fyi/TBA010000000000) [`TBC000000000000`](https://trackingnumber.fyi/TBC000000000000) | `SerialNumber` |
|  | Amazon International | 11 | [`C1004444443`](https://trackingnumber.fyi/C1004444443) [`C1004444444`](https://trackingnumber.fyi/C1004444444) | `SerialNumber` |
| Canada Post | Canada Post (16) | 16 | [`0073938000549297`](https://trackingnumber.fyi/0073938000549297) [`7035114477138472`](https://trackingnumber.fyi/7035114477138472) [`4002847016405018`](https://trackingnumber.fyi/4002847016405018) | `SerialNumber` `OriginId` `CheckDigit` |
| Canpar | Canpar (22) | 22 | [`D576002440000001718010`](https://trackingnumber.fyi/D576002440000001718010)…
