---
repo: "ryanbevins/Graffito-Decomp"
name: "Graffito-Decomp"
description: "Graffito Decomp - a matching decompilation of Super Mario Sunshine (GMSJ01), descended from doldecomp/sms."
readmeQualityOk: true
url: "https://github.com/ryanbevins/Graffito-Decomp"
language: "C++"
languages: ["C++"]
languagePcts: [84]
topics: ["decompilation", "gamecube", "powerpc", "reverse-engineering", "super-mario-sunshine"]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 19
recentReleases: 0
createdAt: "2026-02-06T14:06:50Z"
lastCommitAt: "2026-08-10T05:06:59Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 47
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/17bef1df41859a7c0669ca6e48a5a6cb930df91e0cfcf391fed64e647a4d329d/ryanbevins/Graffito-Decomp"
---

# Graffito Decomp

Graffito Decomp is a work-in-progress, byte-matching decompilation of *Super Mario
Sunshine*. Its primary target is `GMSJ01` (Japanese Revision 0), using the
original Metrowerks CodeWarrior compiler for PowerPC/Gekko.

The project descends from [doldecomp/sms](https://github.com/doldecomp/sms) and
continues as a standalone research effort. The goal is readable C and C++ that
reproduces the original object code exactly wherever possible, with
instruction-level evidence for any code classified as functionally equivalent.

## Project status

- `GMSJ01`: active and supported.
- `GMSP01`: configuration retained, but currently incomplete and not a
  supported build target.
- The repository is under active development. APIs, names, layouts, and source
  organization may change as better evidence is recovered.

The current source tree does **not** contain game assets, retail binaries, or
generated assembly. You must provide your own legally obtained copy of the
game.

## Requirements

- Python 3
- [Ninja](https://ninja-build.org/)
- A legally obtained supported game disc image

On x86-64 Linux, the build downloads and uses
[wibo](https://github.com/decompals/wibo).…
