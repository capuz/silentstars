---
repo: "bc160201983/GoW-Ascension-Recomp"
name: "GoW-Ascension-Recomp"
description: "Static recompilation of God of War: Ascension (PS3) to native Windows. Bring your own game. Single player and community online multiplayer."
readmeQualityOk: true
url: "https://github.com/bc160201983/GoW-Ascension-Recomp"
homepage: "https://www.patreon.com/c/bilalreloaded"
language: "C"
languages: ["C"]
languagePcts: [69]
stars: 98
forks: 1
openIssues: 3
closedIssues: 2
watchers: 3
contributors: 2
recentReleases: 2
createdAt: "2026-11-14T18:53:22Z"
lastCommitAt: "2026-11-15T07:19:23Z"
lastReleaseAt: "2026-11-15T08:29:07Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 78
undervaluedScore: 12
maintainers: ["bc160201983"]
openGraphImageUrl: "https://opengraph.githubassets.com/69f46579c2f8ad500cee8c892938ce1362de1a8486f69e287ce77602f0849333/bc160201983/GoW-Ascension-Recomp"
---

# God of War: Ascension PC port: source code

> **A message from the author**
>
> Don't expect many updates from me from now on. I won't be able to continue the project because of my finances. The project is open source, so you're welcome to build on it. Thank you for all the support.
>
> BilalReloaded

This is the source code of the PC port of the PS3 game **God of War: Ascension** (BCES01741, Europe, version 1.00).

It is a **static recompilation**, not an emulator. Tools in this repository translate the game's PowerPC (PPU) and SPU machine code into C and C++ ahead of time. That code is then compiled into a normal Windows program. A runtime supplies the PS3 system libraries, and a Direct3D 12 renderer draws the RSX graphics work.

> [!IMPORTANT]
> **No game code or game data is in this repository.** Nothing here was taken from the game: no translated code, no executables, no assets, no textures, no audio, no shader caches. You need **your own legally dumped copy** of the game (the European disc BCES01741, version 1.00) and you translate it yourself on your own PC with the steps below. The translated code you make is made from the game, so do not share it.
>
> This is a fan…
