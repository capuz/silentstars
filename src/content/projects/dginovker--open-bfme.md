---
repo: "dginovker/Open-BFME"
name: "Open-BFME"
description: "Open Source, 1:1 binary swappable recreation of the Lord of the Rings, Battle for Middle-Earth"
readmeQualityOk: true
url: "https://github.com/dginovker/Open-BFME"
language: "C++"
languages: ["C++"]
languagePcts: [94]
stars: 8
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-06-28T04:47:06Z"
lastCommitAt: "2026-07-12T06:18:59Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 46
maintainers: ["dginovker"]
openGraphImageUrl: "https://opengraph.githubassets.com/f9ceee324349da20e4fcaf34f69d4a961e4e7f20077e6e46aeb1862669187f2e/dginovker/Open-BFME"
---

# BFME 1 Source Code

Reverse engineered with AI.

Goal: source code that rebuilds BFME 1's executable byte-for-byte.

## What?

* If you take a part of the BFME binary, recreate the exact source code that would make that part of the binary, then compile the source code and inject it into the binary, you get the same binary
* Doing this piece by piece will eventually give you a full, open source recreation of BFME, and enable some (insane) mods
* The goal of this project _is not_ to mod the game. The point of the project is to get source code that can be compiled into a 1:1, bit by bit replica of BFME 1's binary. This ensures 100% accuracy and will enable future (insane) modifications

## Status

We currently have C++ functions in `src/` and a patcher which can patch same-size custom functions into `lotrbfme.exe`. This is useful for modding.

## How You Can Help

Just tell your favorite AI agent to make a PR in this repo, where each commit in the PR is an individual contribution. Your agent will know what to do from there (just make sure it keeps looping and making more commits), and I will be able to merge your PR.

!! All such AI-generated PRs are appreciated !!

## Build…
