---
repo: "m5agent/m5stack-esp-emulator"
name: "m5stack-esp-emulator"
description: "Multi-device M5Stack UIFlow2 virtual-host simulator with esptool flashing, UI capture and input testing"
originalDescription: "Multi-device M5Stack UIFlow2 virtual-host simulator with esptool flashing, UI capture and input testing"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/m5agent/m5stack-esp-emulator"
language: "Python"
languages: ["Python"]
languagePcts: [92]
topics: ["emulator", "esp32", "esp32-c6", "esp32-p4", "esp32-s3", "m5stack", "micropython", "qemu", "testing", "uiflow2"]
stars: 8
forks: 0
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 1
recentReleases: 1
createdAt: "2026-10-21T01:19:34Z"
lastCommitAt: "2026-10-25T02:47:45Z"
lastReleaseAt: "2026-10-25T01:44:55Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 54
maintainers: ["m5agent"]
openGraphImageUrl: "https://opengraph.githubassets.com/d12a410bbd7ffb8db1a5b8caa2cfec317fe3879f7e0102fa87940d0f724e4db1/m5agent/m5stack-esp-emulator"
---

# M5Stack Firmware Simulation and Review Platform

Last reconciled: `2026-10-25`

A simulation platform for M5Stack multi-controller firmware startup, flashing, UI preview, peripheral integration and automated testing. The most fully verified path is currently UIFlow2, but the architecture also supports other full-Flash firmware that meets compatibility requirements, including ESP-IDF, Arduino and MicroPython.

## Current Status

- Device backends are established for ESP32-S3, ESP32-C6, ESP32 LX6, ESP32-P4 and standalone ARM64 Linux. CardputerZero is not part of the ESP32/UIFlow2 path.
- The primary product acceptance path for S3/C6/Core2 is `qemu-unified` (request field `runtime=qemu-unified`): the same lease runs board peripherals, WiFi and BLE within the same guest, and returns frame/QOM/network/peer evidence. `qemu-ble` is retained for compatibility only.
- New Core2 calls use `profile=core2-native-hci`. GDB `core2-native-vhci` is retained as a diagnostic/compatibility path.
- The Core2 unified guest has run for 120 seconds in each of 3 independent leases. In each round, `1 MiB` was allocated from the `4 MiB` virtual PSRAM heap (as effective in QOM), with 35–36 full-buffer…
