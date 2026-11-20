---
repo: "mathieucarbou/MycilaHADiscovery"
name: "MycilaHADiscovery"
description: "Home Assistant Discovery library for Arduino / ESP32"
readmeQualityOk: true
url: "https://github.com/mathieucarbou/MycilaHADiscovery"
homepage: "https://mathieu.carbou.me/MycilaHADiscovery/"
language: "C++"
languages: ["C++"]
languagePcts: [100]
stars: 11
forks: 2
openIssues: 0
closedIssues: 3
watchers: 2
contributors: 2
recentReleases: 0
createdAt: "2024-01-26T22:11:21Z"
lastCommitAt: "2026-11-20T12:24:37Z"
lastReleaseAt: "2024-11-10T11:33:16Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 90
undervaluedScore: 70
maintainers: ["mathieucarbou", "dependabot[bot]", "Laxilef"]
openGraphImageUrl: "https://opengraph.githubassets.com/f24d3e850f8afb91a82d6d4917623018b600ac70fb86497b1a552b7ae6a691df/mathieucarbou/MycilaHADiscovery"
fundingLinks: ["GITHUB:https://github.com/mathieucarbou", "CUSTOM:https://paypal.me/mathieucarboufr"]
discussionCount: 2
---

# MycilaHADiscovery

Simple and efficient Home Assistant Discovery library for Arduino / ESP32

## Features

- Supports diagnostic sensors, config sensors and normal sensors
- Editable components:
  - button
  - switch / outlet
  - select
  - slider / box with min, max, step
  - input (number and text)
  - climate (with temperature, mode, action and preset topics)
- Sensors:
  - text
  - binary (state)
  - gauge
  - counter
- Supports regex validation
- Supports availability (global and per component)
- Supports device class, icon, state class, unit of measurement
- Supports optional entity IDs, enabled-by-default settings and sensor expiration

## Basic Usage

Setup:
