---
repo: "Wyrelade/Armored-Core-Decomp"
name: "Armored-Core-Decomp"
description: "Work in progress matching decompilation of Armored Core (PSX, SCUS-94182)"
readmeQualityOk: true
url: "https://github.com/Wyrelade/Armored-Core-Decomp"
language: "C"
languages: ["C"]
languagePcts: [97]
stars: 11
forks: 1
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2026-10-06T11:56:06Z"
lastCommitAt: "2026-11-23T10:16:36Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 42
maintainers: ["Wyrelade"]
openGraphImageUrl: "https://opengraph.githubassets.com/9e5f8154740538736ca286e51d2b334fc3cc16f79a45be89c45fcff564052f5f/Wyrelade/Armored-Core-Decomp"
---

# Armored Core Decompilation

-1f6feb)

-8957e5)

A **matching decompilation** of *Armored Core* (FromSoftware, 1997) for the Sony PlayStation.

The goal is to recover readable C that, when compiled with a period-correct toolchain,
produces files **byte-identical** to the original executable and code overlays, then a
moddable full-source tree.

| Item | Value |
|---|---|
| Platform | PlayStation (PSX / PS1) |
| Disc (USA) | `SCUS-94182` |
| Main executable | `SCUS_941.82`, SHA-1 `ee884a2cb3ce30bc13255142fecd5a2f02ba04ad` (169984 bytes), loaded at `0x80011000` |
| Program overlays | `GG/COM/FDAT.T` entries 201-204, loaded at `0x8004ADA0` |
| Mission overlays | 58 more code entries in `FDAT.T` (`0x801C4B40` / `0x801C8460` / `0x801B80C8`) |
| Compiler | PsyQ 4.0: `CC1PSX` GCC 2.7.2 (SN32 3.7.0002) + ASPSX 2.56 |
| License (project code) | CC0 1.0 |

> **You must own the game.** This repository contains no ROMs, disc images, disassembly or
> copyrighted assets. `rom/ dumps/ asm/ linkers/ assets/ build/` are made from *your own*
> disc and are gitignored. Obtain a legal dump of your own disc.
