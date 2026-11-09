---
repo: "SukramJ/aiohomematic"
name: "aiohomematic"
description: "Async Python library for Homematic(IP) devices via OpenCCU, CCU3, CUxD and CCU-Jack"
readmeQualityOk: true
url: "https://github.com/SukramJ/aiohomematic"
homepage: "https://sukramj.github.io/aiohomematic/"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["ccu", "eq-3", "homematic", "homematicip", "json-rpc", "xml-rpc", "openccu", "asyncio", "home-assistant", "python"]
stars: 169
forks: 28
openIssues: 0
closedIssues: 961
watchers: 11
contributors: 19
recentReleases: 0
createdAt: "2021-04-05T22:01:04Z"
lastCommitAt: "2026-11-09T03:30:04Z"
lastReleaseAt: "2021-11-26T07:33:46Z"
status: "thriving"
tags: ["legacy_hero", "funded", "community_hub"]
healthScore: 99
undervaluedScore: 45
maintainers: ["SukramJ", "dependabot[bot]", "charlie508010"]
openGraphImageUrl: "https://opengraph.githubassets.com/986862030005e57a8ffaa54599ab21854e3fb0cae9e0317abfef4b40cb34d632/SukramJ/aiohomematic"
fundingLinks: ["GITHUB:https://github.com/SukramJ", "KO_FI:https://ko-fi.com/sukramj", "BUY_ME_A_COFFEE:https://buymeacoffee.com/sukramj"]
discussionCount: 563
---

# aiohomematic

A modern, async Python library for controlling and monitoring [Homematic](https://www.eq-3.com/products/homematic.html) and [HomematicIP](https://www.homematic-ip.com/en/start.html) devices. Powers the Home Assistant integration "Homematic(IP) Local".

This project is the modern successor to [pyhomematic](https://github.com/danielperna84/pyhomematic), focusing on automatic entity creation, fewer manual device definitions, and faster startups.

## Key Features

- **Automatic entity discovery** from device/channel parameters
- **Broad backend support**: CCU3, OpenCCU, CUxD, CCU-Jack, and [godevccu](https://github.com/SukramJ/godevccu) for testing
- **Multiple transport protocols**: XML-RPC (standard interfaces) and JSON-RPC (CUxD / CCU-Jack), with MQTT event forwarding via Homematic(IP) Local
- **Extensible** via custom entity classes for complex devices (climate, cover, light, lock, siren, valve, …)
- **Hub entities** for CCU programs, system variables, inbox messages, install mode, and service messages
- **Event-driven architecture** with a unified `EventBus` for lifecycle, state, and diagnostic events
- **Fast startups** through paramset and description caching
-…
