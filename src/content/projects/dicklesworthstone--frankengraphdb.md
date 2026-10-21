---
repo: "Dicklesworthstone/frankengraphdb"
name: "frankengraphdb"
description: "A blank-slate, memory-safe, ultra-high-performance property-graph database in Rust — unified MVCC/time-travel/branches/replication over a fountain-coded commit stream, WCO+factorized execution, incremental everything, and deterministic auditable results."
readmeQualityOk: true
url: "https://github.com/Dicklesworthstone/frankengraphdb"
language: "Rust"
languages: ["Rust"]
languagePcts: [98]
topics: ["database", "deterministic-simulation", "gql", "graph-database", "graphrag", "mvcc", "rust", "time-travel", "vector-search", "worst-case-optimal-join"]
stars: 29
forks: 6
openIssues: 1
closedIssues: 1
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-07-15T06:44:45Z"
lastCommitAt: "2026-10-21T21:15:08Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 80
undervaluedScore: 37
maintainers: ["Dicklesworthstone"]
openGraphImageUrl: "https://opengraph.githubassets.com/96351b04aceb4d2fe3686adbc9b58795ca18dde149938fd094150a6b793f17fb/Dicklesworthstone/frankengraphdb"
---

# frankengraphdb

**A blank-slate, memory-safe, ultra-high-performance property-graph database in Rust, built on the Franken/asupersync ecosystem. It unifies MVCC, time-travel history, git-style branches, replication, and change subscriptions into a single fountain-coded commit stream, runs transactional writes and static-CSR analytics on one temperature-tiered store, and makes every query result deterministic, auditable, and replayable.**

```bash
# What runs today, from a source checkout (there are no releases or installer yet — see Installation):
git clone https://github.com/Dicklesworthstone/frankengraphdb
cd frankengraphdb
cargo run -p fgdb --example open_a_database
```

> **A note on tense (read this first).** This README is written in the **present tense, as if the entire design in [`COMPREHENSIVE_PLAN_FOR_THE_DESIGN_OF_FRANKENGRAPHDB.md`](https://github.com/Dicklesworthstone/frankengraphdb/blob/HEAD/COMPREHENSIVE_PLAN_FOR_THE_DESIGN_OF_FRANKENGRAPHDB.md) is fully realized**: the 1.0 target state where every performance gate is green and every subsystem is live. This is a deliberate choice. It lets the document describe the *finished* system so it gets **trued-up in place…
