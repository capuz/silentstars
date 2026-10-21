---
repo: "OpenRAC/OpenRAC"
name: "OpenRAC"
description: "A matching decompilation and PC port for the Ratchet & Clank series."
readmeQualityOk: true
url: "https://github.com/OpenRAC/OpenRAC"
language: "C"
languages: ["C"]
languagePcts: [83]
topics: ["openrac", "ratchet-and-clank", "pc-port", "native-port", "ps2-decompilation", "c", "cpp", "opengl", "reverse-engineering", "tauri"]
stars: 30
forks: 7
openIssues: 0
closedIssues: 1
watchers: 1
contributors: 10
recentReleases: 10
createdAt: "2026-10-03T21:00:55Z"
lastCommitAt: "2026-10-21T21:14:25Z"
lastReleaseAt: "2026-10-16T20:24:51Z"
status: "thriving"
tags: ["release_machine"]
healthScore: 100
undervaluedScore: 49
maintainers: ["Veradictus", "ReaperOfVeriod"]
openGraphImageUrl: "https://opengraph.githubassets.com/16c5457ac848154899d01653e75f10d2fc39bc9d428fdc396b80beb3ba40333d/OpenRAC/OpenRAC"
---

# OpenRAC

The PlayStation 2 Ratchet & Clank games, decompiled back into C and brought to
PC natively: Ratchet & Clank, Going Commando, Up Your Arsenal and Deadlocked.
Each game is matched function by function until it compiles to a byte-identical
copy of the original, and that C then runs on PC the way OpenGOAL brought Jak
and Daxter there. No emulation.

OpenRAC holds none of the games' data: the models, textures, sound and levels
come from your own disc.

## Play

1. **[Download the launcher](https://github.com/OpenRAC/OpenRAC/releases/latest)**
   for your system and install it.
2. Start it and choose the folder with your PlayStation 2 disc images (`.iso`).
   It finds Ratchet & Clank there and gets it ready by itself.
3. Press **Play**.

Nothing else to install: the launcher carries the game, built for your system,
and everything that prepares it. You need the image of your own disc; OpenRAC
never downloads a game. The release page says which file to pick for your
system, and what is known not to work yet.

Ratchet & Clank (PAL) is the first game on PC. The native port
([port/](https://github.com/OpenRAC/OpenRAC/blob/HEAD/port/README.md)) builds its whole decompilation into…
