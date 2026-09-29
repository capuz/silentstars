---
repo: "Open-BFME/Open-BFME-2"
name: "Open-BFME-2"
description: "Byte-exact source recreation of BFME 2's game.dat — sister project of Open-BFME-1"
readmeQualityOk: true
url: "https://github.com/Open-BFME/Open-BFME-2"
language: "C++"
languages: ["C++"]
languagePcts: [86]
stars: 25
forks: 11
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 20
recentReleases: 0
createdAt: "2026-08-29T16:05:08Z"
lastCommitAt: "2026-09-29T08:10:15Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 41
maintainers: ["peppy-penguin"]
openGraphImageUrl: "https://opengraph.githubassets.com/7fb9a107c0c1ef62f1960a9c87a98822da718d894a5375e7b35a66f1056eeaa3/Open-BFME/Open-BFME-2"
---

# BFME 2 Source Code

Goal: Source code that rebuilds BFME 2's engine binary (`game.dat`) byte-for-byte, and game modernization improvements that you've only seen in your dreams.

[Join our Discord to participate!](https://discord.gg/wCvA2XqPUT)

## What?

* We rewrite the game's code as C++, one small piece at a time.
* Each piece must turn back into the exact same bytes as the original game.dat (BFME 2, version 1.06).
* When every piece matches, the whole game is open source, and we can fix bugs and make mods.

## Status

Green: bytes rebuilt without copying the original game.dat. Blue: the game's own
code now in C++. Retail statically
links Visual C++ 7.1's own support libraries, and `tools/lib_probe.py` places
their members without needing an attached row to anchor a window. The vendored
DirectX archives do **not** place — BFME 2 links a later SDK than the Summer
2003 `d3dx9`/`dxerr9` kept here for BFME 1. Flag calibration is proven: 756
Open-BFME-1 bodies transfer to `game.dat` verbatim, so the reference sweeps are
wide open.

## Roadmap

* [ ] BFME 2 Source Code (see the live progress bar above)
* [ ] 60/120 FPS
* [ ] Memory fix
* [ ] Better crash logs
* [ ] Multi CPU
* [ ]…
