---
repo: "ellierocks767/lsw1-decomp"
name: "lsw1-decomp"
description: "A work-in-progress decompilation of LEGO Star Wars: The Video Game for the Nintendo GameCube."
readmeQualityOk: true
url: "https://github.com/ellierocks767/lsw1-decomp"
language: "C"
languages: ["C", "Python"]
languagePcts: [57, 42]
stars: 12
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 19
recentReleases: 0
createdAt: "2026-06-13T14:26:21Z"
lastCommitAt: "2026-11-12T11:39:10Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 40
maintainers: ["ellierocks"]
openGraphImageUrl: "https://opengraph.githubassets.com/83e8f1319c61485aa209dd8f34e6003a62505a77f1b1d737ba4e9b2a635c6134/ellierocks767/lsw1-decomp"
---

# LEGO Star Wars: The Video Game Decompilation

A work-in-progress decompilation of **LEGO Star Wars: The Video Game** for the Nintendo GameCube.

## Target Version

| Field | Value |
|-------|-------|
| Game ID | `GL5E4F` |
| Platform | Nintendo GameCube |
| Region | USA / NTSC |
| Compiler | SN Systems ProDG (GCC) for game code; CodeWarrior GC/1.2.5n for the Dolphin SDK. See [code matching workflow](https://github.com/ellierocks767/lsw1-decomp/blob/HEAD/docs/code_matching_workflow.md) |
| DOL SHA-1 | `95cca08a19224775d1a8d6cc64601fb7d0080981` |

## Progress

**Matched code** (objdiff report with strict relocation comparison):

| Measure | Matched | Total | Progress |
|---------|---------|-------|----------|
| Code bytes | 459,240 | 1,612,280 | 28.48% |
| Functions | 2,826 | 4,318 | 65.45% |

**Symbol naming** (`config/GL5E4F/symbols.txt`):

| Section | Named | Total | Progress |
|---------|-------|-------|----------|
| `.text` (functions) | 1,970 | 4,329 | 45.5% |
| `.rodata` | 783 | 8,401 | 9.3% |
| `.bss` | 107 | 776 | 13.8% |

CI refreshes these figures after successful GitHub builds on `main`.

```sh
python3 tools/matching_progress.py    # matched code from the local objdiff…
