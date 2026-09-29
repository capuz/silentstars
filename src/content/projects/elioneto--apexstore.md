---
repo: "ElioNeto/ApexStore"
name: "ApexStore"
description: "Rust LSM-Tree storage engine with DashMap MemTable, SSTable auto-repair, and TLS support. Designed for embedding in applications that outgrow SQLite."
readmeQualityOk: true
url: "https://github.com/ElioNeto/ApexStore"
homepage: "https://elioneto.github.io/ApexStore/"
language: "Rust"
languages: ["Rust"]
languagePcts: [77]
topics: ["database", "embedded-database", "key-value-store", "lsm-tree", "performance", "rust", "storage-engine", "backend"]
stars: 7
forks: 0
openIssues: 35
closedIssues: 311
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2026-01-22T19:36:13Z"
lastCommitAt: "2026-09-29T08:10:07Z"
lastReleaseAt: "2026-03-06T19:15:15Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 97
undervaluedScore: 62
maintainers: ["ElioNeto", "github-actions[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1140068720/03584831-584b-4717-9e97-9cca3dbf7d17"
---

</p>

<h1 align="center">ApexStore</h1>

  <strong>High-performance, embedded Key-Value engine built with Rust 🦀</strong>
  <br />
  <em>Implementing LSM-Tree architecture with a focus on SOLID principles, observability, and performance.</em>
</p>

</p>

---

## 🎯 Overview

ApexStore is a modern, Rust-based storage engine designed for write-heavy workloads. It combines the durability of write-ahead logging (WAL) with the efficiency of **Log-Structured Merge-Tree (LSM-Tree)** architecture.

Built from the ground up using **SOLID principles**, it provides a production-grade storage solution that is easy to reason about, test, and maintain, while delivering the performance expected from a systems-level language.

> **🚀 Used in production by [TeamCode](https://github.com/ElioNeto/teamcode)** — an autonomous AI coding agent platform that relies on ApexStore for reliable, low-latency key-value storage.

## ⚖️ Why ApexStore?

While industry giants like RocksDB or LevelDB focus on extreme complexity, ApexStore offers:

- **Educational Clarity**: A clean, modular implementation of LSM-Tree that serves as a blueprint for high-performance systems.
- **Strict SOLID Compliance**: Leveraging…
