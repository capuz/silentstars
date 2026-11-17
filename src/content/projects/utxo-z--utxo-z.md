---
repo: "utxo-z/utxo-z"
name: "utxo-z"
description: "High-performance UTXO Database for Bitcoin Cash"
readmeQualityOk: true
url: "https://github.com/utxo-z/utxo-z"
language: "C++"
languages: ["C++"]
languagePcts: [71]
topics: ["database", "cpp", "high-performance", "blockchain", "cryptocurrency", "bitcoin", "bitcoin-c", "utxo"]
stars: 8
forks: 1
openIssues: 20
closedIssues: 26
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-01-25T09:19:20Z"
lastCommitAt: "2026-11-17T12:21:35Z"
lastReleaseAt: "2026-08-10T12:26:15Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "under_pressure"]
healthScore: 84
undervaluedScore: 49
maintainers: ["fpelliccioni"]
openGraphImageUrl: "https://opengraph.githubassets.com/c19e07aeb870f2c1d90d11ecb3a82958247774005580482157adc6cbb9662aef/utxo-z/utxo-z"
---

# UTXO-Z

> **Beta Software**: UTXO-Z is beta software. Its implementation and API are subject to change.

High-performance UTXO database for Bitcoin Cash.

UTXO-Z is a purpose-built storage engine designed for the specific access patterns of UTXO set management. It achieves **2.5x higher throughput** than LevelDB during blockchain synchronization and up to **45x faster lookups** for recent outputs.

For the technical paper describing the architecture and benchmarks, see [docs/utxoz.pdf](https://github.com/utxo-z/utxo-z/blob/HEAD/docs/utxoz.pdf).

## Features

- **Two storage modes**: Full mode (variable-size values) and Reference mode (fixed-size file references)
- **Type-safe API**: `full_db` and `reference_db` with compile-time mode safety — no runtime dispatch
- **Multi-container architecture**: 5 size classes (48B, 96B, 128B, 256B, 10KB) in full mode; the 48-byte class is split into **8 shards**, fixed, each a container of its own
- **Batched inserts**: `insert_batch()` applies one prepared phase of inserts with several workers, one writer per container — see [Batched inserts](#batched-inserts)
- **Memory-mapped files**: Automatic file rotation and OS-managed I/O
-…
