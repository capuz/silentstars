---
repo: "ProjectLeonidaL/leonida"
name: "leonida"
description: "A community driven continuation of Project Leonida, aiming to bring GTA VI from Xbox to PC through static recompilation."
readmeQualityOk: true
url: "https://github.com/ProjectLeonidaL/leonida"
language: "Python"
languages: ["Python", "C++"]
languagePcts: [68, 28]
topics: ["community-driven", "cpp", "gta6", "gta6-pc", "gtavi", "leonida", "open-source", "pc-port", "reverse-enginnering", "rockstargames"]
stars: 253
forks: 28
openIssues: 1
closedIssues: 0
watchers: 10
contributors: 3
recentReleases: 0
createdAt: "2026-11-24T02:20:14Z"
lastCommitAt: "2026-11-24T14:07:53Z"
status: "newborn"
tags: ["solo_builder"]
healthScore: 75
undervaluedScore: 18
maintainers: ["orkan1k", "ManDrake-hub"]
openGraphImageUrl: "https://opengraph.githubassets.com/c7d7e0a26449f9cfc615a2153eb213cd4df3f6b095805f13b5c05728ea1d8507/ProjectLeonidaL/leonida"
---

> *ItsNotRexed just wanted to play on the PC.*

Leonida Legacy is a static recompilation project. The Xbox Series CPU is x86-64 like a PC, so the game's code is loaded
and run natively, and the console's system software is reimplemented. The console's precompiled RDNA2 GPU programs
are translated to SPIR-V for Vulkan. The game's models, textures and audio are read from your package. All of this
happens **on your PC, from your own copy of the game**.

> **Important**
>
> This repository **does not contain the game, keys or an executable**, and it does not explain how to get them. You
> need your own copy, with its files already readable on disk. Nothing here decrypts or works around any protection.
> Everything the build creates (the generated shaders, extracted assets, the runtime folder and your saves) comes
> from your game and stays on your PC. Never share those files.

## Project status

**Early. The game does not boot yet.** Everything that can be done without the game's executable is in place, so
work on booting can start as soon as one is available to a developer.
