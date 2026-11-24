---
repo: "TabularisDB/tabularis-postgresql-plugin"
name: "tabularis-postgresql-plugin"
description: "Full-featured PostgreSQL driver for Tabularis: browse schemas, tables, views, routines, and triggers; run queries with EXPLAIN plans; edit rows with type-aware binding for enums, JSON, arrays, UUIDs; generate DDL for tables, columns, indexes, and foreign keys."
readmeQualityOk: true
url: "https://github.com/TabularisDB/tabularis-postgresql-plugin"
homepage: "https://registry.tabularis.dev/plugins/postgresql"
language: "Rust"
languages: ["Rust"]
languagePcts: [100]
topics: ["database", "plugin", "postgres", "postgresql", "relational", "rust", "tabularis", "tabularis-plugin", "database-driver"]
stars: 7
forks: 6
openIssues: 13
closedIssues: 60
watchers: 0
contributors: 6
recentReleases: 1
createdAt: "2026-08-04T19:24:50Z"
lastCommitAt: "2026-11-24T14:10:33Z"
lastReleaseAt: "2026-09-04T12:13:52Z"
status: "thriving"
tags: ["hidden_gem", "funded", "fork_magnet"]
healthScore: 93
undervaluedScore: 71
maintainers: ["aesslinger", "dependabot[bot]", "wuzi"]
openGraphImageUrl: "https://opengraph.githubassets.com/3fb97db414375fbf3be55f42c8be64830bc0f8a65dacc2303df7e08890c9a69c/TabularisDB/tabularis-postgresql-plugin"
fundingLinks: ["GITHUB:https://github.com/debba", "CUSTOM:https://tabularis.dev/sponsors"]
---

# tabularis-postgresql-plugin

A [PostgreSQL](https://www.postgresql.org/) plugin for [Tabularis](https://github.com/TabularisDB/tabularis),
the open-source database client.

This plugin connects Tabularis to PostgreSQL via a standalone Rust binary speaking
JSON-RPC 2.0 over stdio, replacing what was originally a built-in driver compiled
directly into the Tabularis application. It is byte-for-byte behaviorally
identical to that built-in driver, proven by an 82-test parity suite that runs
both drivers against the same live database and compares every response.

> **Requires Tabularis v0.20.0 or later.** This plugin relies on the plugin
> runtime introduced in that release; it will not load on earlier versions of
> [Tabularis](https://github.com/TabularisDB/tabularis).
