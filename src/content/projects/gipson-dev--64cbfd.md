---
repo: "gipson-dev/64CBFD"
name: "64CBFD"
description: "CBFD Decomp"
readmeQualityOk: true
url: "https://github.com/gipson-dev/64CBFD"
language: "C"
languages: ["C"]
languagePcts: [65]
stars: 10
forks: 1
openIssues: 1
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2026-07-13T10:24:13Z"
lastCommitAt: "2026-11-13T18:05:38Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 60
undervaluedScore: 36
maintainers: ["gipson-dev"]
openGraphImageUrl: "https://opengraph.githubassets.com/4027a3af6e702f41c52fc9df262d8c2c2a790dfc903d02e4b09fab17512f754f/gipson-dev/64CBFD"
discussionCount: 1
---

# Conker's Bad Fur Day (N64) Decompilation

A work-in-progress decompilation of *Conker's Bad Fur Day* for Nintendo 64.
The project reconstructs the original game code and data in a form that can be
built, studied, and matched against the retail ROM.

> [!IMPORTANT]
> This repository does not contain game assets or ROM files. You must provide
> your own legally obtained copy of the game.

## A little look

Current measurements, verified build state, and the active resume boundary are
maintained in [Current Decomp Status](https://github.com/gipson-dev/64CBFD/blob/HEAD/DOCS/CURRENT_STATUS.md). PC-port progress
and cross-project boundaries are maintained separately in the
[PC Port Roadmap](https://github.com/gipson-dev/64CBFD/blob/HEAD/DOCS/PC_PORT_ROADMAP.md).

## Status

Snapshot verified on 2026-11-13. "Converted" means a function has C source;
"byte-exact" means its linked instructions match the retail game. See
[Current Decomp Status](https://github.com/gipson-dev/64CBFD/blob/HEAD/DOCS/CURRENT_STATUS.md) for the detailed handoff.

| Section | Converted functions | Converted bytes |
| --- | ---: | ---: |
| Total | 5,516 / 6,048 (91.20%) | 86.18% |
| Init | 492 / 539 (91.28%) |…
