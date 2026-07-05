---
repo: "Taure/kura"
name: "kura"
description: "Database layer for Erlang"
readmeQualityOk: true
url: "https://github.com/Taure/kura"
language: "Erlang"
languages: ["Erlang"]
languagePcts: [100]
stars: 15
forks: 3
openIssues: 6
closedIssues: 1
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2026-02-14T12:06:13Z"
lastCommitAt: "2026-07-05T20:54:52Z"
lastReleaseAt: "2026-03-05T05:26:03Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 29
maintainers: ["Taure"]
openGraphImageUrl: "https://opengraph.githubassets.com/58684fdf57b6af518ebfb520f4abecf4f3a95b33678b87f23a44a8d678c7aa45/Taure/kura"
---

# Kura

</p>

Database layer for Erlang - Ecto-equivalent abstractions in pure Erlang. Pluggable backends: [`kura_postgres`](https://github.com/Taure/kura_postgres) (PostgreSQL via pgo), [`kura_sqlite`](https://github.com/Taure/kura_sqlite) (SQLite via esqlite).

## Features

- **Schema** - behaviour-based schema definitions with type metadata
- **Changeset** - cast external params, validate, track changes and errors
- **Query Builder** - composable, functional query construction
- **SQL Compiler** - parameterized SQL generation (no string interpolation)
- **Repo** - CRUD operations with automatic type conversion and PG error mapping
- **Associations** - `belongs_to`, `has_one`, `has_many`, `many_to_many` with preloading
- **Embedded Schemas** - `embeds_one`, `embeds_many` stored as JSONB
- **Multi** - atomic transaction pipelines
- **Migrations** - DDL operations with automatic module-based discovery
- **Enums** - atom-backed enum types stored as `VARCHAR`
- **Telemetry** - query logging with timing
- **Lifecycle Hooks** - before/after callbacks for insert, update, delete
- **Audit Trail** - automatic change tracking with actor context
- **Pagination** - offset-based and…
