---
repo: "WillCodeForCats/solaredge-modbus-multi"
name: "solaredge-modbus-multi"
description: "The Complete Local (Modbus/TCP) SolarEdge Integration for Home Assistant"
readmeQualityOk: true
url: "https://github.com/WillCodeForCats/solaredge-modbus-multi"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["homeassistant", "homeassistant-integration", "home-automation", "modbus-tcp", "solaredge", "solaredge-inverter", "hacs-integration", "hacs-default"]
stars: 316
forks: 29
openIssues: 14
closedIssues: 328
watchers: 19
contributors: 9
recentReleases: 0
createdAt: "2021-10-21T15:53:33Z"
lastCommitAt: "2026-08-29T17:28:32Z"
lastReleaseAt: "2022-07-04T00:20:54Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "funded", "community_hub"]
healthScore: 97
undervaluedScore: 38
maintainers: ["WillCodeForCats"]
openGraphImageUrl: "https://opengraph.githubassets.com/8913aa2081ee1af36085e06a3236d98ede0bb8387099f9401af5c7f22f75a840/WillCodeForCats/solaredge-modbus-multi"
fundingLinks: ["GITHUB:https://github.com/WillCodeForCats"]
discussionCount: 263
---

# SolarEdge Modbus Multi

This integration provides Modbus/TCP local polling to one or more SolarEdge inverters for Home Assistant.
Each inverter can support three meters and three batteries over Modbus/TCP. It works with single inverters,
multiple inverters, meters, and batteries. It has significant improvements over similar integrations, and
`solaredge_modbus_multi` is actively maintained.

By default, only features which are officially documented by SolarEdge are enabled: inverters,
synergy inverters, and meters. All of the battery (read only) and control features (read/write battery and
limit controls) can be enabled by configuring the hub after you add it to your Home Assistant. Support for
batteries and controls is from documentation not publicly available from SolarEdge or through user
discovery and may not be supported by SolarEdge.

## Features

- Inverter support for 1 to 32 SolarEdge inverters.
- Meter support for 1 to 3 meters per inverter.
- Battery support for 1 to 3 batteries per inverter.
- Supports site limit and storage controls.
- Automatically detects meters and batteries.
- Supports Three Phase Inverters with Synergy Technology.
- Polling frequency…
