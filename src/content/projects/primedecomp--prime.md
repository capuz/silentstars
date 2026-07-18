---
repo: "PrimeDecomp/prime"
name: "prime"
description: "A matching decompilation of Metroid Prime"
readmeQualityOk: true
url: "https://github.com/PrimeDecomp/prime"
language: "C++"
languages: ["C++", "C"]
languagePcts: [75, 21]
topics: ["decompilation", "gamecube", "metroid", "metroid-prime", "cplusplus", "reverse-engineering"]
stars: 285
forks: 17
openIssues: 0
closedIssues: 2
watchers: 14
contributors: 10
recentReleases: 0
createdAt: "2022-03-23T21:22:23Z"
lastCommitAt: "2026-07-18T05:45:50Z"
status: "thriving"
tags: []
healthScore: 92
undervaluedScore: 31
maintainers: ["Antidote", "encounter", "henriquegemignani"]
openGraphImageUrl: "https://opengraph.githubassets.com/f34b6420c27e26310bc353481d6f2fc366401500dbdf3db17bc996950e6431ec/PrimeDecomp/prime"
---

Metroid Prime  
=============

[Build Status]: https://github.com/PrimeDecomp/prime/actions/workflows/build.yml/badge.svg
[actions]: https://github.com/PrimeDecomp/prime/actions/workflows/build.yml
[Code Progress]: https://decomp.dev/PrimeDecomp/prime.svg?mode=shield&measure=code&label=Code
[Data Progress]: https://decomp.dev/PrimeDecomp/prime.svg?mode=shield&measure=data&label=Data
[progress]: https://decomp.dev/PrimeDecomp/prime
[Discord Badge]: https://img.shields.io/discord/727908905392275526?color=%237289DA&logo=discord&logoColor=%23FFFFFF
[discord]: https://discord.gg/hKx3FJJgrV

A work-in-progress decompilation of Metroid Prime.

This repository does **not** contain any game assets or assembly whatsoever. An existing copy of the game is required.

The following game versions are supported:

- `GM8E01_00` (USA v1.088)

If you'd like to contribute, see [CONTRIBUTING.md](https://github.com/PrimeDecomp/prime/blob/HEAD/CONTRIBUTING.md).

Dependencies
============

Windows
--------

On Windows, it's **highly recommended** to use native tooling. WSL or msys2 are **not** required.  
When running under WSL, [objdiff](#diffing) is unable to get filesystem notifications for automatic…
