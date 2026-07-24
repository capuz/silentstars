---
repo: "rockthemike712/mission-control-board"
name: "mission-control-board"
description: "Single-file, zero-dependency task board: owner-vs-agent plates, a dependency map, tap-to-complete."
readmeQualityOk: true
url: "https://github.com/rockthemike712/mission-control-board"
language: "HTML"
languages: ["HTML"]
languagePcts: [89]
stars: 8
forks: 3
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-07-24T03:27:50Z"
lastCommitAt: "2026-07-24T06:08:12Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 25
maintainers: ["rockthemike712"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1310586510/8273c785-20e6-4dfc-b09c-481985471109"
---

# Mission Control — a dependency-aware task board

A single-file, zero-dependency task board you drop into any project. Two owners (e.g. **you**
vs **your coding agent**), each with one consolidated plate, plus a **map view** that draws the
whole project as a transit map — one line per track, converging on a **terminus** (GO LIVE),
each line's current bottleneck pulsing.

**"Ready" is never stored — it's derived.** Every task lists its `deps`; a task is blocked
until all of them are done. Complete one and anything it unblocks animates into **Up now**.

No build. No framework. No npm install. It's one HTML file that runs from `file://`.

**Grab it and go:**
```bash
curl -O https://raw.githubusercontent.com/rockthemike712/mission-control-board/main/board.html
open board.html   # then edit the <script id="seed"> block to make it yours
```

## What it looks like

**Tap any station and the map answers back** — completing a task ripples through its
dependents, and the 🔓 toast names exactly what just unblocked:

The whole project on one screen — one line per track, cross-track dependencies as connectors,
everything converging on the **GO LIVE** terminus:

<table>
<tr>
<td…
