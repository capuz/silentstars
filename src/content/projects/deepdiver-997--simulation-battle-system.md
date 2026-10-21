---
repo: "deepdiver-997/simulation-battle-system"
name: "simulation-battle-system"
description: "Turn-based spirit battle simulation engine (faithful to Seer (赛尔号) mechanics; unofficial fan research) · Try the online debug console; see README"
originalDescription: "回合制精灵对战模拟引擎（赛尔号机制口径还原，非官方粉丝研究）· 在线调试台试玩见 README"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/deepdiver-997/simulation-battle-system"
homepage: "http://107.174.127.252:8070"
language: "C++"
languages: ["C++"]
languagePcts: [84]
stars: 9
forks: 1
openIssues: 1
closedIssues: 2
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2025-09-10T10:36:28Z"
lastCommitAt: "2026-10-21T17:29:06Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 81
undervaluedScore: 75
maintainers: ["deepdiver-997"]
openGraphImageUrl: "https://opengraph.githubassets.com/e7fafc66d9ebb780cd7fb7136485e32c3dd5c9aecec17a970270c3693580ad7e/deepdiver-997/simulation-battle-system"
---

# Simulation Battle System — Turn-Based Spirit Battle Simulation Engine

## Project Overview

A turn-based spirit battle simulation engine in C++20. Battle flow is driven by a finite state machine, effects are scheduled by "timing points," and mechanics are registered into the kernel as data rather than hard-coded. Intended for battle simulation, AI self-play training, and mechanics research.

The project is in active development. The core battle flow is runnable; the effect system and scenario-based tests are still being expanded.

## Online Debug Console (Try It)

The web battle debug console is now open: form teams and start a battle, step through each timing point to view the judgment process, and use the live preview panel for Learning Power / Nature / Engraving.

- Address: `http://107.174.127.252:8070`
- Access token: `sbs-3021308f` (enter via the 🔑 button at the top right of the page; the browser saves it)
- The service is hosted on a US server, so a direct connection may not always succeed. If loading is slow or times out, retry or switch networks.
- Three steps to get started: enter the token → click "Sample lineup" → "▶ Start battle" (the "ℹ️ Instructions" button at…
