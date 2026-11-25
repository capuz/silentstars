---
repo: "pragyaangaur/VIctory-macOS"
name: "VIctory-macOS"
description: "Attempting to run GTA VI on macOS."
readmeQualityOk: true
url: "https://github.com/pragyaangaur/VIctory-macOS"
language: "Rust"
languages: ["Rust"]
languagePcts: [98]
topics: ["apple-silicon", "game-porting", "macos", "metal", "rust", "wine", "gta6"]
stars: 109
forks: 20
openIssues: 8
closedIssues: 14
watchers: 2
contributors: 93
recentReleases: 0
createdAt: "2026-11-24T03:08:40Z"
lastCommitAt: "2026-11-25T13:20:24Z"
status: "newborn"
tags: ["solo_builder"]
healthScore: 91
undervaluedScore: 29
maintainers: ["pragyaangaur", "curethra", "earpjonathan"]
openGraphImageUrl: "https://opengraph.githubassets.com/0a8f93156b55f90dba897c9fd7d42e8e45ed1c62ccc929547d01d9351cd282eb/pragyaangaur/VIctory-macOS"
---

Grand Theft Auto VI is only out on consoles. This project runs the Xbox Series build on Apple Silicon Macs, from a copy of the game that you own.<br>
It is built on <a href="https://github.com/Marvisak/VIctory">VIctory</a>, which does the same on Windows, and it brings that work to the Mac through Wine and Metal.

If you want to see GTA VI on a Mac, please star the repo and read <a href="CONTRIBUTING.md">CONTRIBUTING.md</a>. Help is welcome at every level.

> **Important**
>
> **The game is not playable yet, on the Mac or anywhere else.** On testers' Macs the game starts, plays its intro and audio, shows its loading screens, and on 25 November the game world appeared on two Macs (#50). Nobody has reached gameplay yet. The loading freezes testers hit on 25 November were two deadlocks inside Wine, found by LakshanSivakumar and fixed in #72, #75 and #78. With `VICTORY_PATCH_MASKED=all VICTORY_FAULT_TRACKING=1` the game now loads into the world without freezing, but there it runs at only 0.1 to 0.2 fps. With `VICTORY_PATCH_MASKED=all VICTORY_FAULT_TRACKING=1`, loading now runs at about 26 to 30 fps instead of 8 (#59, #60).
