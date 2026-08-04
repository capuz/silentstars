---
repo: "Dicklesworthstone/frankengraphdb"
name: "frankengraphdb"
description: "A blank-slate, memory-safe, ultra-high-performance property-graph database in Rust — unified MVCC/time-travel/branches/replication over a fountain-coded commit stream, WCO+factorized execution, incremental everything, and deterministic auditable results."
readmeQualityOk: true
url: "https://github.com/Dicklesworthstone/frankengraphdb"
language: "Rust"
languages: ["Rust"]
languagePcts: [94]
topics: ["database", "deterministic-simulation", "gql", "graph-database", "graphrag", "mvcc", "rust", "time-travel", "vector-search", "worst-case-optimal-join"]
stars: 21
forks: 4
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-07-15T06:44:45Z"
lastCommitAt: "2026-08-04T05:35:03Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 39
maintainers: ["Dicklesworthstone"]
openGraphImageUrl: "https://opengraph.githubassets.com/1f95f023392197040de0f3ccefc8add93a909dbcec680fc0cc89e15adbfc9d9f/Dicklesworthstone/frankengraphdb"
---

# frankengraphdb

**A blank-slate, memory-safe, ultra-high-performance property-graph database in Rust, built on the Franken/asupersync ecosystem. It unifies MVCC, time-travel history, git-style branches, replication, and change subscriptions into a single fountain-coded commit stream, runs transactional writes and static-CSR analytics on one temperature-tiered store, and makes every query result deterministic, auditable, and replayable.**

</div>

```bash
curl -fsSL https://raw.githubusercontent.com/Dicklesworthstone/frankengraphdb/main/scripts/install.sh | bash
```

> **A note on tense (read this first).** This README is written in the **present tense, as if the entire design in [`COMPREHENSIVE_PLAN_FOR_THE_DESIGN_OF_FRANKENGRAPHDB.md`](https://github.com/Dicklesworthstone/frankengraphdb/blob/HEAD/COMPREHENSIVE_PLAN_FOR_THE_DESIGN_OF_FRANKENGRAPHDB.md) is fully realized**: the 1.0 target state where every performance gate is green and every subsystem is live. This is a deliberate choice. It lets the document describe the *finished* system so it gets **trued-up in place as milestones land** (§19's gates G1→G4) rather than rewritten from scratch later. Where the plan itself stages…
