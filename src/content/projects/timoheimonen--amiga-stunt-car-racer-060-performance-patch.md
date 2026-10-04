---
repo: "timoheimonen/amiga-stunt-car-racer-060-performance-patch"
name: "amiga-stunt-car-racer-060-performance-patch"
description: "Amiga Stunt Car Racer Performance. 50 Hz physics, 50 FPS & 8.33 Hz timers patch, in game track editor. "
readmeQualityOk: true
url: "https://github.com/timoheimonen/amiga-stunt-car-racer-060-performance-patch"
language: "Assembly"
languages: ["Assembly"]
languagePcts: [100]
topics: ["amiga", "patch", "python", "assembly", "retro", "performance-boost", "emulator"]
stars: 7
forks: 0
openIssues: 2
closedIssues: 3
watchers: 0
contributors: 1
recentReleases: 10
createdAt: "2026-09-07T11:12:42Z"
lastCommitAt: "2026-10-04T10:01:39Z"
lastReleaseAt: "2026-09-22T15:06:04Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 91
undervaluedScore: 50
maintainers: ["timoheimonen"]
openGraphImageUrl: "https://opengraph.githubassets.com/7760114d23b11fee37cfd8c86550ec5ede054a89d824fec3c4d52ff0d8c4adb3/timoheimonen/amiga-stunt-car-racer-060-performance-patch"
---

# Stunt Car Racer Performance patcher

**Version 1.6.3.** This release is primarily intended for emulation.
It provides **50 Hz physics and rendering at up to 50 FPS, while lap timers retain their original 8.33 Hz update rate**, and detects PAL or NTSC displays at boot.
The achieved frame rate depends on the machine's Chip RAM access speed; game speed stays correct when frames are late.
The patcher also writes a [WHDLoad install](https://github.com/timoheimonen/amiga-stunt-car-racer-060-performance-patch/blob/HEAD/WHDLOAD.md) of the same game for a hard disk.

## Requirements

- Python 3.8+; no additional packages or assembler needed to patch a disk.
- Primarily an emulated Amiga with PAL or NTSC, MC68060, 2 MiB Chip RAM and at least
  1 MiB Fast RAM ([requirements](https://github.com/timoheimonen/amiga-stunt-car-racer-060-performance-patch/blob/HEAD/PATCH.md#requirements)). Lower frame rates may call
  for adjusting **Game Speed** in [Settings](#settings).
- Your own original Stunt Car Racer ADF matching the
  [supported checksum](https://github.com/timoheimonen/amiga-stunt-car-racer-060-performance-patch/blob/HEAD/PATCH.md#checksums), and your own Kickstart ROM.

## Usage

```sh…
