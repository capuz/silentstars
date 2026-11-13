---
repo: "Sturmi77/heatpump-hydraulic-card"
name: "heatpump-hydraulic-card"
description: "Animated hydraulic schematic card for heat pumps in Home Assistant – power sources, diverter valve, tanks, heating circuit. Zero-config presets for Lambda, Viessmann, Vaillant, Bosch/Buderus (EMS-ESP) and Panasonic Aquarea."
readmeQualityOk: true
url: "https://github.com/Sturmi77/heatpump-hydraulic-card"
homepage: "https://sturmi77.github.io/heatpump-hydraulic-card/"
language: "HTML"
languages: ["HTML"]
languagePcts: [88]
topics: ["custom-card", "dashboard", "hacs", "heat-pump", "heatpump", "home-assistant", "lambda", "lovelace", "lovelace-card", "buderus"]
stars: 50
forks: 12
openIssues: 46
closedIssues: 151
watchers: 0
contributors: 12
recentReleases: 10
createdAt: "2026-10-19T12:29:06Z"
lastCommitAt: "2026-11-13T11:22:16Z"
lastReleaseAt: "2026-10-22T08:06:36Z"
status: "newborn"
tags: ["solo_builder", "needs_contributors", "hidden_gem", "release_machine"]
healthScore: 95
undervaluedScore: 45
maintainers: ["Sturmi77", "graememorgan", "dependabot[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1425583257/77ef52ca-91ef-4e0d-b96c-083bbf10a04f"
---

# Heat Pump Hydraulic Card

An **animated hydraulic schematic** for heat pumps in Home Assistant: air, ground (brine) and groundwater sources.

It shows electricity flowing from **PV, battery and grid** into the heat pump, the **diverter valve** switching between hot water and heating, colour-coded **tanks**, the **heating circuits** and your rooms. Animation speed follows the real flow rate. The core is vendor-neutral, and **presets** make it zero-config for popular heat pumps ([supported heat pumps](#supported-heat-pumps)).

**[Try the live demo](https://sturmi77.github.io/heatpump-hydraulic-card/demo/)**: every preset in heating, hot water, defrost and standby, the automatic/night/contrast card themes, English, German and an example custom Dutch translation, with the matching card configuration. Runs in the browser with simulated data, no Home Assistant needed.

## Getting started

1. **Install** the card through HACS: search for **Heat Pump Hydraulic Card**, download it and reload the browser ([details](#installation)).
2. **Add the card**: edit a dashboard, *Add card*, pick **Heat Pump Hydraulic Card**. It looks for a supported integration and fills in the preset; without one…
