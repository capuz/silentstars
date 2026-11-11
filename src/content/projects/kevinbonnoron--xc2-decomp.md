---
repo: "KevinBonnoron/xc2-decomp"
name: "xc2-decomp"
description: "Matching decompilation of Xenoblade Chronicles 2 (Switch, v1.0.0)"
readmeQualityOk: true
url: "https://github.com/KevinBonnoron/xc2-decomp"
language: "C++"
languages: ["C++"]
languagePcts: [98]
stars: 10
forks: 2
openIssues: 3
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2026-10-13T05:47:25Z"
lastCommitAt: "2026-11-11T19:49:11Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 78
undervaluedScore: 37
maintainers: ["KevinBonnoron", "matheusfaustino"]
openGraphImageUrl: "https://opengraph.githubassets.com/eaf1be60d1ad569a0a842c5484fe463ed23bc425c6b987f3d1c1be5f389d76f1/KevinBonnoron/xc2-decomp"
---

# Xenoblade Chronicles 2 decompilation

A work-in-progress matching decompilation of *Xenoblade Chronicles 2* (Nintendo Switch, version 1.0.0).

**This repository contains reconstructed C++ code, but must not include original game executables, extracted assets, console keys or proprietary SDK files.** You need your own legally obtained copy of the game to work on it.

## Progress

42,001 / 48,739 functions (86.175%), 5,383,264 / 10,024,304 bytes of code (53.702%)

Counted over the named functions of `main`, as reported by `check`. Run `check --readme` to update this section. History and details: [decompilati.onl](https://decompilati.onl/projects/xenoblade-chronicles-2).

## Status and limits

- Matching is verified function by function: `check` places each function at its game address and compares its bytes. There is no link step and no executable is rebuilt, so the data sections and the vtables are not compared; only the read-only data a function uses, such as its strings and tables, must hold the game's bytes.
- Only version 1.0.0 is covered.
- The matched functions are mostly the small ones. From the totals above, a matched function averaged about 126 bytes of code and a…
