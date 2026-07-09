---
repo: "nexirdb/nexir-mvcc-core"
name: "nexir-mvcc-core"
description: "Standalone, deterministic MVCC engine for building transactional key-value databases in Rust — timestamp-ordered versions, two-phase intent transactions, guarded writes, and incremental GC. The open-source core of the Nexir database."
readmeQualityOk: true
url: "https://github.com/nexirdb/nexir-mvcc-core"
homepage: "https://nexir.com"
language: "Rust"
languages: ["Rust"]
languagePcts: [100]
topics: ["concurrency-control", "database", "key-value", "mvcc", "rust", "snapshot-isolation", "storage-engine", "transactions"]
stars: 25
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 1
createdAt: "2026-07-04T09:49:15Z"
lastCommitAt: "2026-07-09T20:30:56Z"
lastReleaseAt: "2026-07-04T10:45:18Z"
status: "thriving"
tags: []
healthScore: 80
undervaluedScore: 12
maintainers: ["ta2ldv"]
openGraphImageUrl: "https://opengraph.githubassets.com/90bbcf25ba343bcd533501723b4eadaa1a3ff728e153e8373178563bfbfc6780/nexirdb/nexir-mvcc-core"
---

# nexir-mvcc-core

A standalone, deterministic Multi-Version Concurrency Control (MVCC) core library used by Nexir.

`nexir-mvcc-core` provides the versioning, intent, guarded-write, batch mutation, and history-retention primitives required to build a transactional key-value storage layer. It is intentionally limited to the MVCC engine. This repository is not the complete Nexir database and does not include networking, command parsing, consensus, durable storage adapters, idempotency caches, query execution, metrics, or operational services.

## Key Features

- **Strict Separation of Concerns**: Core logic runs deterministically in memory. All disk/durable state is managed through a clean `Backend` trait.
- **Timestamp-Based Ordering**: Native support for caller-supplied logical timestamps (`start_ts`, `commit_ts`, `read_ts`).
- **Two-Phase Intent Transactions**: First-class support for single-key and multi-key intent transactions via `prewrite`, `commit`, `abort`, `prewrite_batch`, `commit_batch`, and `abort_batch`.
- **Atomic Batches**: Support for multi-key `prewrite_batch`, `commit_batch`, and `abort_batch` ensures all-or-nothing transactional guarantees.
- **Direct & Guarded…
