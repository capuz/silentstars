---
repo: "DutchMaxwell/Niemandsland"
name: "Niemandsland"
description: "Tabletop Simulator for OnePageRules Game Systems"
readmeQualityOk: true
url: "https://github.com/DutchMaxwell/Niemandsland"
language: "GDScript"
languages: ["GDScript", "Rust"]
languagePcts: [60, 26]
stars: 7
forks: 2
openIssues: 1
closedIssues: 89
watchers: 0
contributors: 3
recentReleases: 5
createdAt: "2025-12-17T12:06:11Z"
lastCommitAt: "2026-10-08T10:51:56Z"
lastReleaseAt: "2026-08-04T16:42:06Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 100
undervaluedScore: 78
maintainers: ["DutchMaxwell"]
openGraphImageUrl: "https://opengraph.githubassets.com/7ab21912b4c17d8b4387ec651d97c32c78b15da606003fd6f1204494752da144/DutchMaxwell/Niemandsland"
---

# Niemandsland — A Fan-Made Tabletop Simulator for OnePageRules Game Systems

A desktop tabletop simulator focused on miniature wargames, with first-class
support for [OnePageRules](https://onepagerules.com/) (Grimdark Future / Age of
Fantasy). Built in Godot.

> **Status: public alpha (`0.3.13.1`).** The tabletop sandbox, OPR army import, multiplayer
> and the 3D-model pipeline work. **Solo play against the built-in AI opponent (NACHTMAHR)**
> resolves turns, combat, spells and terrain effects automatically; human-vs-human multiplayer
> is still a manual-rules sandbox. See [`PROJECT_STATUS.md`](https://github.com/DutchMaxwell/Niemandsland/blob/HEAD/PROJECT_STATUS.md) for the honest
> done / in-progress / planned breakdown, and [`docs/ROADMAP.md`](https://github.com/DutchMaxwell/Niemandsland/blob/HEAD/docs/ROADMAP.md) for what's
> planned next.

## Features

What the code actually does today:

- **Solo mode vs NACHTMAHR** — play a whole game against the built-in opponent. NACHTMAHR is a
  game AI (no LLM) that decides entirely offline and never cheats. In the Windows and Linux builds it
  plays with its new AI model **Erlkönig**: a search guided by a trained neural network (value…
