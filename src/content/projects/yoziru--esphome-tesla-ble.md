---
repo: "yoziru/esphome-tesla-ble"
name: "esphome-tesla-ble"
description: "Interact with Tesla vehicles over BLE using ESPHome and Home Assistant"
readmeQualityOk: true
url: "https://github.com/yoziru/esphome-tesla-ble"
language: "C++"
languages: ["C++", "Python"]
languagePcts: [72, 27]
topics: ["ble", "bluetooth-low-energy", "esp32", "esphome", "home-assistant", "tesla", "tesla-ble", "tesla-api"]
stars: 358
forks: 70
openIssues: 0
closedIssues: 85
watchers: 32
contributors: 5
recentReleases: 0
createdAt: "2024-06-20T21:40:47Z"
lastCommitAt: "2026-10-18T08:16:16Z"
lastReleaseAt: "2024-08-05T04:57:35Z"
status: "thriving"
tags: ["funded"]
healthScore: 95
undervaluedScore: 38
maintainers: ["yoziru", "github-actions[bot]", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/7064df1e7b372f5da8ce879e2f6c4fc5b7b1fca9a1298f4b0cbec54bb592f6c1/yoziru/esphome-tesla-ble"
fundingLinks: ["GITHUB:https://github.com/yoziru"]
---

# ESPHome Tesla BLE

> [!TIP]
> **Using Home Assistant?** [Tesla BLE for Home Assistant](https://github.com/yoziru/ha-tesla-ble)
> provides vehicle sensors and controls through HA's local Bluetooth adapter or a
> stock ESPHome Bluetooth proxy with active connections enabled. Install it through HACS as a custom repository.

Manage your Tesla vehicle over BLE using an ESP32 — control charging, check battery status, lock/unlock, and more.

| Controls | Sensors | Diagnostic |
| - | - | - |
| <img src="./docs/ha-controls.png"> | <img src="./docs/ha-sensors.png"> | <img src="./docs/ha-diagnostic.png"> |

## Quick Start

1. Pick your install method:

| Method | How | Best for |
|--------|-----|----------|
| **ESPHome Device Builder** | Create a project, then add the board package | HA + ESPHome add-on users |
| **CLI** | `make compile && make upload` | Users with Python + [uv](https://docs.astral.sh/uv/) |

## Boards

Pick the config for your hardware:

| Board | Device Builder package | CLI |
|-------|------------------------|-----|
| **M5Stack NanoC6** | `tesla-ble-m5stack-nanoc6.dashboard.yml` | `BOARD=m5stack-nanoc6` |
| **M5Stack AtomS3** | `tesla-ble-m5stack-atoms3.dashboard.yml` |…
