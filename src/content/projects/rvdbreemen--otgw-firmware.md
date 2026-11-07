---
repo: "rvdbreemen/OTGW-firmware"
name: "OTGW-firmware"
description: "A ESP8266 devkit firmware for the Nodoshop version of the Opentherm Gateway (OTGW) "
readmeQualityOk: true
url: "https://github.com/rvdbreemen/OTGW-firmware"
language: "Python"
languages: ["Python", "C++"]
languagePcts: [46, 36]
topics: ["otgw", "opentherm-firmware", "otgw-firmware", "esp8266", "mqtt", "opentherm-gateway", "home-automation", "home-assistant", "homeassistant"]
stars: 213
forks: 48
openIssues: 4
closedIssues: 220
watchers: 15
contributors: 18
recentReleases: 0
createdAt: "2020-10-25T19:34:17Z"
lastCommitAt: "2026-11-07T22:50:00Z"
lastReleaseAt: "2021-03-14T14:09:28Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "legacy_hero", "community_hub"]
healthScore: 100
undervaluedScore: 42
maintainers: ["rvdbreemen", "andrebrait", "Crash-Evans"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/307176956/cbecd100-8125-11eb-97e7-a52c17388f26"
discussionCount: 42
---

# OTGW-firmware v2.0.0

> **Disclaimer: v2.0.0-beta.130 is a beta of the 2.0.0 line.** It is not a stable release. It has had alpha and beta testing on a small group of units, but not yet the long field runs a stable release needs. Expect bugs, save your settings before you flash, and read the [beta.130 release notes](https://github.com/rvdbreemen/OTGW-firmware/blob/HEAD/docs/releases/RELEASE_NOTES_2.0.0-beta.130.md) first, including the known issues.
>
> If you need a gateway that just works, stay on the 1.x line for now: the [`otgw-1.x.x` branch](https://github.com/rvdbreemen/OTGW-firmware/tree/otgw-1.x.x) and the [published releases](https://github.com/rvdbreemen/OTGW-firmware/releases).

OTGW-firmware turns the NodoShop OpenTherm Gateway into a networked smart heating controller. It runs on an ESP32-S3 (LOLIN S3 Mini or S3 Mini Pro) in the traditional NodoShop OTGW with the PIC co-processor, monitors the OpenTherm bus between your thermostat and boiler, and connects your heating system to your home automation platform via MQTT, a browser-based web interface and a REST API. That combination is the supported hardware.

A prototype ESP32 board that drives OpenTherm directly,…
