---
repo: "bornaradusin/PC5"
name: "PC5"
description: "A launcher for PC games on a jailbroken PS5, built on prospero-win (Wine, DXVK, VKD3D-Proton). Install games from USB with automatic covers, pick them from a carousel, and use the DualSense: vibration, light bar, adaptive triggers. FPS counter and update check. Games that need a launcher to start are not supported."
readmeQualityOk: true
url: "https://github.com/bornaradusin/PC5"
language: "C"
languages: ["C"]
languagePcts: [90]
stars: 22
forks: 3
openIssues: 13
closedIssues: 46
watchers: 1
contributors: 3
recentReleases: 10
createdAt: "2026-10-22T21:41:25Z"
lastCommitAt: "2026-10-27T12:39:36Z"
lastReleaseAt: "2026-10-25T13:32:44Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "funded", "release_machine", "community_hub"]
healthScore: 96
undervaluedScore: 48
maintainers: ["bornaradusin", "SuperLeiyan"]
openGraphImageUrl: "https://opengraph.githubassets.com/c4e76eab2c6a0baae809a4f169d611bcc1f591863850afed09944a3c2e47e327/bornaradusin/PC5"
fundingLinks: ["BUY_ME_A_COFFEE:https://buymeacoffee.com/bornaradusin"]
discussionCount: 38
---

# PC5

A launcher for your own PC games on a PS5 that runs homebrew. PC5 shows your games as a row
of covers, installs games from a USB drive in one copy each, updates them from a newer copy
with their saves kept, and uninstalls them with or without their saves. It runs the games with [prospero-win](https://github.com/mpereiraesaa/prospero-win)
(Wine on the PS5). The app is `PPSA11018`, its tile is called **PC5**. This is version 1.8.3.
Temporary hotfix for 1.8.3 

**1. Open /data/prospero-win/pc5/settings.txt on the console (FTP).**

**2. Change the startup_sound = startup_sound = OFF (add the line if it isn’t there), and save.**

No game is part of PC5, and PC5 downloads none: you install the games you own.

         alt="Buy Me a Coffee"
         width="140">

## Getting started

1. Download `PPSA11018.zip` from [the releases](https://github.com/bornaradusin/PC5/releases),
   unzip it, copy the `PPSA11018` folder to the console the way you add any homebrew app, and
   start **PC5** from Home.
2. Put each game's installed folder (the one with its `.exe`) at the top of an **exFAT** USB
   drive, or in a `Games` folder there.
3. In PC5 press **Options** › **Install games from…
