---
repo: "launix-de/memcp"
name: "memcp"
description: "A columnar In-Memory Database as Drop-In Replacement for MySQL supporting 10x performance in OLAP workloads and similar performance in OLTP"
readmeQualityOk: true
url: "https://github.com/launix-de/memcp"
homepage: "https://memcp.org"
language: "Go"
languages: ["Go"]
languagePcts: [90]
topics: ["database", "golang", "mysql", "sql"]
stars: 69
forks: 44
openIssues: 3
closedIssues: 5
watchers: 1
contributors: 4
recentReleases: 0
createdAt: "2023-01-20T17:53:35Z"
lastCommitAt: "2026-09-20T08:46:52Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "fork_magnet"]
healthScore: 92
undervaluedScore: 55
maintainers: ["carli2"]
openGraphImageUrl: "https://opengraph.githubassets.com/5344a264b9e1dfaee6866a5f52a9d611d9c47136e3093df2b889d7b39f520432/launix-de/memcp"
---

# MemCP — transactions, search, and analytics in one open-source database

MemCP is a persistent, column-oriented SQL database built for applications that
must update data continuously while also searching, filtering, and analyzing
large datasets. It brings an architecture best known from proprietary in-memory
ERP systems to a self-hosted GPL-licensed database.

MemCP keeps stable data in compact, read-optimized columns and accepts recent
changes in a write-friendly delta. Background rebuilds fold those changes back
into the compressed representation. Persistent data may be evicted from RAM and
loaded again on demand, so the complete database does not have to remain memory
resident.

Applications can connect through the MySQL wire protocol or submit MySQL- and
PostgreSQL-style SQL through separate HTTP endpoints. An RDF/SPARQL engine is
included as well.

> **Status: Beta.** MemCP is suitable for evaluation and controlled beta
> deployments. Common application SQL is covered by a large regression suite,
> while advanced dialect edge cases are still being completed. Validate the
> queries, durability configuration, backup procedure, and result parity of
> your application before a…
