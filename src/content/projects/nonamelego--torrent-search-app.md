---
repo: "NoNameLeGo/torrent-search-app"
name: "torrent-search-app"
description: "BT torrent meta-search desktop app (parallel multi-engine aggregation of 1337x/TPB/NYAA + native frontend)"
originalDescription: "BT 种子聚合搜索桌面应用（多引擎并行聚合 1337x/TPB/NYAA + 原生前端）"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/NoNameLeGo/torrent-search-app"
language: "Rust"
languages: ["Rust", "JavaScript"]
languagePcts: [64, 28]
stars: 7
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 7
createdAt: "2026-07-10T15:48:27Z"
lastCommitAt: "2026-10-16T08:27:05Z"
lastReleaseAt: "2026-10-16T05:09:54Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 80
undervaluedScore: 55
maintainers: ["NoNameLeGo", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/d754d9c6de9b9b7dffaab62242ab9168040039ea29caf49ad398c1fc7a304eae/NoNameLeGo/torrent-search-app"
---

# BT Aggregated Search · Torrent Meta-Search

A desktop-oriented **BT torrent aggregation search engine**. Enter a keyword and **40+ torrent sites** are searched in parallel. Results stream in in real time via SSE and are deduplicated across sites and merged into a single card. It relies on no third-party services and runs entirely locally.

> ⚠️ **This project was generated with AI assistance**. It draws on the parallel multi-engine aggregation approach of [prajwalch/TorrentSearch](https://github.com/prajwalch/TorrentSearch) (a native Kotlin/Android app) and was rewritten as a Node/Express backend, vanilla JS frontend, and Electron desktop shell. The code may be studied, modified, and redistributed, but **completeness and security are not guaranteed**. Please review it yourself before use.

> 🦀 **Development status (updated 2026-10-16): The Rust rewrite has completed M0–M7, and `main` is now the Rust mainline.**
> **[`v0.3.6-beta`](https://github.com/NoNameLeGo/torrent-search-app/releases) has been released.** The artifacts include
> **a single-file Rust exe: 18 MB, zero runtime dependencies** (no Node, no WebView2, no VC++ runtime needed).
> The old Node/Express +…
