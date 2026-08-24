---
repo: "omendb/seerdb"
name: "seerdb"
description: "Research-grade storage engine with learned data structures and modern optimizations"
readmeQualityOk: true
url: "https://github.com/omendb/seerdb"
language: "Rust"
languages: ["Rust"]
languagePcts: [91]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2025-10-31T21:45:07Z"
lastCommitAt: "2026-08-24T04:20:33Z"
lastReleaseAt: "2025-12-10T07:48:48Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 59
maintainers: ["nijaru"]
openGraphImageUrl: "https://opengraph.githubassets.com/49644c5e307bb3ff0cf1339a27507228a9e2541b1aef626bfb3669244c525f93/omendb/seerdb"
---

# seerdb

Embedded durable ordered byte-KV storage engine for Rust consumers. Written in Rust.

## What

SeerDB provides a small durable kernel for applications that need ordered byte
keys and values without a separate database server:

- **Durable generations**: pages, checkpoints, commit metadata, manifests, and
  WAL cleanup publish in a checked order. Two independently valid manifest slots
  provide a fallback root when the newest publication is damaged.
- **Out-of-place pages**: immutable page versions support generation-aware
  reclamation, compaction, vacuum, and retained historical reads.
- **WAL recovery**: committed-prefix replay, torn-tail handling, corruption
  refusal, offline checks, and destination-only repair are part of the baseline.
- **KV separation**: large values use the compatibility whole-image blob format;
  the segmented catalog layout is available as an opt-in format under separate
  qualification.
- **Reader/writer contract**: one serialized writer with concurrent reads,
  root-bound read views, retained snapshots, and expected-base conflict refusal.
- **Capacity handling**: typed ENOSPC refusal and preflight admission cover
  ordinary commits and…
