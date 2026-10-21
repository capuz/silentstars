---
repo: "Mikompilation/MioPan"
name: "MioPan"
description: "PC Port Of Fatal Frame 2 Based On AI Code Recreation"
readmeQualityOk: true
url: "https://github.com/Mikompilation/MioPan"
language: "C"
languages: ["C"]
languagePcts: [87]
stars: 8
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 1
createdAt: "2026-09-01T11:49:31Z"
lastCommitAt: "2026-10-21T13:13:09Z"
lastReleaseAt: "2026-10-06T20:55:23Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 73
undervaluedScore: 27
maintainers: ["wagrenier"]
openGraphImageUrl: "https://opengraph.githubassets.com/327d4a59b7305231a721aff2ee807845abc27cc31b3297d0740d000b22379c7b/Mikompilation/MioPan"
---

# What is MioPan?
MioPan is an in-progress port of Fatal Frame II: Crimson Butterfly (PS2) to PC,
running natively with no emulation. It is the sister project of
[MikuPan](https://github.com/Mikompilation/MikuPan), the Fatal Frame 1 port.

The game code is reconstructed function by function from a February 6, 2004
prototype build (`SLES_523.84`), using its debug symbols, source line tables and
link map. The reconstructed sources are compiled with a normal host compiler.
The PS2 SDK (graphics, VU0/VU1, DMA, sound, memory card, IOP) is replaced by PC
shims built on SDL3. Still very early work: expect crashes, missing effects and
rendering differences.

# About the use of AI
**MioPan is built with heavy use of AI.** Most of the reconstruction and porting
work in this repository was done with AI coding assistants, guided and reviewed
by a human.

This applies to **MioPan only**. It is the one project in the Mikompilation
organization developed this way. The other Mikompilation projects, including
MikuPan, are not.

What this means in practice:
- Code may contain mistakes that look plausible. Accuracy to the original game is
  the goal, so a function that differs from the ROM is a bug…
