---
repo: "crossbario/zlmdb"
name: "zlmdb"
description: "Object-relational in-memory database layer based on LMDB"
readmeQualityOk: true
url: "https://github.com/crossbario/zlmdb"
homepage: "https://crossbar.io/"
language: "Python"
languages: ["Python"]
languagePcts: [92]
topics: ["in-memory", "database", "object-relational", "lmdb", "flatbuffers"]
stars: 36
forks: 10
openIssues: 15
closedIssues: 70
watchers: 2
contributors: 5
recentReleases: 0
createdAt: "2018-06-11T08:04:46Z"
lastCommitAt: "2026-11-10T11:38:03Z"
lastReleaseAt: "2025-11-25T01:02:16Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 95
undervaluedScore: 61
maintainers: ["oberstet", "p-r-a-v-i-n"]
openGraphImageUrl: "https://opengraph.githubassets.com/7310757367cec8be5679e9af46ef16b0ad73c99bf2e0152aa056cb2768ad62a2/crossbario/zlmdb"
discussionCount: 17
---

# zLMDB

---

zlmdb is a complete LMDB solution for Python providing **two APIs in one
package**:

1.  **Low-level py-lmdb compatible API** - Direct LMDB access with full
    control
2.  **High-level object-relational API** - Type-safe ORM with automatic
    serialization

## Key Features

**Low-level LMDB API (py-lmdb compatible):**

-   Drop-in replacement for py-lmdb
-   Direct access to LMDB transactions, cursors, and databases
-   Full LMDB feature set (subdatabases, duplicate keys, etc.)
-   Works with all py-lmdb examples and code

**High-level Object-Relational API:**

-   Type-safe persistent objects with automatic serialization
-   Multiple serializers (JSON, CBOR, Pickle, Flatbuffers)
-   Export/import from/to Apache Arrow
-   Native Numpy arrays and Pandas data frames support
-   Automatic indexes and relationships
-   Schema management

**Implementation:**

-   CFFI-only (no CPyExt) for maximum compatibility
-   Works on both CPython and PyPy
-   Native binary wheels for x86-64 and ARM64
-   Vendored LMDB (no external dependencies)
-   High-performance with zero-copy operations
-   Free software (MIT license)

## Usage Examples

**Low-level API (py-lmdb compatible):**…
