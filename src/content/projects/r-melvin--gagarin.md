---
repo: "r-melvin/gagarin"
name: "gagarin"
description: "Decompilation of the Red Alert 2 / Yuri's Revenge engine (gamemd.exe v1.001, MSVC 6.0) for software preservation"
readmeQualityOk: true
url: "https://github.com/r-melvin/gagarin"
language: "C++"
languages: ["C++"]
languagePcts: [78]
topics: ["commandandconquer", "decompilation", "preservation", "preservation-project", "red-alert-2", "redalert2", "yuris-revenge", "yurisrevenge", "command-and-conquer"]
stars: 14
forks: 2
openIssues: 0
closedIssues: 1
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2026-10-20T00:56:19Z"
lastCommitAt: "2026-10-27T09:11:18Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 49
maintainers: ["r-melvin"]
openGraphImageUrl: "https://opengraph.githubassets.com/53b617ba5f3ed1abc5d583720839d0b8bbf42cf6c776b0d38ad0e816615e8b14/r-melvin/gagarin"
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

At source snapshot `7f489c73` (2026-10-26), 10,270 of the 19,778 functions in
the extent census are matched (51.9%) and 743 more are partial. Matched bodies
cover 710,873 of 3,878,653 listed function bytes (18.3%). The full regression
check re-proves every matched row; affected exact functions also…
