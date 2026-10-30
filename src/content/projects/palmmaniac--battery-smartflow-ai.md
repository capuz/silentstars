---
repo: "PalmManiac/battery-smartflow-ai"
name: "battery-smartflow-ai"
description: "Battery SmartFlow AI is an intelligent, Home Assistant-based Home Energy Management System for forecast-driven, PV-optimized, and price-optimized battery storage control."
readmeQualityOk: true
url: "https://github.com/PalmManiac/battery-smartflow-ai"
homepage: "https://palmmaniac.github.io/battery-smartflow-ai/"
language: "Python"
languages: ["Python"]
languagePcts: [92]
topics: ["battery", "energy", "hacs", "home-assistant", "photovoltaics", "pv", "smart-home", "zendure", "homeassistant", "steuerung"]
stars: 70
forks: 11
openIssues: 20
closedIssues: 309
watchers: 4
contributors: 6
recentReleases: 0
createdAt: "2025-12-11T12:47:38Z"
lastCommitAt: "2026-10-30T11:02:36Z"
lastReleaseAt: "2026-01-04T17:05:16Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "community_hub"]
healthScore: 99
undervaluedScore: 48
maintainers: ["PalmManiac"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1114486113/aa76b3e5-4336-42c6-9a14-edfee1a23916"
discussionCount: 95
---

# Battery SmartFlow AI

---

## Unterstützung

Battery SmartFlow AI ist ein privates Freizeitprojekt. Wenn dir die Integration hilft und du die weitere Entwicklung unterstützen möchtest, freue ich mich über eine kleine Unterstützung:

---

**Intelligent, economic and stable control for Zendure SolarFlow systems in Home Assistant**

*Note: Currently, only a single battery system is supported. Support for coordinated multi-battery systems is planned for a later major version.*

---

# Battery SmartFlow AI becomes independent

With V5, supported Zendure systems can be connected **directly**: BSFAI
discovers the main device and battery packs, creates their Home Assistant
entities and controls the selected system without requiring Z-HA. The existing
HA-entity path remains available for users who prefer it or need it for their
hardware. One main system is currently controlled at a time.

On a SolarFlow 2400 AC, a controlled first-device ZenSDK write/readback test
measured a **1.528 s median response**, compared with **2.994 s through
Z-HA**—up to **49% shorter measured latency and response time** in that test.
This is a path-specific measurement, not a guaranteed speedup for every…
