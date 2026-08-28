---
repo: "benseverndev-oss/goldenmatch"
name: "goldenmatch"
description: "Zero-config entity resolution feeding a durable identity layer: messy records from any source become stable golden entities, a Customer 360 with provenance, merge/split and audit. Fellegi-Sunter beats hand-tuned Splink. Arrow-native/Rust, 250M rows in 11.2 min. Python + edge TypeScript (WASM), SQL-native in Postgres & DuckDB, 97 MCP tools + REST."
readmeQualityOk: true
url: "https://github.com/benseverndev-oss/goldenmatch"
homepage: "https://docs.bensevern.dev/"
language: "Python"
languages: ["Python", "TypeScript"]
languagePcts: [61, 27]
topics: ["data-engineering", "data-quality", "deduplication", "entity-resolution", "fuzzy-matching", "llm", "polars", "python", "record-linkage", "pprl"]
stars: 129
forks: 13
openIssues: 4
closedIssues: 265
watchers: 1
contributors: 5
recentReleases: 0
createdAt: "2026-03-16T20:13:08Z"
lastCommitAt: "2026-08-28T12:08:43Z"
lastReleaseAt: "2026-03-25T19:12:41Z"
status: "thriving"
tags: ["solo_builder", "funded", "community_hub"]
healthScore: 100
undervaluedScore: 33
maintainers: ["benzsevern", "dependabot[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1183640892/7b67c78a-7f1f-466e-9d0f-39def049a62d"
fundingLinks: ["GITHUB:https://github.com/benzsevern"]
discussionCount: 21
---

# Golden Suite

Your customer data lives in a CRM, a billing system, and three spreadsheets nobody owns. Some records are duplicates. Some are the same company spelled four different ways. Nobody can answer *how many customers do we actually have*, and every dashboard built on top inherits the doubt.

**Splink-beating entity resolution, Arrow-native and Rust-fast with zero tuning, feeding a durable identity layer so messy records from every source become stable golden entities with whole-record, Customer-360 provenance.**

Zero-config matching that **beats expert-tuned Splink head-to-head on messy customer records**, in an **Arrow-native, Rust-authoritative** engine verified from a laptop CSV to a **250M-row dedupe in 11.2 minutes**. The identities it produces live in a **transaction-native control plane** carrying stable `entity_id`s, per-field provenance, merge/split, and a tamper-evident audit log, all one call away as a Customer 360. It even **owns its primitives**: byte-identical, faster-than-`rapidfuzz` / `jellyfish` / FAISS Rust kernels, not rented dependencies.

**Python · TypeScript · SQL, at 4-decimal parity · native in Postgres + DuckDB · edge WASM · 70+ MCP tools ·…
