---
repo: "zisismaras/ender_3_4.2.2_firmware"
name: "ender_3_4.2.2_firmware"
description: "Automatic Marlin builds for the Ender-3 with the stock creality 4.2.2 board"
readmeQualityOk: true
url: "https://github.com/zisismaras/ender_3_4.2.2_firmware"
language: "C"
languages: ["C"]
languagePcts: [100]
topics: ["3d-printing", "ender-3", "marlin-firmware"]
stars: 82
forks: 52
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2022-01-14T16:00:16Z"
lastCommitAt: "2026-10-29T10:36:10Z"
lastReleaseAt: "2022-01-23T03:40:36Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "fork_magnet"]
healthScore: 69
undervaluedScore: 40
maintainers: ["github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/5228aa4bd827d2d11a7f0d4e55a65d7906e2849e43802941c4c08d8c5bc5ad41/zisismaras/ender_3_4.2.2_firmware"
---

# Ender-3 4.2.2 firmware

Automatic [Marlin](https://github.com/MarlinFirmware/Marlin) builds for the Ender-3 with the stock creality 4.2.2(512K) board.  
You can find both stable and nightly (`bugfix-2.1.x`) downloads on the repository releases.  

**Important**
* Make sure you have a 4.2.2 512K flash board before installing. Some newer models come with 256K of flash. You can read more [here](https://github.com/MarlinFirmware/Marlin/issues/23596). If your board is the 256K variant you can fork the repo and change the `board_env`.
* All builds here use the default `A4988` stepper drivers, you can fork and change that if you have different ones. To find out which drivers you have there is a little marking on the sd card slot. More info [here](https://github.com/MarlinFirmware/Configurations/pull/633#issuecomment-995206382).
* It's been a while since i used this board. The latest tested version is `2.0.9.3`.

## Builds

### default

The default Marlin configuration for Ender-3.

### base

Bed leveling helper menu to move around the corners. Better than having a gcode file or moving manually.  
Also enables `HOST_ACTION_COMMANDS` as required by octoprint.

### base_lin

base +…
