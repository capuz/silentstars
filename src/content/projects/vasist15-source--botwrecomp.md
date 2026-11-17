---
repo: "vasist15-source/BOTWRecomp"
name: "BOTWRecomp"
description: "Breath of the Wild (Wii U 1.5.0) statically recompiled to native macOS/Metal. Bring your own dump: the installer builds the game on your Mac."
readmeQualityOk: true
url: "https://github.com/vasist15-source/BOTWRecomp"
language: "C"
languages: ["C", "C++"]
languagePcts: [51, 35]
topics: ["apple-silicon", "breath-of-the-wild", "macos", "metal", "recompilation", "static-recompilation", "wii-u", "zelda"]
stars: 32
forks: 2
openIssues: 1
closedIssues: 2
watchers: 1
contributors: 3
recentReleases: 10
createdAt: "2026-10-20T15:16:40Z"
lastCommitAt: "2026-11-17T14:37:13Z"
lastReleaseAt: "2026-11-06T23:13:41Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 93
undervaluedScore: 43
maintainers: ["vasist15-source", "shpodg"]
openGraphImageUrl: "https://opengraph.githubassets.com/0d1d58ee79f31f34fac9b2d3b160c9a320b9976642691d278ce8f8d7c8d668b6/vasist15-source/BOTWRecomp"
---

# BOTWRecomp: Breath of the Wild, native for Apple Silicon Macs

A native macOS build of *The Legend of Zelda: Breath of the Wild* (Wii U, update v208 / game
version 1.5.0), made by static recompilation: the game's own PowerPC code is translated to C ahead of
time and compiled for Apple Silicon, Cafe OS is reimplemented natively, and GX2 graphics go straight
to Metal. There is no emulator in between.

You need your own copy of the game. This repository contains no game code, executables, artwork,
sound or video. The installer takes the files from your dump and builds the app on your Mac. Nothing
it builds is meant to be shared.

This project is not affiliated with or endorsed by Nintendo. The Legend of Zelda and Breath of the
Wild are trademarks of Nintendo.

**Status: Fully playable.** It boots, plays the intro and the Great Plateau, with menus, NPCs,
sound, movie cutscenes, saving and the DLC, at the game's own 30 fps, 60 fps, 120 fps and uncapped on an M4 MacBook Air. Expect
rough edges: stutter the first time new effects are drawn (shaders are compiled then, and cached).

## Play it on your Mac

1. Have your own dump of the game (see below).
2. Download…
