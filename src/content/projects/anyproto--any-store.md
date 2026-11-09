---
repo: "anyproto/any-store"
name: "any-store"
description: "Document-oriented embedded database for Go: MongoDB-like queries, indexes, full-text and vector search, ACID transactions, multi-process access. Pure Go, no CGO."
readmeQualityOk: true
url: "https://github.com/anyproto/any-store"
homepage: "https://pkg.go.dev/github.com/anyproto/any-store/v2"
language: "Go"
languages: ["Go"]
languagePcts: [98]
topics: ["btree", "database", "document-database", "embedded-database", "full-text-search", "go", "golang", "nosql", "vector-search", "wal"]
stars: 99
forks: 15
openIssues: 0
closedIssues: 1
watchers: 4
contributors: 10
recentReleases: 0
createdAt: "2023-12-11T21:14:17Z"
lastCommitAt: "2026-11-09T11:59:25Z"
lastReleaseAt: "2026-01-15T15:37:58Z"
status: "thriving"
tags: []
healthScore: 99
undervaluedScore: 50
maintainers: ["cheggaaa", "requilence", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/2c9a364f572c953847f74dfdcaa5933d4c53b48f490db326478f8eaa9a158966/anyproto/any-store"
---

# Any Store

A **document-oriented embedded database** for Go with a MongoDB-like query language, built on an in-tree btree/pager/WAL storage engine derived from SQLite (aligned with its design, not a literal port — the on-disk format is our own).
Schema-less documents, rich indexes, full-text and vector search, ACID transactions, multi-process access, page-level integrity and optional encryption — pure Go, no CGO.

## Features

* **Mongo-style queries** — `$eq/$in/$gt/...`, logical operators, dot-path fields, modifiers (`$set`, `$inc`, ...). Formal semantics in [docs/query-filter-contract.md](https://github.com/anyproto/any-store/blob/HEAD/docs/query-filter-contract.md).
* **Indexes** — compound, unique, sparse, multikey (arrays), asc/desc per field; created and dropped at runtime.
* **Cost-based planner** — index selection driven by btree page statistics and per-prefix selectivity sketches; `Explain()` shows the chosen plan and its candidates.
* **Full-text search** — btree-resident inverted index with BM25 ranking via `$text`: phrases, prefixes, anchored and per-field matching for search-as-you-type. See…
