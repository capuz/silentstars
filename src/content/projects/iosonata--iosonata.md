---
repo: "IOsonata/IOsonata"
name: "IOsonata"
description: "IOsonata multi-platform multi-architecture power & performance optimized software library for fast and easy IoT MCU firmware development.  Object Oriented design, no board package to define, just pure plug & play any boards"
url: "https://github.com/IOsonata/IOsonata"
language: "C"
languages: ["C"]
languagePcts: [94]
topics: ["mcu", "bluetooth", "iot", "embedded", "ble", "stm32", "nrf52832", "nrf52840", "sensors", "imu-sensor"]
stars: 89
forks: 17
openIssues: 0
closedIssues: 10
watchers: 9
contributors: 8
recentReleases: 2
createdAt: "2019-07-27T06:50:46Z"
lastCommitAt: "2026-06-24T00:24:19Z"
lastReleaseAt: "2026-06-11T07:23:22Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 100
undervaluedScore: 52
maintainers: ["github-actions[bot]", "hnhoan"]
openGraphImageUrl: "https://opengraph.githubassets.com/b8719ae1327c0a01dd5f5314535e7df44cc437843768eb7f8ff01b38c6274071/IOsonata/IOsonata"
---

# IOsonata — Embedded Firmware That Scales

### Start like Arduino. Scale like a pro. Stay vendor-agnostic.

IOsonata is an open-source embedded C++ framework built for the moment
your working prototype meets production reality:
board variants, multiple MCU options, sensors, BLE, power constraints, and long-term maintenance.

It is designed to feel **easy on day one** and **solid in year three**.

---

## TL;DR

- **IOsonata**: open-source embedded C++ framework for portable firmware across MCU/board variants. MCU-centric — boards are typically `board.h` pin maps.
- **IOcomposer**: Eclipse Embedded CDT platform (Installer + AI plugin + SDK index) that wraps the standard IOsonata installer and adds AI-assisted development. Same project model, same build system — just smarter tooling on top.
- Best fit when you want Arduino-like bring-up speed, but professional structure and long-term maintainability across multiple hardware variants.

---

## ⚡ The Problem IOsonata Solves

You start with a working prototype. Then reality arrives:

- Multiple board revisions
- MCU variants within the same family
- BLE + sensors + power constraints
- SDK updates that break things
- Long-term…
