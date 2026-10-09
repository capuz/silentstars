---
repo: "perosb/qvantum_custom_component"
name: "qvantum_custom_component"
description: "Qvantum Heat Pump Integration for Home Assistant"
readmeQualityOk: true
url: "https://github.com/perosb/qvantum_custom_component"
homepage: "https://www.qvantum.com/"
language: "Python"
languages: ["Python"]
languagePcts: [98]
topics: ["heatpump", "home-assistant", "qvantum", "energy"]
stars: 10
forks: 2
openIssues: 0
closedIssues: 22
watchers: 1
contributors: 7
recentReleases: 0
createdAt: "2025-03-08T09:34:34Z"
lastCommitAt: "2026-10-09T18:55:35Z"
lastReleaseAt: "2025-03-30T11:09:53Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 100
undervaluedScore: 79
maintainers: ["perosb"]
openGraphImageUrl: "https://opengraph.githubassets.com/7488f9003c80a589870aceb3b718a23e09b8ad06cc27936beadb858ea021bee4/perosb/qvantum_custom_component"
---

## Qvantum Heat Pump Integration for Home Assistant

Connect a Qvantum heat pump to Home Assistant using either the Qvantum cloud API or a direct local Modbus TCP connection:

- **Cloud mode (HTTP):** Uses your Qvantum account for live metrics, firmware details, SmartControl, and cloud settings.
- **Local Modbus mode:** Connects directly on your LAN without an account or cloud session, with faster local polling.

### Installation

Requires Home Assistant **2026.9** or newer (shared Modbus connection).

1. **Install via HACS** (recommended): Search for **Qvantum Heat Pump**, install it, and restart Home Assistant.  
2. **Manual installation:** Download the latest release, extract it to `custom_components/qvantum/`, and restart Home Assistant.
3. **Add the integration:** Go to **Settings → Devices & Services → Add Integration**, search for **Qvantum Heat Pump**, and choose **Qvantum cloud (HTTP)** or **Local Modbus (offline)**.

Only one Qvantum instance can be configured. Use **Reconfigure** to switch modes later.

#### Cloud setup

Sign in with your Qvantum account email and password. Metrics, firmware, SmartControl, Elevate Access, and most settings use the cloud API.

>…
