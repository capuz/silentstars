---
repo: "Odrannnn/MetroidPrimePort"
name: "MetroidPrimePort"
description: "Native port of Metroid Prime (GameCube) for Linux, Windows and Android, built from the PrimeDecomp decompilation. No emulator, no game assets included: bring your own disc image."
readmeQualityOk: true
url: "https://github.com/Odrannnn/MetroidPrimePort"
homepage: "https://github.com/Odrannnn/MetroidPrimePort/releases/latest"
language: "C++"
languages: ["C++"]
languagePcts: [92]
topics: ["android", "archipelago", "decompilation", "gamecube", "linux", "metroid-prime", "native-port", "randomizer", "sdl3", "webgpu"]
stars: 492
forks: 26
openIssues: 21
closedIssues: 138
watchers: 15
contributors: 15
recentReleases: 10
createdAt: "2026-09-19T14:13:16Z"
lastCommitAt: "2026-10-21T20:01:07Z"
lastReleaseAt: "2026-10-02T18:17:22Z"
status: "newborn"
tags: ["solo_builder", "release_machine"]
healthScore: 95
undervaluedScore: 29
maintainers: ["UltiNaruto"]
openGraphImageUrl: "https://opengraph.githubassets.com/d0938b2afaf0abbe89bfecd36ec6a44800aa14a2dc5199780e2282c28f737310/Odrannnn/MetroidPrimePort"
discussionCount: 5
---

# Metroid Prime — native port

A native build of **Metroid Prime** for Linux, Windows and Android (plus an
experimental, untested-on-hardware macOS build), compiled
from the [PrimeDecomp](https://github.com/PrimeDecomp/prime) decompilation and
rendered through Aurora (SDL3/WebGPU). There's no emulator involved. Supported
discs: USA 1.00, 1.01 and 1.02, and PAL.

**No game content is included.** You need your own copy of the game: the port
reads it from a disc image and never ships any of its assets. This repository
ships no disc image, and neither does any package or release built from it.

## What it adds over the console release

- **Remastered assets:** — (Experimental) import models and effects from your own Metroid Prime
  Remastered dump (F1 > Remastered)
- **Widescreen:** with an edge-to-edge HUD, and **uncapped frame rate**
- **Graphics:** FOV, MSAA, anisotropic filtering, HUD scale, arm cannon offset,
  and toggles to hide the helmet and visor effects
- **Controls:** mouse and twin-stick aim, gyro, full rebinding and presets
- **Optional tweaks:** Fast Morph, Spring Ball, Toggle
  Lock-On, Sticky Charge...
- **Skippable cutscenes**
- **Save states** and **quick resume**…
