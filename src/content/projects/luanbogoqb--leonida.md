---
repo: "LuanBogoqb/Leonida"
name: "Leonida"
description: "Static continuation of the Leonida port template (last upstream state, 7e39a81ea, preserved after the original repository went offline). Community work preserved; PR refs live in the local static mirror."
readmeQualityOk: true
url: "https://github.com/LuanBogoqb/Leonida"
language: "Python"
languages: ["Python", "C++"]
languagePcts: [76, 20]
stars: 5
forks: 1
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 678
recentReleases: 0
createdAt: "2026-11-24T00:05:50Z"
lastCommitAt: "2026-11-24T14:06:50Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 70
undervaluedScore: 42
maintainers: ["LuanBogoqb"]
openGraphImageUrl: "https://opengraph.githubassets.com/9ada1bf2b82b0fa501170316a50f01e9d678ce7cbee4d016c6c69e333008259a/LuanBogoqb/Leonida"
---

Leonida is a static recompilation project. The Xbox Series CPU is x86-64 like a PC, so the game's code is loaded
and run natively, and the console's system software is reimplemented. The console's precompiled RDNA2 GPU programs
are translated to SPIR-V for Vulkan. The game's models, textures and audio are read from your package. All of this
happens **on your PC, from your own copy of the game**.

> **Important**
>
> This repository **does not contain the game, keys or an executable**, and it does not explain how to get them. You
> need your own copy, with its files already readable on disk. Nothing here decrypts or works around any protection.
> Everything the build creates (the generated shaders, extracted assets, the runtime folder and your saves) comes
> from your game and stays on your PC. Never share those files.

Discord: https://discord.gg/mjgjRFcUWW

Custom Git Mirror: https://git.notrexed.dev/notrexed/Leonida

## Coverage dashboard

*Distinct translator mnemonics mentioned in semantic-test fixtures (counted against a fixed RDNA2 catalog; not a measure of game completion); updates automatically every 20 minutes.*
