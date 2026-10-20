---
repo: "FirePlank/5d-chess-engine"
name: "5d-chess-engine"
description: "A Rust engine for 5D Chess With Multiverse Time Travel"
readmeQualityOk: true
url: "https://github.com/FirePlank/5d-chess-engine"
homepage: "https://fireplank.github.io/5d-chess-lab/"
language: "GAP"
languages: ["GAP", "Rust"]
languagePcts: [75, 23]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-10-15T15:14:04Z"
lastCommitAt: "2026-10-20T08:50:39Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 51
maintainers: ["FirePlank"]
openGraphImageUrl: "https://opengraph.githubassets.com/9da8f14bf5afe9225fead8382ed0505b148262dee15635a4f6489ada815d88a1/FirePlank/5d-chess-engine"
---

# Kairos

A Rust engine for [5D Chess With Multiverse Time Travel](https://www.5dchesswithmultiversetimetravel.com/).

## Features

- **Rules**: Full 5D rules on boards up to 8x8: time travel, branching timelines, the present, odd/even timeline layouts, all fairy pieces (princess, unicorn, dragon, brawn, royal queen, common king), castling, en passant and promotion.
- **Legal actions**: A hypercuboid search enumerates legal turns lazily, so checkmate detection and move generation stay tractable with many timelines.
- **Search**: Iterative deepening PVS over whole turns with a transposition table, killer and history ordering, late move pruning and reductions and a tactical quiescence search. Turns are enumerated best-first by the summed scores of their per-board moves, with checking moves (including checks across time and timelines) ordered first.
- **Evaluation**: Linear evaluation over every timeline's latest board (material, timeline advantage, king safety including pieces near a royal from neighbouring timelines, mobility, pawn structure) with weights fitted to game results.
- **Protocol**: Speaks 5DUCI, so it plugs into any 5DUCI interface or match runner.
- **Opening book**:…
