---
repo: "rjkiv/dc3-decomp"
name: "dc3-decomp"
description: "A decompilation of Dance Central 3."
url: "https://github.com/rjkiv/dc3-decomp"
language: "C++"
languages: ["C++", "C"]
languagePcts: [54, 44]
stars: 32
forks: 11
openIssues: 0
closedIssues: 4
watchers: 1
contributors: 13
recentReleases: 0
createdAt: "2025-07-25T19:14:55Z"
lastCommitAt: "2026-06-28T01:44:27Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 100
undervaluedScore: 57
maintainers: ["rjkiv", "Broteam123", "ieee802dot11ac"]
openGraphImageUrl: "https://opengraph.githubassets.com/9808fb5a01bd4636fae1baaf0a19713b8257cc41737dc894306d0478a74fe263/rjkiv/dc3-decomp"
---

Dance Central 3
=============

[Build Status]: https://github.com/rjkiv/dc3-decomp/actions/workflows/build.yml/badge.svg
[actions]: https://github.com/rjkiv/dc3-decomp/actions/workflows/build.yml
[Code Progress]: https://decomp.dev/rjkiv/dc3-decomp.svg?mode=shield&measure=code&label=Code
[progress]: https://decomp.dev/rjkiv/dc3-decomp
[Discord Badge]: https://img.shields.io/discord/727908905392275526?color=%237289DA&logo=discord&logoColor=%23FFFFFF
[discord]: https://discord.gg/milohax

A decompilation of Dance Central 3 (build Sep 16 2012) for the Xbox 360.

This repository does **not** contain any game assets or assembly whatsoever. An existing copy of the game is required.

Dependencies
============

Windows
--------

On Windows, it's **highly recommended** to use native tooling. WSL or msys2 are **not** required.  
When running under WSL, [objdiff](#diffing) is unable to get filesystem notifications for automatic rebuilds.

- Install [Python](https://www.python.org/downloads/) and add it to `%PATH%`.
  - Also available from the [Windows Store](https://apps.microsoft.com/store/detail/python-311/9NRWMJP3717K).
- Download [ninja](https://github.com/ninja-build/ninja/releases) and…
