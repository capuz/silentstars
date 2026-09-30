---
repo: "simonplmak-cloud/hkex-filing-scraper"
name: "hkex-filing-scraper"
description: "Scrape 25+ years of HKEx (Hong Kong Stock Exchange) regulatory filings into PostgreSQL, MySQL/MariaDB, SQLite, MongoDB, Neo4j, ClickHouse, DuckDB, or SurrealDB — with full-text extraction, graph linking, and a hosted MCP server for AI agents."
readmeQualityOk: true
url: "https://github.com/simonplmak-cloud/hkex-filing-scraper"
homepage: "https://hkex-listco-updates.ascent-partners.com/"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["financial-data", "graph-database", "hkex", "scraper", "surrealdb", "regulatory-filings", "hong-kong-stock-exchange", "postgresql", "clickhouse", "duckdb"]
stars: 16
forks: 5
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 1
recentReleases: 6
createdAt: "2026-02-11T14:35:11Z"
lastCommitAt: "2026-09-30T09:56:04Z"
lastReleaseAt: "2026-09-19T17:27:45Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 94
undervaluedScore: 66
maintainers: ["simonplmak-cloud", "dependabot[bot]", "vercel[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1155456163/8f242b1b-1939-4cb5-abd9-8f924e9a8ccc"
discussionCount: 1
---

# HKEx Filing Scraper

An open-source Python tool that scrapes 25+ years of Hong Kong Stock Exchange (HKEx)
regulatory filings and ingests them into **any combination of nine databases** — with
full-text and table extraction, chunk-level coverage, optional graph linking, and a
**read-only MCP server** so AI agents can query the corpus or the live site.

It speaks the undocumented HKEx JSON API directly, which is faster and more resilient than
driving a browser.

## Vendors & integrations

**Databases** — nine first-class destinations, in documented popularity order (see the
[support matrix](https://github.com/simonplmak-cloud/hkex-filing-scraper/blob/HEAD/docs/sinks/README.md)):

- [PostgreSQL](https://github.com/simonplmak-cloud/hkex-filing-scraper/blob/HEAD/docs/sinks/postgresql.md) — production-grade open-source relational
- [MySQL](https://github.com/simonplmak-cloud/hkex-filing-scraper/blob/HEAD/docs/sinks/mysql.md) / [MariaDB](https://github.com/simonplmak-cloud/hkex-filing-scraper/blob/HEAD/docs/sinks/mysql.md) — GPL relational servers, one driver
- [SQLite](https://github.com/simonplmak-cloud/hkex-filing-scraper/blob/HEAD/docs/sinks/sqlite.md) — zero-server file database,…
