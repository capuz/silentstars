---
repo: "rust-util-collections/mmdb"
name: "mmdb"
description: "A pure-rust replacement of RocksDB/LevelDB."
readmeQualityOk: true
url: "https://github.com/rust-util-collections/mmdb"
homepage: "https://crates.io/crates/mmdb"
language: "Rust"
languages: ["Rust"]
languagePcts: [100]
stars: 6
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 7
recentReleases: 0
createdAt: "2024-05-28T00:39:14Z"
lastCommitAt: "2026-11-26T12:56:17Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 75
maintainers: ["ktmlm", "haxjump", "ccmlm"]
openGraphImageUrl: "https://opengraph.githubassets.com/8b567ba3c552b48057dafd8687b7bc42e159619f33b920df6c69c2bf8380f3be/rust-util-collections/mmdb"
---

# MMDB

**The Storage Engine Behind [vsdb](https://github.com/rust-util-collections/vsdb).**

MMDB is an embedded Rust LSM-tree for vsdb's prefix-partitioned keys, bulk
copy-on-write mutations, and compaction-driven garbage collection. Each
database is a local directory. The caller reads and writes byte strings through
the Rust API. Optimization work targets the vsdb workload. A writable handle runs flush and compaction workers in-process.

MMDB 6 opens v5 databases in place. For a v4 database, first run the
converter from the [v5 maintenance branch](https://github.com/rust-util-collections/mmdb/tree/v5).

## Supported architectures

MMDB guarantees correct behavior on 64-bit ARM (AArch64, `aarch64`) and
64-bit x86 (`x86_64`), using a 64-bit ABI. Other architectures are outside
the project’s tested correctness guarantee.
