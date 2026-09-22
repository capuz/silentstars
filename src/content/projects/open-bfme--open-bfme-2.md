---
repo: "Open-BFME/Open-BFME-2"
name: "Open-BFME-2"
description: "Byte-exact source recreation of BFME 2's game.dat — sister project of Open-BFME-1"
readmeQualityOk: true
url: "https://github.com/Open-BFME/Open-BFME-2"
language: "C++"
languages: ["C++"]
languagePcts: [80]
stars: 22
forks: 11
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 17
recentReleases: 0
createdAt: "2026-08-29T16:05:08Z"
lastCommitAt: "2026-09-22T08:44:49Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 88
undervaluedScore: 43
maintainers: ["peppy-penguin"]
openGraphImageUrl: "https://opengraph.githubassets.com/0b731f8d7b07f11123e15a898fb8400c61cd6437df02daba57e3c1c235a47cfc/Open-BFME/Open-BFME-2"
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

**16.16% of the game's retail `.text` has exact byte coverage** — 1,299,292 C++
bytes plus 9,037 ASM-only bytes. Source-backed reconstruction accounts for
12.77% of real code: 1,013,009 bytes of C++ we wrote and 5,878 bytes from
attached prebuilt-library rows. Vendored library source contributes 270,795
bytes,…
