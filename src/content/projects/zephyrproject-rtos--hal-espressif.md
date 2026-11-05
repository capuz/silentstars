---
repo: "zephyrproject-rtos/hal_espressif"
name: "hal_espressif"
description: "HAL and SDK for ESP32 and other hardware from Espressif"
readmeQualityOk: true
url: "https://github.com/zephyrproject-rtos/hal_espressif"
language: "C"
languages: ["C"]
languagePcts: [98]
topics: ["module", "hal"]
stars: 68
forks: 104
openIssues: 0
closedIssues: 0
watchers: 8
contributors: 402
recentReleases: 0
createdAt: "2020-11-11T17:16:24Z"
lastCommitAt: "2026-11-05T14:05:28Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero", "fork_magnet"]
healthScore: 87
undervaluedScore: 54
maintainers: ["sylvioalves", "kartben", "wmrsouza"]
openGraphImageUrl: "https://opengraph.githubassets.com/8be4b49c3a5c8221b8ff01d0871099ab910a702925a0fee09b0b7374436a3362/zephyrproject-rtos/hal_espressif"
---

# hal_espressif

Zephyr HAL module for Espressif SoCs. Contains ESP-IDF components adapted
for Zephyr RTOS, including low-level drivers, Wi-Fi, Bluetooth, and
system libraries.

## Supported SoCs

- ESP32
- ESP32-S2
- ESP32-S3
- ESP32-C2
- ESP32-C3
- ESP32-C5
- ESP32-C6
- ESP32-H2
- ESP32-P4

## Repository Structure

```
components/           ESP-IDF components (synced from ESP-IDF master)
tools/
  sync/               ESP-IDF sync tooling and adaptation patches
    patches/          Zephyr-specific patches applied on top of components
    hal-sync.sh    Main sync script
    hal-patches.sh
    components.txt    List of ESP-IDF components to sync
    exclude.txt       Folders to exclude after sync
    renames.txt       File/folder renames applied after patching
  ci/                 CI validation scripts
  flasher_stub/       Esptool flasher stub sources and linker scripts
  idf_monitor/        Serial monitor utility
west/                 West extension commands (serial monitor)
zephyr/
  CMakeLists.txt      Main build file
  Kconfig             Kconfig options
  module.yml          Zephyr module definition and blob manifest
  common/             Shared Zephyr integration code…
