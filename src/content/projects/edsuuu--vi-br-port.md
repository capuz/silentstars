---
repo: "edsuuu/VI-BR-PORT"
name: "VI-BR-PORT"
description: "Xbox Series X|S (Scarlett, GDK) compatibility layer for Windows: native D3D12 runtime and GFX10 to DXIL shader recompiler, tuned for 8 GB NVIDIA GPUs. Fork of VIctory. No game files."
readmeQualityOk: true
url: "https://github.com/edsuuu/VI-BR-PORT"
language: "Rust"
languages: ["Rust"]
languagePcts: [100]
topics: ["compatibility-layer", "d3d12", "dxil", "gdk", "rust", "scarlett", "shader-recompiler", "xbox-series"]
stars: 115
forks: 26
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 74
recentReleases: 0
createdAt: "2026-11-24T03:07:05Z"
lastCommitAt: "2026-11-27T12:57:12Z"
status: "newborn"
tags: ["solo_builder"]
healthScore: 84
undervaluedScore: 28
maintainers: ["edsuuu", "YUYING234", "CnKabii"]
openGraphImageUrl: "https://opengraph.githubassets.com/9c40907b5c2367c33cea2a5400ed06d62e02e3bad4654df6f474ff2f3098e67b/edsuuu/VI-BR-PORT"
---

# VI-BR-PORT: the build for 8 GB cards

**English** | [Português](https://github.com/edsuuu/VI-BR-PORT/blob/HEAD/README.pt-BR.md)

A compatibility layer that runs, natively on Windows, the **Xbox Series X|S** build
(the *Scarlett* platform, titles made with the **GDK**) of a title, from the user's own
files. The console's x86-64 code runs unchanged inside our process; underneath it are the
console's system libraries rewritten (HLE) and a Direct3D 12 back end that recompiles the
console GPU's shaders (GFX10/RDNA2) to DXIL.

This fork has one target: an **8 GB NVIDIA card with waves of 32 lanes** (tested on an
RTX 4060 Ti) on a **1080p monitor**.

**This repository holds no files, code or assets of the game.** You need your own copy.
Nothing here is connected with, or endorsed by, the game's developer or publisher.

## Where it stands (2026-11-27)

**Playable from the opening through Lucia's prologue in the prison** (the cell, the
corridor, the common room, the counselor's office) **and on into the first open-world
mission (the boat)**, with the player in control, on the Series S profile.
