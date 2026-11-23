---
repo: "ivall/xcl"
name: "xcl"
description: "Xbox Series compatibility layer for Windows - runs console game code natively, reimplements the console system libraries and recompiles RDNA2 shaders to DXIL"
readmeQualityOk: true
url: "https://github.com/ivall/xcl"
homepage: "https://discord.gg/yB5tstRHrn"
language: "Rust"
languages: ["Rust"]
languagePcts: [99]
topics: ["gdk", "rdna2", "xbox", "d3d12"]
stars: 359
forks: 21
openIssues: 2
closedIssues: 2
watchers: 5
contributors: 14
recentReleases: 0
createdAt: "2026-11-20T20:03:21Z"
lastCommitAt: "2026-11-23T10:29:11Z"
status: "newborn"
tags: []
healthScore: 87
undervaluedScore: 24
maintainers: ["ivall", "gefydev", "Foniass"]
openGraphImageUrl: "https://opengraph.githubassets.com/b2ef2da1c78b8188b4c8674d88d52f92256f07f5e194795243f8aa9acd52694f/ivall/xcl"
---

# XCL – Xbox Series X|S → Windows compatibility layer

**Discord: <https://discord.gg/yB5tstRHrn>**

XCL runs Xbox Series X|S (GDK) game files on a Windows PC **without CPU emulation**: the game's
x64 code runs natively and XCL stands in for the console libraries the PC does not have
(`kernelx.dll`, XGameRuntime, `d3d12_xs.dll`, …) – in the spirit of Wine/Proton. The console's
GPU code (RDNA2 machine code) is recompiled into PC shaders (HLSL → DXIL).

**Project state:** retail games run – Minecraft Preview and Unicorn Overlord are fully
playable, Fortnite and XDefiant work as far as each game goes without its online services;
see [Games](#games). The foundation is tested against real data from retail games
(shader packs, texture archives, movies and the console DLLs they ship). Details, measurements and
next steps:
[`HANDOFF.md`](https://github.com/ivall/xcl/blob/HEAD/HANDOFF.md); design: [`docs/specs/2026-11-20-xcl-design.md`](https://github.com/ivall/xcl/blob/HEAD/docs/specs/2026-11-20-xcl-design.md).
