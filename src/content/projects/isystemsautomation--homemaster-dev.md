---
repo: "isystemsautomation/homemaster-dev"
name: "homemaster-dev"
description: "HomeMaster is an open-source platform for local-first smart home automation using ESP32-based devices like MiniPLC and MicroPLC. This repository includes firmware, schematics, and documentation for creating modular, cloud-free automation systems fully compatible with Home Assistant via ESPHome"
readmeQualityOk: true
url: "https://github.com/isystemsautomation/homemaster-dev"
homepage: "https://www.home-master.eu/"
language: "HTML"
languages: ["HTML", "C++"]
languagePcts: [57, 37]
topics: ["automation-controller", "embedded-systems", "esp32", "esphome", "home-automation", "local-control", "no-cloud", "open-source-hardware", "opentherm", "plc"]
stars: 30
forks: 4
openIssues: 2
closedIssues: 0
watchers: 3
contributors: 2
recentReleases: 0
createdAt: "2024-11-08T11:49:41Z"
lastCommitAt: "2026-07-07T06:38:30Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 69
undervaluedScore: 51
maintainers: ["isystemsautomation-com-dev"]
openGraphImageUrl: "https://opengraph.githubassets.com/3564ced2fab41ede375ed03f8cc9f6d9dfd072184656e1586fbe6253aa7331b9/isystemsautomation/homemaster-dev"
---

# HOMEMASTER – Modular, Resilient Smart Automation System

> **Releases:** see the latest tagged build on GitHub Releases. Versioning uses **YYYY‑MM**.  
> Fully open‑source hardware, firmware, and configuration tools.

---

## 🛠️ Hardware Guide
HomeMaster is an **industrial‑grade, modular automation system** for smart homes, labs, and professional installations. It features:

- ESP32‑based PLC controllers (**MiniPLC & MicroPLC**) — same platform & memory class
- A family of smart I/O modules (energy monitoring, lighting, alarms, analog I/O, etc.)
- **RS‑485 Modbus RTU** communication
- **ESPHome** compatibility for **Home Assistant**
- **USB‑C** & **WebConfig** UI for driverless configuration

> **Local resilience:** Modules include onboard logic and continue functioning even if the controller or network is offline.

### System Architecture

```mermaid
%%{init: {"flowchart":{"htmlLabels":true,"nodeSpacing":50,"rankSpacing":60}}}%%
flowchart TD
  %% Classes
  classDef hub fill:#EDEFFB,stroke:#6B72FF,stroke-width:1.2px,color:#111,font-weight:bold;
  classDef big fill:#EDEFFB,stroke:#1F35FF,stroke-width:3px,color:#111,font-weight:bold,font-size:28px;
  classDef mod…
