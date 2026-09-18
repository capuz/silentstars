---
repo: "lnagel/hass-eaton-ups-mqtt"
name: "hass-eaton-ups-mqtt"
description: "Home Assistant Eaton UPS MQTT integration"
readmeQualityOk: true
url: "https://github.com/lnagel/hass-eaton-ups-mqtt"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["eaton-ups", "hacs", "home-assistant", "eaton", "hacs-integration", "home-assistant-integration", "home-automation", "mqtt", "smart-home", "ups"]
stars: 8
forks: 1
openIssues: 0
closedIssues: 5
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2025-02-22T11:35:10Z"
lastCommitAt: "2026-09-18T08:27:42Z"
lastReleaseAt: "2026-03-27T16:03:40Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 90
undervaluedScore: 72
maintainers: ["lnagel", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/4000f9c25e5d8bcffd4b28ba61bfb60495da62b69f9527a2f5bacb70359541da/lnagel/hass-eaton-ups-mqtt"
discussionCount: 3
---

# Eaton UPS MQTT Integration for Home Assistant

A Home Assistant integration that connects to Eaton UPS devices through their Network-M2/M3 management card via MQTT to monitor power status and battery levels. This integration provides:

- Device Information
  - Model, serial number, firmware details
  - UPS operating mode and health status
  - System alarms and fault conditions

- Power Metrics
  - Input/Output voltage, current, and frequency
  - Active and apparent power measurements
  - Power factor and load percentage
  - Energy consumption statistics

- Battery Information
  - Charge level and remaining runtime
  - Charging status and mode (e.g., ABM)
  - Battery test results and health
  - Installation and replacement dates

- Environmental Monitoring
  - Temperature status
  - Fan and system alerts

## Requirements

- An Eaton UPS device with Network-M2 or Network-M3 management card
- Home Assistant 2026.3.0 or newer
- HACS 2.0.1 or newer

## Installation

1. Add this repository to HACS or copy the `custom_components/eaton_ups_mqtt` folder to your Home Assistant configuration directory.
2. Restart Home Assistant.
3. Add the integration through the Home Assistant UI.
4.…
