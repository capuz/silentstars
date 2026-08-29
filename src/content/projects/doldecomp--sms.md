---
repo: "doldecomp/sms"
name: "sms"
description: "A decompilation of Super Mario Sunshine brought to you by a bunch of clever folks."
readmeQualityOk: true
url: "https://github.com/doldecomp/sms"
language: "C++"
languages: ["C++"]
languagePcts: [82]
stars: 293
forks: 46
openIssues: 3
closedIssues: 3
watchers: 26
contributors: 21
recentReleases: 0
createdAt: "2021-05-16T15:13:29Z"
lastCommitAt: "2026-08-29T17:28:45Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 88
undervaluedScore: 35
maintainers: ["Mrkol", "KakarottoCake", "TheAzack9"]
openGraphImageUrl: "https://opengraph.githubassets.com/f47730db6e0bd77cad7f2181ac894f7d11ff70fd16c2a7594d22105a04dd9d25/doldecomp/sms"
---

Super Mario Sunshine
=============
[<img src="https://decomp.dev/doldecomp/sms.svg?w=512&h=256" width="512" height="256">][Progress]
=============

[Build Status]: https://github.com/doldecomp/sms/actions/workflows/build.yml/badge.svg
[actions]: https://github.com/doldecomp/sms/actions/workflows/build.yml
[Code Progress]: https://decomp.dev/doldecomp/sms.svg?mode=shield&measure=code&label=Code
[progress]: https://decomp.dev/doldecomp/sms
[Discord Badge]: https://img.shields.io/discord/727908905392275526?color=%237289DA&logo=discord&logoColor=%23FFFFFF
[discord]: https://discord.gg/hKx3FJJgrV

A work-in-progress decompilation of Super Mario Sunshine.

This repository does **not** contain any game assets or assembly whatsoever. An existing copy of the game is required.

Supported versions:

- `GMSJ01`: Rev 0 (JPN)
- ~~`GMSP01`: Rev 0 (PAL)~~ slightly broken, feel free to fix

Dependencies
============

Windows
--------

On Windows, it's **highly recommended** to use native tooling. WSL or msys2 are **not** required.  
When running under WSL, [objdiff](#diffing) is unable to get filesystem notifications for automatic rebuilds.

- Install [Python](https://www.python.org/downloads/)…
