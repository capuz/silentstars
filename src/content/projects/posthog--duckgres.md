---
repo: "PostHog/duckgres"
name: "duckgres"
description: "DuckDB Postgres Server"
readmeQualityOk: true
url: "https://github.com/PostHog/duckgres"
language: "Go"
languages: ["Go"]
languagePcts: [87]
stars: 139
forks: 17
openIssues: 4
closedIssues: 25
watchers: 4
contributors: 38
recentReleases: 0
createdAt: "2025-12-03T20:56:13Z"
lastCommitAt: "2026-07-07T06:38:55Z"
lastReleaseAt: "2025-12-11T23:43:53Z"
status: "thriving"
tags: []
healthScore: 97
undervaluedScore: 32
maintainers: ["benben", "bill-ph", "fuziontech"]
openGraphImageUrl: "https://opengraph.githubassets.com/9bdd83db8bf0bc71eb9d9a97e67b94c2267e78de00664a9743e66c3bde81552f/PostHog/duckgres"
---

# Duckgres

</p>

A PostgreSQL wire protocol compatible server backed by DuckDB. Connect with any PostgreSQL client (psql, pgAdmin, lib/pq, psycopg2, etc.) and get DuckDB's analytical query performance.

## Table of Contents

- [Features](#features)
- [Metrics](#metrics)
- [Runbooks](#runbooks)
  - [Perf Runbook](https://github.com/PostHog/duckgres/blob/HEAD/docs/perf-harness-runbook.md)
  - [Worker Upgrades & Canaries](https://github.com/PostHog/duckgres/blob/HEAD/docs/runbooks/worker-upgrades.md)
- [Quick Start](#quick-start)
- [Configuration](#configuration)
  - [YAML Configuration](#yaml-configuration)
  - [Environment Variables](#environment-variables)
  - [CLI Flags](#cli-flags)
  - [PostHog Logging](#posthog-logging)
  - [PostHog Product-Analytics Events](#posthog-product-analytics-events)
- [DuckDB Extensions](#duckdb-extensions)
- [DuckLake Integration](#ducklake-integration)
  - [Quick Start with Docker](#quick-start-with-docker)
  - [Object Storage Configuration](#object-storage-configuration)
  - [Seeding Sample Data](#seeding-sample-data)
- [COPY Protocol](#copy-protocol)
- [Graceful Shutdown](#graceful-shutdown)
- [Rate Limiting](#rate-limiting)
- [Usage…
