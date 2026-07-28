---
repo: "yschroe/chessalyzer.js"
name: "chessalyzer.js"
description: "A JavaScript library for batch analyzing chess games"
readmeQualityOk: true
url: "https://github.com/yschroe/chessalyzer.js"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [99]
topics: ["chess", "heatmap", "heatmaps", "batch", "pgn", "analyzer", "analyze"]
stars: 16
forks: 2
openIssues: 0
closedIssues: 0
watchers: 3
contributors: 1
recentReleases: 0
createdAt: "2018-08-24T10:32:43Z"
lastCommitAt: "2026-07-28T15:01:02Z"
lastReleaseAt: "2024-03-17T19:20:29Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 82
undervaluedScore: 51
maintainers: ["yschroe"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/145978466/56f7f30a-26f2-47e2-a836-7585133d0b19"
discussionCount: 0
---

A JavaScript library for batch analyzing chess games.

# Index

- [Features](#features)
- [Installation](#installation)
- [How it works](#how-it-works)
- [Pipeline](#pipeline)
    - [Performance tiers](#performance-tiers)
- [Examples](#examples)
    - [Basic Usage](#basic-usage)
    - [Filtering](#filtering)
    - [Compare Analyses](#compare-analyses)
    - [Multithreading](#multithreaded-analysis)
    - [Error handling](#error-handling)
- [Heatmap analysis functions](#heatmap-analysis-functions)
- [Tracked statistics](#tracked-statistics)
    - [Built-in](#built-in)
    - [Custom Tracker](#custom-trackers)
- [Heatmap presets](#heatmap-presets)
- [Visualisation](#visualisation)

# Features

- Batch process PGN files and track statistics of your games
- Filter games (e.g. only analyze games where WhiteElo > 1800)
- Fully modular, track only the stats you need to preserve performance
- Generate heatmaps out of the generated data
- It's fast and highly parallelized: Processes ~25M moves/s on an Apple M1 (PGN parse only; no board replay or validation)
- Handles big files easily
- Just one dependency (chalk)

# Installation

1. Install package

```sh
npm install chessalyzer.js
```

2.…
