---
repo: "kirklandsig/halo2-decompiled"
name: "halo2-decompiled"
description: "Halo 2 decompilation (decomp) for the original Xbox: a matching decompilation of the retail game into C/C++ source, rebuilt byte for byte, toward native PC, Linux and handheld ports. Contributors welcome. Source only; bring your own disc."
readmeQualityOk: true
url: "https://github.com/kirklandsig/halo2-decompiled"
language: "C++"
languages: ["C++"]
languagePcts: [94]
topics: ["decompilation", "halo", "halo-2", "original-xbox", "reverse-engineering", "xbox", "bungie", "cpp", "decomp", "game-decompilation"]
stars: 152
forks: 25
openIssues: 9
closedIssues: 8
watchers: 9
contributors: 16
recentReleases: 0
createdAt: "2026-10-01T18:39:05Z"
lastCommitAt: "2026-11-17T14:37:38Z"
status: "newborn"
tags: ["solo_builder"]
healthScore: 89
undervaluedScore: 26
maintainers: ["kirklandsig", "coldspear"]
openGraphImageUrl: "https://opengraph.githubassets.com/b2dd20324115cb205ba14292b81060681f8a0ee5f6fda570daa94673bd39300c/kirklandsig/halo2-decompiled"
---

# Halo 2 Decompilation (work in progress)

Halo 2 Decompilation is an independent preservation and reverse-engineering
project. It studies the retail executable of **Halo 2 for the original Xbox**
and recreates its program logic in human-readable C and C++ through
independent analysis. Each recreated function is checked against the retail
executable: built with the period-correct compiler, it must produce exactly
the same bytes. That check is what makes the recreated code verifiable. A
longer-term research goal is to study how the game's code could run on other
platforms, using game data that each user supplies from their own copy.

Alongside the game's own code, the project also decompiles **Havok**, the
physics library linked into the game, because Halo 2's vehicles, ragdolls and
projectiles have to behave exactly as they do on the Xbox. The executable's
other libraries (the Xbox SDK's, Bink video and so on) are not decompiled; a
port would replace them.

The project is non-commercial and is not affiliated with or endorsed by
Microsoft, Bungie or 343 Industries. **Read [LEGAL.md](https://github.com/kirklandsig/halo2-decompiled/blob/HEAD/LEGAL.md)** for the
project's scope, what…
