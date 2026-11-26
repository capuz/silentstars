---
repo: "MrMilenko/Roadkill"
name: "Roadkill"
description: "Twisted Metal 2 for Windows 95, native on modern machines, built from the TM2-Win9x Decomp"
readmeQualityOk: true
url: "https://github.com/MrMilenko/Roadkill"
language: "C"
languages: ["C"]
languagePcts: [99]
stars: 6
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 1
createdAt: "2026-11-25T23:03:08Z"
lastCommitAt: "2026-11-26T15:22:48Z"
lastReleaseAt: "2026-11-26T01:25:44Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 80
undervaluedScore: 37
maintainers: ["MrMilenko"]
openGraphImageUrl: "https://opengraph.githubassets.com/6f827fb07876e3e35a2fdeac8c381dc1667927bf37c7cbb2686a00d29417aa7d/MrMilenko/Roadkill"
fundingLinks: ["KO_FI:https://ko-fi.com/milenko", "PATREON:https://patreon.com/chupathingy"]
---

# Roadkill

**Twisted Metal 2, in portable code. Updated for modern PCs and ports.**

Roadkill has one purpose: the 1997 PC game, Twisted Metal 2 for Windows 95, native on modern
machines. Roadkill is built from the
[TM2-Win9x Decomp](https://github.com/MrMilenko/TM2-Win9x-Decomp): the original `TM2.EXE`
decompiled into C, every function the game reaches checked against the original machine code.

**Twisted Metal 2 PC behavior, by default.** Roadkill plays like the 1997 PC game. Everything
else (widescreen, higher resolution, fixes for the original's own bugs, looping music, ...) is a
toggle in `roadkill.ini`, off unless you switch it on.

**No game data is included.** You need your own copy of the Twisted Metal 2 PC disc. Roadkill
reads everything from your files at run time.

## Get it

Builds for Windows (64-bit), Linux (x86-64) and macOS (Apple Silicon and Intel) are on the
[Releases page](https://github.com/MrMilenko/Roadkill/releases); every push to `main` also
builds them ([Actions](https://github.com/MrMilenko/Roadkill/actions)). Each zip holds the
program, an empty `data` folder and a `README.txt`.
