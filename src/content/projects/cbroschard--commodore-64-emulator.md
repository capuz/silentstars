---
repo: "cbroschard/Commodore-64-Emulator"
name: "Commodore-64-Emulator"
description: "Commodore 64 Emulator "
readmeQualityOk: true
url: "https://github.com/cbroschard/Commodore-64-Emulator"
language: "C++"
languages: ["C++"]
languagePcts: [100]
stars: 12
forks: 0
openIssues: 0
closedIssues: 9
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2025-09-11T01:05:14Z"
lastCommitAt: "2026-11-03T16:25:20Z"
lastReleaseAt: "2026-05-23T04:25:37Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 90
undervaluedScore: 70
maintainers: ["cbroschard"]
openGraphImageUrl: "https://opengraph.githubassets.com/96858d2b39e2a873c02d40635548092f8fee1a551502fcef3dc1ec52d27bf7b5/cbroschard/Commodore-64-Emulator"
---

# 🎮 Commodore 64 Emulator

A Commodore 64 emulator written in modern C++ using **SDL3**, **SDL3_net**, and the **Dear ImGui docking branch**.

The project is built around two primary goals:

- **Hardware-focused accuracy** — model real Commodore 64 behavior, timing, bus activity, and device interactions rather than relying on compatibility hacks.
- **Debuggability** — provide an integrated machine-language monitor with detailed visibility into the CPU, VIC-II, SID, CIAs, memory, cartridges, drives, and system bus.

This emulator is under active development. Many programs and games are playable, but timing-sensitive software, uncommon hardware configurations, and newly implemented features may still expose bugs.

---

## ✨ Highlights

### 🧠 Emulation core

- MOS 6510 CPU emulation
- Instruction-level and micro-operation execution support
- IRQ, NMI, RDY, AEC, and bus-arbitration handling
- PLA-based memory decoding
- Open-bus and data-bus-latch behavior
- PAL and NTSC machine modes
- Warm and cold reset support
- Save-state and load-state support

### 🖥️ VIC-II graphics

- Character and bitmap display modes
- Standard and multicolor graphics
- Extended color mode
- Hardware…
