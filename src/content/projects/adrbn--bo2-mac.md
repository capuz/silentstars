---
repo: "adrbn/bo2-mac"
name: "bo2-mac"
description: "Call of Duty: Black Ops II statically recompiled from 32-bit x86 Windows to native ARM64 macOS: Remill → LLVM IR, a hand-written Win32 runtime, Direct3D 11 drawn by Metal. No Wine, no game files."
readmeQualityOk: true
url: "https://github.com/adrbn/bo2-mac"
language: "C++"
languages: ["C++"]
languagePcts: [77]
topics: ["apple-silicon", "black-ops-2", "call-of-duty", "llvm", "macos", "metal", "remill", "static-recompilation"]
stars: 112
forks: 9
openIssues: 0
closedIssues: 6
watchers: 0
contributors: 1
recentReleases: 5
createdAt: "2026-11-03T22:36:56Z"
lastCommitAt: "2026-11-11T11:22:54Z"
lastReleaseAt: "2026-11-06T16:04:54Z"
status: "newborn"
tags: ["solo_builder", "release_machine"]
healthScore: 89
undervaluedScore: 30
maintainers: ["adrbn"]
openGraphImageUrl: "https://opengraph.githubassets.com/eae45f6b73c6f74b583d2964a1982b25d1ea6751ed78f424e3440644fa648cbc/adrbn/bo2-mac"
---

# bo2-mac

**Call of Duty: Black Ops II, statically recompiled from 32-bit x86 Windows to native ARM64 macOS.**<br>
Campaign, Zombies and multiplayer against bots, built on your Mac from your own Steam copy.

> [!IMPORTANT]
> **This repository contains no game file and no translated game code.** It turns your own Steam copy of Black Ops
> II into an app for your Mac, on your Mac. The game's code ends up inside that app, so nobody can hand you a
> ready-made one: each player builds their own, and it may not be shared. Unofficial fan project, not affiliated with
> Activision, Treyarch or Microsoft. To play, buy the game. Beta: read [what has and has not been proven](https://github.com/adrbn/bo2-mac/blob/HEAD/docs/PRERELEASE.md).

---

## Abstract

bo2-mac takes the three executables of Black Ops II, the campaign (`t6sp.exe`), Zombies (`t6zm.exe`) and
multiplayer (`t6mp.exe`), and turns their x86 machine code into ARM64 machine code ahead of time.
[Remill](https://github.com/lifting-bits/remill) lifts each function to LLVM IR, a chain of our own passes rewrites
that IR, and the result is linked with a Win32 runtime written by hand, whose Direct3D 11 is drawn by Metal. There is
no…
