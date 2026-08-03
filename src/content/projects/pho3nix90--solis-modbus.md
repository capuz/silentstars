---
repo: "Pho3niX90/solis_modbus"
name: "solis_modbus"
description: "Home Assistant HACS integration for Solis inverters"
readmeQualityOk: true
url: "https://github.com/Pho3niX90/solis_modbus"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["hacs", "hacs-custom", "hacs-integration", "home-assistant", "modbus", "solis", "solis-pv-inverters"]
stars: 142
forks: 43
openIssues: 11
closedIssues: 228
watchers: 7
contributors: 19
recentReleases: 0
createdAt: "2023-12-01T23:51:38Z"
lastCommitAt: "2026-08-03T06:44:15Z"
lastReleaseAt: "2023-12-12T15:10:41Z"
status: "thriving"
tags: ["funded", "community_hub"]
healthScore: 97
undervaluedScore: 45
maintainers: ["Pho3niX90", "Nino6689", "Johnyb65"]
openGraphImageUrl: "https://opengraph.githubassets.com/80697cd9fafe29dc79679eedde2bfe8d4ea7b5f61b872f45839fc5bdb80f7baa/Pho3niX90/solis_modbus"
fundingLinks: ["BUY_ME_A_COFFEE:https://buymeacoffee.com/pho3nix90"]
discussionCount: 66
---

# Solis Modbus Integration for Home Assistant

## Description

The Solis Modbus Integration for Home Assistant is a streamlined solution to connect your Solis inverter with Home Assistant. This integration was inspired by [fboundy's ha_solis_modbus](https://github.com/fboundy/ha_solis_modbus/tree/main). However, it enhances the native Modbus integration in Home Assistant by consolidating multiple register queries into single calls, eliminating unnecessary overhead.
## Documentation
https://solis-modbus.readthedocs.io/

## Solis cloud
You will lose access, unless you use a waveshare device. You will still have the option to disable the modbus, when updates are required.
https://github.com/Pho3niX90/solis_modbus/discussions/154

## Installation

To install the Solis Modbus Integration, follow these steps:

1. Open your Home Assistant instance.
2. Navigate to the "HACS".
3. Click the 3 dots menu

4. Click on "Custom Repositories"

5. Fill in the repository "https://github.com/Pho3niX90/solis_modbus", and category "Integration"
6. Now search for "Solis Modbus"

7. Click on Download

## Total Sensors
Whilst the solis inverters do provide total sensors for today, yesterday, month and…
