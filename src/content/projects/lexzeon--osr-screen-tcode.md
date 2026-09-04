---
repo: "LexZeon/osr-screen-tcode"
name: "osr-screen-tcode"
description: "Realtime screen-reading TCode output tool for OSR6 / OSR-compatible devices."
readmeQualityOk: true
url: "https://github.com/LexZeon/osr-screen-tcode"
language: "HTML"
languages: ["HTML"]
languagePcts: [95]
stars: 8
forks: 0
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 1
recentReleases: 2
createdAt: "2026-09-03T04:06:26Z"
lastCommitAt: "2026-09-04T04:44:32Z"
lastReleaseAt: "2026-09-04T04:12:58Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 32
maintainers: ["LexZeon"]
openGraphImageUrl: "https://opengraph.githubassets.com/ff2fca21bb8ec8af9da7d242161d572b50a40b7a46a4963bd5a40889e56d2cc7/LexZeon/osr-screen-tcode"
---

# OSR6 Realtime Screen TCode

**OSR6 Realtime Screen TCode** is a Windows app that reads a selected screen region in realtime, converts visible motion into TCode, and outputs it to OSR/SR6/OSR6-compatible devices through USB serial or BLE. It can also preview output without hardware and record/export `.funscript`.

> **Adults only. This project is intended for adults. Minors are prohibited.**
>
> **Important six-axis warning:** Six Axis mode is only recommended when lighting is good, the main subject is clear, and the selected screen region is clean. If the image is unclear, crowded, dark, or unstable, start with `L0 Only` or `Log only` preview.

Current version: `1.1.2`

## Analysis Demos

### Hybrid Analysis L0

<sub>Available since v1.0.0. Test hardware: CPU Intel Ultra 9; GPU disabled / not used for this analysis.</sub>

Hybrid Analysis L0 focuses on the main linear axis. It reads the selected screen region, tracks the dominant motion rhythm, and outputs limited four-digit L0 TCode.

### Hybrid Analysis Six-Axis

<sub>Available since v1.0.0. Test hardware: CPU Intel Ultra 9; GPU disabled / not used for this analysis.</sub>

Six-Axis Hybrid Analysis expands the realtime screen…
