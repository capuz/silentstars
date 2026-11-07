---
repo: "bino-bi/bino-cli"
name: "bino-cli"
description: "Declarative PDF reporting CLI — define data sources, SQL queries, and layouts in YAML, then render pixel-perfect PDFs. Supports CSV, Excel, Parquet, Postgres, and MySQL via DuckDB. Live preview, linting, and VS Code extension included."
readmeQualityOk: true
url: "https://github.com/bino-bi/bino-cli"
homepage: "https://cli.bino.bi"
language: "Go"
languages: ["Go"]
languagePcts: [84]
topics: ["anayltics", "business-intelligence", "cli", "data-driven", "data-visualization", "ibcs", "pdf-generation", "report-generator", "reporting-engine", "yaml"]
stars: 6
forks: 0
openIssues: 7
closedIssues: 7
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2025-12-12T18:43:24Z"
lastCommitAt: "2026-11-07T13:55:07Z"
lastReleaseAt: "2025-12-15T16:19:12Z"
status: "thriving"
tags: []
healthScore: 89
undervaluedScore: 66
maintainers: ["ThatScalaGuy", "dependabot[bot]", "github-actions[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1115364736/4f8d057f-619e-42cf-929b-19b4a4d4e699"
discussionCount: 0
---

> [!WARNING]
> bino is under active development. Configuration and CLI APIs are not yet stable - expect breaking changes between releases.

> [!NOTE]
> bino is currently tightly coupled to [bn-template-engine](https://github.com/bino-bi/bn-template-engine) as its visualization engine. This coupling will be removed in a future release, making the Viz Engine pluggable.

## What is bino?

bino is a command-line tool that turns declarative YAML manifests and SQL queries into production-ready PDF reports. It uses [DuckDB](https://duckdb.org/) as an embedded SQL engine and Chrome headless shell for pixel-perfect PDF rendering.

For full documentation, visit **[cli.bino.bi](https://cli.bino.bi)**.

## Highlights

- **Declarative reports** - Define data sources, queries, layouts, and artefacts in YAML. No imperative code required.
- **SQL-native** - Query CSV, Excel, Parquet, and databases using DuckDB's full SQL dialect.
- **Pixel-perfect PDFs** - Chrome headless shell renders HTML templates to PDF with precise control over layout, pagination, and styling.
- **Live preview** - `bino preview` watches for changes and hot-reloads in the browser via SSE.
- **Validation & linting** - `bino…
