---
repo: "sususweet/midea_auto_cloud"
name: "midea_auto_cloud"
description: "Control Midea devices via Cloud from Home Assistant"
readmeQualityOk: true
url: "https://github.com/sususweet/midea_auto_cloud"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["hacs", "hacs-integration", "hacs-integration-custom-integration", "home-assistant", "home-assistant-component", "home-automation", "midea"]
stars: 257
forks: 44
openIssues: 4
closedIssues: 154
watchers: 3
contributors: 18
recentReleases: 0
createdAt: "2025-09-08T15:16:09Z"
lastCommitAt: "2026-07-16T05:59:30Z"
lastReleaseAt: "2025-11-11T07:37:16Z"
status: "thriving"
tags: ["solo_builder", "funded"]
healthScore: 96
undervaluedScore: 35
maintainers: ["sususweet", "mda-lne", "kooritea"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1052806732/e0c94025-0df5-451e-815e-b55f2ff8f342"
fundingLinks: ["BUY_ME_A_COFFEE:https://buymeacoffee.com/sususweet"]
---

# Midea Auto Cloud

English | [简体中文](https://github.com/sususweet/midea_auto_cloud/blob/HEAD/README_hans.md)

Get devices from MSmartHome/Midea Meiju homes through the network and control them via Midea's cloud API.

- Automatically discover and find devices
- Automatically download device protocol files
- Update device status to visible device attributes

## Version Notes

- All devices can generate a binary sensor named "Status" by default, which lists all accessible device attributes in its properties (some values are not settable)
- The first few items of the Status entity list the device classification information for reference

## Currently Supported Device Types

- T0x13 Electric Light
- T0x15 Water Heater
- T0x17 Laundry Machine
- T0x21 Central Air Conditioning Gateway
- T0x24 Electric Oven
- T0x26 Bath Heater
- T0x3D Water Heater
- T0x44 Smart Thermostat
- T0x9B Steam oven
- T0x9C Integrated Gas Stove
- T0xA1 Dehumidifier
- T0xAC Air Conditioner
- T0xB0 Microwave Oven
- T0xB2 Electric Steamer
- T0xB3 Disinfection Cabinet
- T0xB6 Range Hood
- T0xB7 Gas Stove
- T0xB8 Smart Robot Vacuum
- T0xBC Air Sensor
- T0xBF Microwave Steam Oven
- T0xC1 Wall hanging furnace
- T0xC2…
