---
repo: "HenryKun55/celosia"
name: "celosia"
description: "Native port of Shadow of the Colossus (PS2) to macOS and PS Vita: static recompilation with PS2Recomp, a native Metal/OpenGL renderer, and a decompilation in progress"
readmeQualityOk: true
url: "https://github.com/HenryKun55/celosia"
homepage: "https://henrykun55.github.io/celosia/"
language: "C++"
languages: ["C++"]
languagePcts: [95]
topics: ["decompilation", "metal", "ps-vita", "ps2", "ps2recomp", "shadow-of-the-colossus", "static-recompilation"]
stars: 57
forks: 5
openIssues: 3
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2026-10-02T17:17:01Z"
lastCommitAt: "2026-11-11T19:43:55Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 60
undervaluedScore: 28
maintainers: ["HenryKun55"]
openGraphImageUrl: "https://opengraph.githubassets.com/c24c7501cef1efa1f6a1992a85cbccf0c4b1d1bbd71d8e2e483b04f9bb9ea555/HenryKun55/celosia"
---

# Celosia

A native port of **Shadow of the Colossus** (PS2, USA, SCUS-97472) to macOS
(Apple Silicon) and the **PS Vita**, built by statically recompiling the
game's MIPS code to C++ with [PS2Recomp](https://github.com/ran-j/PS2Recomp).

No emulator runs the game's CPU code. The EE code from the boot ELF and the
game's three XFF modules is translated into C++ ahead of time and compiled
natively. The game is drawn by a native renderer (Metal on the Mac, OpenGL
ES on the Vita) that reads its model data directly. The rest of the hardware
it talks to (DMA, IOP, SPU2) is reimplemented as host code.

**Progress page: [henrykun55.github.io/celosia](https://henrykun55.github.io/celosia/)** (recompilation, decompilation by area, next targets, rounds). **Where it stands: [docs/STATUS.md](https://github.com/HenryKun55/celosia/blob/HEAD/docs/STATUS.md)**.

> **No game data is included.** You need your own copy of the game.

## Status

| Area | State |
| --- | --- |
| Boot, logos, intro cinematic | ✅ |
| Native renderer (models, characters, 2D, fog, bloom, shadows, reflections, water…) | ✅ all 49 tracked features native |
| Audio (SPU2: voices, ADSR, reverb, streaming) | ✅ |
| Title screen,…
