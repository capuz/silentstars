---
repo: "Yharnam-Hunters/Paleblood"
name: "Paleblood"
description: "A decompilation of Bloodborne (CUSA03173 v1.09) with its own runtime: the game's code rewritten as readable C++, one verified function at a time. The game doesn't run on it yet; 21 functions verified. No game files included."
readmeQualityOk: true
url: "https://github.com/Yharnam-Hunters/Paleblood"
homepage: "https://yharnam-hunters.github.io/byrgenwerth-site/"
language: "Python"
languages: ["Python", "C"]
languagePcts: [56, 26]
topics: ["bloodborne", "decompilation", "ps4", "reverse-engineering", "source-port"]
stars: 157
forks: 17
openIssues: 37
closedIssues: 4
watchers: 1
contributors: 9
recentReleases: 0
createdAt: "2026-10-07T04:45:21Z"
lastCommitAt: "2026-11-05T14:00:43Z"
status: "newborn"
tags: ["solo_builder", "needs_contributors"]
healthScore: 78
undervaluedScore: 24
maintainers: ["ThisIsAkill", "EzequielRindello"]
openGraphImageUrl: "https://opengraph.githubassets.com/41e6ae540c0befaf41370a338d69c0cdad28511423bb33df01e56053ff5fb4dd/Yharnam-Hunters/Paleblood"
discussionCount: 3
---

# Paleblood

*Paleblood is a decompilation of Bloodborne with its own runtime: the game's code rewritten as readable C++, one verified function at a time.*

The game doesn't run on Paleblood yet: 21 of 157757 functions are verified (0.01%). On [our own runtime](https://github.com/Yharnam-Hunters/Paleblood/blob/HEAD/runtime/) the executable's boot gets as far as `scePlayGoInitialize` (libScePlayGo), with 368 of 686 system imports implemented.

**[Start here](https://github.com/Yharnam-Hunters/Paleblood/issues/31)** ·
**[Documentation](https://yharnam-hunters.github.io/byrgenwerth-site/)** ·
[Discussions](https://github.com/Yharnam-Hunters/Paleblood/discussions) ·
[Contributing](https://github.com/Yharnam-Hunters/Paleblood/blob/HEAD/CONTRIBUTING.md)

| | Functions | Bytes |
|---|---:|---:|
| Target (Ghidra export) | 157757 | 42487347 |
| Replaced | 117 (0.07%) | 31708 (0.07%) |
| Edge-verified | 117 (0.07%) | 31708 (0.07%) |
| Verified | 21 (0.01%) | 14010 (0.03%) |

Each row includes the next: verified functions are also edge-verified and replaced.

| Runtime | |
|---|---|
| System imports implemented | 368 of 686 (53.64%): 219 by the game's own modules, 149 by the runtime |
|…
