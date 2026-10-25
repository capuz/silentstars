---
repo: "rinie/duckdb-oracle"
name: "duckdb-oracle"
description: "Oracle extension for DuckDb based on duckdb-postgres converted by Claude Code"
readmeQualityOk: true
url: "https://github.com/rinie/duckdb-oracle"
language: "C"
languages: ["C"]
languagePcts: [89]
stars: 7
forks: 2
openIssues: 3
closedIssues: 1
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-02-28T14:20:21Z"
lastCommitAt: "2026-10-25T08:40:00Z"
lastReleaseAt: "2026-03-01T16:57:25Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 70
undervaluedScore: 26
maintainers: ["rinie", "claude"]
openGraphImageUrl: "https://opengraph.githubassets.com/4f7ad4b19eb2e5d391964c2d83706de85f20ec4f6f8a6d219c40493c6951e416/rinie/duckdb-oracle"
---

# duckdb-oracle

A DuckDB extension that attaches Oracle databases, modelled after `duckdb-postgres` but using Oracle via [ODPI-C](https://oracle.github.io/odpi/).

## Requirements

- Oracle Instant Client (or a full Oracle client installation) in your `PATH` / `LD_LIBRARY_PATH` / `DYLD_LIBRARY_PATH`
- The `oracle.duckdb_extension` binary for your platform

## Quick start

```sql
-- Load the extension
LOAD 'oracle';

-- Attach an Oracle database (connect string follows Oracle EZConnect syntax)
ATTACH 'user/password@host:1521/service' AS mydb (TYPE oracle);

-- Optional: attach only a specific schema
ATTACH 'user/password@host:1521/service' AS mydb (TYPE oracle, SCHEMA 'HR');

-- Browse schemas and tables (names only; a table's columns are loaded when it is first used)
SELECT schema_name, table_name FROM duckdb_tables() WHERE database_name = 'mydb';

-- SHOW ALL TABLES also lists columns, so it only shows tables whose columns are loaded.
-- Attach with LOAD_COLUMNS to have every table listed (see "ATTACH options").
ATTACH 'user/password@host:1521/service' AS mydb2 (TYPE oracle, LOAD_COLUMNS true);
SHOW ALL TABLES;

-- Query Oracle tables directly
SELECT * FROM mydb.hr.employees…
