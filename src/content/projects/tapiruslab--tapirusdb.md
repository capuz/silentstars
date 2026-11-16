---
repo: "tapiruslab/TapirusDB"
name: "TapirusDB"
description: "The 100% Safe-Rust Embedded Quad-Model AI Database & Cognitive Memory Engine (SQL, Vectors, GraphRAG, Documents)"
readmeQualityOk: true
url: "https://github.com/tapiruslab/TapirusDB"
homepage: "https://tapirusdb.com"
language: "Rust"
languages: ["Rust"]
languagePcts: [90]
topics: ["ai-memory", "database", "graph-vector-hybrid", "graphrag", "local-first", "rag", "rust", "sovereign-ai", "sqlite", "vector-database"]
stars: 9
forks: 27
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 7
createdAt: "2026-09-24T06:27:09Z"
lastCommitAt: "2026-11-16T04:22:46Z"
lastReleaseAt: "2026-11-15T05:23:09Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine", "fork_magnet"]
healthScore: 89
undervaluedScore: 69
maintainers: ["ictdothouse"]
openGraphImageUrl: "https://opengraph.githubassets.com/4c331c6c3c36188b43e4380705d48d6b2b3f620c880a1c3b9915fe1dcf96b864/tapiruslab/TapirusDB"
---

# TapirusDB

**The 100% Safe-Rust (`#![forbid(unsafe_code)]`) Embedded Quad-Model AI Database & Cognitive Memory Engine.**

Relational SQL, HNSW Vector Search, Property Graphs / GraphRAG, JSON Document Collections, and Transactional AI Memory unified inside a single encrypted, crash-safe `.tapir` file and write-ahead log.

Explore the [web tutorials](https://tapirusdb.com/tutorial), browse the [API cookbook](https://github.com/tapiruslab/TapirusDB/blob/HEAD/docs/COOKBOOK.md), or launch the [Rust Browser WASM Workspace](https://tapirusdb.com/studio/).

---

## Core Architecture & Capabilities

- **Four Data Models + AI Memory in One ACID Engine**
  - **Relational SQL & SQLite Compatibility:** `CREATE TABLE` (with `GENERATED ALWAYS AS (...)` computed columns), `CREATE [UNIQUE] INDEX` (single, composite, expression & partial `WHERE` indexes), `FOREIGN KEY` (`ON DELETE` / `ON UPDATE`), `CHECK`, `DEFAULT`, `CREATE TRIGGER` (`BEFORE`/`AFTER`, `WHEN`, `RAISE`), `FTS5` full-text search, `WITH [RECURSIVE]` CTEs, `UNION` / `UNION ALL` / `INTERSECT` / `EXCEPT`, `CROSS JOIN`, `CASE WHEN ... END`, `CAST(... AS ...)`, SQLite scalar built-ins (`IIF`, `IFNULL`, `NULLIF`, `REPLACE`, `INSTR`,…
