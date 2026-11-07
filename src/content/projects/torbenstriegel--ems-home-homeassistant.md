---
repo: "TorbenStriegel/eMS-Home-HomeAssistant"
name: "eMS-Home-HomeAssistant"
description: "Custom Home Assistant integration for the ABL eMS Home energy management system. Provides real-time smart meter data via WebSocket, EV charging monitoring, and charge mode control,"
readmeQualityOk: true
url: "https://github.com/TorbenStriegel/eMS-Home-HomeAssistant"
language: "Python"
languages: ["Python"]
languagePcts: [73]
topics: ["abl", "ems", "home-assistant", "smarthome", "wallbox", "ems-home"]
stars: 9
forks: 2
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 1
recentReleases: 7
createdAt: "2025-09-10T18:52:42Z"
lastCommitAt: "2026-11-07T13:54:41Z"
lastReleaseAt: "2026-11-05T15:21:18Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 82
undervaluedScore: 81
maintainers: ["TorbenStriegel"]
openGraphImageUrl: "https://opengraph.githubassets.com/31f8c1fd7eac29e7ee88dbbc62d78804ddf76f90c97f5aa5695beeb0e485120b/TorbenStriegel/eMS-Home-HomeAssistant"
---

# ABL eMS Home for Home Assistant

Custom Home Assistant integration for the **ABL eMS Home** energy management system:
real-time smart meter data over WebSocket, EV charging monitoring and charge-mode
control for ABL eMH1 wallboxes — plus a bundled, animated Lovelace card.

## Features

- ⚡ **Live smart meter** – grid power (total + per phase), voltage, current, frequency, energy import/export, reactive power, power factor
- 🚗 **Wallbox live stream** – status, session duration, session energy, total energy, serial, hardware current limit, error code
- 🔌 **EV charging power** – total and per phase, plus a curtailment setpoint
- 🎛️ **Charge mode control** – Grid / PV / Hybrid / Lock as a select entity
- ☀️ **PV quota slider** – minimum PV surplus in 10 % steps (as in the original web UI), shown in hybrid mode where it applies
- 🖥️ **Device health** – CPU load/temperature, RAM and flash usage as diagnostic entities
- 🩺 **Self-diagnosing** – live-stream connectivity binary sensors, frame counters and a full diagnostics download
- 🚙 **Vehicle name** – optional sensor, shown on the card and in every message
- 🎨 **Bundled card** – `custom:ems-home-card` with an animated energy…
