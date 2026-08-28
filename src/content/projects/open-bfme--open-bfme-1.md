---
repo: "Open-BFME/Open-BFME-1"
name: "Open-BFME-1"
description: "Open Source, 1:1 binary swappable recreation of the Lord of the Rings, Battle for Middle-Earth"
readmeQualityOk: true
url: "https://github.com/Open-BFME/Open-BFME-1"
language: "C++"
languages: ["C++", "C"]
languagePcts: [62, 24]
stars: 59
forks: 12
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 18
recentReleases: 0
createdAt: "2026-06-28T04:47:06Z"
lastCommitAt: "2026-08-28T12:22:58Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 32
maintainers: ["argalad", "Ancalgonn", "codex"]
openGraphImageUrl: "https://opengraph.githubassets.com/26d10615532221e9bebcf128c25d49ce75be391785c4ee0ae76208ad0851be5a/Open-BFME/Open-BFME-1"
---

# BFME 1 Source Code

Goal: Source code that rebuilds BFME 1's executable byte-for-byte, and game modernization improvements that you've only seen in your dreams.

## What?

* If you take a part of the BFME binary, recreate the exact source code that would make that part of the binary, then compile the source code and inject it into the binary, you get the same binary
* Doing this piece by piece will eventually give you a full, open source recreation of BFME, and enable some (insane) mods

## Status

**35.16% of the game rebuilds from what we hold** — C++ we wrote, library source, generators,
libs we link. The rest is byte-true dumps of retail: a boundary, not source. Converting them
is the work.

## Roadmap

* [ ] BFME 1 Source Code (35.16%)
* [x] Network delay fix
* [ ] Memory fix
* [ ] Better crash logs
* [ ] 60/120 FPS
* [ ] Multi CPU
* [ ] AC fix
* [ ] World builder Source Code
* [ ] 16 player maps

ping `redbracket` on Discord if there's something else you want to change this roadmap

## How You Can Help

Clone the repo and give your AI agent this exact prompt — measured on six agent
sessions, a vaguer prompt reliably produces zero progress:

> Read AGENTS.md and follow it.…
