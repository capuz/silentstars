---
repo: "Dicklesworthstone/frankenpandas"
name: "frankenpandas"
description: "Memory-safe, clean-room Rust reimplementation of pandas with packetized conformance gates, strict/hardened runtime modes, and RaptorQ-backed artifact durability."
readmeQualityOk: true
url: "https://github.com/Dicklesworthstone/frankenpandas"
language: "Rust"
languages: ["Rust"]
languagePcts: [95]
topics: ["clean-room", "columnar", "conformance-testing", "dataframe", "high-performance", "memory-safe", "pandas", "raptorq", "reliability", "rust"]
stars: 21
forks: 6
openIssues: 0
closedIssues: 5
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2026-02-13T20:27:18Z"
lastCommitAt: "2026-08-18T04:09:38Z"
lastReleaseAt: "2026-04-23T17:07:45Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 100
undervaluedScore: 47
maintainers: ["Dicklesworthstone"]
openGraphImageUrl: "https://opengraph.githubassets.com/24b56fefbf6c19fbb8f325a9e9ebe216b5da74e408cb822bc85e0fcab1d9ca2f/Dicklesworthstone/frankenpandas"
fundingLinks: ["GITHUB:https://github.com/Dicklesworthstone"]
---

# FrankenPandas

  **Clean-room Rust reimplementation of the full pandas API surface.**

  Drop-in pandas API in safe Rust. Python bindings (`import frankenpandas`) planned via PyO3; see the Roadmap. Zero `unsafe`. Profile-proven performance. Differential conformance against a live pandas oracle on every PR.

  
  
  
  
  
  
</div>

---

## TL;DR

**The Problem:** pandas is the lingua franca of data analysis, but it's single-threaded Python with unpredictable memory spikes, GIL contention in production pipelines, and dtype coercion surprises that silently corrupt results. Drop-in performance replacements (Polars, DuckDB) require rewriting your code in a different API.

**The Solution:** FrankenPandas rebuilds the entire pandas API from first principles in Rust. Same semantics, same method names, same edge-case behavior, but with columnar storage, vectorized kernels, arena-backed execution, an explicit alignment-planning phase (AACE), and compile-time safety guarantees. Every commit is verified against the actual pandas oracle.

**Why FrankenPandas?**

| Feature | pandas | Polars | FrankenPandas |
|---------|--------|--------|---------------|
| API compatibility with pandas | ✓ |…
