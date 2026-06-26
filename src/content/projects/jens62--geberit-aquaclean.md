---
repo: "jens62/geberit-aquaclean"
name: "geberit-aquaclean"
description: "Home automation bridge for Geberit AquaClean toilets: BLE connectivity (direct or ESPHome proxy), MQTT, REST API, web UI, and native Home Assistant integration via HACS"
url: "https://github.com/jens62/geberit-aquaclean"
language: "Python"
languages: ["Python"]
languagePcts: [93]
topics: ["alba", "bluetooth-le", "esp32", "esphome", "geberit", "hacs", "home-assistant", "home-automation", "mera", "mqtt"]
stars: 37
forks: 4
openIssues: 7
closedIssues: 22
watchers: 2
contributors: 4
recentReleases: 0
createdAt: "2024-12-17T14:36:17Z"
lastCommitAt: "2026-06-26T06:46:12Z"
lastReleaseAt: "2026-02-23T11:22:24Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 85
undervaluedScore: 55
maintainers: ["dkrioms"]
openGraphImageUrl: "https://opengraph.githubassets.com/c53acebbcbbeed8f90587265f8e852b9f8453eba8bc32c09cf1c1fffea89cb46/jens62/geberit-aquaclean"
fundingLinks: ["GITHUB:https://github.com/jens62", "CUSTOM:https://www.buymeacoffee.com/dkrioms"]
---

# geberit-aquaclean

Python bridge between a [Geberit AquaClean](https://www.geberit.de/badezimmerprodukte/wcs-urinale/dusch-wcs-geberit-aquaclean/produkte/) smart toilet and your home automation system.

Port of [Thomas Bingel](https://github.com/thomas-bingel)'s C# [geberit-aquaclean](https://github.com/thomas-bingel/geberit-aquaclean) library to Python.

**Key enhancements over the original:**
- **Non-blocking, on-demand BLE** — connects only for the duration of each request, then releases the connection immediately. The original holds BLE permanently, causing the device to stop responding after a few days. On-demand mode eliminates this entirely.
- **ESPHome Bluetooth Proxy** — use an ESP32 as a remote BLE-to-IP bridge, eliminating the need for local Bluetooth hardware; run the bridge anywhere on your network
- **Filter status & lifetime tracking** — reads the ceramic honeycomb filter counter directly from the device: days until replacement, last reset date, total shower cycles. The original C# library has no filter status support.
- **Dryer spray intensity** — exposes the dryer spray intensity setting (read and write), discovered through independent BLE protocol analysis. Not…
