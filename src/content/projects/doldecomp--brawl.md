---
repo: "doldecomp/brawl"
name: "brawl"
description: "A work-in-progress matching decompilation of Super Smash Bros. Brawl"
readmeQualityOk: true
url: "https://github.com/doldecomp/brawl"
language: "C"
languages: ["C", "C++"]
languagePcts: [55, 42]
stars: 112
forks: 22
openIssues: 0
closedIssues: 1
watchers: 13
contributors: 9
recentReleases: 0
createdAt: "2024-03-30T23:58:56Z"
lastCommitAt: "2026-11-01T22:58:17Z"
status: "thriving"
tags: []
healthScore: 89
undervaluedScore: 45
maintainers: ["mparisi20", "DaltonSW", "loserkidsblink"]
openGraphImageUrl: "https://opengraph.githubassets.com/b567818f68631dfd326de2ea76951a8a0cca0f4c74a588286c1fbad04394c52f/doldecomp/brawl"
---

Super Smash Bros. Brawl  
=============

[Build Status]: https://github.com/doldecomp/brawl/actions/workflows/build.yml/badge.svg
[actions]: https://github.com/doldecomp/brawl/actions/workflows/build.yml
[Code Progress]: https://decomp.dev/doldecomp/brawl.svg?mode=shield&measure=code&label=Code
[Data Progress]: https://decomp.dev/doldecomp/brawl.svg?mode=shield&measure=data&label=Data
[progress]: https://decomp.dev/doldecomp/brawl
[Discord Badge]: https://img.shields.io/discord/727908905392275526?color=%237289DA&logo=discord&logoColor=%23FFFFFF
[discord]: https://discord.gg/hKx3FJJgrV

A work-in-progress decompilation of Super Smash Bros. Brawl.

This repository does **not** contain any game assets or assembly whatsoever. An existing copy of the game is required.

Supported versions:

- `RSBE01_02`: USA Rev 2

Dependencies
============

Windows
--------

On Windows, it's **highly recommended** to use native tooling. WSL or msys2 are **not** required.  
When running under WSL, [objdiff](#diffing) is unable to get filesystem notifications for automatic rebuilds.

- Install [Python](https://www.python.org/downloads/) and add it to `%PATH%`.
  - Also available from the [Windows…
