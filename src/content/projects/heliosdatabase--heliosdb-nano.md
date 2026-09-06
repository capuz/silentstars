---
repo: "HeliosDatabase/HeliosDB-Nano"
name: "HeliosDB-Nano"
description: "Embedded SQL database for local-first apps, AI memory, edge analytics, and developer workflows."
readmeQualityOk: true
url: "https://github.com/HeliosDatabase/HeliosDB-Nano"
homepage: "https://www.heliosdb.com"
language: "Rust"
languages: ["Rust", "Python"]
languagePcts: [52, 46]
topics: ["database"]
stars: 8
forks: 0
openIssues: 0
closedIssues: 9
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-02-04T18:24:41Z"
lastCommitAt: "2026-09-06T08:03:59Z"
lastReleaseAt: "2026-05-04T07:58:04Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 99
undervaluedScore: 59
maintainers: ["danimoya"]
openGraphImageUrl: "https://opengraph.githubassets.com/6fb470d5d51b8ece18c6733f6f7f01575ca4fec9b83e5588826d769df6313234/HeliosDatabase/HeliosDB-Nano"
---

# HeliosDB Nano

**An embedded database with native PostgreSQL and MySQL wire-protocol compatibility, plus one-shot SQLite file import.** Single self-contained binary (~32 MB; ~12 MB compressed download). HNSW vector search, git-like branching, time-travel queries, AES-256-GCM encryption, built-in BaaS layer (Auth, REST API, Realtime).

Use your existing clients (`psql`, `mysql`), RESTful HTTP, drivers (`psycopg2`, `mysql-connector`, `node-postgres`, JDBC), and ORMs (SQLAlchemy, Prisma, Drizzle, Hibernate, GORM) — zero migration required. Existing `.sqlite` files import via a bundled converter.

## Ecosystem

Nano is one of four products in the HeliosDB family. SDKs and integrations are cross-edition — the same client code works against Nano, Lite, and Full.

- **[HeliosDatabase/HeliosDB-SDKs](https://github.com/HeliosDatabase/HeliosDB-SDKs)** — Official client SDKs (Python, TypeScript, Rust, Go) + integrations (VS Code, n8n, Zapier, Make, Retool, AutoGen) + cross-platform CLI. Apache 2.0.
- **[HeliosDatabase/Any2HeliosDB](https://github.com/HeliosDatabase/Any2HeliosDB)** — Apache-2.0 `a2h` migration toolkit for moving Oracle, MySQL, PostgreSQL, and SQL Server into HeliosDB…
