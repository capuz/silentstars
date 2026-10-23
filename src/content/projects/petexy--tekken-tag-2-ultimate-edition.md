---
repo: "Petexy/Tekken-Tag-2-Ultimate-Edition"
name: "Tekken-Tag-2-Ultimate-Edition"
description: "Native Linux port of Tekken Tag Tournament 2 Wii U Edition by static recompilation. No game files included."
readmeQualityOk: true
url: "https://github.com/Petexy/Tekken-Tag-2-Ultimate-Edition"
language: "C++"
languages: ["C++", "Python"]
languagePcts: [65, 32]
stars: 26
forks: 3
openIssues: 5
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2026-10-05T08:11:19Z"
lastCommitAt: "2026-10-23T12:04:54Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 79
undervaluedScore: 23
maintainers: ["Petexy"]
openGraphImageUrl: "https://opengraph.githubassets.com/a0895bac63c95c1296be845c89abbbcd76498c032ff9af8f8ec72581e861513d/Petexy/Tekken-Tag-2-Ultimate-Edition"
---

# Tekken Tag 2 Ultimate Edition

An unofficial native Linux port of **Tekken Tag Tournament 2 Wii U Edition**,
made by static recompilation: the game's PowerPC code is translated to C++
ahead of time and runs as native x86-64 code on a reimplementation of the
Wii U's system libraries. There is no CPU emulation; the game's GPU commands
and shaders are translated to Vulkan as it runs.

> [!IMPORTANT]
> **No game files are included.** This repository holds only original tools
> and runtime code; you need your own copy of the game
> ([see below](#the-game)). The C++ generated from the game, programs built
> from it, an install folder, and captures or dumps made with the debugging
> options all contain the game's code or assets: do not share or upload
> them, and do not attach them to issues.
>
> This project is not affiliated with or endorsed by Bandai Namco
> Entertainment or Nintendo. TEKKEN, Tekken Tag Tournament and Wii U are
> trademarks of their respective owners.

## Features

- **Plays natively**: intro, menus, character select, arcade mode and versus
  matches, with sound and saves. Arcade mode has been played through by
  hand.
- **120 frames per second** on displays of 100…
