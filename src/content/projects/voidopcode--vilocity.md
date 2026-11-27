---
repo: "voidopcode/vilocity"
name: "vilocity"
description: "Xbox Series X|S games running natively on Windows. GTA VI progress tracked in the README."
readmeQualityOk: true
url: "https://github.com/voidopcode/vilocity"
language: "Rust"
languages: ["Rust"]
languagePcts: [99]
topics: ["direct3d12", "emulator", "gta6", "reverse-engineering", "rust", "xbox"]
stars: 21
forks: 4
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-11-25T11:25:08Z"
lastCommitAt: "2026-11-27T12:57:07Z"
lastReleaseAt: "2026-11-25T16:49:42Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 70
undervaluedScore: 37
maintainers: ["voidopcode"]
openGraphImageUrl: "https://opengraph.githubassets.com/f95038c9911f453d6229f7fe6110e48fb1629cd625323c9689490595fc58e5d4/voidopcode/vilocity"
---

Runs Xbox Series X|S (GDK) games you own natively on Windows. There is no CPU
emulation: the game's x64 code runs in our process, Vilocity supplies the
console's system libraries, and the console's RDNA2 GPU code is recompiled to
Direct3D 12 shaders. Two engines, one executable:

| Engine | Folder | Best at |
|--------|--------|---------|
| **native** | `native/` | Grand Theft Auto VI. Shaders become regular host D3D12 shaders. |
| **compat** | `compat/` | Other GDK titles: Minecraft Preview, Unicorn Overlord, Fortnite, XDefiant. Shaders read the game's memory directly. |

No game files are in this repository. Everything is built from files you
supply at runtime.

## Quick start: from nothing to GTA VI

**1. Check your PC**
- Windows 10 or 11 (64-bit), a CPU with AVX2.
- A graphics card with Direct3D 12, shader model 6.6 and mesh shaders: NVIDIA
  RTX 20 series or newer, AMD RX 6000 series or newer. Ours is an RTX 5080.
- 32 GB of RAM or more (the game uses about 25 GB).
- Your own copy of GTA VI for Xbox Series X|S: the folder with
  `game_scarlett_master.exe` in it.
