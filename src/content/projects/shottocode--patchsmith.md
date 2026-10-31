---
repo: "shottocode/PatchSmith"
name: "PatchSmith"
description: "Native video game translator for Windows: detects the engine, finds the texts, translates them (local translator, DeepL, MyMemory or Google) and writes them into the game, with backups."
readmeQualityOk: true
url: "https://github.com/shottocode/PatchSmith"
language: "Python"
languages: ["Python"]
languagePcts: [98]
topics: ["game-translation", "gamemaker", "godot", "localization", "machine-translation", "ollama", "python", "unity", "unreal-engine", "windows"]
stars: 7
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 1
createdAt: "2026-10-23T08:47:03Z"
lastCommitAt: "2026-10-31T19:01:41Z"
lastReleaseAt: "2026-10-23T08:47:23Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 79
undervaluedScore: 29
maintainers: ["shottocode"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1430797571/203f7e6a-0872-459c-9df2-8cc559aaf63b"
discussionCount: 0
---

# PatchSmith (v0.1.0)

*Italiano: [LEGGIMI.md](https://github.com/shottocode/PatchSmith/blob/HEAD/LEGGIMI.md). All the technical details (engine by engine, checks, command line, tests): [docs/TECHNICAL.md](https://github.com/shottocode/PatchSmith/blob/HEAD/docs/TECHNICAL.md).*

*A patch smith for video games: native translations today, resolutions and settings tomorrow.*

PatchSmith automatically translates a video game's text **inside the game itself**, like an official localization: no overlays, both the game's data and its menus. It is free, it works offline with a translator that runs on your PC, and it always keeps a backup of the original files: one click puts everything back.

What it does:
- recognizes the game's engine;
- finds the text on its own;
- translates it (by default with a local translator on your PC: no account, no limits);
- writes it into the game, with a backup of every file it changes.

Windows only. The interface is in Italian and English (the flag button switches it).

## Download and start

1. Download `PatchSmith-0.1.0-windows.zip` from the [Releases page](https://github.com/shottocode/PatchSmith/releases) and extract it anywhere (Python is included:…
