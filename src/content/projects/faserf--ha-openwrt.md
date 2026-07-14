---
repo: "FaserF/ha-openwrt"
name: "ha-openwrt"
description: "Home Assistant integration for OpenWrt devices"
readmeQualityOk: true
url: "https://github.com/FaserF/ha-openwrt"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["hacs-integration", "home-assistant", "integration"]
stars: 77
forks: 5
openIssues: 9
closedIssues: 43
watchers: 0
contributors: 5
recentReleases: 1
createdAt: "2026-03-10T17:08:32Z"
lastCommitAt: "2026-07-14T05:51:29Z"
lastReleaseAt: "2026-04-20T16:12:08Z"
status: "thriving"
tags: ["hidden_gem", "funded"]
healthScore: 96
undervaluedScore: 34
maintainers: ["FaserF", "github-actions[bot]", "renovate[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/5e3a9d4d5c85f0dda3a99949bc21050116bc6e13810039eb822af322056aafe1/FaserF/ha-openwrt"
fundingLinks: ["GITHUB:https://github.com/FaserF", "CUSTOM:https://paypal.me/FaserF"]
discussionCount: 0
---

# OpenWrt (for Homeassistant)

A secure, production-ready Home Assistant integration for OpenWrt devices. Monitor system resources, track connected devices, manage WiFi radios, execute commands, and natively update firmware directly from Home Assistant.

## 🧭 Quick Links

| | | | |
| :--- | :--- | :--- | :--- |
| [📖 Documentation Site](https://faserf.github.io/ha-openwrt/) | [✨ Features](#-features) | [📦 Installation](#-installation) | [⚙️ Configuration](#️-configuration) |
| [🛡️ Security](https://github.com/FaserF/ha-openwrt/blob/HEAD/SECURITY.md) | [🛠️ Options](#️-options-flow) | [🧱 Services](#-services) | [📖 Automations](#-automation-examples) |
| [❓ FAQ](#-troubleshooting--faq) | [🧑‍💻 Development](#-development) | [💖 Credits](#-credits--acknowledgements) | [📄 License](#-license) |

### Why use this integration?
While you can monitor routers via SNMP or ping trackers, this integration uses native OpenWrt APIs (Ubus/RPC) to provide deep, reliable integration without the overhead of polling generic network protocols. This means instant device tracking via modern ARP/NDP tables, full control over firewall rules and radios, and even the ability to compile firmware…
