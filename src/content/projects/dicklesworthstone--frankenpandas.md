---
repo: "Dicklesworthstone/frankenpandas"
name: "frankenpandas"
description: "Memory-safe, clean-room Rust reimplementation of pandas with packetized conformance gates, strict/hardened runtime modes, and RaptorQ-backed artifact durability."
readmeQualityOk: true
url: "https://github.com/Dicklesworthstone/frankenpandas"
language: "Rust"
languages: ["Rust"]
languagePcts: [92]
topics: ["clean-room", "columnar", "conformance-testing", "dataframe", "high-performance", "memory-safe", "pandas", "raptorq", "reliability", "rust"]
stars: 22
forks: 7
openIssues: 0
closedIssues: 5
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2026-02-13T20:27:18Z"
lastCommitAt: "2026-09-29T10:05:04Z"
lastReleaseAt: "2026-04-23T17:07:45Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 100
undervaluedScore: 51
maintainers: ["Dicklesworthstone", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/c4ed96f0d9a581aef0353f077610e873bb374b3ba3e7e3392a2eb912c1f6309e/Dicklesworthstone/frankenpandas"
fundingLinks: ["GITHUB:https://github.com/Dicklesworthstone"]
---

# FrankenPandas

  **Clean-room Rust reimplementation of the full pandas API surface.**

  pandas API in safe Rust. A PyO3 binding crate (`fp-python`) exposes pandas' top-level names and the DataFrame/Series/Index method surface with `frankenpandas.pyi` type stubs and maturin wheel builds; it is not yet a drop-in replacement (the member coverage is counted by name, and behavioral parity is measured case by case in a differential pytest suite against pandas 2.2.3). Zero `unsafe`. Measured head-to-head against live pandas 2.2.3 on 143 certified benchmark lanes. Differential conformance against a pinned live pandas oracle in CI's daily batch and on any checkout that has `.venv-oracle`.

  
  
  
  
  
  
</div>

---

## TL;DR

**The Problem:** pandas is the lingua franca of data analysis, but it's single-threaded Python with unpredictable memory spikes, GIL contention in production pipelines, and dtype coercion surprises that silently corrupt results. Drop-in performance replacements (Polars, DuckDB) require rewriting your code in a different API.

**The Solution:** FrankenPandas rebuilds the entire pandas API from first principles in Rust. Same semantics, same method names, same…
