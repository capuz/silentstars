---
repo: "disforw/goveelife"
name: "goveelife"
description: "Home Assistant Govee integration using the newest API for ALL Govee WiFi devices"
readmeQualityOk: true
url: "https://github.com/disforw/goveelife"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 204
forks: 36
openIssues: 43
closedIssues: 95
watchers: 4
contributors: 12
recentReleases: 3
createdAt: "2024-04-15T01:13:21Z"
lastCommitAt: "2026-08-28T12:22:17Z"
lastReleaseAt: "2026-08-27T20:56:53Z"
status: "thriving"
tags: []
healthScore: 86
undervaluedScore: 32
maintainers: ["disforw", "catchmeifyoudan", "RuneMason1"]
openGraphImageUrl: "https://opengraph.githubassets.com/87098fbf0a699fdc15d796719c0fe7ec951e2dde32974948784d7c2e44b24480/disforw/goveelife"
---

# GoveeLife — Home Assistant Integration

A community-maintained [HACS](https://hacs.xyz) custom integration that connects your Govee smart home devices to Home Assistant via the [Govee OpenAPI v2](https://developer.govee.com/).

---

## Supported Device Types

The integration auto-discovers all devices on your Govee account and creates entities based on each device's reported capabilities. No SKU hardcoding — if your device exposes a capability through the API, it will be available in HA.

| Device Type | HA Platform | Capabilities |
|---|---|---|
| **Lights** | `light` | On/off, brightness, RGB color, color temperature, scenes, DIY scenes, RGBIC segments |
| **Heaters** | `climate` | On/off, target temperature, current temperature, HVAC mode |
| **Tea Kettles** | `climate` | On/off, target temperature |
| **Air Purifiers** | `fan` | On/off, preset modes |
| **Fans** | `fan` | On/off, speed, preset modes, oscillation |
| **Humidifiers** | `humidifier` | On/off, target humidity, preset modes, humidity/temperature sensors |
| **Ice Makers** | `switch` | On/off |
| **Aroma Diffusers** | `switch` | On/off |
| **Smart Plugs / Sockets** | `switch` | On/off |
| **Wi-Fi Thermometers** |…
