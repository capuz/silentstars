---
repo: "AnimaInCorpore/STEArcade"
name: "STEArcade"
description: "Arcade games ported to an 8 MHz Atari STE, developed with AI coding agents (Claude Code). Z80, 6809, V30 and MCU code is statically translated to 68000 and checked frame by frame against a reference machine built from MAME; the Blitter draws tiles and sprites."
readmeQualityOk: true
url: "https://github.com/AnimaInCorpore/STEArcade"
language: "Python"
languages: ["Python", "Assembly"]
languagePcts: [65, 33]
stars: 18
forks: 0
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 7
createdAt: "2026-10-07T15:25:57Z"
lastCommitAt: "2026-11-03T19:05:10Z"
lastReleaseAt: "2026-10-28T07:59:03Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 70
undervaluedScore: 38
maintainers: ["AnimaInCorpore"]
openGraphImageUrl: "https://opengraph.githubassets.com/1d9ade0821fc8a2d82583a971032ea5e9795a926a0c9bb3f3718b21960f5c7d3/AnimaInCorpore/STEArcade"
---

# Arcade games on the Atari STE

**Note: this project is AI-assisted.** Much of its code and documentation was written by AI coding agents
(Claude Code) under the author's direction; if you prefer to avoid AI-assisted work, this project is not for you.
Static translation of Z80, 6809-family and NEC V30 arcade programs to 68000 code, with a Blitter based renderer, running on an
8 MHz Atari STE with 4 MB of RAM and no accelerator.  Each port is a reference machine written from the MAME driver, a whole-program translation
checked against it in lock-step, and a runtime that delivers the arcade's interrupts at the vertical blank and draws the
arcade's tiles and sprites (sprites with short HOG Blitter passes and prepared opaque end masks).

This project is developed with AI coding agents (Claude Code): much of the translators, runtimes, tools and
documentation was written by them under the author's direction.  Correctness is checked by testing rather than by
trust: every translation runs in lock-step against its reference machine, and the pictures are compared with the
reference renderer and MAME.

| screenshot (Hatari) | game | CPUs | Port status |
|---|---|---|---|
|…
