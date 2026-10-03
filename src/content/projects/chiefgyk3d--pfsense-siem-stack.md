---
repo: "ChiefGyk3D/pfsense-siem-stack"
name: "pfsense-siem-stack"
description: "Comprehensive pfSense deployment, monitoring, and security knowledge base: From basic configuration to advanced SIEM infrastructure, IDS/IPS optimization, and network security automation."
readmeQualityOk: true
url: "https://github.com/ChiefGyk3D/pfsense-siem-stack"
language: "Shell"
languages: ["Shell", "Python"]
languagePcts: [72, 24]
topics: ["cybersecurity", "grafana", "influxdb", "logstash", "networking", "opensearch", "pfsense", "python", "siem", "telegraf"]
stars: 38
forks: 4
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2025-11-24T00:14:07Z"
lastCommitAt: "2026-10-03T22:04:17Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 84
undervaluedScore: 25
maintainers: ["ChiefGyk3D", "claude"]
openGraphImageUrl: "https://opengraph.githubassets.com/3ac91c473cf99b7b93653f0f6ea6ede564de456fcbf73a52c02351150bbb5913/ChiefGyk3D/pfsense-siem-stack"
---

# pfSense SIEM Stack

> **A production pfSense monitoring stack, and the pfSense knowledge base that grew around it.**
> Suricata IDS/IPS, pfBlockerNG and Telegraf on pfSense feeding OpenSearch, Logstash and
> Grafana — with the tuning, hardening and upgrade notes learned from running it.

This repository is two things, and you can use either without the other:

| | What you get | Start here |
|-|--------------|------------|
| **pfSense knowledge base** | How to run Suricata, pfBlockerNG and Telegraf well on pfSense: rule selection and SID tuning, blocklist strategy, east-west VLAN monitoring, traffic shaping, Telegraf plugins, the filterlog rotation bug, and **what breaks when you upgrade pfSense** | [docs/pfsense/](https://github.com/ChiefGyk3D/pfsense-siem-stack/blob/HEAD/docs/DOCUMENTATION_INDEX.md#-pfsense-knowledge-base-no-siem-required) |
| **SIEM stack** | `setup.sh` wires pfSense into **any** OpenSearch + Grafana you already run (recommended: [siem-docker-stack](https://github.com/ChiefGyk3D/siem-docker-stack)): a rotation-aware GeoIP-enriching forwarder with watchdog, index templates, retention, and eight Grafana dashboards including three for Wazuh. `install.sh` builds…
