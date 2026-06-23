---
repo: "syn54x/ferro-orm"
name: "ferro-orm"
description: "Built with ❤️ for speed & developer ergonomics"
url: "https://github.com/syn54x/ferro-orm"
homepage: "https://syn54x.github.io/ferro-orm/"
language: "Python"
languages: ["Python", "Rust"]
languagePcts: [65, 35]
topics: ["asyncio", "database", "high-performance", "mysql", "orm", "postgresql", "pydantic", "pyo3", "python", "rust"]
stars: 7
forks: 0
openIssues: 20
closedIssues: 56
watchers: 0
contributors: 3
recentReleases: 7
createdAt: "2026-01-27T02:24:12Z"
lastCommitAt: "2026-06-23T23:16:52Z"
lastReleaseAt: "2026-04-27T14:42:17Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 93
undervaluedScore: 61
maintainers: ["0x054"]
openGraphImageUrl: "https://opengraph.githubassets.com/9bb7a7c8aeee380095cff46dd529d5bb13ceb040602a114ebe2e4357c426442a/syn54x/ferro-orm"
---

# Ferro: The Pydantic x Rust ORM

Ferro is a high-performance, asynchronous ORM for Python, powered by a core engine written in Rust. Designed for simplicity and it only has one dependency: Pydantic.  Delivering ergonomics familiar to the modern Pythonista and the speed and safety of Rust's SQLx and Sea-Query.

## Key Features

- **High-Performance Core**: All SQL generation and row hydration are handled by a dedicated Rust engine, minimizing "Python Tax" on data-heavy operations.
- **Async First**: Built from the ground up for asynchronous applications, utilizing `pyo3-async-runtimes` for non-blocking I/O.
- **Pydantic Integration**: Leverages Pydantic V2 for schema definition and data validation, providing full IDE support and type safety.
- **Zero-Copy Intent**: Designed with zero-copy principles to maximize throughput during large-scale data retrieval.
- **Identity Map**: Ensures object consistency across your application by tracking active model instances in a thread-safe registry.

## Architecture

Ferro operates through a dual-layer architecture connected via a high-performance FFI (Foreign Function Interface) bridge:

1.  **Python Layer**: Developers define models using…
