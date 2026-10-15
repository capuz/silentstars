---
repo: "Yharnam-Hunters/Paleblood"
name: "Paleblood"
description: "A decompilation of Bloodborne (CUSA03173 v1.09) with its own runtime: the game's code rewritten as readable C++, one verified function at a time. The game doesn't run on it yet; 21 functions verified. No game files included."
readmeQualityOk: true
url: "https://github.com/Yharnam-Hunters/Paleblood"
homepage: "https://yharnam-hunters.github.io/byrgenwerth-site/"
language: "Python"
languages: ["Python"]
languagePcts: [62]
topics: ["bloodborne", "decompilation", "ps4", "reverse-engineering", "source-port"]
stars: 99
forks: 8
openIssues: 37
closedIssues: 3
watchers: 0
contributors: 5
recentReleases: 0
createdAt: "2026-10-07T04:45:21Z"
lastCommitAt: "2026-10-15T08:31:43Z"
status: "newborn"
tags: ["solo_builder", "needs_contributors", "hidden_gem"]
healthScore: 80
undervaluedScore: 26
maintainers: ["ThisIsAkill", "clee", "EzequielRindello"]
openGraphImageUrl: "https://opengraph.githubassets.com/d9aef42a888f7c4a12cdf8f031b0ea8578e89a5046d1e0784d029c8327aaf506/Yharnam-Hunters/Paleblood"
discussionCount: 3
---

# Paleblood

*Paleblood is a decompilation of Bloodborne with its own runtime: the game's code rewritten as readable C++, one verified function at a time.*

The game doesn't run on Paleblood yet: 21 of 157757 functions are verified (0.01%). On [our own runtime](https://github.com/Yharnam-Hunters/Paleblood/blob/HEAD/runtime/) the executable's boot gets as far as `scePthreadAttrGetaffinity` (libkernel, called by libc.elf), with 247 of 686 system imports implemented.

**[Start here](https://github.com/Yharnam-Hunters/Paleblood/issues/31)** ·
**[Documentation](https://yharnam-hunters.github.io/byrgenwerth-site/)** ·
[Discussions](https://github.com/Yharnam-Hunters/Paleblood/discussions) ·
[Contributing](https://github.com/Yharnam-Hunters/Paleblood/blob/HEAD/CONTRIBUTING.md)

| | Functions | Bytes |
|---|---:|---:|
| Target (Ghidra export) | 157757 | 42487347 |
| Replaced | 31 (0.02%) | 15353 (0.04%) |
| Edge-verified | 31 (0.02%) | 15353 (0.04%) |
| Verified | 21 (0.01%) | 14010 (0.03%) |

Each row includes the next: verified functions are also edge-verified and replaced.

| Runtime | |
|---|---|
| System imports implemented | 247 of 686 (36.01%): 219 by the game's own modules, 28 by…
