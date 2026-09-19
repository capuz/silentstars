---
repo: "stanus74/home-assistant-saj-h2-modbus"
name: "home-assistant-saj-h2-modbus"
description: "Home Assistant Component to read SAJ H2 Inverter Modbus Data"
readmeQualityOk: true
url: "https://github.com/stanus74/home-assistant-saj-h2-modbus"
language: "Python"
languages: ["Python", "JavaScript"]
languagePcts: [76, 24]
topics: ["hacs", "home-assistant", "saj-inverters", "saj-h2", "modbus-tcp", "saj"]
stars: 53
forks: 11
openIssues: 14
closedIssues: 83
watchers: 12
contributors: 1
recentReleases: 0
createdAt: "2024-03-10T19:45:18Z"
lastCommitAt: "2026-09-19T08:14:39Z"
lastReleaseAt: "2024-11-20T11:17:44Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "hidden_gem", "under_pressure", "community_hub"]
healthScore: 95
undervaluedScore: 51
maintainers: ["stanus74"]
openGraphImageUrl: "https://opengraph.githubassets.com/9ab64350d4af3800b8191ca8b9b23b5374944a1bf23a5b5dfbe0194e5eceabaa/stanus74/home-assistant-saj-h2-modbus"
discussionCount: 47
---

# SAJ H2 Inverter Modbus - A Home Assistant integration for SAJ H2 Inverters

Integration for reading data from SAJ Inverters through Modbus TCP.

It should work for Ampere Solar Inverter (EKD-Solar) too. They use SAJ HS2 Inverter.

## Features 

- Installation through Config Flow UI
- Over 390 registers (power, energy, temperature sensors, battery...)
- Configurable polling interval - changeable at any time, with real-time sensors adjustable at 10-second intervals or **even 1-second intervals** (via MQTT)

- Smart Modbus connection management - especially for AIO3 

- **New Feature:** Configure Charging Time and Power, ability to switch the working mode between **Self-Consumption** / **Time-of-Use Mode** (to charge the battery with grid power) 

## Installation

This integration is available in the HACS default repository. 

1. Open HACS 
2. Find "SAJ H2 Inverter Modbus" and click "Install."
3. Restart Home Assistant.
4. After reboot of Home-Assistant, this integration can be configured through the integration setup UI

## Configuration

1. Navigate to the "Integrations" page in your configuration, then click "Add Integration and 
select "SAJ H2 Modbus."
2. Enter the IP Address…
