---
repo: "alepee/hass-hitachi_yutaki"
name: "hass-hitachi_yutaki"
description: "A custom Home Assistant integration to control and monitor Hitachi heat pumps through ATW-MBS-02 and HC-A(16/64)MB Modbus gateway."
readmeQualityOk: true
url: "https://github.com/alepee/hass-hitachi_yutaki"
language: "Python"
languages: ["Python"]
languagePcts: [96]
topics: ["hacs-integration", "heat-pump", "hitachi", "home-assistant", "modbus", "yutaki", "yutampo"]
stars: 33
forks: 5
openIssues: 11
closedIssues: 87
watchers: 7
contributors: 4
recentReleases: 0
createdAt: "2024-11-12T23:22:56Z"
lastCommitAt: "2026-07-21T06:10:47Z"
lastReleaseAt: "2024-12-11T22:41:29Z"
status: "thriving"
tags: ["hidden_gem", "community_hub"]
healthScore: 95
undervaluedScore: 56
maintainers: ["alepee", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/8cfddf0179a12d7b6ff9a8c073381875c6b23dfd7ccf5c426879132b606882d0/alepee/hass-hitachi_yutaki"
discussionCount: 25
---

# Hitachi air-to-water heat pumps Integration for Home Assistant

This custom integration allows you to control and monitor your Hitachi **Yutaki** and **Yutampo** air-to-water heat pumps through Home Assistant using an ATW-MBS-02 or HC-A(16/64)MB Modbus gateway.

## Compatibility

- **Compatible Models**: Hitachi air-to-water heat pumps (2016 and newer fully supported, pre-2016 in beta)
- **Tested With**: Yutaki S80, Yutaki S, Yutaki S Combi, Yutampo R32
- **Required Hardware**: ATW-MBS-02 or HC-A(16/64)MB Modbus gateway

> **Pre-2016 support (Beta)**: Gen 1 Yutaki S and S Combi units (NWE/NWSE suffix) are supported in beta. This implementation is based on the Hitachi documentation but has not been validated on real hardware yet. If you have a pre-2016 unit, select "Gen 1" during setup and [let us know how it goes](https://github.com/alepee/hass-hitachi_yutaki/discussions). Not sure which generation you have? Use the [model decoder tool](https://alepee.github.io/hass-hitachi_yutaki/model-decoder.html).

## Features

The integration automatically detects your heat pump model and creates devices based on your system configuration:

- **Gateway** — connectivity and synchronization…
