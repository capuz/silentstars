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
stars: 25
forks: 4
openIssues: 17
closedIssues: 760
watchers: 0
contributors: 5
recentReleases: 0
createdAt: "2026-08-23T20:37:40Z"
lastCommitAt: "2026-10-29T14:07:17Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 99
undervaluedScore: 47
maintainers: ["gauthierpiarrette"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1344197347/ab8df6eb-087c-4538-bf7c-0d8108acc3d1"
---

The open compatibility database behind [Highball](https://github.com/gauthierpiarrette/highball):
Windows games and launchers on Apple Silicon through Wine + DXMT / D3DMetal / DXVK,
**as data with provenance** — verified runs, upstream reports, community consensus, and the
kernel-anti-cheat blocklist.

- `recipes/` — declarative install/config recipes (launchers, games, tweaks) applied by Highball
- `db/games/` — one JSON per title: `status` ∈ `verified-local · reported-upstream · community · blocked-anticheat`, plus `provenance`; `arch` (`x64`, `x86` or `mixed`, the game's own code) where it is known, because 32-bit titles take the WoW64 path on the coming arm64 engines
- `db/reports/` — append-only community reports, folded in from issues labeled `report-accepted`
- `db/derived/` — **prediction layer** (ODbL): recent ProtonDB verdicts × anti-cheat knowledge → a macOS likelihood for ~12,500 more games. Predictions, never verifications.
- `db/anticheat.json` — Mac-aware anti-cheat map for 1,166 titles, imported from [Are We Anti-Cheat Yet?](https://areweanticheatyet.com) (MIT)
- `Scripts/` — validator, report ingester, importers (AWACY, ProtonDB dumps), static-site generator…
