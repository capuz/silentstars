---
repo: "giltal/ESP32_P4_Launcher"
name: "ESP32_P4_Launcher"
description: "ESP32-P4 launcher that loads relocatable PAPP v2 apps from SD into PSRAM and runs them behind versioned interfaces (display, audio, input, threads)"
readmeQualityOk: true
url: "https://github.com/giltal/ESP32_P4_Launcher"
language: "C"
languages: ["C", "C++"]
languagePcts: [75, 22]
stars: 18
forks: 4
openIssues: 3
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 9
createdAt: "2026-10-29T19:53:46Z"
lastCommitAt: "2026-11-06T11:24:22Z"
lastReleaseAt: "2026-11-06T11:24:28Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 59
undervaluedScore: 28
maintainers: ["giltal"]
openGraphImageUrl: "https://opengraph.githubassets.com/ae059c87b774a476666782f38083d2dfb1aa7c288a016397aec7342c78db7b70/giltal/ESP32_P4_Launcher"
---

# ESP32-P4 Launcher

**Run applications from an SD card on an ESP32-P4, the way a PC runs a program from a disk.**

The launcher is a permanent firmware that stays in flash. Applications are `.papp` files on the SD card.
Pick one and it is loaded into PSRAM, relocated, linked to the launcher's services and started.
There's no reflashing, no reboot and no flash wear. When it exits, every resource it used is reclaimed.

21 applications run this way today, including NES through Neo Geo emulators, Doom, Quake,
Duke Nukem 3D and OpenTyrian, plus Clock and Files.

The same launcher runs on more than one board, and the same `.papp` files and SD card work on all of them:
today the Guition ESP32-P4 4.3" (800×480), the Guition JC1060P470C 7" (1024×600) and the
M5Stack Tab5 (1280×720).

| Launcher version | App ABI | Toolchain | Boards |
|---|---|---|---|
| 0.25.2 | 2.0-preview | ESP-IDF v5.5.2 | Guition ESP32-P4 4.3" (480×800), Guition JC1060P470C 7" (1024×600), M5Stack Tab5 (720×1280) |

> **Status: active development.** The ABI is a preview and may still change. Everything below describes
> what exists in the code today; the plan for what comes next is in…
