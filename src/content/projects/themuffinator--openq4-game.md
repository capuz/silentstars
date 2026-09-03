---
repo: "themuffinator/openQ4-game"
name: "openQ4-game"
description: "openQ4 game libraries"
readmeQualityOk: true
url: "https://github.com/themuffinator/openQ4-game"
language: "C++"
languages: ["C++"]
languagePcts: [93]
stars: 7
forks: 7
openIssues: 0
closedIssues: 0
watchers: 3
contributors: 2
recentReleases: 0
createdAt: "2026-02-06T13:34:52Z"
lastCommitAt: "2026-09-03T08:13:56Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "fork_magnet"]
healthScore: 89
undervaluedScore: 61
maintainers: ["themuffinator"]
openGraphImageUrl: "https://opengraph.githubassets.com/4096f730c623ee48524bc3e39087678c997d6e260c5fec88ac16f3e37caf433f/themuffinator/openQ4-game"
---

# openQ4-GameLibs

Quake 4 game libraries maintained for use with the openQ4 engine project.

## Overview
openQ4-GameLibs contains Quake4SDK-derived single-player and multiplayer game library code, maintained with a compatibility-first focus for modern development workflows.
This repository is the canonical source-input repository for SDK/game-library code used by the openQ4 workspace.

## Included
- Game library source code in `src/game` and `src/mpgame`
- Shared SDK-era interfaces used by Quake 4 style game modules
- Meson/Ninja build configuration for modern local builds

## Not Included
- Retail Quake 4 assets (`.pk4`, textures, audio, media)
- A standalone engine executable

## Build
### Windows (Meson + Ninja)
Meson/Ninja is the primary standalone developer build workflow in this repository. openQ4's cross-platform engine build consumes this repository as source input and stages the files it needs before compiling the SP/MP modules.

Requirements:
- Visual Studio C++ toolchain (`cl.exe`); the wrapper selects an x64 target by default on x64 hosts
- Meson and Ninja

1. Configure:
   `powershell -ExecutionPolicy Bypass -File tools/build/meson_setup.ps1 setup --wipe builddir .…
