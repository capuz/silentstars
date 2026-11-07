---
repo: "mousehome-net/keba_one_ev"
name: "keba_one_ev"
description: "Home Assistant integration for the SolarEdge ONE EV Charger (KEBA P30) via local KEBA UDP protocol – no cloud required."
readmeQualityOk: true
url: "https://github.com/mousehome-net/keba_one_ev"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["ev-charging", "hacs", "hacs-integration-custom-integration", "homeassistant", "keba", "solaredge"]
stars: 6
forks: 1
openIssues: 3
closedIssues: 8
watchers: 1
contributors: 3
recentReleases: 4
createdAt: "2026-03-18T06:56:54Z"
lastCommitAt: "2026-11-07T10:36:39Z"
lastReleaseAt: "2026-11-06T15:33:09Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 60
undervaluedScore: 40
maintainers: ["mousehome-net", "jonatanmauser"]
openGraphImageUrl: "https://opengraph.githubassets.com/bd4c1cea753fb67a70a990b51b05eb93cd93881dc6b7727d7d2468219446d58d/mousehome-net/keba_one_ev"
---

# SolarEdge One EV Charger – Home Assistant Custom Integration

A Home Assistant custom integration for the **SolarEdge ONE EV Charger** (hardware: KEBA P30).
Communicates directly via the **KEBA UDP protocol** on the local network — no cloud, no SolarEdge account required.

---

## Features

| Platform | Entity | Default |
|----------|--------|---------|
| Binary Sensor | Plug — vehicle physically connected (`binary_sensor.*_vehicle_connected`) | ✅ enabled |
| Binary Sensor | Charging — actively delivering power (`binary_sensor.*_charging`) | ✅ enabled |
| Binary Sensor | Backend Connected — OCPP/backend link active (e.g. SolarEdge app/cloud) | ☑ disabled |
| Binary Sensor | COM Module Present | ☑ disabled |
| Sensor | Charging State | ✅ enabled |
| Sensor | Charging Power (W) | ✅ enabled |
| Sensor | Session Energy (Wh) | ✅ enabled |
| Sensor | Total Energy (kWh) | ✅ enabled |
| Sensor | Current L1 / L2 / L3 (A) | ✅ enabled |
| Sensor | Current Limit User (A) | ✅ enabled |
| Sensor | Voltage L1 / L2 / L3 (V) | ☑ disabled |
| Sensor | Power Factor (%) | ☑ disabled |
| Sensor | Current Limit Hardware / Failsafe (A) | ☑ disabled |
| Sensor | Plug Status | ☑ disabled |
| Sensor |…
