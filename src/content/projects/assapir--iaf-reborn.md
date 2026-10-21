---
repo: "assapir/iaf-reborn"
name: "iaf-reborn"
description: "Open-source engine re-implementation of Jane's IAF (1998) for Linux/macOS that runs on your own game data; Godot 4 + Rust"
readmeQualityOk: true
url: "https://github.com/assapir/iaf-reborn"
language: "GDScript"
languages: ["GDScript", "Rust"]
languagePcts: [51, 43]
stars: 7
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-09-30T11:59:38Z"
lastCommitAt: "2026-10-21T21:14:59Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 45
maintainers: ["assapir"]
openGraphImageUrl: "https://opengraph.githubassets.com/2fc6b6784f19c50a598ecdbadb6086607a0ebfa902bcacd12aeb0b882a6a5630/assapir/iaf-reborn"
---

# iaf-reborn

A native (Linux and macOS) re-implementation of the engine for **Jane's IAF: Israeli Air Force** (1998). It loads the
game data from **your own copy** of the original game and renders it with modern graphics.

**You need your own copy of the original game (the CD / ISO).** This repository holds no original game assets or
data. Setup extracts and converts everything the engine uses on your machine, from your ISO.

The game plays as the original v1.1 by default; every improvement is an opt-in switch
([docs/deviations.md](https://github.com/assapir/iaf-reborn/blob/HEAD/docs/deviations.md)). What works and what is open: [docs/status.md](https://github.com/assapir/iaf-reborn/blob/HEAD/docs/status.md).

## Layout

- `crates/` – Rust workspace: file-format parsers, extraction / conversion tools, setup, flight model, avionics,
  Godot extension
- `game/` – Godot 4.7 project
- `docs/` – reverse-engineering notes per system; `docs/formats/` – file formats
- `assets/` – generated from your ISO (git-ignored)

## Requirements

### From the original game

- `Jane's IAF.iso` — the original English CD image (v1.0).
- _(optional, recommended)_ the official v1.1 patch (the WinZip…
