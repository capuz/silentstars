---
repo: "Zontex/wii-recomp"
name: "wii-recomp"
description: "Run Nintendo Wii games as native programs: a static PowerPC-to-C recompiler with a native console runtime"
readmeQualityOk: true
url: "https://github.com/Zontex/wii-recomp"
language: "C"
languages: ["C", "Python"]
languagePcts: [76, 23]
stars: 7
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-11-03T06:28:06Z"
lastCommitAt: "2026-11-07T09:30:24Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 45
maintainers: ["Zontex"]
openGraphImageUrl: "https://opengraph.githubassets.com/0948c649e1e8ed9b50ea802bb6d4a6c36af7db1386e23b745c264d4cdb1dbe4d/Zontex/wii-recomp"
---

# Wii Recomp

**The Wii console, rebuilt as native software.**

[What runs today](#what-runs-today) · [How it works](#how-it-works) · [Build and run](#build-and-run) · [Roadmap](https://github.com/Zontex/wii-recomp/blob/HEAD/ROADMAP.md)

Wii Recomp is the Wii rebuilt as native software. The goal is a small computer, such as a Raspberry Pi 5, that works as a Wii console: the Wii Menu starts up, you put in a disc, and the game plays on Wii Remotes and the Balance Board, all as native code with no emulator in between.

Every program the console runs, the Wii Menu and each game alike, is recompiled ahead of time. Its PowerPC code is translated to C and compiled with clang. The hardware around it is rebuilt as software: the graphics chip, sound, IOS, storage, Bluetooth and the controllers.

The same system runs on macOS, which is where most of it is developed, with other platforms to follow. [`ROADMAP.md`](https://github.com/Zontex/wii-recomp/blob/HEAD/ROADMAP.md) tracks the way to a complete console.

> [!IMPORTANT]
> This repository contains code only. Bring your own games. Disc images, extracted files, translated code, Wii storage and saves stay on your machine.

## What runs today…
