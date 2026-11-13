---
repo: "thegh0sts/NHL-21-PS4-PORT"
name: "NHL-21-PS4-PORT"
description: "EA SPORTS NHL 21 (PS4) native port for Windows — SacredFire/bbport runtime + shadPS4-derived Vulkan renderer"
readmeQualityOk: true
url: "https://github.com/thegh0sts/NHL-21-PS4-PORT"
language: "C++"
languages: ["C++"]
languagePcts: [73]
stars: 11
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 14
recentReleases: 1
createdAt: "2026-11-10T10:44:55Z"
lastCommitAt: "2026-11-13T05:40:09Z"
lastReleaseAt: "2026-11-11T09:57:18Z"
status: "newborn"
tags: ["hidden_gem"]
healthScore: 79
undervaluedScore: 44
maintainers: ["GNSB", "thegh0sts", "nomadsdad"]
openGraphImageUrl: "https://opengraph.githubassets.com/ec7f2a36c0a171c83abdc700348f2ac5f527a565299c5dd31d45e32bf3aae747/thegh0sts/NHL-21-PS4-PORT"
---

# NHL 21 PS4 Port for Windows

This project runs the **PS4 version** of *EA SPORTS NHL 21* natively on Windows. It isn't an emulator
running a whole console. It loads the game's own x86-64 code directly, gives it Windows versions of
the PS4 system libraries it calls, and translates its graphics to Vulkan.

NHL 21 was the last NHL on EA's Ignite engine, the same engine as NHL 19 and UFC 3, so this port
starts from the [NHL 19 port](https://github.com/thegh0sts/NHL-19-PS4-PORT-WINDOWS) (itself a fork of
[GNSB's UFC 3 port](https://github.com/GNSB/UFC-3-PS4-PORT-LINUX-WINDOWS)) and inherits its fixes.

> [!IMPORTANT]
> This project contains **no game files**. You need your own PS4 copy of the game (**CUSA18182**,
> with update 1.10), dumped from your own console. Game files, and files made from them such as
> `boot-linked.bin`, must not be shared.

> [!WARNING]
> **v0.1.0 is the first test release.** The game boots, plays Play Now matches and creates its mode
> saves, but most of it hasn't been tested yet. Expect bugs and crashes, and back up your saves. If
> you hit a bug, please report it **with your log and saves**: see
> [Reporting problems](#reporting-problems).

## Status

The…
