---
repo: "AzizNadirov/ParVu"
name: "ParVu"
description: "Fast desktop viewer and editor for large Parquet, CSV, JSON and Excel files. Built with Rust, Tauri and DuckDB: lazy SQL over multi-GB files without loading them into memory. Filter, group, pivot and convert without SQL, charts, smart column types, and AI assistants through MCP or your own API key."
readmeQualityOk: true
url: "https://github.com/AzizNadirov/ParVu"
homepage: "https://open-tech.co/otech/opensource/1"
language: "Rust"
languages: ["Rust", "TypeScript"]
languagePcts: [58, 39]
topics: ["data-science", "pandas", "parquet", "ui", "parquet-viewer", "duckdb-database"]
stars: 10
forks: 2
openIssues: 0
closedIssues: 8
watchers: 1
contributors: 2
recentReleases: 4
createdAt: "2024-06-08T15:08:23Z"
lastCommitAt: "2026-11-17T12:14:43Z"
lastReleaseAt: "2026-11-16T17:24:50Z"
status: "thriving"
tags: []
healthScore: 100
undervaluedScore: 86
maintainers: ["AzizNadirov"]
openGraphImageUrl: "https://opengraph.githubassets.com/9b1499dab929495e5e976d6a3fcfe9d661f4160120c27cc5e0b28de8a99fcea9/AzizNadirov/ParVu"
discussionCount: 0
---

# ParVu - **Par**quet **Vie**wer

## Overview

A fast desktop application for viewing and querying large Parquet, CSV, JSON and Excel files. Built with [Rust](https://www.rust-lang.org/), [Tauri](https://tauri.app/), [React](https://react.dev/) and [DuckDB](https://duckdb.org/).

Version 1.0 is a rewrite of the earlier Python/PyQt6 app. It reads the same `~/.ParVu` settings, recent files and themes, so upgrading needs no migration. The rewrite is described in [plans/RUST_REWRITE_PLAN.md](https://github.com/AzizNadirov/ParVu/blob/HEAD/plans/RUST_REWRITE_PLAN.md).

## Features

### File Support
- **Parquet** (`.parquet`, `.pq`), **CSV** (`.csv`, `.tsv`), **JSON** (`.json`, `.jsonl`, `.ndjson`) and **Excel** (`.xlsx`, `.xls`)
- **Lazy loading** - Parquet, CSV and JSON are queried in place, never loaded into memory
- **Huge files** (8GB+) with pagination; only the visible page is fetched

### SQL Querying
- Full DuckDB SQL
- Syntax highlighting and auto-completion for keywords, tables and columns
- Errors are reported before anything changes

### Expression Language (DSL)
- **Two editor modes** - switch between SQL and expression mode
- **Column assignment** - `data[new_col] =…
