---
repo: "schapman1974/briskdb"
name: "briskdb"
description: "Ordinary SQLite files, one sharded database—parallel writes, PostgreSQL, HTTP, Rust, Python, and shard-safe IDs."
readmeQualityOk: true
url: "https://github.com/schapman1974/briskdb"
homepage: "https://briskdb.com"
language: "Rust"
languages: ["Rust"]
languagePcts: [91]
stars: 81
forks: 5
openIssues: 87
closedIssues: 98
watchers: 2
contributors: 1
recentReleases: 5
createdAt: "2026-08-08T01:54:18Z"
lastCommitAt: "2026-09-06T08:04:29Z"
lastReleaseAt: "2026-08-14T12:05:13Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine", "under_pressure"]
healthScore: 89
undervaluedScore: 36
maintainers: ["schapman1974"]
openGraphImageUrl: "https://opengraph.githubassets.com/565f135db6f121450c974c195a8071c8360708dc092d1d8fb0fc81170f497833/schapman1974/briskdb"
---

# BriskDB

> **SQLite files. One sharded database.**

BriskDB turns ordinary SQLite files into one database with **parallel writes,
PostgreSQL compatibility, HTTP access, and embedded Rust/Python APIs**. It keeps
SQLite's proven storage engine and tooling; BriskDB adds the routing layer,
shard-safe IDs, cross-shard indexes, protocols, and operational guardrails.

</p>

| The useful part | What it means |
| --- | --- |
| **Parallel SQLite writes** | Independent shard files have independent WAL writer locks. |
| **Use existing clients** | PostgreSQL and HTTP work today; MongoDB and MySQL are next. |
| **Embed or run a service** | The same Rust engine powers the binary, Python wheel, and Rust crate. |
| **Keep inspectable files** | Every data shard remains a normal SQLite database—no SQLite fork. |

[Try it without a compiler](#try-it-in-30-seconds) ·
[Download an alpha](https://github.com/schapman1974/briskdb/releases) ·
[Open the data browser](#browse-the-whole-logical-database) ·
[Follow MongoDB and MySQL](#follow-the-build)

> [!IMPORTANT]
> BriskDB is an alpha, not a production-ready database service. The
> [boundaries are explicit](#honest-alpha-boundaries), and measured…
