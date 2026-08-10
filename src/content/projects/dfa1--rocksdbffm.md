---
repo: "dfa1/rocksdbffm"
name: "rocksdbffm"
description: "proposal for rocksdb bindings for modern Java using FFM instead of JNI"
readmeQualityOk: true
url: "https://github.com/dfa1/rocksdbffm"
language: "Java"
languages: ["Java"]
languagePcts: [98]
stars: 8
forks: 2
openIssues: 8
closedIssues: 13
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-04-05T17:24:37Z"
lastCommitAt: "2026-08-10T05:05:26Z"
status: "thriving"
tags: ["needs_contributors"]
healthScore: 88
undervaluedScore: 50
maintainers: ["dfa1", "dependabot[bot]", "vjymisal0"]
openGraphImageUrl: "https://opengraph.githubassets.com/4789382806de04dc1cd16b4dc49f1d571d2badb84bdecfc4865dd8b1bcf412f0/dfa1/rocksdbffm"
---

# RocksDB FFM

**rocksdbffm** is an experimental Java wrapper for [RocksDB](https://rocksdb.org/) built on the
**Foreign Function & Memory (FFM) API**, targeting JDK 25+.

It aims to be a more maintainable alternative to the JNI-based `rocksdbjni`: mappings are plain Java
against `rocksdb/c.h`, so new RocksDB features need no C++ glue. Reads are roughly **2× faster** than
JNI — see [docs/benchmarks.md](https://github.com/dfa1/rocksdbffm/blob/HEAD/docs/benchmarks.md) for the numbers and their caveats, and
[docs/explanation.md](https://github.com/dfa1/rocksdbffm/blob/HEAD/docs/explanation.md) for why.

> **AI-assisted development:** This project uses [Claude Code](https://claude.ai/code) heavily for
> implementation work — C header mapping, test generation, and documentation. **Architecture, API
> design, and all decisions are human-driven.**

## Quickstart

Import the BOM, then depend on `rocksdbffm-core` plus one native artifact per platform you ship to
(full classifier list in [docs/reference.md#artifacts](https://github.com/dfa1/rocksdbffm/blob/HEAD/docs/reference.md#artifacts)):

```xml
<dependencyManagement>
  <dependencies>
    <dependency>…
