---
repo: "Goldoire/pokeblack"
name: "pokeblack"
description: "Matching decompilation of Pokemon Black"
readmeQualityOk: true
url: "https://github.com/Goldoire/pokeblack"
language: "C"
languages: ["C"]
languagePcts: [94]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 4
recentReleases: 0
createdAt: "2026-08-16T02:58:46Z"
lastCommitAt: "2026-09-29T08:09:15Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 80
undervaluedScore: 46
maintainers: ["Goldoire"]
openGraphImageUrl: "https://opengraph.githubassets.com/3470bf4ef45a0936286668f3a7e450be599ca352df34398e26e7008c8d71af9a/Goldoire/pokeblack"
---

# Pokémon Black

A work-in-progress matching decompilation of **Pokémon Black** for the Nintendo DS.

The goal is to reconstruct source code that compiles to the original game's machine code. The project is incomplete: the matching build combines recovered C with ROM-derived fallback objects and preserved binary regions.

> [!IMPORTANT]
> An existing copy of the game is required. ROMs, extracted game assets, Nintendo SDKs, and the CodeWarrior toolchain are not distributed with this repository.

[<img src="https://decomp.dev/Goldoire/pokeblack/irbo.svg?w=512&h=256" width="512" height="256" alt="Pokémon Black code matching progress">](https://decomp.dev/Goldoire/pokeblack/irbo)

## Supported version

| Version | Target | ROM SHA-1 |
| --- | --- | --- |
| USA/Europe, v1.0 (DSi-enhanced) | `irbo` | `26ad0b9967aa279c4a266ee69f52b9b2332399a5` |

## Getting started

Clone the repository:

```sh
git clone https://github.com/Goldoire/pokeblack.git
cd pokeblack
```

The function-matching workflow requires Python 3, Git, Capstone for disassembly, and the appropriate CodeWarrior ARM compiler and license. No Nintendo SDK is needed: the SDK and NitroSystem headers come from ntrtwl's community…
