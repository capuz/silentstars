---
repo: "AnanthaRajuC/QueryAPIGate"
name: "QueryAPIGate"
description: "Self-hosted gateway that turns saved SQL queries into versioned REST endpoints with typed, injection-safe parameters. Scoped API keys and roles, per-user JWT sign-in with row-level binding, run history, live SSE events and an admin UI. Postgres, MySQL, ClickHouse, SQLite, DuckDB, H2, MongoDB and JDBC"
readmeQualityOk: true
url: "https://github.com/AnanthaRajuC/QueryAPIGate"
homepage: "https://pypi.org/project/queryapigate/"
language: "Python"
languages: ["Python", "TypeScript"]
languagePcts: [77, 20]
topics: ["api", "mysql", "python", "sql", "clickhouse", "flask", "sqlite", "api-gateway", "data-api", "data-engineering"]
stars: 13
forks: 3
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 1
createdAt: "2024-03-15T17:49:29Z"
lastCommitAt: "2026-10-15T08:32:07Z"
lastReleaseAt: "2026-10-15T07:54:22Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 85
undervaluedScore: 71
maintainers: ["AnanthaRajuC"]
openGraphImageUrl: "https://opengraph.githubassets.com/4f8a3b0650657dbef26421e744dcbefc3b3c1885bec7e97f2b2c1f1fa54739c0/AnanthaRajuC/QueryAPIGate"
discussionCount: 1
---

# QueryAPIGate

### Turn SQL queries into secure, governed REST APIs.

> **QueryAPIGate was previously named SQL2API.** Upgrading? See [Upgrading from SQL2API](https://github.com/AnanthaRajuC/QueryAPIGate/blob/HEAD/documentation/INSTALLATION_AND_SETUP.md#upgrading-from-sql2api) for what changed.

[**Full documentation**](https://AnanthaRajuC.github.io/QueryAPIGate/)

**QueryAPIGate** is a self-hosted service that runs SQL against your databases - and against Parquet, CSV and JSON files
on disk, S3, GCS or the web, through DuckDB - and returns the results as JSON, NDJSON, XML, YAML, CSV, TSV, Excel or
Parquet. Save a query once and it becomes a versioned endpoint with typed,
injection-safe parameters and run history - without writing a controller, a repository layer, pagination, auth or
serialization boilerplate for it.

Write SQL. Configure the query. Apply access controls. Get an API.

~~~bash
$ curl 'http://127.0.0.1:5000/q/example_film_search?text=Harbor&page_size=2' -H 'X-API-Key: demo-key'
[{"film_id":48,"title":"Broken Harbor","category":"Action","rating":"PG-13"},{"film_id":44,"title":"Electric Harbor","category":"Documentary","rating":"G"}]

$ curl…
