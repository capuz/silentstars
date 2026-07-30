---
repo: "robustini/MSFSAPBridge"
name: "MSFSAPBridge"
description: "Bridge between Microsoft Flight Simulator 2020/2024 and ArduPilot SITL, supporting sensors, RC channels, HUD and joystick mapping"
readmeQualityOk: true
url: "https://github.com/robustini/MSFSAPBridge"
language: "C++"
languages: ["C++"]
languagePcts: [99]
stars: 10
forks: 10
openIssues: 4
closedIssues: 1
watchers: 2
contributors: 1
recentReleases: 0
createdAt: "2025-11-20T09:29:04Z"
lastCommitAt: "2026-07-30T06:08:02Z"
lastReleaseAt: "2025-11-22T13:20:50Z"
status: "thriving"
tags: ["fork_magnet"]
healthScore: 74
undervaluedScore: 26
maintainers: ["robustini"]
openGraphImageUrl: "https://opengraph.githubassets.com/44611eac0fdeec90e492dd9c20242dcdd95431f29a5ad91321b8a534612a02d6/robustini/MSFSAPBridge"
---

# MSFS 202x – ArduPilot Bridge

MSFS–ArduPilot Bridge is a lightweight Windows utility that connects **Microsoft Flight Simulator (MSFS)** with **ArduPilot-based setups** (SITL, companion tools, or integration utilities).  
It uses **SimConnect** to read simulator state and exposes it via a **JSON-over-UDP** interface, specifically designed to feed the ArduPilot JSON backend.

The goal is to provide a simple bridge layer between a full-featured desktop simulator and the [ArduPilot](https://ardupilot.org/) ecosystem, allowing you to fly ArduPilot SITL vehicles within the MSFS visual environment.

---

## 🎬 Demo Video

---

## ✨ Features

- **Bidirectional Bridge**   Connects MSFS (SimConnect) to ArduPilot SITL (JSON frame).

- **Multiple Positioning Modes**
  - **MP SITL (Auto-Origin)** – Automatically sets the local origin to the aircraft's starting position (ideal for Mission Planner's internal SITL to avoid coordinate jumps).
  - **Position** – Uses a fixed origin defined in the configuration (sends local vector only).
  - **LLA** – Uses a fixed origin but sends full Latitude/Longitude/Altitude + local vector (ideal for WSL2/global SITL setups when supported).

- **Joystick…
