---
repo: "OpenRAC/rac2-gc-decomp"
name: "rac2-gc-decomp"
description: "Going Commando USA v1.01: byte-exact reconstruction tools and native-port research. No game assets."
readmeQualityOk: true
url: "https://github.com/OpenRAC/rac2-gc-decomp"
language: "C"
languages: ["C"]
languagePcts: [96]
topics: ["ratchet-and-clank", "going-commando", "rac2", "decompilation", "matching-decompilation", "reverse-engineering", "ps2", "playstation-2", "game-preservation", "c"]
stars: 24
forks: 8
openIssues: 2
closedIssues: 41
watchers: 2
contributors: 12
recentReleases: 0
createdAt: "2026-10-01T15:16:40Z"
lastCommitAt: "2026-10-21T23:36:35Z"
status: "newborn"
tags: ["hidden_gem"]
healthScore: 99
undervaluedScore: 45
maintainers: ["ThorpenCodes", "bigmak94", "Veradictus"]
openGraphImageUrl: "https://opengraph.githubassets.com/6df1ed09013c16ca0f2fd169235892f295d8a1eb1b2efef61113c6f6741b8eda/OpenRAC/rac2-gc-decomp"
---

A work-in-progress **matching decompilation** of *Ratchet & Clank: Going Commando* (Insomniac
Games, 2003) for the PlayStation 2 (USA v1.01, `SCUS_972.68`), part of the
**[OpenRAC](https://openrac.dev)** initiative.

The disc's boot executable and its 27 level programs are rebuilt from C and assembly until
every loaded byte equals retail:

| Program | What it is | Code |
| --- | --- | ---: |
| `SCUS_972.68` | the boot executable: the engine core and the game | 1,046,952 bytes |
| `G/LEVELn.WAD` | the level programs, one per level, 27 of them | 4,482,204 bytes |

The objective is to produce C source code that, when compiled with the original toolchain,
generates a byte-identical copy of the retail programs. Matched code is then refactored
toward readable, idiomatic C with accurate types and naming, using matching builds as
continuous regression tests.

> [!NOTE]
> This repository contains **no game assets, retail executables, or disassembly**. To build,
> you must provide your own legally obtained copy of the game. Please review
> [`LEGAL.md`](https://github.com/OpenRAC/rac2-gc-decomp/blob/HEAD/LEGAL.md) before contributing.

---

## Progress

Decompilation progress is tracked live…
