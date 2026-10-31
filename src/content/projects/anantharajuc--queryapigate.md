---
repo: "AnanthaRajuC/QueryAPIGate"
name: "QueryAPIGate"
description: "Self-hosted gateway that turns saved SQL queries into versioned REST endpoints with typed, injection-safe parameters. Scoped API keys and roles, per-user JWT sign-in with row-level binding, run history, live SSE events and an admin UI. Postgres, MySQL, ClickHouse, SQLite, DuckDB, H2, MongoDB and JDBC"
readmeQualityOk: true
url: "https://github.com/AnanthaRajuC/QueryAPIGate"
homepage: "https://anantharajuc.github.io/QueryAPIGate-website/Home.dc.html"
language: "Python"
languages: ["Python"]
languagePcts: [75]
topics: ["api", "mysql", "python", "sql", "clickhouse", "flask", "sqlite", "api-gateway", "data-api", "data-engineering"]
stars: 15
forks: 3
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 10
createdAt: "2024-03-15T17:49:29Z"
lastCommitAt: "2026-10-31T15:58:56Z"
lastReleaseAt: "2026-10-28T05:15:35Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 90
undervaluedScore: 73
maintainers: ["AnanthaRajuC", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/1e6214d8978606418eec3adfccd02a5fdfb72f3442c6127775d100f801371d69/AnanthaRajuC/QueryAPIGate"
discussionCount: 1
---

# QueryAPIGate

### Turn SQL into secure, governed REST APIs - and MCP tools for AI agents.

[**Full documentation**](https://AnanthaRajuC.github.io/QueryAPIGate/)

         alt="One governed gate between your databases and everything that asks them for data: apps, partners, AI agents, people and pipelines come in through five front doors - REST endpoints, the MCP server, live events, exports and the CLI, the Management API - and every call passes the same governed core (identity, policy, execution) before it reaches PostgreSQL, MySQL, SQLite, DuckDB, ClickHouse, MongoDB, the experimental H2 and JDBC, files through DuckDB, or deliveries to object storage" width="820">

         alt="What happens to every request, one partner call followed through eight stages: identify the caller, apply its limits, check the grant, validate parameters, guard the SQL, run it, mask and format, record it - a stage that fails stops the call with a typed error code" width="820">

**QueryAPIGate** is a self-hosted service that runs SQL against your databases - and against Parquet, CSV and JSON files
on disk, S3, GCS or the web, through DuckDB - and returns the results as JSON, NDJSON, XML, YAML, CSV,…
