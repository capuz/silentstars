---
repo: "Soflutionltd/MemoryPilot"
name: "MemoryPilot"
description: "The most advanced AI memory server in the world. Hybrid search, Temporal Knowledge Graph, transformer embeddings, AAAK compression (3x token savings) — pure Rust, single binary, zero dependencies."
readmeQualityOk: true
url: "https://github.com/Soflutionltd/MemoryPilot"
homepage: "https://soflution.com"
language: "Rust"
languages: ["Rust"]
languagePcts: [94]
topics: ["ai", "cursor", "embeddings", "knowledge-graph", "llm", "mcp", "mcp-server", "memory", "rust", "sqlite"]
stars: 18
forks: 2
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 3
recentReleases: 2
createdAt: "2026-02-18T03:23:01Z"
lastCommitAt: "2026-10-26T18:06:30Z"
lastReleaseAt: "2026-10-14T21:38:58Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 72
undervaluedScore: 54
maintainers: ["Soflution1"]
openGraphImageUrl: "https://opengraph.githubassets.com/e5877f344b21765c68ab04c9493fecade52a2199eaa54c8c31c9f60bb5cbdd9c/Soflutionltd/MemoryPilot"
---

---

## Why

AI coding assistants forget everything between sessions. MemoryPilot gives them persistent, searchable memory with project awareness, semantic understanding, and automatic knowledge organization. Built-in AAAK compression and memory capsules reduce token consumption by 5-10x when loading context. Every memory is auto-classified with the right importance, kind, and TTL on insert. The database compacts itself automatically — zero maintenance.

## Benchmarks

### LongMemEval-S (ICLR 2025) — Academic Standard

Evaluated on 470 questions from the [LongMemEval](https://arxiv.org/abs/2410.10813) benchmark (ICLR 2025), the standard academic dataset for long-term memory retrieval. Turn-level granularity, ~50 sessions per haystack.

#### vs the entire market (LongMemEval-S, public numbers)

| System | R@5 / Accuracy | Latency | Privacy | Stack | Source |
|--------|---------------:|---------|---------|-------|--------|
| **MemoryPilot v4.2 (adaptive)** | **99.1%** | ~900 ms | 100% local | Rust · 35 MB binary · zero API | This repo, `--benchmark-longmemeval` @470 |
| **MemoryPilot v4.2 (default fast)** | **98.7%** | **~28 ms** | 100% local | Rust · 35 MB binary · zero API | This…
