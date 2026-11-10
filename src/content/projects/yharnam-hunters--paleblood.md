---
repo: "Yharnam-Hunters/Paleblood"
name: "Paleblood"
description: "A decompilation of Bloodborne (CUSA03173 v1.09) with its own runtime: the game's code rewritten as readable C++, one verified function at a time. The game doesn't run on it yet; 21 functions verified. No game files included."
readmeQualityOk: true
url: "https://github.com/Yharnam-Hunters/Paleblood"
homepage: "https://yharnam-hunters.github.io/byrgenwerth-site/"
language: "Python"
languages: ["Python", "C"]
languagePcts: [45, 38]
topics: ["bloodborne", "decompilation", "ps4", "reverse-engineering", "source-port"]
stars: 165
forks: 17
openIssues: 37
closedIssues: 5
watchers: 1
contributors: 9
recentReleases: 0
createdAt: "2026-10-07T04:45:21Z"
lastCommitAt: "2026-11-10T11:34:43Z"
status: "newborn"
tags: ["solo_builder", "needs_contributors"]
healthScore: 81
undervaluedScore: 24
maintainers: ["ThisIsAkill", "byrgenwerth-bot[bot]", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/8496d0cb717557455cd586efaa5c651a8b3c437a6dce3b6f002e941a9b13a258/Yharnam-Hunters/Paleblood"
discussionCount: 3
---

# Paleblood

*Bloodborne, rewritten as readable C++ one verified function at a time, running natively on a PC on a runtime of its own.*

The game doesn't run on Paleblood yet: 21 of 157757 functions are verified (0.01%). On [our own runtime](https://github.com/Yharnam-Hunters/Paleblood/blob/HEAD/runtime/) the executable's boot gets as far as the run's time limit, still running (no call stopped it), with 453 of 686 system imports implemented.

**[Start here](https://github.com/Yharnam-Hunters/Paleblood/issues/31)** ·
**[Documentation](https://yharnam-hunters.github.io/byrgenwerth-site/)** ·
[Discussions](https://github.com/Yharnam-Hunters/Paleblood/discussions) ·
[Contributing](https://github.com/Yharnam-Hunters/Paleblood/blob/HEAD/CONTRIBUTING.md)

## What this is

Paleblood is two things built side by side:

- **A decompilation.** The game's 1.09 PS4 executable is rewritten as readable C++, function by
  function. It is a *functional* decompilation: a replacement does not have to compile to the same
  bytes, it has to **behave** exactly like the original, and each one is proved to, against the
  original itself.
- **A native runtime.** The game's x86-64 code runs directly on your…
