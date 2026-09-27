---
repo: "gipson-dev/64CBFD"
name: "64CBFD"
description: "CBFD Decomp"
readmeQualityOk: true
url: "https://github.com/gipson-dev/64CBFD"
language: "C"
languages: ["C", "Python"]
languagePcts: [59, 20]
stars: 7
forks: 1
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2026-07-13T10:24:13Z"
lastCommitAt: "2026-09-27T09:27:41Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 70
undervaluedScore: 46
maintainers: ["gipson-dev"]
openGraphImageUrl: "https://opengraph.githubassets.com/fd416dc28b46e8aa3178562dcf26d76c516128c3b02fef803d79db47c1366867/gipson-dev/64CBFD"
discussionCount: 1
---

# Conker's Bad Fur Day (N64) Decompilation

A work-in-progress decompilation of *Conker's Bad Fur Day* for Nintendo 64.
The project reconstructs the original game code and data in a form that can be
built, studied, and matched against the retail ROM.

> [!IMPORTANT]
> This repository does not contain game assets or ROM files. You must provide
> your own legally obtained copy of the game.

Current measurements, verified build state, and the active resume boundary are
maintained in [Current Decomp Status](https://github.com/gipson-dev/64CBFD/blob/HEAD/DOCS/CURRENT_STATUS.md). PC-port progress
and cross-project boundaries are maintained separately in the
[PC Port Roadmap](https://github.com/gipson-dev/64CBFD/blob/HEAD/DOCS/PC_PORT_ROADMAP.md).

## Status

Snapshot verified on 2026-09-27. "Converted" means a function has C source;
"byte-exact" means its linked instructions match the retail game. See
[Current Decomp Status](https://github.com/gipson-dev/64CBFD/blob/HEAD/DOCS/CURRENT_STATUS.md) for the detailed handoff.

| Section | Converted functions | Converted bytes |
| --- | ---: | ---: |
| Total | 5,469 / 6,040 (90.55%) | 85.60% |
| Init | 497 / 538 (92.38%) | 90.58% |
| Game |…
