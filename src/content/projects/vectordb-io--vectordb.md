---
repo: "vectordb-io/vectordb"
name: "vectordb"
description: "A standalone vector database built in Rust for semantic search and RAG, with an embeddable engine, HTTP API, metadata filtering, and persistent storage."
readmeQualityOk: true
url: "https://github.com/vectordb-io/vectordb"
homepage: "https://vectordb.io/"
language: "Rust"
languages: ["Rust"]
languagePcts: [74]
topics: ["embedded-database", "hnsw", "rag", "rust", "semantic-search", "vector-database", "vector-search", "vectordb"]
stars: 48
forks: 10
openIssues: 17
closedIssues: 1
watchers: 1
contributors: 6
recentReleases: 0
createdAt: "2021-06-04T05:57:37Z"
lastCommitAt: "2026-11-17T14:47:04Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 77
undervaluedScore: 35
maintainers: ["codex"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/373736021/95fd9400-c53e-11eb-9d02-c3316228fb59"
---

# VectorDB · Rust

**English | [简体中文](https://github.com/vectordb-io/vectordb/blob/HEAD/README.zh-CN.md) | [日本語](https://github.com/vectordb-io/vectordb/blob/HEAD/README.ja.md) | [Español](https://github.com/vectordb-io/vectordb/blob/HEAD/README.es.md) | [Português do Brasil](https://github.com/vectordb-io/vectordb/blob/HEAD/README.pt-BR.md)**

A standalone vector database reimplemented in Rust, with an embeddable engine, an HTTP service, transactional persistence, and a separate static website.

**Status: 0.1.0 Alpha.** Inspired by the Milvus data model and REST v2 request style, VectorDB implements a usable set of standalone features. An experimental [distributed M4 runtime](https://github.com/vectordb-io/vectordb/blob/HEAD/docs/distributed-p1.md) is available separately. Most of the distributed infrastructure in Milvus is not implemented, and VectorDB is not a drop-in replacement for Milvus / PyMilvus. See the [feature comparison](https://github.com/vectordb-io/vectordb/blob/HEAD/docs/compatibility.md) for the exact scope. The previous C++ implementation, documentation, and website have been removed.

## Quick start

Requires Rust 1.89+, Cargo, and a C compiler toolchain (to…
