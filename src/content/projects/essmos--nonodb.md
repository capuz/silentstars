---
repo: "essmos/nonodb"
name: "nonodb"
description: "The all-in-one JSON document database(Mongodb style) for small VMs and edge boxes. ~5 MB idle RAM,  BM25/fuzzy/vector search, SQL, encrypted backups, replication, and GUI. Mongo style query. MIT licensed."
readmeQualityOk: true
url: "https://github.com/essmos/nonodb"
homepage: "https://nonodb.com"
language: "Rust"
languages: ["Rust", "Python"]
languagePcts: [68, 22]
topics: ["database", "document-database", "embedded-database", "json", "nosql", "rust", "fuzzy-search", "vector-database"]
stars: 22
forks: 1
openIssues: 0
closedIssues: 8
watchers: 2
contributors: 2
recentReleases: 10
createdAt: "2026-11-09T21:49:00Z"
lastCommitAt: "2026-11-23T10:19:17Z"
lastReleaseAt: "2026-11-11T18:15:55Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 100
undervaluedScore: 53
maintainers: ["essmos", "gendus-boop"]
openGraphImageUrl: "https://opengraph.githubassets.com/a64ed43b725970e24eec1efea8b7f7ad7ed6b7bad9f15469c246f6077b649bc2/essmos/nonodb"
---

# NoNoDB

**The all-in-one JSON document database for small VMs and edge boxes.**

**Idle daemon: ~5 MB RAM** with 1M documents and three indexes; crash-safe
LMDB storage and production features in one binary.

One Rust daemon for small VMs and edge boxes: owns the LMDB files, speaks
HTTP/JSON, exposes an optional MongoDB-compatible endpoint for official drivers,
and hosts multiple databases.

## Why nonodb exists

Small applications accumulate shared JSON state, but a full database server is
often too much and files on disk are hard to keep consistent. NonoDB is the
middle ground: one small daemon that owns the data files and exposes a familiar
document API.

### The biggest advantage

You get production features in one MIT-licensed binary, with no paid tiers or
feature gates:
