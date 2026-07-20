---
repo: "jiangzhe/doradb"
name: "doradb"
description: "DoraDB - Storage engine written in Rust from scratch"
readmeQualityOk: true
url: "https://github.com/jiangzhe/doradb"
language: "Rust"
languages: ["Rust"]
languagePcts: [100]
topics: ["database", "asynchronous-programming", "btree-indexes", "buffer-pool", "secondary-indexes", "storage-engine", "transaction-processing"]
stars: 121
forks: 3
openIssues: 1
closedIssues: 341
watchers: 5
contributors: 1
recentReleases: 0
createdAt: "2022-01-13T06:30:57Z"
lastCommitAt: "2026-07-20T06:34:21Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 100
undervaluedScore: 45
maintainers: ["jiangzhe"]
openGraphImageUrl: "https://opengraph.githubassets.com/a0bc06dfb620198211cb3f9ad2792bd8ac23abea43057603223a7d9106a33ccf/jiangzhe/doradb"
---

# DoraDB

DoraDB is an attempt to build a modern and fast storage engine in Rust from scratch.
It is work in progress.

## Goal

Build a modern and fast storage engine.

The storage engine is designed as a hybrid engine managing both in-memory row store and on-disk column store, with full transactional support across all data.

## Quick Start

The snippets below assume an async function returning `doradb_storage::Result<()>`.
DoraDB is runtime agnostic, so you can run these futures on whichever async runtime your application already uses.
For a complete runnable version, see [quick_start.rs](https://github.com/jiangzhe/doradb/blob/HEAD/doradb-storage/examples/quick_start.rs) or run `cargo run --example quick_start`.

Create a table with a schema and indexes, then drop it from an idle session.

```rust
use doradb_storage::{
    ColumnAttributes, ColumnSpec, EngineConfig, IndexAttributes, IndexKey, IndexSpec, TableSpec,
    ValKind,
};

let engine = EngineConfig::default()
    .storage_root("target/doradb-quick-start")
    .build()
    .await?;
let mut session = engine.new_session()?;

let table_id = session
    .create_table(
        TableSpec::new(vec![…
