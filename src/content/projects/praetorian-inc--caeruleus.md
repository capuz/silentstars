---
repo: "praetorian-inc/caeruleus"
name: "caeruleus"
description: "Caeruleus is a Bluetooth Low Energy testing toolkit for Linux/BlueZ, implemented as a single Go binary. It covers the full interaction-to-assessment lifecycle"
readmeQualityOk: true
url: "https://github.com/praetorian-inc/caeruleus"
language: "Go"
languages: ["Go"]
languagePcts: [100]
stars: 40
forks: 4
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 68
recentReleases: 2
createdAt: "2026-03-06T20:27:08Z"
lastCommitAt: "2026-07-31T06:28:14Z"
lastReleaseAt: "2026-07-31T06:31:11Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 86
undervaluedScore: 15
maintainers: ["praetorian-aaron"]
openGraphImageUrl: "https://opengraph.githubassets.com/25a0446dcd7abfe4c2a4d33a4d9b55a28a354a40c2067dd5b44fbb36bb3bfb06/praetorian-inc/caeruleus"
---

# Caeruleus: BLE Testing Toolkit

> One Go binary for the entire Bluetooth Low Energy assessment workflow on Linux/BlueZ: scan, enumerate, read/write/notify, fuzz, and structured security assessment, with JSON output for scripts and agents.

**Caeruleus** consolidates Bluetooth Low Energy (BLE) security testing into a single Go binary built on the Linux BlueZ stack. It talks to peripherals over BlueZ D-Bus and raw L2CAP/HCI sockets and covers the whole lifecycle: discover devices, browse and read/write the GATT tree, capture notifications, fuzz writable characteristics, and run repeatable security-assessment workflows. Every command emits structured `-o json` / `-o jsonl` output for scripting, reporting, and LLM agents. 

Built by offensive security engineers to replace the usual pile of `bettercap`, `gatttool`, `hcitool`, `bluetoothctl`, and one-off Bleak scripts, Caeruleus keeps the abstractions at the level a human or agent actually works at.

*caeruleus*: Latin for the "blue" in Bluetooth Low Energy

## Table of Contents

- [Why Caeruleus?](#why-caeruleus)
- [Features](#features)
- [Agents Welcome](#agents-welcome)
- [Installation](#installation)
- [Quick Start](#quick-start)…
