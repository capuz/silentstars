---
repo: "Dollbar/Overflow"
name: "Overflow"
description: "This is an open-source project focused on AI system-on-chip (SoC) architecture, jointly initiated by the Dollbar organization at the USTc."
readmeQualityOk: true
url: "https://github.com/Dollbar/Overflow"
language: "SystemVerilog"
languages: ["SystemVerilog", "Python", "Verilog"]
languagePcts: [35, 32, 28]
stars: 158
forks: 35
openIssues: 0
closedIssues: 0
watchers: 12
contributors: 10
recentReleases: 1
createdAt: "2026-08-17T06:59:46Z"
lastCommitAt: "2026-09-11T08:14:16Z"
lastReleaseAt: "2026-09-01T03:36:32Z"
status: "thriving"
tags: []
healthScore: 84
undervaluedScore: 25
maintainers: ["liujianyu20021122", "Qin4221", "liujingshun123-lgtm"]
openGraphImageUrl: "https://opengraph.githubassets.com/dff8420eb500b48d0920d8bdf86df92a264f3b93c8e847462d4da3cc978ab71d/Dollbar/Overflow"
---

# Overflow AI Accelerator RTL System

Overflow is an open engineering project that connects model-level accelerator requirements to
synthesizable NPU and KDLink RTL. The repository lower boundary is synthesizable RTL; external HBM,
SerDes, host, and technology behavior is represented by explicitly labeled models and interfaces.

The repository publishes the `1.0.0` source-and-verification baseline at tag `v1.0.0`. Its authoritative
publication decision and validation boundary are recorded in
[`docs/releases/ACCEPTANCE.json`](https://github.com/Dollbar/Overflow/blob/HEAD/docs/releases/ACCEPTANCE.json).

## Release Scope

The 1.0 source scope includes:

- MXFP tensor/vector compute RTL, decoded-command routing, DMA, 16 MiB Pod-shared SRAM, and Pod-local
  data movement.
- A two-cluster compute Pod, eight-Pod 2 by 4 array, three-plane NoC, per-Pod CDC, and the integrated
  Pod/NoC top.
- KDLink endpoint, router, collective, scale model, and vendor-neutral digital SerDes models.
- Repository-authored HBM behavior, KD28 SRAM/FIFO models, portable synthetic timing views, testbench
  packages, VIP, lint, formal, simulation, synthesis, and coverage gates.
- Architecture, interface,…
