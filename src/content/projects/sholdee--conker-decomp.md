---
repo: "sholdee/conker-decomp"
name: "conker-decomp"
description: "Byte-matching decompilation of Conker's Bad Fur Day (N64, US)"
readmeQualityOk: true
url: "https://github.com/sholdee/conker-decomp"
language: "C"
languages: ["C"]
languagePcts: [89]
topics: ["conker", "decompilation", "ido", "matching-decompilation", "n64", "nintendo-64", "reverse-engineering"]
stars: 15
forks: 2
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-11-25T17:11:41Z"
lastCommitAt: "2026-11-27T15:27:04Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 89
undervaluedScore: 41
maintainers: ["sholdee"]
openGraphImageUrl: "https://opengraph.githubassets.com/8848fe48e01f851bbe7d03b57e6d8cc9bd1bc4ae1c855c20af3544f5489e5797/sholdee/conker-decomp"
---

# Conker's Bad Fur Day decompilation

A decompilation of the CPU code of *Conker's Bad Fur Day* (Nintendo 64, US release). The build
reproduces the original US ROM byte for byte, and it is fully linked: code and data can move.

You need your own copy of the game to build it. This repository contains no ROM, no game assets and no
game text.

## Status (US only)

The map shows every source file, sized by its code. Green is C that compiles to byte-identical code, and
blue is hand-written assembly (281 pieces with a proof, 8 with search evidence). CI regenerates it and the
badges from the committed files after each change to `master` (`tools/progress.py`).
