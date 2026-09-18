---
repo: "Open-BFME/Open-BFME-2"
name: "Open-BFME-2"
description: "Byte-exact source recreation of BFME 2's game.dat — sister project of Open-BFME-1"
readmeQualityOk: true
url: "https://github.com/Open-BFME/Open-BFME-2"
language: "C++"
languages: ["C++"]
languagePcts: [79]
stars: 20
forks: 10
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 16
recentReleases: 0
createdAt: "2026-08-29T16:05:08Z"
lastCommitAt: "2026-09-18T14:01:36Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 88
undervaluedScore: 44
maintainers: ["peppy-penguin"]
openGraphImageUrl: "https://opengraph.githubassets.com/48dd7e4f683e3a899ad654b53a66064d45b74a1a53ce94e9b8ac782b7ac75397/Open-BFME/Open-BFME-2"
---

# BFME 2 Source Code

Goal: Source code that rebuilds BFME 2's engine binary (`game.dat`) byte-for-byte, and game modernization improvements that you've only seen in your dreams.

[Join our Discord to participate!](https://discord.gg/wCvA2XqPUT)

## What?

* If you take a part of the BFME 2 binary, recreate the exact source code that would make that part of the binary, then compile the source code and inject it into the binary, you get the same binary
* Doing this piece by piece will eventually give you a full, open source recreation of BFME 2, and enable some (insane) mods
* The target is `game.dat` — the real engine PE; `lotrbfme2.exe` is only a launcher stub
* Sister project of [Open-BFME-1](https://github.com/Open-BFME/Open-BFME-1): same engine family, same MSVC 7.1 toolchain, same workflow — and BFME 1's converted source rides in as a submodule reference

## Status

**10.86% of the game's retail `.text` has exact byte coverage** — 873,916 C++ bytes
plus 5,204 ASM-only bytes. Source-backed reconstruction accounts for 10.98% of
real code, 2,040 bytes of which are the first prebuilt-library rows: retail
statically links Visual C++ 7.1's own support libraries, and…
