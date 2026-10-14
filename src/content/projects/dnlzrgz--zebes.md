---
repo: "dnlzrgz/zebes"
name: "zebes"
description: "Zebes is a cross-platform NES emulator written from scratch in Rust for learning purposes and for fun."
readmeQualityOk: true
url: "https://github.com/dnlzrgz/zebes"
language: "Rust"
languages: ["Rust"]
languagePcts: [100]
topics: ["6502", "emulator", "emulator-development", "emulator-frontend", "emulator-programming", "macroquad", "nes", "ratatui", "retro-gaming", "rust"]
stars: 6
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 1
createdAt: "2026-07-03T21:40:46Z"
lastCommitAt: "2026-10-14T08:57:27Z"
lastReleaseAt: "2026-10-14T08:58:48Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 75
undervaluedScore: 39
maintainers: ["dnlzrgz"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1288693449/ce622653-ea8a-477e-8d00-78185d60c7c7"
---

# Zebes (ゼーベス Zēbesu)

Zebes is a cross-platform NES emulator written from scratch in Rust for learning purposes and for fun.

## Features

- CPU (Ricoh 2A03/MOS 6502):
  - All [addressing modes](https://www.nesdev.org/wiki/CPU_addressing_modes).
  - All [official instructions](https://www.nesdev.org/wiki/Instruction_reference).
  - Cycle-accurate timing, including page-crossing, branch cycle penalties, etc.
  - NMI handling.
- PPU:
  - Background rendering with proper scrolling (loopy registers, fine + coarse scroll).
  - Sprite rendering with sprite zero hit, per-scanline sprite evaluation, and sprite overflow flag.
  - OAM DMA.
  - PPUDATA read buffering, including the palette RAM bypass.
  - All four nametable mirroring modes.
  - NTSC odd-frame cycle skip.
- Controller:
  - Very basic controller support with keyboard.
- Mappers:
  - [NROM](https://www.nesdev.org/wiki/NROM).
  - [MMC1](https://www.nesdev.org/wiki/MMC1).
  - [UxROM](https://www.nesdev.org/wiki/UxROM).
  - [CNROM](https://www.nesdev.org/wiki/CNROM).
  - [MMC3](https://www.nesdev.org/wiki/MMC3).

> [!note]
> There is no audio emulation yet (APU), and only the official 6502 instructions set is implemented at the…
