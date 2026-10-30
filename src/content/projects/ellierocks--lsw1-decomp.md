---
repo: "ellierocks/lsw1-decomp"
name: "lsw1-decomp"
description: "A work-in-progress decompilation of LEGO Star Wars: The Video Game for the Nintendo GameCube."
readmeQualityOk: true
url: "https://github.com/ellierocks/lsw1-decomp"
language: "Python"
languages: ["Python", "C"]
languagePcts: [53, 46]
stars: 12
forks: 0
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 19
recentReleases: 0
createdAt: "2026-06-13T14:26:21Z"
lastCommitAt: "2026-10-30T10:20:36Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 90
undervaluedScore: 40
maintainers: ["ellierocks"]
openGraphImageUrl: "https://opengraph.githubassets.com/861605e470dc3ff63b6cedef3b4495b0a5575dd0c89c9f37c29ac2f23527f359/ellierocks/lsw1-decomp"
---

# LEGO Star Wars: The Video Game Decompilation

A work-in-progress decompilation of **LEGO Star Wars: The Video Game** for the Nintendo GameCube.

## Target Version

| Field | Value |
|-------|-------|
| Game ID | `GL5E4F` |
| Platform | Nintendo GameCube |
| Region | USA / NTSC |
| Compiler | SN Systems ProDG (GCC) for game code; CodeWarrior GC/1.2.5n for the Dolphin SDK. See [code matching workflow](https://github.com/ellierocks/lsw1-decomp/blob/HEAD/docs/code_matching_workflow.md) |
| DOL SHA-1 | `95cca08a19224775d1a8d6cc64601fb7d0080981` |

## Progress

**Matched code** (objdiff report with strict relocation comparison):

| Measure | Matched | Total | Progress |
|---------|---------|-------|----------|
| Code bytes | 89,952 | 1,569,612 | 5.73% |
| Functions | 451 | 4,150 | 10.87% |

**Symbol naming** (`config/GL5E4F/symbols.txt`):

| Section | Named | Total | Progress |
|---------|-------|-------|----------|
| `.text` (functions) | 1,512 | 4,205 | 36.0% |
| `.rodata` | 775 | 8,384 | 9.2% |
| `.bss` | 51 | 741 | 6.9% |

CI refreshes these figures after successful GitHub builds on `main`.

```sh
python3 tools/matching_progress.py    # matched code from the local objdiff report…
