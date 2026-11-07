---
repo: "KevinBonnoron/xc2-decomp"
name: "xc2-decomp"
description: "Matching decompilation of Xenoblade Chronicles 2 (Switch, v1.0.0)"
readmeQualityOk: true
url: "https://github.com/KevinBonnoron/xc2-decomp"
language: "C++"
languages: ["C++"]
languagePcts: [99]
stars: 12
forks: 2
openIssues: 2
closedIssues: 0
watchers: 2
contributors: 2
recentReleases: 0
createdAt: "2026-10-13T05:47:25Z"
lastCommitAt: "2026-11-07T10:37:08Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 75
undervaluedScore: 35
maintainers: ["KevinBonnoron", "matheusfaustino"]
openGraphImageUrl: "https://opengraph.githubassets.com/c7b9f2c7c6367f1a87ca6fb92d030fd92343adfd022d8cd1f96b7d19bb376f7c/KevinBonnoron/xc2-decomp"
---

# Xenoblade Chronicles 2 decompilation

A work-in-progress matching decompilation of *Xenoblade Chronicles 2* (Nintendo Switch, version 1.0.0).

The goal is to write C++ source code that, compiled with the same compiler and flags as the original, produces exactly the same machine code as the game, function by function.

**This repository contains reconstructed C++ code, but must not include original game executables, extracted assets, console keys or proprietary SDK files.** You need your own legally obtained copy of the game to work on it.

## Target

| | |
|---|---|
| Title ID | `0100E95004038000` |
| Version | 1.0.0 (base game, without update) |
| Build ID | `5087AF2917D85858A0FD49CB4D6EED67` |
| `main` (uncompressed NSO) SHA-256 | `956348ce46e0db8ed3f378847495f2869aa59027811351733eb17c6e5f1149d9` |

Version 1.0.0 is used because its executable still ships its dynamic symbol table: about 51,000 functions keep their original C++ names. Later updates are stripped.

The original source paths (`C:/Monolithsoft/BF2/prog/application/BF2/...`) appear in assertion strings, and `src/application/BF2/` mirrors that layout.

## Progress

37,648 / 48,739 functions (77.244%), 4,538,772 /…
