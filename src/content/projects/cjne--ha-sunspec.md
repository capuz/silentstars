---
repo: "CJNE/ha-sunspec"
name: "ha-sunspec"
description: "Home Assistant customcomponent for SunSpec modbus devices"
readmeQualityOk: true
url: "https://github.com/CJNE/ha-sunspec"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["home-assistant", "sunspec", "custom-component"]
stars: 89
forks: 27
openIssues: 10
closedIssues: 92
watchers: 10
contributors: 12
recentReleases: 0
createdAt: "2021-06-02T09:01:54Z"
lastCommitAt: "2026-11-13T18:36:48Z"
lastReleaseAt: "2021-08-27T14:44:15Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 81
undervaluedScore: 49
maintainers: ["enoch85", "CJNE", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/5b48883ff9782bc572f205fdf0a17180f9b5fbc877d047b2130edea694589da7/CJNE/ha-sunspec"
---

# SunSpec

This custom component for [home assistant](https://home-assistant.io/) will let you monitor any SunSpec Modbus compliant device, most commonly a solar inverter or energy meter. A list of compliant devices and manufacturers can be found on the [sunspec website](https://sunspec.org/sunspec-modbus-certified-products/).

It will auto discover and create sensors depending on the available data of the device.
By default only the most common sensors are created, there is an optional configuration that lets you control exactly what data to use.

Supports Modbus TCP connections and Modbus RTU over a serial port.

Works out of the box with the energy dashboard.

**This component will set up the following platforms.**

| Platform | Description                 |
| -------- | --------------------------- |
| `sensor` | Show info from SunSpec API. |

## HACS Installation

1. Search for SunSpec in [HACS](https://hacs.xyz/) and download it
2. Restart Home Assistant
3. In Settings -> Devices & services, click "Add integration" and search for "SunSpec"

## Manual Installation

1. Using the tool of choice open the directory (folder) for your HA configuration (where you find…
