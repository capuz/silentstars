---
repo: "gauthierpiarrette/highball-db"
name: "highball-db"
description: "Open CC0 compatibility database: Windows games on Apple Silicon via Wine + DXMT / D3DMetal / DXVK, with provenance."
readmeQualityOk: true
url: "https://github.com/gauthierpiarrette/highball-db"
homepage: "https://gauthierpiarrette.github.io/highball-db/"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["macos", "wine", "compatibility-database"]
stars: 6
forks: 0
openIssues: 13
closedIssues: 251
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-08-23T20:37:40Z"
lastCommitAt: "2026-09-30T09:56:50Z"
status: "newborn"
tags: ["hidden_gem", "under_pressure"]
healthScore: 99
undervaluedScore: 57
maintainers: ["gauthierpiarrette", "bot"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1344197347/ab8df6eb-087c-4538-bf7c-0d8108acc3d1"
---

<h1 align="center">highball-db</h1>

The open compatibility database behind [Highball](https://github.com/gauthierpiarrette/highball):
Windows games and launchers on Apple Silicon through Wine + DXMT / D3DMetal / DXVK,
**as data with provenance** — verified runs, upstream reports, community consensus, and the
kernel-anti-cheat blocklist.

- `recipes/` — declarative install/config recipes (launchers, games, tweaks) applied by Highball
- `db/games/` — one JSON per title: `status` ∈ `verified-local · reported-upstream · community · blocked-anticheat`, plus `provenance`
- `db/reports/` — append-only community reports, folded in from issues labeled `report-accepted`
- `db/derived/` — **prediction layer** (ODbL): recent ProtonDB verdicts × anti-cheat knowledge → a macOS likelihood for ~12,500 more games. Predictions, never verifications.
- `db/anticheat.json` — Mac-aware anti-cheat map for 1,166 titles, imported from [Are We Anti-Cheat Yet?](https://areweanticheatyet.com) (MIT)
- `Scripts/` — validator, report ingester, importers (AWACY, ProtonDB dumps), static-site generator (GitHub Pages)

**Contribute:** run something through Highball, then `highball report` — it opens a pre-filled…
