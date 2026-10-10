---
repo: "sushi-shi/homm3-decomp"
name: "homm3-decomp"
description: "  Matching decompilation of Heroes of Might and Magic III"
readmeQualityOk: true
url: "https://github.com/sushi-shi/homm3-decomp"
language: "C++"
languages: ["C++", "Python"]
languagePcts: [63, 28]
topics: ["decompilation", "msvc", "reverse-engineering"]
stars: 11
forks: 0
openIssues: 1
closedIssues: 1
watchers: 0
contributors: 2
recentReleases: 1
createdAt: "2026-07-23T12:17:52Z"
lastCommitAt: "2026-10-10T10:05:13Z"
lastReleaseAt: "2026-07-23T12:18:23Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 89
undervaluedScore: 44
maintainers: ["sushi-shi"]
openGraphImageUrl: "https://opengraph.githubassets.com/b4bb4c5d427621ead15cda3d3f0d232359ba5a96a376813726aeec82f6dcb40a/sushi-shi/homm3-decomp"
---

# homm3-decomp

> **Work in progress.** Most functions of `HEROES3.EXE` match; the remaining
> functions and data are being reconstructed.

C++ reconstruction of **Heroes of Might and Magic III Complete**
(`HEROES3.EXE`, New World Computing, 2000), built with the original Visual C++
6.0 SP3 toolchain under Wine. The Dreamcast and Classic Mac ports are references
for source structure. Retail bytes are authoritative. Supply your own
executables.

## Match status

**Windows `HEROES3.EXE`: 98.91% matched (MAX)** — 4,533 / 4,785 functions exact (94.7%), weighted by size over 1,999,585 bytes of code.

| Score | Functions exact | Weighted | Meaning                                        |
| :---- | --------------: | -------: | :--------------------------------------------- |
| CUR   |           4,532 |   98.91% | last measured score                            |
| MAX   |           4,533 |   98.91% | best result for each function's current source |
| HIST  |           4,550 |   99.08% | all-time peak across source revisions          |

MAX by module:

| Module       | Units | Functions exact MAX | Fuzzy MAX |
| :----------- | ----: | ------------------: | --------: |
| `game`       |…
