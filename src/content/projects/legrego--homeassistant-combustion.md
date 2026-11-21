---
repo: "legrego/homeassistant-combustion"
name: "homeassistant-combustion"
description: "Integrate Combustion thermometers with Home Assistant"
readmeQualityOk: true
url: "https://github.com/legrego/homeassistant-combustion"
language: "Python"
languages: ["Python"]
languagePcts: [99]
topics: ["combustion", "home-assistant", "home-automation", "python"]
stars: 36
forks: 12
openIssues: 4
closedIssues: 10
watchers: 7
contributors: 4
recentReleases: 2
createdAt: "2023-12-01T19:41:20Z"
lastCommitAt: "2026-11-21T13:34:19Z"
lastReleaseAt: "2026-11-21T13:07:02Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 86
undervaluedScore: 50
maintainers: ["legrego", "frenck"]
openGraphImageUrl: "https://opengraph.githubassets.com/81b367f0f1e3a2dbf38cd81854527707e927e403e5130612beaf0b16574a4425/legrego/homeassistant-combustion"
---

# 🔥 Combustion BLE Integration

Integrate [Combustion](https://combustion.inc) Predictive Thermometers and Giant Grill Gauges into Home Assistant.

**This integration will set up the following entities.**

Device | Entities
-- | --
Predictive Thermometer | Core, surface, and ambient temperature. Instant read temperature, while the probe is in instant read mode. Low battery. Each of the 8 thermistors and RSSI (disabled by default). Optional cooking target, time remaining, and prediction status.
Giant Grill Gauge | Temperature (unknown when no sensor is plugged in). Low battery. RSSI (disabled by default).

By default, the integration listens to Bluetooth advertisements without connecting to your devices. Temperature and battery sensors work with any Bluetooth adapter or proxy Home Assistant supports, including passive ones. Optional cooking predictions use one Bluetooth connection to a MeatNet repeater when one is in range, or a direct connection to each probe otherwise.

Requires Home Assistant 2026.10.4 or newer.
