---
repo: "g3gg0/esp32_flasher"
name: "esp32_flasher"
description: "ESP32 Firmware Viewer & Web Flasher"
readmeQualityOk: true
url: "https://github.com/g3gg0/esp32_flasher"
homepage: "https://www.g3gg0.de/programming/esp32-browser-based-firmware-editor/"
language: "JavaScript"
languages: ["JavaScript", "HTML"]
languagePcts: [64, 21]
topics: ["editor", "esp32", "firmware", "flash", "flasher", "js", "uart", "webflasher", "esp", "esp-flasher"]
stars: 22
forks: 7
openIssues: 1
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2025-11-29T21:35:17Z"
lastCommitAt: "2026-11-03T10:52:34Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 65
undervaluedScore: 45
maintainers: ["g3gg0"]
openGraphImageUrl: "https://opengraph.githubassets.com/e9b78d5dcdbd6a3ba7e4c6cddc8b101385e65239477c9dd7b839c85344422133/g3gg0/esp32_flasher"
---

# ESP32 Firmware Viewer & Web Flasher

Browser-based toolkit to inspect and edit ESP32 firmware images, and to read/write flash directly over USB-JTAG or a USB-UART adapter using the Web Serial API. Built for fast reverse-engineering loops and ad-hoc repair work—run entirely in Chrome or Edge, no native installs.

> Experimental: NVS editing and on-device writes are still in active development.

Use at your own risk and keep backups.

## Highlights
- **Firmware parsing**: Bootloader decoding, partition-table auto-detect, SHA-1/SHA-256 validation, and NVS parsing/editing. FAT wear-leveling partitions can be explored and files extracted.
- **Sparse image engine**: Lazy, sector-aware cache that minimizes device reads and merges writes into 4 KiB-aligned blocks for efficient flashing.
- **Device comms**: Supports ESP32, ESP32-S2/S3, ESP32-C3, and ESP32-C6. Implements ROM bootloader commands, SLIP framing, stub loading, sync/hard-reset helpers, and SPI config.
- **Editors & tools**: Hex viewer with configurable offsets/length/width, partition replacer, NVS add/edit/delete, firmware patching, and memory-map visualization of cached/modified/unread regions.
- **Performance feedback**:…
