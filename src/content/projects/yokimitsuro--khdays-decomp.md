---
repo: "Yokimitsuro/khdays-decomp"
name: "khdays-decomp"
description: "Complete matching decompilation of Kingdom Hearts 358/2 Days (Nintendo DS), byte-identical to the game."
readmeQualityOk: true
url: "https://github.com/Yokimitsuro/khdays-decomp"
language: "C"
languages: ["C"]
languagePcts: [96]
topics: ["c", "decompilation", "game-preservation", "kingdom-hearts", "matching-decompilation", "nds", "nintendo-ds", "reverse-engineering", "ds-decomp", "kh-days"]
stars: 107
forks: 11
openIssues: 2
closedIssues: 78
watchers: 2
contributors: 3
recentReleases: 0
createdAt: "2026-06-26T08:09:56Z"
lastCommitAt: "2026-11-05T08:01:43Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 97
undervaluedScore: 32
maintainers: ["Yokimitsuro"]
openGraphImageUrl: "https://opengraph.githubassets.com/aa66a7281c609ca3e2aa2230b37f5b695344df73d581396ff0495bc9731ef46d/Yokimitsuro/khdays-decomp"
---

# khdays-decomp

A work-in-progress **matching decompilation** of *Kingdom Hearts 358/2 Days*
(Nintendo DS). The goal is C source that recompiles to a binary **byte-for-byte
identical** to the original game code.

> ### Disclaimer
> This repository does **NOT** contain the game ROM, any game assets, or any of
> the original binary/assembly. **An existing, legally-obtained copy of the game
> is required** to extract and build it.
>
> This repository is a **matching decompilation only**. It does not contain or
> produce a playable build or any redistributable game binary, and building it
> requires an original, legally-obtained copy of the game. All trademarks and the
> original game are property of their respective owners.

## Status

Every function of the EU (`YKGP`) ARM9 program and its overlays is matched, and
all of the initialized data is reconstructed: the rebuilt modules are
byte-identical to the game's (306 of 306). All of the game's own code is C
except two functions that need the `clz` instruction, which the compiler cannot
produce from C. The rest of the assembly is library code (NitroSDK, the
CodeWarrior runtime, MobiClip) whose original source was assembly too.

The…
