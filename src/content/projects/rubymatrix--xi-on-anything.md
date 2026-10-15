---
repo: "rubymatrix/xi-on-anything"
name: "xi-on-anything"
description: "Static recompilation of FINAL FANTASY XI's FFXiMain.dll (and FFXi.dll) from 32-bit x86 to C, so the game runs natively on arm64 macOS without Wine or Rosetta"
readmeQualityOk: true
url: "https://github.com/rubymatrix/xi-on-anything"
language: "C"
languages: ["C"]
languagePcts: [54]
stars: 10
forks: 2
openIssues: 7
closedIssues: 23
watchers: 0
contributors: 4
recentReleases: 10
createdAt: "2026-09-25T00:01:19Z"
lastCommitAt: "2026-10-15T08:32:49Z"
lastReleaseAt: "2026-10-03T08:30:24Z"
status: "newborn"
tags: ["hidden_gem", "release_machine"]
healthScore: 94
undervaluedScore: 57
maintainers: ["rubymatrix", "rdbell"]
openGraphImageUrl: "https://opengraph.githubassets.com/584706348f9379aa5608cccbebb52bc27c2d0a2383f9553e79238d766b9d4295/rubymatrix/xi-on-anything"
---

> [!IMPORTANT]
> ## ▶ To play, get the [XI on Anything launcher](#install-players)
>
> **The launcher installs and updates everything for you.** You don't need to build this repo
> to play. Paste into Terminal:
>
> ```bash
> curl -fsSL https://raw.githubusercontent.com/rubymatrix/xi-on-anything/main/install.sh | bash
> ```
>
> Needs an Apple silicon Mac (M1 or later) and your own copy of FINAL FANTASY XI.
> This repo is the source of the recompiler and game host, for anyone who wants to build it.

FINAL FANTASY XI running natively on Apple silicon Macs, with no Wine or Rosetta. The game's
`FFXiMain.dll` (and `FFXi.dll`) are statically recompiled from 32-bit x86 to C on your own machine,
from your own install, and run on a platform layer written for macOS: Win32, Direct3D 8 on Metal,
audio, input and sockets. This repo holds the recompiler, its runtime, that platform layer, and
`host64`, the game host, with its own sign-in screen drawn in the game's UI art.
XI on Anything runs on Apple silicon Macs today, with more platforms planned.

**Works with [LandSandBoat](https://github.com/LandSandBoat/server) servers.** Sign in with a
username, password and one-time code, or a server…
