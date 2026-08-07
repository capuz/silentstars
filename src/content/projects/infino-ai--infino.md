---
repo: "infino-ai/infino"
name: "infino"
description: "Fast search engine on object storage, with full text search, vectors, and SQL, natively on Parquet."
readmeQualityOk: true
url: "https://github.com/infino-ai/infino"
homepage: "http://infino.ai"
language: "Rust"
languages: ["Rust"]
languagePcts: [96]
topics: ["bm25", "embedded-database", "full-text-search", "hybrid-search", "object-storage", "parquet", "rag", "retrieval", "rust", "search-engine"]
stars: 64
forks: 18
openIssues: 42
closedIssues: 105
watchers: 1
contributors: 13
recentReleases: 10
createdAt: "2026-05-19T10:00:40Z"
lastCommitAt: "2026-08-07T05:14:09Z"
lastReleaseAt: "2026-07-27T05:43:30Z"
status: "thriving"
tags: ["needs_contributors", "hidden_gem", "release_machine"]
healthScore: 94
undervaluedScore: 43
maintainers: ["ekechinwokah", "ashishmishra26", "vinaykakade"]
openGraphImageUrl: "https://opengraph.githubassets.com/498b2afe98b8682e32adafac408199f286b59ad11cc46aab857d33ce0f41fe39/infino-ai/infino"
---

# infino

**infino is a fast retrieval engine that runs SQL, full-text search, and vector search over a single copy of your data on object storage.** Data stays in Parquet on S3 (or Azure, GCS, or local disk) and you can query it at scale.

**Why infino**

- **Speed per dollar** — infino optimizes for speed per dollar, making tradeoffs to achieve object-storage economics at search engine speeds. On a 1-million-document index, warm BM25 queries return in the microsecond range — see [benchmarks](https://github.com/infino-ai/infino/blob/HEAD/benches/README.md).
- **Multi-modal queries** — keyword (BM25), vector, and SQL queries over the same rows, offering flexible query paths for agents.
- **Object-storage-native** — data lives on S3, Azure, GCS, or local disk, with snapshot-isolated reads and atomic commits.
- **Open format, no lock in** — text and numeric data is stored as spec-compliant Parquet, so anything that reads Parquet can read your data.

## Contents

- [Install](#install)
- [Quickstart](#quickstart)
- [Cloud storage](#cloud-storage)
- [Architecture](#architecture)
- [SQL joins across tables](#sql-joins-across-tables)
- [Hybrid search](#hybrid-search)
-…
