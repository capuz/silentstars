---
repo: "MaxGrmm/EF-PowerOcean-TcpModbus"
name: "EF-PowerOcean-TcpModbus"
description: "Local Home Assistant Modbus TCP integration for EcoFlow PowerOcean – no cloud required"
readmeQualityOk: true
url: "https://github.com/MaxGrmm/EF-PowerOcean-TcpModbus"
language: "Python"
languages: ["Python"]
languagePcts: [99]
topics: ["ecoflow", "hacs", "home-assistant", "homeassistant-integration", "local-integration", "modbus", "powerocean"]
stars: 39
forks: 12
openIssues: 6
closedIssues: 56
watchers: 6
contributors: 6
recentReleases: 0
createdAt: "2026-03-23T08:35:47Z"
lastCommitAt: "2026-11-21T13:34:54Z"
lastReleaseAt: "2026-08-07T20:55:01Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 97
undervaluedScore: 45
maintainers: ["windmark", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/4564d7568a5cea81424b593c6f8a2aaa285f81a4f6f46873d5a1c03d56814c3c/MaxGrmm/EF-PowerOcean-TcpModbus"
discussionCount: 8
---

# EF-PowerOcean-TcpModbus

**Local Modbus TCP integration for the EcoFlow PowerOcean home battery system.**

> ⚠️ This integration communicates directly with your device over your local network via Modbus TCP. No cloud connection required.

---

## Features

- **Local polling** – no EcoFlow cloud account needed
- **Configurable poll interval** (2–30 seconds, default 5 s)
- Real-time power flow: house consumption, grid import/export, solar generation, battery
- Optional **Battery Controls**: charge, discharge, hold, export, import or export solar first, with state-of-charge guards and a grid feed-in switch
- Full battery monitoring: SOC, voltage, current, power, temperature, remaining energy
- Per-module state of charge for up to 12 battery modules
- Per-string PV power, current and voltage (1–3 strings)
- Per-phase AC measurements: voltage, current, frequency
- Energy counters: daily and lifetime for grid, solar, battery charge/discharge, house consumption
- Operating mode, grid mode and system status as dedicated entities
- Fault reporting: active fault count, and the fault codes with their names where known
- Serial number and firmware version read from the device.
