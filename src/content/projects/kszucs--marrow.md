---
repo: "kszucs/marrow"
name: "marrow"
description: "Arrow implementation in Mojo"
readmeQualityOk: true
url: "https://github.com/kszucs/marrow"
homepage: "https://marrow.kszucs.dev/"
language: "Mojo"
languages: ["Mojo"]
languagePcts: [85]
topics: ["apache-arrow", "mojo-lang"]
stars: 100
forks: 6
openIssues: 11
closedIssues: 9
watchers: 5
contributors: 8
recentReleases: 0
createdAt: "2024-07-04T17:11:10Z"
lastCommitAt: "2026-10-05T09:21:55Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 88
undervaluedScore: 44
maintainers: ["kszucs"]
openGraphImageUrl: "https://opengraph.githubassets.com/d400b674e0904af85d36322296d64598a31674e161eaa914ed1367103c98d611/kszucs/marrow"
---

# marrow

**Apache Arrow in [Mojo](https://www.modular.com/mojo)** — the columnar format,
compute kernels, a Parquet and Arrow IPC layer, a relational query engine, and
Python bindings.

The format is the standard every Arrow library shares. What marrow adds is a
choice of how to use it, from calling a kernel on an array to compiling a whole
query into an executable:

| | You write | You get |
|---|---|---|
| **Eager Python** | `ma.array`, `ma.compute.add`, `rb.sort_by` | the PyArrow API you already know |
| **Lazy Python** | `read_parquet(...).filter(...).aggregate(...)` | nothing runs until `.collect()` |
| **Compiled Mojo** | the same verbs, dtypes fixed at compile time | a native executable that runs without Python |

📖 **[Full documentation → marrow.kszucs.dev](https://marrow.kszucs.dev)**

> **Status: experimental.** Both Arrow and Mojo are moving targets. Of 278 golden
> SQL queries whose answers come from **DuckDB**, never from marrow, 215 run and
> match and 63 need features marrow does not have yet. Arrow's integration suite round-trips data with the **C++, Rust and
> Go** implementations for the layouts marrow implements. See
> [Status &…
