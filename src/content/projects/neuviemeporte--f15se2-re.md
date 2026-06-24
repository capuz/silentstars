---
repo: "neuviemeporte/f15se2-re"
name: "f15se2-re"
description: "Reconstructed source code for the Microprose game F-15 Strike Eagle 2 for MS-DOS"
url: "https://github.com/neuviemeporte/f15se2-re"
language: "C"
languages: ["C", "Assembly"]
languagePcts: [64, 33]
stars: 127
forks: 7
openIssues: 0
closedIssues: 0
watchers: 4
contributors: 5
recentReleases: 3
createdAt: "2024-06-21T09:50:57Z"
lastCommitAt: "2026-06-24T00:18:03Z"
lastReleaseAt: "2026-06-22T23:31:34Z"
status: "thriving"
tags: []
healthScore: 90
undervaluedScore: 45
maintainers: ["AJenbo", "neuviemeporte"]
openGraphImageUrl: "https://opengraph.githubassets.com/f113fbac0731e2a5e520179212bfd4a326494cf8bf7ae8e5b5327ff177a70ad3/neuviemeporte/f15se2-re"
---

# F-15 Strike Eagle 2 source code reconstruction

This is a reconstruction of the source code for the MS-DOS version of the Microprose game F-15 Strike Eagle 2 v451.03 (the definitive 1991 Desert Storm expansion disk version).

The original game was written in a mixture of C and assembly. The C source code was compiled with the Microsoft C compiler v5.1.

The reconstruction aims to be bug-for-bug faithful, and the C routines yield code that's identical to the original at the CPU instruction level (when compiled with the same compiler with appropriate flags), while allowing for layout differences in the executables.

Given the fact that this game shares a lot of DNA with the game that preceeded it (F-19) and the one that came after (F-117), there is probably a lot of overlap, and this effort might lead to supporting those games in the future.

This is just the reconstruction project; porting to a modern OS, potential improvements and bugfixes are targeted by a separate [porting project](https://github.com/neuviemeporte/f15se2-ex).

This repository contains no game assets, executables or other copyrighted material, it's a clean rewrite of the game's source code based on analysis of…
