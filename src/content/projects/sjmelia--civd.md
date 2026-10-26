---
repo: "sjmelia/civd"
name: "civd"
description: "Reverse-engineered source code for the MS-DOS version of the 1991 game \"Sid Meier's Civilization\"."
readmeQualityOk: true
url: "https://github.com/sjmelia/civd"
language: "C"
languages: ["C", "Assembly"]
languagePcts: [69, 29]
stars: 21
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-10-10T21:48:08Z"
lastCommitAt: "2026-10-26T20:58:07Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 79
undervaluedScore: 13
maintainers: ["sjmelia"]
openGraphImageUrl: "https://opengraph.githubassets.com/46348e2f73e6481515629888fc9e8406964268d161e171024004af4056962625/sjmelia/civd"
---

# Sid Meier's Civilization

Reverse-engineered source code for the MS-DOS version of the 1991 game "Sid Meier's Civilization".

[Technical book](https://sjmelia.github.io/civd/book/) · [Reading Civilization from the inside](https://sjmelia.github.io/civd/story/)

> [!WARNING]
> This is a reconstruction, not MicroProse's original source. Names, comments
> and some type declarations are inferred. An exact executable match does not
> prove that these match the original source. 

The reconstructed C code is built with what I believe to be the original toolchain: Microsoft C 5.1, MASM 5.10 and LINK 5.01. The
resulting `CIV.EXE` matches version 474.05 byte for byte.

The original game was very well architected and includes separate drivers for video and audio, along with some utilities in `MISC.EXE`. I haven't reversed these elements to C code - my interest is only in the game logic. But the MCGA graphics driver, AdLib sound driver and
`MISC.EXE` have all been decompiled to assembly to make it a little easier to understand calls into them.

The build applies a four-byte startup correction, described in the [build…
