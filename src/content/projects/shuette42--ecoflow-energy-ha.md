---
repo: "shuette42/ecoflow-energy-ha"
name: "ecoflow-energy-ha"
description: "Home Assistant integration for EcoFlow energy devices: PowerOcean, PowerOcean Plus, Delta 2 Max, Delta 3, Smart Plug, Stream, Stream Micro, STREAM AC 5000 and STREAM 5000. Standard mode via the official API, plus a faster enhanced mode."
readmeQualityOk: true
url: "https://github.com/shuette42/ecoflow-energy-ha"
homepage: "https://github.com/shuette42/ecoflow-energy-ha"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["ecoflow", "energy", "hacs", "home-assistant", "homeassistant", "home-assistant-custom-component", "iot", "solar", "battery-storage", "delta"]
stars: 56
forks: 21
openIssues: 23
closedIssues: 137
watchers: 1
contributors: 15
recentReleases: 0
createdAt: "2026-03-26T17:43:21Z"
lastCommitAt: "2026-11-14T10:42:04Z"
lastReleaseAt: "2026-08-06T14:30:33Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "hidden_gem", "funded", "community_hub"]
healthScore: 97
undervaluedScore: 45
maintainers: ["shuette42", "dependabot[bot]", "rhaschke"]
openGraphImageUrl: "https://opengraph.githubassets.com/dfbc92753b80f16dd1f4467b80cf1e955e8c9f7727e540404df8ea2704ef9518/shuette42/ecoflow-energy-ha"
fundingLinks: ["CUSTOM:https://www.buymeacoffee.com/shuette"]
discussionCount: 25
---

# EcoFlow Energy for Home Assistant

**Real-time solar, battery, grid & home power monitoring.**
**Energy Dashboard ready. Two cloud modes: official API or real-time app connection. Plus a local Modbus connection for the three-phase PowerOcean.**

---

## Highlights

- **In the Home Assistant Marketplace** - listed in the default catalog (HACS before Home Assistant 2026.11), no custom repository to add
- **Up to 302 sensors on one device** - power, energy, battery packs, temperature, diagnostics. These are the most a system can show: schedule entities exist only for the slots your PowerOcean reports.
- **Energy Dashboard ready** - local Riemann-sum kWh with gap detection
- **Real-time out of the box** - Enhanced Mode: ~2-4 s updates for most devices
- **Local option for a three-phase PowerOcean** - Modbus/TCP on your own network, about every 2 s, no account and no cloud
- **Full PowerOcean control** - Backup Reserve, Solar Surplus Threshold, Work Mode (Self-use / AI Schedule), and the charge and feed-to-grid schedules you created in the app
- **Delta switches & numbers** - AC/DC output, charge speed, backup reserve, screen settings
- **Auto-discovery** - all devices bound to your…
