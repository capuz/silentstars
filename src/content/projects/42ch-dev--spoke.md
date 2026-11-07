---
repo: "42ch-dev/spoke"
name: "spoke"
description: "Standardized Programmable Ontology Knowledge Engine"
readmeQualityOk: true
url: "https://github.com/42ch-dev/spoke"
homepage: "http://spoke.42ch.dev/"
language: "Rust"
languages: ["Rust"]
languagePcts: [77]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-07-22T16:02:10Z"
lastCommitAt: "2026-11-07T16:12:30Z"
lastReleaseAt: "2026-08-03T04:03:17Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 88
undervaluedScore: 51
maintainers: ["auto-wood", "btspoony", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/827f850fc01f9689faa6039abb77193b6b2e44f24f64710d4ef30ecbc822d13e/42ch-dev/spoke"
---

# SPOKE

[中文](https://github.com/42ch-dev/spoke/blob/HEAD/README_CN.md) · [Concepts](https://github.com/42ch-dev/spoke/blob/HEAD/CONCEPTS.md) · [Strategy](https://github.com/42ch-dev/spoke/blob/HEAD/STRATEGY.md) · [Contributing](https://github.com/42ch-dev/spoke/blob/HEAD/CONTRIBUTING.md)

**Standardized Programmable Ontology Knowledge Engine** — a protocol of JSON Schema wire contracts for narrative **KnowledgeEntry** data and **ops**. Independent products exchange consistency-check and context-assembly I/O through these shapes.

**Includes:**

- Data-layer schemas: KnowledgeEntry, Relation, SourceAnchor, Finding, AssemblePacket, **HostCapabilityManifest**, Rule, TimelineEvent, MindState, CognitionRecord
- Ops-layer schemas: `upsert`, extract→promote, `relate`, `check`, `assemble`; optional **`project` / `compute`** under `l2-computable`
- Generated TypeScript (`@42ch/spoke-schemas`) and Rust (`spoke-schemas`, `spoke-operations`)
- Pure lifecycle helpers plus **adapter ports** and **injection orchestration** (`@42ch/spoke-operations` / `spoke-operations`)
- Opt-in **Connect** for signed cross-process interaction (`@42ch/spoke-connect` / `spoke-connect`, plus native bindings,…
