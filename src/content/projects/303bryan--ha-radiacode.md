---
repo: "303Bryan/ha-radiacode"
name: "ha-radiacode"
description: "A custom Home Assistant integration for RadiaCode radiation detectors via Bluetooth Low Energy.  Connects wirelessly using HA's built-in Bluetooth stack."
readmeQualityOk: true
url: "https://github.com/303Bryan/ha-radiacode"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["radiacode"]
stars: 10
forks: 0
openIssues: 0
closedIssues: 1
watchers: 3
contributors: 2
recentReleases: 0
createdAt: "2026-03-01T23:30:38Z"
lastCommitAt: "2026-07-05T20:16:39Z"
lastReleaseAt: "2026-03-07T00:39:45Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 93
undervaluedScore: 27
maintainers: ["303Bryan", "claude"]
openGraphImageUrl: "https://opengraph.githubassets.com/f1bdf40d6e8c271a1ad68748abdfde7db5a9ac88331f5a3330d2829f239be95c/303Bryan/ha-radiacode"
---

# Radiacode for Home Assistant

A custom Home Assistant integration for **Radiacode** radiation detectors via Bluetooth Low Energy.

Connects wirelessly using HA's built-in Bluetooth stack — works with local Bluetooth adapters and [ESPHome Bluetooth proxies](https://esphome.io/components/bluetooth_proxy.html) for whole-home coverage.

---

## Features

- **Real-time radiation monitoring** — dose rate (µSv/h) and count rate (CPS), polled every 5 seconds by default (configurable 5–300 s)
- **Radiation alarm** — binary sensor that trips when the dose rate crosses the device's alarm thresholds, for HA automations
- **Accumulated dose tracking** — total dose since the device was last reset
- **Device diagnostics** — battery level, internal temperature, BLE signal strength, and downloadable diagnostics
- **Device controls** — adjust display settings, alarm thresholds, sound/vibration, and more directly from HA
- **Auto-discovery** — HA automatically detects Radiacode devices over Bluetooth
- **BT proxy support** — works through ESPHome Bluetooth proxies; no direct Bluetooth adapter required on the HA host
- **Persistent connection** — keeps the BLE link open between polls to minimise…
