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
stars: 16
forks: 3
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 10
createdAt: "2024-03-15T17:49:29Z"
lastCommitAt: "2026-11-06T02:44:01Z"
lastReleaseAt: "2026-10-28T05:15:35Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 89
undervaluedScore: 72
maintainers: ["AnanthaRajuC", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/c6827813f0dec89dc9281bc21c74bff0cb656d6bd1016251d1cccfea76706b09/AnanthaRajuC/QueryAPIGate"
discussionCount: 1
---

# QueryAPIGate

### Turn SQL into governed data access: REST APIs for your apps, MCP tools for your AI agents.

[**Full documentation**](https://AnanthaRajuC.github.io/QueryAPIGate/)

         alt="One governed gate between your databases and everything that asks them for data: apps, partners, AI agents, people and pipelines come in through five front doors - REST endpoints, the MCP server, live events, exports and the CLI, the Management API - and every call passes the same governed core (identity, policy, execution) before it reaches PostgreSQL, MySQL, SQLite, DuckDB, ClickHouse, MongoDB, the experimental H2 and JDBC, files through DuckDB, or deliveries to object storage" width="820">

         alt="What happens to every request, one partner call followed through eight stages: identify the caller, apply its limits, check the grant, validate parameters, guard the SQL, run it, mask and format, record it - a stage that fails stops the call with a typed error code" width="820">

**QueryAPIGate** is a self-hosted gateway between your databases and everything that asks them for data. Save a SQL
query once, and it is both:

- **a REST endpoint** for apps, partners and pipelines:…
