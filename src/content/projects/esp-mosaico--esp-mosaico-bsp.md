---
repo: "esp-mosaico/esp-mosaico-bsp"
name: "esp-mosaico-bsp"
description: "Board support package, reusable components, and examples for the ESP-Mosaico development board."
readmeQualityOk: true
url: "https://github.com/esp-mosaico/esp-mosaico-bsp"
language: "C"
languages: ["C"]
languagePcts: [97]
stars: 19
forks: 2
openIssues: 2
closedIssues: 1
watchers: 1
contributors: 7
recentReleases: 0
createdAt: "2026-08-25T13:30:45Z"
lastCommitAt: "2026-10-11T10:15:28Z"
status: "newborn"
tags: ["hidden_gem"]
healthScore: 83
undervaluedScore: 36
maintainers: ["TDA-2030", "Horion0415", "loop233"]
openGraphImageUrl: "https://opengraph.githubassets.com/d8052b4419b1300c805c34ae463d6197367a7e33952f9c2a93c3dfea301f7e50/esp-mosaico/esp-mosaico-bsp"
---

# ESP-Mosaico BSP

[Overview](#overview) | [Features](#features) | [Getting Started](#getting-started) | [Components](#components) | [Examples](#examples) | [License](#license)

## Overview

ESP-Mosaico BSP is an ESP-IDF Board Support Package for the ESP-Mosaico development board. It provides a unified API for the onboard display, touch controller, audio codec, sensors, storage, power control, user input, and two hot-pluggable expansion slots.

The repository also includes reusable components for magnetic interaction, ESP-NOW peer communication, multi-device topology, and application messaging, together with standalone examples ranging from basic peripheral bring-up to camera, voice, AI, and multi-board applications.

## Compatibility

| Item | Support |
| --- | --- |
| SoC | ESP32-S31 |
| ESP-IDF | 6.2 or newer |
| Board revisions | v1.0 and v1.2 (v1.1 uses the v1.2 mapping) |

ESP32-S31 support may require the preview target command provided by the selected ESP-IDF release:

```bash
idf.py --preview set-target esp32s31
```

## Features

| Available | Capability | Device or interface |
| --- | --- | --- |
| Yes | Display | 480 x 480 CO5300 QSPI LCD |
| Yes | Touch | CST9217…
