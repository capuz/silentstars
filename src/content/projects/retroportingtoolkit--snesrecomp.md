---
repo: "RetroPortingToolKit/snesrecomp"
name: "snesrecomp"
description: "Super Nintendo (SNES) game static recompiler ecosystem · Part of the R.A.I.D. community"
readmeQualityOk: true
url: "https://github.com/RetroPortingToolKit/snesrecomp"
homepage: "https://discord.gg/Ad9BwSzctP"
language: "C"
languages: ["C", "Python"]
languagePcts: [52, 36]
stars: 84
forks: 18
openIssues: 3
closedIssues: 15
watchers: 5
contributors: 11
recentReleases: 1
createdAt: "2026-03-16T00:51:48Z"
lastCommitAt: "2026-09-12T08:03:50Z"
lastReleaseAt: "2026-07-20T07:37:40Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 96
undervaluedScore: 37
maintainers: ["TechnicallyComputers", "mstan", "Technically-Alexander"]
openGraphImageUrl: "https://opengraph.githubassets.com/8b2b732c620a64c69b9f8fe89781c0dfa97a466fa241b4d0907966b36fe41443/RetroPortingToolKit/snesrecomp"
---

</p>

# SNESRecomp

> ℹ️ **Note from mstan:** This repo and I are now part of [RetroPortingToolkit](https://retroportingtoolkit.com/). I remain a primary maintainer of snesrecomp alongside the team. [More info](https://1379.tech/forming-a-collective-retro-porting-toolkit/).

**A general-purpose static recompiler for the Super Nintendo Entertainment
System (Super Famicom).** SNESRecomp translates 65816 machine code into C,
compiles it into a native executable, and links it against a shared SNES
hardware runtime.

The game CPU runs as native code instead of inside a full-system emulator.
The runtime models the hardware around it—including the PPU, APU, DSP, DMA,
cartridge mapping, and supported enhancement chips—and provides a safe
interpreter tier for code that cannot yet be resolved statically.

Projects built on SNESRecomp already support true widescreen views, Adaptive
View, versioned mod packages, MSU-1 audio, cross-platform builds, launchers,
and save states. The framework is game-agnostic: each title supplies its own
analysis configuration and integration code while improvements to the CPU and
hardware model benefit every project.

<table>
  <tr>
    <td width="29%"><img…
