---
repo: "alexdelprete/ha-sinapsi-alfa"
name: "ha-sinapsi-alfa"
description: "HA Custom Component for Sinapsi Alfa energy monitoring device"
url: "https://github.com/alexdelprete/ha-sinapsi-alfa"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["home-assistant", "home-assistant-component", "home-assistant-custom", "home-assistant-integration", "homeassistant", "modbus-tcp", "sinapsi-alfa", "alfa", "sinapsi"]
stars: 20
forks: 6
openIssues: 1
closedIssues: 31
watchers: 1
contributors: 9
recentReleases: 0
createdAt: "2024-02-07T16:11:33Z"
lastCommitAt: "2026-06-27T00:47:22Z"
lastReleaseAt: "2024-03-17T13:52:43Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 96
undervaluedScore: 67
maintainers: ["alexdelprete", "dependabot[bot]", "M4v3r1cK87"]
openGraphImageUrl: "https://opengraph.githubassets.com/55734d68ee297b142195924c229e9ecb5a0859e38aa0e7a48a28295ebc62f491/alexdelprete/ha-sinapsi-alfa"
fundingLinks: ["BUY_ME_A_COFFEE:https://buymeacoffee.com/alexdelprete"]
---

# HA Custom Integration: Alfa by Sinapsi energy monitoring device

_This project is not endorsed by, directly affiliated with, maintained,
authorized, or sponsored by Sinapsi_

## Introduction

HA Custom Component to integrate data from [Sinapsi Alfa][alfa] device.
Tested on my Alfa to monitor the power/energy consumption and photovoltaic
power/energy production directly from the energy provider's OpenMeter 2.0.

![Alfa Device][img-device]

Alfa is a great product, it provides official measurements, and it provides
local API to get the data (for now it's through ModBus).

So finally here we are with the first official version of the HA custom
integration for Alfa devices. :)

## Features

- Installation/Configuration through Config Flow UI
- Sensor entities for all data provided by the device
- **Translated sensor names**: Sensor names displayed in your Home Assistant
  language (supports German, English, Spanish, Estonian, Finnish, French,
  Italian, Norwegian, Portuguese, and Swedish)
- **Options flow**: Adjust polling interval, connection timeout, and repair
  notification settings at runtime
- **Reconfigure flow**: Change device name, host, port, and skip MAC detection
-…
