---
repo: "smm2recomp/smm2recomp"
name: "smm2recomp"
description: "Super Mario Maker 2 Recomp"
readmeQualityOk: true
url: "https://github.com/smm2recomp/smm2recomp"
language: "C"
languages: ["C", "Rust"]
languagePcts: [43, 41]
stars: 201
forks: 19
openIssues: 22
closedIssues: 19
watchers: 4
contributors: 7
recentReleases: 10
createdAt: "2026-10-19T03:02:41Z"
lastCommitAt: "2026-10-30T11:01:13Z"
lastReleaseAt: "2026-10-22T12:14:32Z"
status: "newborn"
tags: ["solo_builder", "release_machine"]
healthScore: 89
undervaluedScore: 28
maintainers: ["smm2recomp", "mm2srv", "alecanales"]
openGraphImageUrl: "https://opengraph.githubassets.com/1b96f03a784b8f026be5e1b1210bcfa5c6e9569af89ebb7be36a03c1ec4c361a/smm2recomp/smm2recomp"
---

# SMM2 Recomp

A native port of **Super Mario Maker 2** (v3.0.3) for macOS, iOS / iPadOS, Windows, Linux and
Android, made by **static recompilation**. The game's AArch64 code is translated to C ahead of time
and compiled for your platform. A native runtime stands in for the Switch's system services, and
the game's graphics run on Metal or Vulkan. Nothing is emulated at run time.

On top of the original game it adds:

- **The 100 Mario Challenge from Super Mario Maker 1**, with SMM1's difficulty select, world map,
  start card and ending, next to SMM2's own Endless Challenge
- **Course World without Nintendo's servers**, through a self-hostable open-source course server,
  courses from [TGRCode](https://tgrcode.com/mm2)'s public archive, or your own
  [OpenCourse World](https://opencourse.world/) account
- **SMM1 features as mods**, each with its own switch: Mystery Mushroom costumes, Lanky Mario (the Weird
  Mushroom), mid-air shell jumps, overlapping pipes, and "Try it now" buttons to try them in a course
- **Co-op in Endless and 100 Mario**, **Super Worlds** in Course World, and **editing any course** you
  downloaded

> **You need your own copy of the game.** This repository…
