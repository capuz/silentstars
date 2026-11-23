---
repo: "veritr1x/reincomp"
name: "reincomp"
description: "NieR Re[in]carnation as a native Windows program, by static recompilation"
readmeQualityOk: true
url: "https://github.com/veritr1x/reincomp"
language: "C++"
languages: ["C++"]
languagePcts: [73]
topics: ["nier-reincarnation", "static-recompilation"]
stars: 22
forks: 0
openIssues: 4
closedIssues: 2
watchers: 1
contributors: 1
recentReleases: 10
createdAt: "2026-11-17T19:35:15Z"
lastCommitAt: "2026-11-23T10:27:55Z"
lastReleaseAt: "2026-11-23T07:28:40Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 76
undervaluedScore: 32
maintainers: ["veritr1x"]
openGraphImageUrl: "https://opengraph.githubassets.com/7d9921dcae7c1d2d387250b2a3c00f520fae9787cddbe7d366d33ec75383b96c/veritr1x/reincomp"
---

# re[in]comp

NieR Re[in]carnation as a native Windows program. The game's ARM64 code is
recompiled to x86-64 and runs in the Windows Unity player, against the offline
server from [Bunker](https://github.com/veritr1x/bunker).

Unofficial hobby project, built with extensive AI assistance (OpenAI Codex and
Anthropic Claude). Not affiliated with SQUARE ENIX or Applibot.

## How to play

You need your own copy of the game. None of it is in this repository or its
releases. The EXE is built on your PC from these files:

- the English 3.7.1 (152) arm64-v8a APK
- the master data, `20240404193219.bin.e`
- the asset dump (7z or ZIP)

Open [Bunker's web builder](https://veritr1x.github.io/bunker/), choose
**Windows**, select your APK and master data, and run the downloaded EXE.
Its launcher imports the assets and starts the game.
If WebView2 is unavailable, use **Choose resource archive** or **Copy extracted
folder** in the setup window. Select **Deploy** when the game files are ready.
