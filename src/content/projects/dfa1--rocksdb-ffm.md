---
repo: "dfa1/rocksdb-ffm"
name: "rocksdb-ffm"
description: "RocksDB for Java 25+ via the FFM API (Project Panama) instead of JNI: zero-copy reads, no C++ glue, natives bundled for macOS, Linux and Windows"
readmeQualityOk: true
url: "https://github.com/dfa1/rocksdb-ffm"
language: "Java"
languages: ["Java"]
languagePcts: [98]
topics: ["foreign-function-and-memory-api", "java", "rocksdb", "zero-copy", "embedded-database", "ffm", "java-25", "java-library", "jni-alternative", "key-value-store"]
stars: 13
forks: 7
openIssues: 27
closedIssues: 53
watchers: 0
contributors: 6
recentReleases: 10
createdAt: "2026-04-05T17:24:37Z"
lastCommitAt: "2026-11-09T11:58:15Z"
lastReleaseAt: "2026-08-31T17:29:17Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "release_machine", "fork_magnet"]
healthScore: 92
undervaluedScore: 62
maintainers: ["dfa1", "dependabot[bot]", "Mohammadjavadfakhri"]
openGraphImageUrl: "https://opengraph.githubassets.com/9115419aa14accec8d1f037bcdd03150372b4c32482c915e893e7459a71647b6/dfa1/rocksdb-ffm"
---

# RocksDB FFM

**rocksdbffm** is a pre-1.0 Java wrapper for [RocksDB](https://rocksdb.org/) built on the
**Foreign Function & Memory (FFM) API**, targeting JDK 25+.

It aims to be a more maintainable alternative to the JNI-based `rocksdbjni`: mappings are plain Java
against `rocksdb/c.h`, so new RocksDB features need no C++ glue. Reads are roughly **2× faster** than
JNI — see [docs/benchmarks.md](https://github.com/dfa1/rocksdb-ffm/blob/HEAD/docs/benchmarks.md) for the numbers and their caveats, and
[docs/explanation.md](https://github.com/dfa1/rocksdb-ffm/blob/HEAD/docs/explanation.md) for why.

> **AI-assisted development:** This project uses [Claude Code](https://claude.ai/code) heavily for
> implementation work — C header mapping, test generation, and documentation. **Architecture, API
> design, and all decisions are human-driven.**

## Quickstart

Import the BOM, then depend on `rocksdbffm-core` plus one native artifact per platform you ship to
(full classifier list in [docs/reference.md#artifacts](https://github.com/dfa1/rocksdb-ffm/blob/HEAD/docs/reference.md#artifacts)):

```xml
<dependencyManagement>
  <dependencies>
    <dependency>…
