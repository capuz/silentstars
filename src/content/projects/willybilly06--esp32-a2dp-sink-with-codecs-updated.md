---
repo: "WillyBilly06/ESP32-A2DP-SINK-WITH-CODECS-UPDATED"
name: "ESP32-A2DP-SINK-WITH-CODECS-UPDATED"
description: "ESP32 Bluetooth A2DP Sink with LDAC, aptX, aptX-HD, AAC codec support."
readmeQualityOk: true
url: "https://github.com/WillyBilly06/ESP32-A2DP-SINK-WITH-CODECS-UPDATED"
language: "C"
languages: ["C"]
languagePcts: [85]
topics: ["a2dp-bluetooth", "a2dp-sink", "aac", "bluetooth", "codec", "esp-idf", "esp32", "ldac", "bluetooth-classic", "bluetooth-le"]
stars: 71
forks: 14
openIssues: 7
closedIssues: 5
watchers: 2
contributors: 1
recentReleases: 2
createdAt: "2026-02-02T09:00:50Z"
lastCommitAt: "2026-11-04T07:59:37Z"
lastReleaseAt: "2026-11-04T08:04:32Z"
status: "thriving"
tags: []
healthScore: 43
undervaluedScore: 17
maintainers: ["WillyBilly06"]
openGraphImageUrl: "https://opengraph.githubassets.com/eb4f7ef60329e2229f42cc22c0715d11911654def0086837f2089721346af373/WillyBilly06/ESP32-A2DP-SINK-WITH-CODECS-UPDATED"
---

---

# ESP32 A2DP Sink with LDAC, aptX, Opus, AAC, and SBC

> **Branch:** `main` - runs entirely on internal SRAM. No PSRAM is required.

This project turns a standard ESP32-WROOM module into a high-quality Bluetooth Classic A2DP audio receiver. It uses a patched ESP-IDF v6.1 Bluetooth stack with native multi-codec support for LDAC, aptX-HD, aptX, aptX-LL, Opus, AAC, and SBC.

The `main` branch is designed for internal RAM operation on common ESP32-WROOM boards. For the original PSRAM-dependent implementation, see the [`PSRAM-only`](https://github.com/WillyBilly06/ESP32-A2DP-SINK-WITH-CODECS-UPDATED/tree/PSRAM-only) branch.

## Releases

- [Current: firmware 1.0.4 / ESP-IDF 6.1](https://github.com/WillyBilly06/ESP32-A2DP-SINK-WITH-CODECS-UPDATED/releases/tag/v1.0.4-idf6.1)
- [Legacy: firmware 1.0.3 / ESP-IDF 5.5.2](https://github.com/WillyBilly06/ESP32-A2DP-SINK-WITH-CODECS-UPDATED/releases/tag/v1.0.3-idf5.5.2)

Each release provides a USB flash bundle, raw/encrypted OTA images, checksums and source at its tag. The legacy release preserves the original main branch. The 6.1 release includes the Bluetooth name, status synchronization and OTA fixes described in [the validation…
