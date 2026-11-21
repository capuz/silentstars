---
repo: "tomast1337/RCT3PlusPlus"
name: "RCT3PlusPlus"
description: "An open source reimplementation of RollerCoaster Tycoon 3 tooling and engine in C++26 (GPL-3.0-or-later)"
readmeQualityOk: true
url: "https://github.com/tomast1337/RCT3PlusPlus"
language: "C++"
languages: ["C++"]
languagePcts: [91]
topics: ["cpp26", "game-engine", "rct3", "rollercoaster-tycoon", "vulkan"]
stars: 5
forks: 1
openIssues: 46
closedIssues: 133
watchers: 1
contributors: 1
recentReleases: 1
createdAt: "2026-10-12T01:04:02Z"
lastCommitAt: "2026-11-21T12:31:43Z"
lastReleaseAt: "2026-11-16T01:39:39Z"
status: "newborn"
tags: ["solo_builder", "needs_contributors", "hidden_gem", "under_pressure"]
healthScore: 95
undervaluedScore: 56
maintainers: ["tomast1337"]
openGraphImageUrl: "https://opengraph.githubassets.com/ce3d383c05f21cd4e32900a4c46823951b3cc539294aecccad80544d904c4d50/tomast1337/RCT3PlusPlus"
discussionCount: 1
---

# rct3++

An open-source reimplementation of RollerCoaster Tycoon 3 Complete Edition, in C++26.

rct3++ is a reimplementation, not a decompilation. It reads the game's data, save and scenario files from
your own copy, and rebuilds the game around them in new code. It will not be a 1:1 match of the original:
where the original's behaviour cannot be read from its files, such as the guest cap or ride physics,
rct3++ uses its own approximations, measured from the game as played or designed from scratch.

rct3++ ships no game content. You need your own legitimate copy of RollerCoaster Tycoon 3 to play.

Status: in development, not yet complete.

## Getting started

How to build rct3++, point it at your game install, configure it and run its test scripts is in
[CONTRIBUTING.md](https://github.com/tomast1337/RCT3PlusPlus/blob/HEAD/CONTRIBUTING.md#building-and-running).

## Original work

rct3++ is an original reimplementation: its code and format descriptions are our own work, written in our
own words. The repository holds nothing else: no game files or assets, no text or data copied from them,
and no decompiled or disassembled code.

Where our knowledge comes from:
