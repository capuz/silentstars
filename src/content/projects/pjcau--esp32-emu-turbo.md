---
repo: "pjcau/esp32-emu-turbo"
name: "esp32-emu-turbo"
description: "Handheld retro gaming console based on ESP32-S3 for NES and SNES emulation"
readmeQualityOk: true
url: "https://github.com/pjcau/esp32-emu-turbo"
homepage: "https://pjcau.github.io/esp32-emu-turbo/"
language: "C"
languages: ["C", "Python"]
languagePcts: [59, 32]
stars: 7
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 8
createdAt: "2026-02-08T12:28:18Z"
lastCommitAt: "2026-10-09T18:56:38Z"
lastReleaseAt: "2026-08-14T14:39:08Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 90
undervaluedScore: 64
maintainers: ["pjcau"]
openGraphImageUrl: "https://opengraph.githubassets.com/c6608468acf11b7249524b97a9e95cc0fbf83dd0b41e32ca4f2bd95be35cbd44/pjcau/esp32-emu-turbo"
---

# ESP32 Emu Turbo

Handheld retro gaming console based on ESP32-S3 — **SNES** (primary) and **NES** (secondary) emulation.

## Project Goal

Build a portable battery-powered device based on ESP32-S3, capable of loading and playing retro games via SD card, with USB-C charging and an ILI9488 3.95" color LCD display.

## Where the project stands (2026-09-27)

- **The first article works.** Board v4.9.0 (article 0003, JLCPCB-assembled) passed
  every bring-up stage on 2026-09-11: USB power, rails, boot, display, SD, audio, all
  12 buttons, and **battery**.
- **15 systems run on the board.** NES, GB/GBC, SMS/GG/SG-1000, PC Engine, Genesis,
  Neo Geo Pocket, Colecovision at full speed; SNES at real speed
  (all but Mario Kart); DOOM at its 35 fps engine rate; Duke Nukem 3D playable
  (~50 fps in game); Wolfenstein 3D at 62 fps; arcade via a MAME 0.37 port (Pac-Man, 1942, 1943, Blood Bros.,
  Aero Fighters).
- **The board is driven from the host.** `scripts/board_ctl.py` launches ROMs,
  presses buttons, saves/loads states, captures audio and reads the profiling
  counters over the USB console; `scripts/emu_check.py` runs every core in one pass.
- **No board defect found.** Findings R37…
