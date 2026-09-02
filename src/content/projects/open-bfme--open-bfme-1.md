---
repo: "Open-BFME/Open-BFME-1"
name: "Open-BFME-1"
description: "Open Source, 1:1 binary swappable recreation of the Lord of the Rings, Battle for Middle-Earth"
readmeQualityOk: true
url: "https://github.com/Open-BFME/Open-BFME-1"
language: "C++"
languages: ["C++", "C"]
languagePcts: [62, 23]
stars: 63
forks: 15
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 19
recentReleases: 0
createdAt: "2026-06-28T04:47:06Z"
lastCommitAt: "2026-09-02T08:05:35Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 90
undervaluedScore: 32
maintainers: ["jonathan-farmer1", "jonathan", "argalad"]
openGraphImageUrl: "https://opengraph.githubassets.com/b6ad1d7849f4e36fb2ff64d12383488a12f60fbc4f44c8efe1f146b1b264b2bd/Open-BFME/Open-BFME-1"
---

# BFME 1 Source Code

Goal: Source code that rebuilds BFME 1's executable byte-for-byte, and game modernization improvements that you've only seen in your dreams.

[Join our Discord to participate!](https://discord.gg/wCvA2XqPUT)

## What?

* If you take a part of the BFME binary, recreate the exact source code that would make that part of the binary, then compile the source code and inject it into the binary, you get the same binary
* Doing this piece by piece will eventually give you a full, open source recreation of BFME, and enable some (insane) mods

## Status

**46.29% of the game rebuilds from what we hold** — C++ we wrote, library source, generators,
libs we link. The rest is byte-true dumps of retail: a boundary, not source. Converting them
is the work.

## Roadmap

* [ ] BFME 1 Source Code (46.29%)
* [x] Network delay fix
* [ ] Memory fix
* [ ] Better crash logs
* [ ] 60/120 FPS
* [ ] Multi CPU
* [ ] AC fix
* [ ] World builder Source Code
* [ ] 16 player maps

## How You Can Help

Clone the repo and give your AI agent this exact prompt — measured on six agent
sessions, a vaguer prompt reliably produces zero progress:

> Read AGENTS.md and follow it. Loop: take the served…
