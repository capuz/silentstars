---
repo: "TheBozos/TLOTR_TTA_Recomp"
name: "TLOTR_TTA_Recomp"
description: "The Lord of the Rings: The Third Age (NTSC-U, SLUS-21027) static recompilation with PS2Recomp, for Windows, Linux and macOS: configs, scripts, notes (no game data)"
readmeQualityOk: true
url: "https://github.com/TheBozos/TLOTR_TTA_Recomp"
language: "C++"
languages: ["C++", "Python"]
languagePcts: [72, 24]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 4
recentReleases: 0
createdAt: "2026-10-26T09:28:42Z"
lastCommitAt: "2026-11-23T10:31:17Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 47
maintainers: ["boubou666"]
openGraphImageUrl: "https://opengraph.githubassets.com/8226ca869dfa3f207d08e72455850b5f486be180357a606c1dd6fd6e5c48da6a/TheBozos/TLOTR_TTA_Recomp"
---

# TLOTR_TTA_Recomp

**A native Windows, Linux and macOS port of *The Lord of the Rings: The Third Age* (NTSC-U, `SLUS-21027`), made by statically recompiling the game's PlayStation 2 code to C++.**<br>
Built on [BozoEngine](https://github.com/TheBozos/BozoEngine), The Bozos' own toolchain: the game's EE code recompiled to C++, every library and kernel call it makes answered by native code. No PS2 hardware model at any level: no GS, VU, VIF/GIF, DMA, IOP or SPU2.

> **Important**
>
> No game files are included: no ELF, IRX modules, data archives, or code generated from them.
> You need **your own copy** of the North American release, PS2 ID **`SLUS-21027`**. The port is built against that disc's executable:
>
> | File | SHA-1 |
> |---|---|
> | `SLUS_210.27` | `d88ded370592114169fa18f0ff73b9f610a94bd0` |
