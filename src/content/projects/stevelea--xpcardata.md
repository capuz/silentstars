---
repo: "stevelea/xpcardata"
name: "xpcardata"
description: "Car Data Collection and foward to MQTT and ABRP"
url: "https://github.com/stevelea/xpcardata"
language: "Dart"
languages: ["Dart"]
languagePcts: [86]
stars: 13
forks: 0
openIssues: 6
closedIssues: 6
watchers: 2
contributors: 2
recentReleases: 0
createdAt: "2026-01-06T11:02:53Z"
lastCommitAt: "2026-06-25T06:40:43Z"
lastReleaseAt: "2026-01-13T03:46:42Z"
status: "thriving"
tags: ["solo_builder", "funded"]
healthScore: 70
undervaluedScore: 13
maintainers: ["stevelea"]
openGraphImageUrl: "https://opengraph.githubassets.com/e373ef042a839a52389d8c21109bb4e801a7e5718a2264c9eea516b01f593b39/stevelea/xpcardata"
fundingLinks: ["BUY_ME_A_COFFEE:https://buymeacoffee.com/stevelea"]
---

# XPCarData - Battery Monitor for XPENG Vehicles

A Flutter app for monitoring XPENG electric vehicle battery data via OBD-II Bluetooth, with integrations for ABRP, MQTT/Home Assistant, and anonymous Fleet Statistics.

![Platform](https://img.shields.io/badge/platform-Android-green)
![Flutter](https://img.shields.io/badge/Flutter-3.x-blue)
![Version](https://img.shields.io/badge/version-1.4.20-orange)

## Screenshots

| Dashboard | Charging History |
|:-:|:-:|
|  |  |

| Session Details | Settings |
|:-:|:-:|
|  |  |

## Features

### Real-time Battery Monitoring
- State of Charge (SOC) %
- State of Health (SOH) %
- HV Battery Voltage, Current, Power
- **Individual Cell Voltages** (all 126 cells with min/max/avg/delta)
- **Cell Temperatures** (all sensors with color-coded display)
- Battery Temperature (Max/Min)
- Coolant Temperatures (Battery, Motor)
- DC Charging Voltage/Current/Power
- Guestimated Range (calculated)
- Speed, Odometer, GPS Location

### Integrations
- **ABRP** - Live telemetry for A Better Route Planner
- **MQTT** - Publish to any broker for home automation
- **Home Assistant** - Auto-discovery creates entities automatically
- **Fleet Statistics** - Anonymous,…
