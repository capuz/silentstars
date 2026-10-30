---
repo: "o11ylite/o11ylite"
name: "o11ylite"
description: " Free, open-source OpenTelemetry backend powered by DuckDB 🦆 and SQLite"
readmeQualityOk: true
url: "https://github.com/o11ylite/o11ylite"
language: "Clojure"
languages: ["Clojure", "TypeScript"]
languagePcts: [69, 28]
topics: ["clojure", "duckdb", "opentelemetry", "sqlite", "alertmanager", "inertiajs", "ducklake"]
stars: 41
forks: 1
openIssues: 1
closedIssues: 1
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2025-11-24T13:02:35Z"
lastCommitAt: "2026-10-30T11:03:31Z"
lastReleaseAt: "2026-04-07T13:29:24Z"
status: "thriving"
tags: ["hidden_gem", "funded"]
healthScore: 90
undervaluedScore: 45
maintainers: ["renovate[bot]", "zhming0"]
openGraphImageUrl: "https://opengraph.githubassets.com/2a419e65e373a926004dede500da181ebcf91415e186aa40c4c77218aadd2d3d/o11ylite/o11ylite"
fundingLinks: ["GITHUB:https://github.com/zhming0"]
---

Logs, metrics, and traces all in a single process.

## Features

- **Full OpenTelemetry support.** Ingests traces, logs, and metrics via OTLP/gRPC and OTLP/HTTP.
- **Single process.** One container runs the entire stack: ingestion, storage, query, and UI.
- **Automatic schema evolution.** New fields in your telemetry automatically become queryable columns. No manual schema management.
- **DuckDB + DuckLake.** Telemetry stored as open Parquet files. Fast analytical queries, no heavy infrastructure.
- **Explore.** Query and visualize traces, logs, and metrics with a built-in query builder and trace waterfall view.
- **Alert Rules.** Define alert rules with Alertmanager-compatible webhook notifications.
- **Notebooks.** Compose and share investigative workflows combining queries and notes.
- **Agent native.** A built-in [MCP server](https://github.com/o11ylite/o11ylite/blob/HEAD/docs/agent-native.md#mcp-server) with OAuth, plus an [agent skill package](https://github.com/o11ylite/o11ylite/blob/HEAD/docs/agent-native.md), let LLM agents query telemetry, manage alerts, and edit notebooks out of the box.

## Philosophy

**Wide events over scattered logs.** Traditional logging produces…
