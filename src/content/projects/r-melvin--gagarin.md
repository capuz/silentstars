---
repo: "r-melvin/gagarin"
name: "gagarin"
description: "Decompilation of the Red Alert 2 / Yuri's Revenge engine (gamemd.exe v1.001, MSVC 6.0) for software preservation"
readmeQualityOk: true
url: "https://github.com/r-melvin/gagarin"
language: "C++"
languages: ["C++"]
languagePcts: [75]
topics: ["commandandconquer", "decompilation", "preservation", "preservation-project", "red-alert-2", "redalert2", "yuris-revenge", "yurisrevenge", "command-and-conquer"]
stars: 22
forks: 3
openIssues: 0
closedIssues: 1
watchers: 2
contributors: 3
recentReleases: 0
createdAt: "2026-10-20T00:56:19Z"
lastCommitAt: "2026-10-30T10:52:26Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 44
maintainers: ["r-melvin"]
openGraphImageUrl: "https://opengraph.githubassets.com/50ef428190db6089d04765b4539153ddb64d66b2d1509297b737cb1ca339fbd0/r-melvin/gagarin"
---

# gagarin

**gagarin** is reconstructing the *Command & Conquer: Red Alert 2 — Yuri's
Revenge* engine from retail `gamemd.exe` v1.001. The aim is a buildable,
structured, human-readable C++ project whose classes and organization follow
Westwood's as closely as binary evidence allows. Each annotated engine function
aims to reproduce the retail instructions with the period compiler, including
verified layouts and address bindings. Statically linked library code is outside
source-recovery scope. Function matching and successful compilation do not prove
whole-image identity.

The current project status, verified progress, consolidation record, coverage
caveats and remaining gates are in [STATUS.md](https://github.com/r-melvin/gagarin/blob/HEAD/STATUS.md). The target image is
identified by SHA-256 in [reccmp-project.yml](https://github.com/r-melvin/gagarin/blob/HEAD/reccmp-project.yml).

At source snapshot `ce91a761` (2026-10-27), 10,307 of the 19,778 functions in
the extent census are matched (52.1%) and 784 more are partial. Matched bodies
cover 716,425 of 3,878,653 listed function bytes (18.5%). The full regression
check re-proves every matched row; affected exact functions also…
