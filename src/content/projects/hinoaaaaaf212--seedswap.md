---
repo: "Hinoaaaaaf212/SeedSwap"
name: "SeedSwap"
description: "Let's you play Switch 1 games on a Switch 2 by running them in place of Seedsow Lullaby or another installed Switch 1 game."
readmeQualityOk: true
url: "https://github.com/Hinoaaaaaf212/SeedSwap"
language: "C"
languages: ["C"]
languagePcts: [86]
stars: 47
forks: 5
openIssues: 1
closedIssues: 1
watchers: 3
contributors: 2
recentReleases: 2
createdAt: "2026-11-24T00:25:28Z"
lastCommitAt: "2026-11-24T14:10:51Z"
lastReleaseAt: "2026-11-24T08:07:57Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 19
maintainers: ["Hinoaaaaaf212"]
openGraphImageUrl: "https://opengraph.githubassets.com/fb6ac05ded9c0265c84a225b71f10907de4ed77c480dfbf643c508f5e79c442a/Hinoaaaaaf212/SeedSwap"
---

# SeedSwap

SeedSwap lets you play Switch 1 games on a Switch 2 by running them in place of Seedsow Lullaby or
another installed Switch 1 game.
- It needs firmware 23.0.1 with kaiHEN.
- You pick and switch games on the console.

> **Warning**
>
> **SeedSwap can brick your console.** It runs on the same base as seedsow-semi-untethered and uses
> the same Seedsow file system code (Seedsow FS). Anything that can go wrong there can go wrong here
> too, including a brick. Use it at your own risk.

| | |
|---|---|
|  |  |
|  |  |
|  |  |

These screenshots come from SeedSwap 0.12.0's PC preview, which runs the real UI. The users and user
IDs in them are made up.

This repository builds two things:
- **The Seedsow save.** It holds alula's launcher, the seedsow-semi-untethered exploit chain, and
  SeedSwap's A/B launcher entries.
- **The SD card files.** These are SeedSwap itself, kaiHEN's loader stage, and the install image.
