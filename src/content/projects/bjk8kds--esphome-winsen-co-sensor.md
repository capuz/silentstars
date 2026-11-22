---
repo: "Bjk8kds/esphome-winsen-co-sensor"
name: "esphome-winsen-co-sensor"
description: "ESPHome custom/external components for Winsen electrochemical carbon monoxide (CO) sensors."
readmeQualityOk: true
url: "https://github.com/Bjk8kds/esphome-winsen-co-sensor"
language: "C++"
languages: ["C++", "Python"]
languagePcts: [75, 25]
topics: ["carbon-monoxide-sensor", "co-sensor", "esphome", "esphome-component", "winsen", "ze15-co", "ze07-co"]
stars: 5
forks: 1
openIssues: 0
closedIssues: 1
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2025-07-30T04:18:31Z"
lastCommitAt: "2026-11-22T02:12:10Z"
lastReleaseAt: "2025-10-05T12:43:22Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 90
undervaluedScore: 47
maintainers: ["Bjk8kds"]
openGraphImageUrl: "https://opengraph.githubassets.com/72ade2277fab4abebe3d642e256bf1cba3347bcfaa97e63e3e30eaa465afc3cb/Bjk8kds/esphome-winsen-co-sensor"
---

# ESPHome Winsen CO Sensors

ESPHome custom/external components for Winsen electrochemical carbon monoxide (CO) sensors.

> 🟢 **NB**: Examples of using uart debug and commands directly in yaml (without custom components) are available in the [example](https://github.com/Bjk8kds/esphome-winsen-co-sensor/blob/HEAD/example/) folder.

## Supported Sensors

| Sensor | Range | Status | Component |
|--------|-------|--------|-----------|
| **ZE15-CO** | 0-500 ppm | ✅ Ready | `ze15_co` |
| **ZE07-CO** | 0-500 ppm | ✅ Ready | `ze07_co` |

## Features

- 📊 **Carbon Monoxide (CO)** measurement in ppm
- 🔄 **Automatic mode selection** based on configuration (ZE15-CO)
- 🔄 **Dual mode support** for ZE07-CO (Passive/Q&A modes)
- 🚨 **Sensor fault detection** (ZE15-CO only)
- 🏠 **Home Assistant** integration ready
- 📡 **UART communication** at 9600 baud
- 🎯 **High precision**: 0.1 ppm resolution
- 🔋 **Power efficient Q&A mode** with dormant support (ZE07-CO)

## Installation

### External Component

```yaml
external_components:
  - source: github://Bjk8kds/esphome-winsen-co-sensor
    components: [ ze15_co, ze07_co ]
```
