---
repo: "ghostbreachh/reaper"
name: "reaper"
description: "an esp32 s3 swiss knife that can be controlled from phone using a companion app via otg "
readmeQualityOk: true
url: "https://github.com/ghostbreachh/reaper"
language: "C"
languages: ["C", "Shell"]
languagePcts: [60, 39]
stars: 6
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-08-29T20:45:14Z"
lastCommitAt: "2026-10-18T08:16:34Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 77
undervaluedScore: 41
maintainers: ["ghostbreachh"]
openGraphImageUrl: "https://opengraph.githubassets.com/370c16ca1ce232194935c873dedd42cad3e777bb5239c1ad6de1be7d00459031/ghostbreachh/reaper"
---

# REAPER — ESP32-S3 Wireless Lab Toolkit

> **ESP32-S3-N16R8 · USB-OTG CDC-ACM · JSON-RPC 2.0 · Dual-core AI · Massive wordlists**
>
> A state-of-the-art, self-healing wireless security platform that fits in your pocket. Controlled from your phone via OTG cable. Wardrives, cracks handshakes on-device, and runs protocol-DoS with surgical precision.

---

## Table of Contents

- [Architecture](#architecture)
- [Hardware](#hardware)
- [Dependencies](#dependencies)
- [Build & Flash](#build--flash)
- [Phone Companion App](#phone-companion-app)
- [Feature Roadmap](#feature-roadmap)
- [Error Taxonomy](#error-taxonomy)
- [Contributing](#contributing)
- [License](#license)

---

## Architecture

REAPER is split into two halves:

| Half | Role |
|------|------|
| **Firmware (`main/`)** | Runs on ESP32-S3-N16R8. Handles all radio I/O, PCAP capture, on-device cracking, AI inference, and exposes a JSON-RPC 2.0 API over USB-OTG CDC-ACM. |
| **Companion App** | Android app (Flutter/Compose). Connects via USB-OTG, renders terminal + dashboard, manages wardriving maps, streams wordlists, displays real-time events. |

### Firmware Module Map

```
main/
├── main.c                  — Boot, port…
