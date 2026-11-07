---
repo: "landaire/wows-toolkit"
name: "wows-toolkit"
description: "Swiss army knife for World of Warships"
readmeQualityOk: true
url: "https://github.com/landaire/wows-toolkit"
homepage: "http://landaire.net/wows-toolkit/"
language: "Rust"
languages: ["Rust"]
languagePcts: [56]
stars: 97
forks: 21
openIssues: 13
closedIssues: 31
watchers: 3
contributors: 6
recentReleases: 0
createdAt: "2024-01-03T03:02:53Z"
lastCommitAt: "2026-11-07T10:32:49Z"
lastReleaseAt: "2025-09-26T05:50:27Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 94
undervaluedScore: 48
maintainers: ["landaire", "VanQWisher"]
openGraphImageUrl: "https://opengraph.githubassets.com/8f02e4f954f87cbb754b424b6a89140c2fcb0cc02143755d112f99c3f400650b/landaire/wows-toolkit"
---

# WoWs Toolkit

A monorepo of tools for interacting with World of Warships game data, replays, and assets.

## Crates

| Crate | Description | CLI Binary |
|-------|-------------|------------|
| [`wows-toolkit`](https://github.com/landaire/wows-toolkit/blob/HEAD/crates/wows-toolkit) | GUI application for browsing replays, extracting game files, and viewing armor models | `wows_toolkit` |
| [`wowsunpack`](https://github.com/landaire/wows-toolkit/blob/HEAD/crates/wowsunpack) | Library and CLI for unpacking World of Warships game assets (IDX/PKG files, GameParams) | `wowsunpack` |
| [`wows-replays`](https://github.com/landaire/wows-toolkit/blob/HEAD/crates/wows-replays) | Core replay file parser library (`wows_replays`) | - |
| [`minimap-renderer`](https://github.com/landaire/wows-toolkit/blob/HEAD/crates/minimap-renderer) | Library and CLI for rendering replay minimaps as images or video (`wows_minimap_renderer`) | `minimap_renderer` |
| [`replayshark`](https://github.com/landaire/wows-toolkit/blob/HEAD/crates/replayshark) | CLI tool for dumping and analyzing replay files | `replayshark` |

## Documentation

Reverse engineering notes and format specifications live in…
