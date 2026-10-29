---
repo: "tloriato/OpenSC4"
name: "OpenSC4"
description: "An open source re-implementation of SimCity 4 🏢"
readmeQualityOk: true
url: "https://github.com/tloriato/OpenSC4"
language: "Rust"
languages: ["Rust"]
languagePcts: [76]
stars: 38
forks: 3
openIssues: 1
closedIssues: 0
watchers: 2
contributors: 5
recentReleases: 0
createdAt: "2026-10-12T19:56:52Z"
lastCommitAt: "2026-10-29T05:49:02Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 70
undervaluedScore: 27
maintainers: ["tloriato"]
openGraphImageUrl: "https://opengraph.githubassets.com/3c94202a79b485e243b98653c1362840268010d6084a8654362fc5ca2979ff20/tloriato/OpenSC4"
discussionCount: 1
---

# OpenSC4

**An open-source reimplementation of the SimCity 4 engine, written in Rust.**

SimCity 4 is over twenty years old, still loved, and still running on a 32-bit, mostly single-threaded engine from
2003. OpenSC4 rebuilds its engine from scratch, the way [OpenRCT2](https://openrct2.io/) did for RollerCoaster
Tycoon 2. It replaces the original game piece by piece, proves each piece behaves exactly like the original, and keeps
going until the original executable is no longer needed.

You need your own copy of **SimCity 4 Deluxe** (the GOG 1.1.641 Windows release). OpenSC4 ships no game assets.

> **Status: work in progress, and already playable in a hybrid form.** You can run the real game today with 27 of
> its simulation systems handed over to OpenSC4's Rust code.

## What works today

OpenSC4 runs *inside* the original game as a plugin. Each system can be switched on independently, and the game
keeps running its own code for everything else.

- **The clock, budget, demand, ordinances and weather.**
- **Every map-based system:** power, water, pollution, crime, fire and police coverage, land value,
  flammability, trees and landfills.
- **Growth:** residential, commercial and…
