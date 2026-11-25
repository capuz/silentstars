---
repo: "quackmeansquack/mnr-pc-public"
name: "mnr-pc-public"
description: "ModNation Racers PC, made from your own copy of the game"
readmeQualityOk: true
url: "https://github.com/quackmeansquack/mnr-pc-public"
language: "C"
languages: ["C", "C#"]
languagePcts: [63, 26]
stars: 6
forks: 0
openIssues: 1
closedIssues: 1
watchers: 0
contributors: 3
recentReleases: 10
createdAt: "2026-11-02T06:57:42Z"
lastCommitAt: "2026-11-25T13:17:28Z"
lastReleaseAt: "2026-11-05T21:10:11Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 78
undervaluedScore: 32
maintainers: ["noreply", "quackmeansquack"]
openGraphImageUrl: "https://opengraph.githubassets.com/79dc04a998b6b85657c77f6d41502a552118900ade51c90eaa7bfd8682520dca/quackmeansquack/mnr-pc-public"
---

# ModNation Racers PC (public edition)

A native Windows version of ModNation Racers (PS3, 1.11) made from your own copy of the game.

This repository holds no game files and no game code. The launcher asks for:
1. your **ModNation Racers disc** (US, BCUS98167): a decrypted disc image (.iso) or the game folder from your own dump;
2. your **1.11 update** package (UP9000-BCUS98167_00-MODNATIONKART002-A0111-V0200-PE.pkg);
3. optionally a **PS3 system update file** (PS3UPDAT.PUP) for voice chat, if your disc copy doesn't carry one.

It then translates the game's own executable to C and builds the PC version on your PC with the free llvm-mingw
compiler (downloaded once, about 200 MB): about 10 to 30 minutes, once. About 20 GB of free space is needed.

Download MNRLauncher.exe from the latest release and run it.
