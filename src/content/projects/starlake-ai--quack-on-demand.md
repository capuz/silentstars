---
repo: "starlake-ai/quack-on-demand"
name: "quack-on-demand"
description: "Production-grade SQL gateway in front of DuckDB Quack + DuckLake + Iceberg. Multi-tenant pools, pluggable auth (DB/JWT/OIDC), table-level ACLs, role-aware routing, and a live admin console"
readmeQualityOk: true
url: "https://github.com/starlake-ai/quack-on-demand"
homepage: "https://qod.starlake.ai"
language: "Scala"
languages: ["Scala"]
languagePcts: [77]
topics: ["apache-arrow", "arrow-flight-sql", "duckdb", "ducklake", "flightsql", "lakehouse", "query-engine", "sql-gateway"]
stars: 144
forks: 11
openIssues: 12
closedIssues: 34
watchers: 2
contributors: 4
recentReleases: 10
createdAt: "2026-05-27T22:41:51Z"
lastCommitAt: "2026-11-07T09:28:57Z"
lastReleaseAt: "2026-10-05T21:59:33Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 95
undervaluedScore: 35
maintainers: ["hayssams"]
openGraphImageUrl: "https://opengraph.githubassets.com/673a082bc4361bff959a6a21a5ccb555841cf294822a76aecce8cc97c549d0ec/starlake-ai/quack-on-demand"
---

# Quack on Demand

**The open-source serving layer for DuckDB and DuckLake.** Multi-tenant DuckDB serving with table, row, and column level security, and Arrow Flight SQL on the wire.

```bash
uvx qod@latest serve --demo             # the full gateway on your laptop: no install, no Postgres
uvx qod@latest serve ./sales.duckdb     # the same gateway over YOUR DuckDB file, persistent + secured
uvx qod@latest serve ./warehouse/       # ...or a directory of parquet / csv
uvx qod@latest serve s3://bucket/data/  # ...or a remote prefix
QOD_ADMIN_PASSWORD='change-me' uvx qod@latest serve ./sales.duckdb  # set the admin password up front, no prompt

# admin login: user admin; password admin with --demo, otherwise the one chosen on the first run
#   (prompted, or QOD_ADMIN_PASSWORD; first run only, never stored; `uvx qod@latest admin reset-password` recovers it)
# admin UI: http://localhost:20900/ui/
# FlightSQL edge: localhost:31338 
# DuckDB (native Quack): quack:localhost:9494
# Ctrl-C stops the gateway and its nodes; so does `uvx qod@latest stop` from another terminal
```

One command boots a seeded warehouse with row, column, and table security already live. Connect with `tenant=acme`…
