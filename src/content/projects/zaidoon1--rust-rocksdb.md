---
repo: "zaidoon1/rust-rocksdb"
name: "rust-rocksdb"
description: "rust wrapper for rocksdb"
url: "https://github.com/zaidoon1/rust-rocksdb"
language: "Rust"
languages: ["Rust"]
languagePcts: [97]
stars: 37
forks: 27
openIssues: 5
closedIssues: 12
watchers: 2
contributors: 209
recentReleases: 0
createdAt: "2023-11-18T08:10:24Z"
lastCommitAt: "2026-07-04T06:11:00Z"
lastReleaseAt: "2024-03-28T09:12:02Z"
status: "thriving"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 88
undervaluedScore: 61
maintainers: ["zaidoon1", "evanj", "gdorsi"]
openGraphImageUrl: "https://opengraph.githubassets.com/a405ebbbfd1f4d49a1f4f1c68cabe99e585d4edb5faf564956ebec715b7c1e1d/zaidoon1/rust-rocksdb"
---

# rust-rocksdb

**A high-performance Rust wrapper for Facebook's RocksDB embeddable database.**

RocksDB is a fast key-value storage engine based on LSM-trees, optimized for SSDs with excellent performance for both reads and writes. This crate provides safe, idiomatic Rust bindings with support for all major RocksDB features including transactions, column families, backups, and advanced compression.

## 📋 Table of Contents

- [🚀 Quick Start](#-quick-start)
- [ Usage Examples](#-usage-examples)
- [⚙️ Features & Configuration](#️-features--configuration)
- [🔧 Building from Source](#-building-from-source)
- [🤝 Contributing](#-contributing)
- [❓ Why This Fork](#-why-this-fork)

## 🚀 Quick Start

**Requirements:**
- **Clang and LLVM** - Required for building RocksDB C++ components
- **Rust 1.91.0+** - Current MSRV (rolling 6-month policy)

Add this to your `Cargo.toml`:

```toml
[dependencies]
rust-rocksdb = "0.43"
```

### Basic Example

```rust
use rust_rocksdb::{DB, Options};

fn main() -> Result<(), Box<dyn std::error::Error>> {
    // Open database
    let path = "./my_db";
    let mut opts = Options::default();
    opts.create_if_missing(true);
    let db = DB::open(&opts,…
