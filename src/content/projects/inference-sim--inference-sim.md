---
repo: "inference-sim/inference-sim"
name: "inference-sim"
description: "Inference Platform Simulation"
readmeQualityOk: true
url: "https://github.com/inference-sim/inference-sim"
homepage: "https://inference-sim.github.io/inference-sim/"
language: "Go"
languages: ["Go"]
languagePcts: [98]
topics: ["distributed", "inference", "simulation"]
stars: 34
forks: 24
openIssues: 252
closedIssues: 760
watchers: 0
contributors: 14
recentReleases: 0
createdAt: "2025-06-10T00:31:10Z"
lastCommitAt: "2026-09-19T01:37:15Z"
lastReleaseAt: "2026-02-25T19:27:56Z"
status: "thriving"
tags: ["needs_contributors", "hidden_gem", "community_hub", "fork_magnet"]
healthScore: 93
undervaluedScore: 66
maintainers: ["namasl", "claude[bot]", "mtoslalibu"]
openGraphImageUrl: "https://opengraph.githubassets.com/29d97e2d097c67f4c67b3450212ccb7a1212b61c8ae45e52e2c8f909471309a8/inference-sim/inference-sim"
discussionCount: 52
---

# Blackbox Inference Simulator (BLIS)

A discrete-event simulator for LLM inference serving systems. BLIS models multi-instance clusters with configurable admission control, request routing, KV-cache dynamics (including tiered GPU+CPU offloading), scheduling policies, and token generation — all driven by trained performance coefficients, analytical roofline estimates, or physics-informed cross-model prediction.

The simulator is CPU-only, deterministic, and designed for capacity planning, policy optimization research, and performance prediction across model/GPU/TP configurations without requiring real GPUs.

---

## Features

### Core

- **Discrete-event simulation** for prefill, decode, and request scheduling
- **KV-cache modeling** (blocks, prefix caching, prefill chunking, tiered GPU+CPU offload)
- **CPU-only inference cost model** via analytical roofline estimation or learned α/β coefficients
- **Two latency estimation modes**: roofline (analytical) and trained-physics (physics-informed basis functions with architecture-aware MoE scaling). The deprecated `blackbox`, `crossmodel`, and `trained-roofline` backends have been removed; use `trained-physics` for modern…
