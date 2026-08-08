---
repo: "ankur-anand/isledb"
name: "isledb"
description: "Embedded LSM Tree Key Value Database on Object Storage for large datasets"
readmeQualityOk: true
url: "https://github.com/ankur-anand/isledb"
homepage: "https://isledb.com"
language: "Go"
languages: ["Go"]
languagePcts: [100]
topics: ["ai", "ai-agents", "database", "edge-data-streaming", "embedded-database", "go", "golang", "key-value-store", "object-storage", "replicated-database"]
stars: 26
forks: 5
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2025-12-30T08:01:20Z"
lastCommitAt: "2026-08-08T04:35:53Z"
lastReleaseAt: "2026-04-20T01:56:07Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 72
undervaluedScore: 29
maintainers: ["ankur-anand"]
openGraphImageUrl: "https://opengraph.githubassets.com/6d2f626f3c03af934d8e5abbf2d1b42dfd3c9b03eabfc797a96f8e2cfd7050b0/ankur-anand/isledb"
---

## IsleDB

**IsleDB is an embedded key-value engine designed for object storage. It borrows ideas from LSM-trees but
rethinks them for object storage.**

Writes go to an in-memory memtable first, then get flushed to SST files periodically. This batching
matters—instead of hitting object storage on every `put()`, you amortize costs across many writes. Large
values get stored separately as blobs so the SSTs stay small.

The SST files themselves live in object storage (S3, GCS, Azure, MinIO, etc). Your capacity and
durability scale with the bucket, not your local disk.

Readers attach to the same bucket/prefix, stream SSTs and blobs on demand, and use local caches to
minimize re-downloads—so read capacity scales horizontally without replicas.

### Features
1. Data lives on object storage (S3, GCS, Azure Blob, MinIO). 
2. Bottomless capacity. 
3. Object Store durability. 
4. Readers scale horizontally-no replicas, no connection limits.
5. Three compaction modes (Merge, FIFO, Time-Window)
6. Separate Writer and Compaction Process
7. Pluggable Manifest store

### Architecture

One IsleDB database maps to one object-store prefix. Under that prefix, IsleDB stores:

- hot manifest metadata…
