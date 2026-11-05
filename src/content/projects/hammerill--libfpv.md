---
repo: "hammerill/libfpv"
name: "libfpv"
description: "FPV drone in any game."
readmeQualityOk: true
url: "https://github.com/hammerill/libfpv"
homepage: "https://hammerill.com/en/blog/libfpv"
language: "C++"
languages: ["C++"]
languagePcts: [84]
topics: ["fpv", "fpv-simulator", "lib", "library", "betaflight", "drone", "fpv-drone", "physics-simulation", "simulation", "simulator"]
stars: 31
forks: 7
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-10-12T18:59:51Z"
lastCommitAt: "2026-11-05T11:25:35Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 40
maintainers: ["hammerill", "bwcon"]
openGraphImageUrl: "https://opengraph.githubassets.com/7218dbd4546a09b188bd460642f8e8d56ad5a9916ab45c120f5012e9ccb48c07/hammerill/libfpv"
---

# FPV Drone in Any Game

*(example with [sm64ex-fpv](https://github.com/hammerill/sm64ex-fpv))*

*(another one with [gtaiv-fpv](https://github.com/hammerill/gtaiv-fpv))*

*(yet another with [gtasa-fpv](https://github.com/hammerill/gtasa-fpv))*

*([reVC-mac-fpv](https://github.com/hammerill/reVC-mac-fpv))*

A drop-in FPV quadcopter for any game. libfpv runs real Betaflight firmware
(through [SimITL](https://github.com/AJ92/SimITL)) on its own 1 kHz
simulation thread, reads the player's radio or gamepad, and gives the game
everything it needs to draw one rendered frame: the drone's pose, the FPV,
chase and line-of-sight cameras, motor RPMs, impacts, a Betaflight OSD, a
settings overlay and motor sound.

The game supplies collision geometry and draws the result. libfpv has no
renderer of its own, and its API is plain C, so it can be loaded from any
engine or mod loader.

## Features

- **Betaflight in the loop.** The firmware is real Betaflight 2025.12, so
  rates, modes, filters and arming behave as they do on a real quad. Betaflight
  Configurator can connect over WebSocket (`ws://localhost:5761`). The Betaflight
  CLI is available in-process, and `diff all` from a real quad can be…
