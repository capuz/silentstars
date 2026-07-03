---
repo: "abbycin/btree-store"
name: "btree-store"
description: " 🦀 A persistent, ACID-compliant embedded key-value storage engine in Rust featuring a Copy-on-Write (COW) B-Tree and robust crash   safety"
url: "https://github.com/abbycin/btree-store"
language: "Rust"
languages: ["Rust"]
languagePcts: [99]
topics: ["acid", "btree", "database", "embedded-database", "key-value-store", "mvcc", "nosql", "persistent-storage", "storage-en"]
stars: 7
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 5
createdAt: "2026-01-16T08:19:56Z"
lastCommitAt: "2026-07-03T11:56:26Z"
lastReleaseAt: "2026-06-29T07:15:19Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 63
undervaluedScore: 23
maintainers: ["abbycin"]
openGraphImageUrl: "https://opengraph.githubassets.com/0e5939c6d22ffd0d7ffd58c93b2919d4a464b8eac71ad73621fd5bd3c7a4e5eb/abbycin/btree-store"
---

# btree-store

**btree_store** is a persistent, embedded key-value storage engine written in Rust. It implements a robust Copy-On-Write (COW) B+ Tree architecture to ensure data integrity, crash safety, and efficient concurrent access.

## Features

*   **ACID Compliance:** Atomic commits using COW, Snapshot Isolation, and double-buffered meta pages.
*   **Closure-based Transactions:** Simplified `exec` (read-write) and `view` (read-only) APIs with automatic commit and rollback.
*   **Auto-Refresh:** Every transaction automatically starts from the freshest disk state. No manual snapshot management required.
*   **Conflict Detection:** Built-in "First-Committer-Wins" strategy for concurrent handles.
*   **Batch Operations:** `exec_multi` for atomic updates across multiple buckets with a single disk sync, significantly reducing I/O overhead.
*   **Crash Safety:** Double-buffered superblock with CRC32C checksums and ordered metadata writes; recovery selects the newest valid meta page.
*   **Logical Namespaces:** Direct support for multiple buckets within a single database file.
*   **Zero-Copy Access:** 8-byte aligned memory layouts allow direct pointer-to-reference conversion for…
