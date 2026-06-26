---
repo: "ninjastrikers/nexus-nodes"
name: "nexus-nodes"
description: "A fully automated V2Ray subscription aggregator. This repository collects, cleans, and sorts configurations from various high-quality public sources every 4 hours."
url: "https://github.com/ninjastrikers/nexus-nodes"
homepage: "https://nexus.ninjastrikers.net"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["v2ray", "v2ray-config", "vless", "vmess", "vpn"]
stars: 10
forks: 4
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-04-14T02:04:46Z"
lastCommitAt: "2026-06-26T21:30:56Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 52
maintainers: ["ninjastrikers"]
openGraphImageUrl: "https://opengraph.githubassets.com/0184faa89a401ee9fe196ad326c9048352f565e967ee1f14ec903576468f879a/ninjastrikers/nexus-nodes"
---

# 🚀 Nexus Nodes

![GitHub Workflow Status](https://img.shields.io/github/actions/workflow/status/ninjastrikers/Nexus-nodes/update.yml?label=Auto%20Update&style=flat-square)
![GitHub last commit](https://img.shields.io/github/last-commit/ninjastrikers/Nexus-nodes?style=flat-square)
![License](https://img.shields.io/github/license/ninjastrikers/Nexus-nodes?style=flat-square)

**Nexus Nodes** is a decentralized, auto-updating V2Ray configuration aggregator. It fetches free proxies from multiple reliable sources, tests their latency, strictly categorizes them by region, and outputs ready-to-use Base64 subscription links. 

🌐 **Official Web Interface:**[https://nexus.ninjastrikers.net](https://nexus.ninjastrikers.net/)

---

## ✨ Key Features

* **⚡ Hybrid Latency Sorting:** Automatically tests all fetched nodes using the **Check-Host API** with a lightning-fast native Python TCP ping fallback. The fastest nodes are placed at the top of your subscription lists.
* **🌍 Smart Region Classification:** Uses IP Geolocation (`ip-api.com`) combined with strict Regex node-name parsing. It intelligently overrides misrouted Cloudflare CDN IPs to guarantee that US nodes stay in the US, Canada…
