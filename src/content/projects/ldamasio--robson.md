---
repo: "ldamasio/robson"
name: "robson"
description: "Open-source trading execution engine with event-sourced state and first-class risk governance."
url: "https://github.com/ldamasio/robson"
homepage: "https://robson.rbx.ia.br/"
language: "Rust"
languages: ["Rust"]
languagePcts: [77]
topics: ["event-driven", "event-sourcing", "fintech", "risk-engine", "systems-design", "trading-system", "crypto", "quant"]
stars: 8
forks: 4
openIssues: 1
closedIssues: 0
watchers: 1
contributors: 5
recentReleases: 2
createdAt: "2019-12-30T15:01:32Z"
lastCommitAt: "2026-06-26T06:48:09Z"
lastReleaseAt: "2026-04-06T00:13:57Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 78
undervaluedScore: 76
maintainers: ["ldamasio"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/230934403/2b4751cb-8714-4f5c-aebc-d257f65c0231"
---

# Robson — Execution & Risk Engine for Leveraged Markets

Robson is an execution and risk management engine for leveraged cryptocurrency markets. It is not an autonomous trading bot. It does not decide what to trade, predict prices, or scan for opportunities.

Robson is concerned with what happens **after** a trading decision is made: position sizing from chart-derived stops, governed order execution, lifecycle management through entry to settlement, and safe failure handling under volatile conditions.

The system provides a single-operator runtime with a slot-based monthly risk model, deterministic execution semantics, and full auditability at every state transition.

## Risk Model at a Glance

- **Monthly budget**: 4% of `capital_base` — hard limit enforced by a circuit breaker
- **Per-trade risk**: 1% of `capital_base` (derived from position size, never set directly)
- **Position sizing**: `size = (capital_base × 1%) / technical_stop_distance`
- **Technical stop**: always from chart analysis (second S/R level, 15m timeframe) — never a percentage of entry price
- **Slot capacity**: 4 concurrent positions maximum

`capital_base` is set at month start as a pessimistic snapshot:…
