---
repo: "melin-engine/melin"
name: "melin"
description: "Deterministic, replicated sequencer for latency-critical applications. Rust, io_uring, LMAX-inspired."
readmeQualityOk: true
url: "https://github.com/melin-engine/melin"
language: "Rust"
languages: ["Rust"]
languagePcts: [98]
stars: 15
forks: 2
openIssues: 0
closedIssues: 1
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2026-05-24T13:18:22Z"
lastCommitAt: "2026-09-23T08:45:53Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 100
undervaluedScore: 48
maintainers: ["pierre-l"]
openGraphImageUrl: "https://opengraph.githubassets.com/3b73d2e8d2bb93941183a01ea87246af0668eb5d6886a5e2c4760839acdc8397/melin-engine/melin"
---

# Melin

Melin is a replicated sequencer for latency-critical systems that cannot lose an event. Your business logic plugs in as a plain state machine, and Melin makes it durable and replicated: every input is assigned a total order, then journaled and replicated before the response goes out. Snapshots and automatic failover are built in.

It is the runtime under a matching engine, a ledger, or any system that must replay identically for audit while keeping tail latency inside a budget measured in microseconds. Built in Rust on an [LMAX](https://martinfowler.com/articles/lmax.html)-inspired architecture: lock-free disruptor rings, io_uring I/O with optional DPDK kernel bypass, and mechanical sympathy throughout.

**Design partners wanted.** We are looking for one or two design partners willing to run Melin in a non-critical capacity (internal crossing, a new instrument, a parallel run alongside an existing engine) in exchange for direct engineering support and influence over the roadmap. Get in touch: [contact@melin-engine.com](mailto:contact@melin-engine.com).

## Features

**Nothing is acknowledged before it is safe.** Every event is journaled and synchronously replicated before…
