---
repo: "compute-blade-community/compute-blade-agent"
name: "compute-blade-agent"
description: "Compute Blade Agent (Linux/Kubernetes) & smart fan unit firmware"
readmeQualityOk: true
url: "https://github.com/compute-blade-community/compute-blade-agent"
language: "Go"
languages: ["Go"]
languagePcts: [97]
topics: ["cm4", "rasspberry-pi", "compute-blade", "cm5"]
stars: 32
forks: 8
openIssues: 6
closedIssues: 15
watchers: 6
contributors: 6
recentReleases: 0
createdAt: "2023-07-03T06:36:02Z"
lastCommitAt: "2026-11-19T11:58:17Z"
lastReleaseAt: "2024-08-05T16:32:16Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 85
undervaluedScore: 45
maintainers: ["renovate[bot]", "cedi"]
openGraphImageUrl: "https://opengraph.githubassets.com/c7048f791757cb5f0599b5b7d74aa1d171cfd390880680a994859d79457d56f3/compute-blade-community/compute-blade-agent"
---

# compute-blade-agent

> :warning: **Beta Release**: This software is currently in beta, and both configurations and APIs may undergo breaking changes. It is not yet 100% feature complete, but it functions as intended.

The compute-blade-agent runs on every [Compute Blade](https://computeblade.com) and takes care of the hardware:

- drives the fan along a temperature curve and enters **critical mode** (fan at 100%, red LED) when the SoC overheats
- detects **stalled fans**, **under-voltage** and **CPU throttling**, and shows them on the LEDs
- turns the edge button into **gestures** (single, double, multi-press, long press) that run built-in actions or your
  own commands
- optionally **limits the CPU** when the blade runs on 802.3af PoE or gets too little power
- publishes everything as an **event stream**, serves a **gRPC API** with mutual TLS and exports **Prometheus
  metrics**
- announces itself via **mDNS**, so `bladectl discover` finds your blades

`bladectl` is the command line client. `fanunit.uf2` is the firmware for the smart fan unit.

## Quick start

On the blade:
