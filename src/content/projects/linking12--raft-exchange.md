---
repo: "linking12/raft-exchange"
name: "raft-exchange"
description: "Crypto Exchange, Spot, Perps, Delivery, Margin, UTA"
originalDescription: "Crypto Exchange、Spot、Perps、Delivery、Margin、UTA"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/linking12/raft-exchange"
language: "Java"
languages: ["Java", "Rust"]
languagePcts: [80, 20]
stars: 5
forks: 9
openIssues: 0
closedIssues: 2
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-07-09T06:53:06Z"
lastCommitAt: "2026-09-19T01:17:23Z"
status: "thriving"
tags: ["solo_builder", "fork_magnet"]
healthScore: 100
undervaluedScore: 72
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/bd9532070aa2fb92482e7a209350966b4e0ccd4c3bb5aa6a6084d7cc40a3a852/linking12/raft-exchange"
---

# Raft-Exchange

---

This project is a high-performance matching and risk control core oriented towards spot and contract trading. Based on the classic **exchange-core** architecture, it systematizes reforms around consistency, scalability, and risk control determinism.

## Project Overview

The system adopts Raft consensus + single-write multi-stage execution model. Through user-sharded RiskEngine and trading-pair-partitioned MatchingEngine, it achieves high throughput, low latency, and clear responsibility boundaries while ensuring strong consistency.

### Overall Architecture Overview

The system is divided into the following two layers:

### 1. Raft Consensus Layer

- Implemented based on JRaft (with Aeron Cluster as an alternative implementation)
- All write requests enter the Raft Log through the Leader
- Logs are executed only after reaching consensus among the majority of nodes
- Supports snapshots and log replay for fast recovery

### 2. Exchange-Core Execution Layer

- Event-driven execution pipeline based on Disruptor
- Risk control (R1), matching (ME), and post-processing (R2) are completed in the same execution pipeline
- Supports spot and contract trading scenarios…
