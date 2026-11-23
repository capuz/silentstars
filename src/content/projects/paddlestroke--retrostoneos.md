---
repo: "PaddleStroke/RetroStoneOS"
name: "RetroStoneOS"
description: "A retrogaming alternative to retropie."
readmeQualityOk: true
url: "https://github.com/PaddleStroke/RetroStoneOS"
language: "C"
languages: ["C"]
languagePcts: [82]
stars: 30
forks: 4
openIssues: 7
closedIssues: 6
watchers: 2
contributors: 4
recentReleases: 5
createdAt: "2026-09-27T18:21:15Z"
lastCommitAt: "2026-11-23T10:14:39Z"
lastReleaseAt: "2026-10-23T17:07:42Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 82
undervaluedScore: 41
maintainers: ["PaddleStroke", "KurdtNervanna", "jmcaamanog"]
openGraphImageUrl: "https://opengraph.githubassets.com/21394ecc1aaa39212d9dc3987611bafa405b7997a862e57d68502bb2e1529a6d/PaddleStroke/RetroStoneOS"
---

# RetroStoneOS

**A fast, minimal retro-gaming OS for the RetroStone2 handheld, and for Raspberry Pi and Orange Pi boards.**

RetroStoneOS boots straight into an EmulationStation-style menu **in about two seconds**, plays games from 40
systems, and switches between the built-in screen and a TV **live, just by plugging HDMI in**. It replaces the old
RetrOrangePi stack (Armbian + RetroPie + RetroArch + EmulationStation) with one small, purpose-built system: mainline
Linux, a single menu/emulation program written in C, and libretro emulator cores. There's no desktop, no X11 and no
layer cake, and every setting lives in one menu.

## Features

**Fast**
- About 2 s from power-on to the logo, and the menu about 0.3 s later. The menu is drawn from a snapshot while game lists load in the background.
- Theme art is prefetched in the background, so a system's first visit in the carousel does not stutter.
- Shutdown in about a second. Powering off during a game saves it; at the next boot the game resumes **Always**, **Ask** or **Never** (your choice).
