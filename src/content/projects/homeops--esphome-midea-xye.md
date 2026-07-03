---
repo: "HomeOps/ESPHome-Midea-XYE"
name: "ESPHome-Midea-XYE"
description: "ESPHome external component for controlling Midea HVAC systems over the XYE/CCM RS‑485 bus. Provides a native Home Assistant climate entity with full mode, fan, and setpoint support."
url: "https://github.com/HomeOps/ESPHome-Midea-XYE"
language: "C++"
languages: ["C++"]
languagePcts: [87]
stars: 11
forks: 7
openIssues: 5
closedIssues: 54
watchers: 0
contributors: 4
recentReleases: 0
createdAt: "2026-01-19T19:13:15Z"
lastCommitAt: "2026-07-03T06:25:37Z"
lastReleaseAt: "2026-01-31T22:05:33Z"
status: "thriving"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 92
undervaluedScore: 58
maintainers: ["Copilot", "ocalvo", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/1c8cd0615702260c95dd8782e009eeafabc412ca03c4b7fb290c06e3db2001a3/HomeOps/ESPHome-Midea-XYE"
---

# ESPHome-Midea-XYE

ESPHome external component for controlling Midea HVAC systems over the XYE/CCM RS-485 bus. Provides a native Home Assistant climate entity with full mode, fan, and setpoint support.

## Overview

This component communicates with Midea-like air conditioners (heat pumps) via the XYE protocol over RS-485.

For detailed protocol documentation, see [PROTOCOL.md](esphome/components/midea_xye/PROTOCOL.md).

### Acknowledgments

Kudos to these projects and people:
- Reverse engineering of the protocol: https://codeberg.org/xye/xye
- Working implementation using ESP32 by @Bunicutz: https://github.com/Bunicutz/ESP32_Midea_RS485
- Working implementation by @wtahler: https://github.com/wtahler/esphome-mideaXYE-rs485
- Fully integrated Midea Climate component: https://github.com/esphome/esphome/tree/dev/esphome/components/midea
- ESPHome external component foundation by @exciton: https://github.com/exciton/esphome
- Key contributions and inspiration by @mdrobnak: https://github.com/mdrobnak/esphome/tree/units_switch
- Static pressure protocol analysis by @rmounce
- C&H "Sophia Hyper" concealed-duct raw-temperature/C0-setpoint research by @larsonm-personal
- Home Assistant…
