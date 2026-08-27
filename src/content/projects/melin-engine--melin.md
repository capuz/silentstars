---
repo: "melin-engine/melin"
name: "melin"
description: "Deterministic, replicated sequencer for latency-critical applications. Rust, io_uring, LMAX-inspired. Ships with an exchange core."
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
contributors: 1
recentReleases: 0
createdAt: "2026-05-24T13:18:22Z"
lastCommitAt: "2026-08-27T14:24:10Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 100
undervaluedScore: 48
maintainers: ["pierre-l"]
openGraphImageUrl: "https://opengraph.githubassets.com/a500cd87e4d47faad729d92ab8ce9950b650ca1ae19bb9a7beb39e73ab9ae75a/melin-engine/melin"
---

# Melin

Melin is a deterministic, replicated sequencer: your application logic plugs in, and Melin provides the event-sourced pipeline around it: durable journaling, synchronous replication, snapshots, transport, failover.

It is the runtime under a matching engine, a ledger, or any system whose business logic must process every event in a total order, survive a crash without losing one, and replay identically for audit, while keeping tail latency inside a budget measured in microseconds. Built in Rust on an [LMAX](https://martinfowler.com/articles/lmax.html)-inspired architecture: lock-free disruptor rings, io_uring I/O, and mechanical sympathy throughout.

**Design partners wanted.** We are looking for one or two design partners willing to run Melin in a non-critical capacity (internal crossing, a new instrument, a parallel run alongside an existing engine) in exchange for direct engineering support and influence over the roadmap. Get in touch: [contact@melin-engine.com](mailto:contact@melin-engine.com).

## Features

**Deterministic replay.** Given the same journal, the application produces identical output. This is the foundation of crash recovery, audit, and replica…
