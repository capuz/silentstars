---
repo: "jattree/nxc"
name: "nxc"
description: "A patch format for ZX Spectrum Next games: holds no game data, applies to your own copy. Inspired by Bleugh.biz's nexclash."
readmeQualityOk: true
url: "https://github.com/jattree/nxc"
language: "Python"
languages: ["Python", "Assembly"]
languagePcts: [69, 31]
stars: 27
forks: 2
openIssues: 5
closedIssues: 3
watchers: 5
contributors: 3
recentReleases: 0
createdAt: "2026-11-03T08:00:55Z"
lastCommitAt: "2026-11-27T16:31:09Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 87
undervaluedScore: 33
maintainers: ["jattree", "bleughb"]
openGraphImageUrl: "https://opengraph.githubassets.com/c1a7e46dffc7ae2b5e746c5e37b216667916dd332389d57a63ee1b13c79da8ab/jattree/nxc"
---

&nbsp;·&nbsp; <a href="#one-time-card-setup">Set up your card</a>
  &nbsp;·&nbsp; <a href="#play-a-game">Play a game</a>
  &nbsp;·&nbsp; <a href="#part-2-make-a-patch">Make a patch</a>
  &nbsp;·&nbsp; <a href="spec/NXC-FORMAT.md">The format</a>

[NexClash](https://github.com/bleughb/nexclash), by Dean Woodyatt (Bleugh.biz), rebuilds Spectrum games so that
their moving figures are Next hardware sprites, which keep their own colours. Its builds contain the game, so they
can't be shared. A `.nxc` patch holds only what the build adds. You put it beside your own copy of the game, and the
Next rebuilds the game with the clash fixed, plus any cheats or colour sets the patch offers.

The format and tools are by Jon Attree. Built with NexClash by Dean Woodyatt (Bleugh.biz,
[bleughb/nexclash](https://github.com/bleughb/nexclash), GPL-3.0-or-later).

> **Status: early.** Everything has been tested in the JNext emulator. On real hardware so far, the loader has run on Jon's
> NextNano (a Tang Nano 20K FPGA build of the Next) with NextZXOS v2.09, and nothing beyond that. It has not yet run on
> an official Next board. The format may still change.
