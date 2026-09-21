---
repo: "PostHog/duckgres"
name: "duckgres"
description: "OLAPostHog Server"
readmeQualityOk: true
url: "https://github.com/PostHog/duckgres"
language: "Go"
languages: ["Go"]
languagePcts: [88]
stars: 181
forks: 18
openIssues: 5
closedIssues: 25
watchers: 4
contributors: 41
recentReleases: 0
createdAt: "2025-12-03T20:56:13Z"
lastCommitAt: "2026-09-21T09:14:35Z"
lastReleaseAt: "2025-12-11T23:43:53Z"
status: "thriving"
tags: []
healthScore: 96
undervaluedScore: 35
maintainers: ["fuziontech", "bill-ph", "benben"]
openGraphImageUrl: "https://opengraph.githubassets.com/5f7628e0f76bbe0b53e2fa2d0e518d13bb81bf85ba9d25decff521212c285b5e/PostHog/duckgres"
---

# Duckgres

Trino operators: see [cell registration and placement](https://github.com/PostHog/duckgres/blob/HEAD/docs/trino-cells.md) for
the optional registry, unchanged legacy defaults, and migration limitations.

</p>

A PostgreSQL wire protocol compatible server backed by DuckDB. Connect with any PostgreSQL client (psql, pgAdmin, lib/pq, psycopg2, etc.) and get DuckDB's analytical query performance.

## Table of Contents

- [Features](#features)
- [Trino API identity](#trino-api-identity)
- [Metrics](#metrics)
- [Runbooks](#runbooks)
  - [Perf Runbook](https://github.com/PostHog/duckgres/blob/HEAD/docs/perf-harness-runbook.md)
  - [Worker Upgrades & Canaries](https://github.com/PostHog/duckgres/blob/HEAD/docs/runbooks/worker-upgrades.md)
  - [Dev Scenario Runner](https://github.com/PostHog/duckgres/blob/HEAD/docs/runbooks/scenario-dev.md)
- [Quick Start](#quick-start)
- [Configuration](#configuration)
  - [YAML Configuration](#yaml-configuration)
  - [Environment Variables](#environment-variables)
  - [CLI Flags](#cli-flags)
  - [PostHog Logging](#posthog-logging)
  - [PostHog Product-Analytics Events](#posthog-product-analytics-events)
- [DuckDB…
