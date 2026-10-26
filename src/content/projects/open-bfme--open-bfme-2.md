---
repo: "Open-BFME/Open-BFME-2"
name: "Open-BFME-2"
description: "Byte-exact source recreation of BFME 2's game.dat — sister project of Open-BFME-1"
readmeQualityOk: true
url: "https://github.com/Open-BFME/Open-BFME-2"
language: "C++"
languages: ["C++"]
languagePcts: [86]
stars: 102
forks: 53
openIssues: 2
closedIssues: 4
watchers: 0
contributors: 70
recentReleases: 1
createdAt: "2026-08-29T16:05:08Z"
lastCommitAt: "2026-10-26T21:00:31Z"
lastReleaseAt: "2026-10-14T18:45:40Z"
status: "newborn"
tags: ["fork_magnet"]
healthScore: 91
undervaluedScore: 35
maintainers: ["davidrazidlo", "yasinschroeder", "duNa-isTaken"]
openGraphImageUrl: "https://opengraph.githubassets.com/e53520affb8726bcf2c760d9aa4ce5762316d2223723dc57dec5ce03ef751a49/Open-BFME/Open-BFME-2"
---

# BFME 2 Source Code

Goal: Source code that rebuilds BFME 2's engine binary (`game.dat`) byte-for-byte, and game modernization improvements that you've only seen in your dreams.

[Join our Discord to participate!](https://discord.gg/wCvA2XqPUT)

## What?

* We rewrote the game's code one small piece at a time, and each piece turns back into the exact same bytes as the original game.dat (BFME 2, version 1.06). That stage, byte matching, is complete.
* The work now (Phase 2) is making those pieces link into one program: closing the symbols the whole-program link still has to stub, merging the one-function files back into the source files the original was built from, giving every class one header, retiring recorded debt, and replacing generated and placeholder code with real C++ and real names.
* The goal is a game that links with no stubs and no `/FORCE`, boots to the menu, plays a skirmish and saves and loads. Then the whole game is open source, and we can fix bugs and make mods.

### What the bars measure

* **Rebuilt from source**: code rebuilding to the original game.dat's exact bytes, including generated code, attached prebuilt libraries, verified data in `.text`, and…
