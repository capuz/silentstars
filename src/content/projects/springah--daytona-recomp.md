---
repo: "springah/daytona_recomp"
name: "daytona_recomp"
description: "Daytona USA (Xbox 360/XBLA) static recompilation for PC, Steam Deck & macOS -- native D3D12/Vulkan renderer, no emulation at runtime"
readmeQualityOk: true
url: "https://github.com/springah/daytona_recomp"
language: "C++"
languages: ["C++"]
languagePcts: [89]
stars: 30
forks: 2
openIssues: 4
closedIssues: 1
watchers: 1
contributors: 2
recentReleases: 5
createdAt: "2026-06-12T23:28:33Z"
lastCommitAt: "2026-11-26T23:24:03Z"
lastReleaseAt: "2026-11-26T23:30:25Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 77
undervaluedScore: 16
maintainers: ["springah"]
openGraphImageUrl: "https://opengraph.githubassets.com/3586f928510753eb163a3077c9b72110d70bd3366ff48257d7decd09a74cc776/springah/daytona_recomp"
---

# Daytona USA ReXGlue Recompilation

> ⚠️ **Disclaimer — built with heavy use of AI.** The recompilation, port code,
> tooling, and documentation in this repo were developed largely with the assistance
> of AI coding tools (large language models). It's a hobby project: verify things
> yourself before relying on them, and expect rough edges. No warranty.

A static recompilation of **Daytona USA** (Xbox 360 / XBLA, 2011) for native PC
execution, built on the [ReXGlue SDK](https://github.com/rexglue/rexglue-sdk)
(a Xenia-derived runtime + PPC→C++ recompiler).

The game's D3D9 calls are intercepted app-side and drawn through a **native
renderer** ([plume](https://github.com/springah/plume) RHI -- D3D12 on Windows,
Vulkan on Linux/Steam Deck, Vulkan-over-MoltenVK on macOS) instead of Xenos GPU
emulation. The whole game renders this way -- boot, menus, attract, races --
referee-verified against the emulated renderer screen by screen. The emulated
renderer is still built (`--gpu_plugin=xenos`) and serves as the reference. The
`native-renderer` branch is the product and the default; `main` tracks it. The
stock SDK-renderer port this grew out of is the `v1.0.x` tag line.
