---
repo: "hyparam/hypgrep"
name: "hypgrep"
description: "Full Text Search for Parquet"
readmeQualityOk: true
url: "https://github.com/hyparam/hypgrep"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [100]
stars: 6
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2025-11-22T02:12:46Z"
lastCommitAt: "2026-07-31T06:28:12Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 86
undervaluedScore: 44
maintainers: ["platypii"]
openGraphImageUrl: "https://opengraph.githubassets.com/661ef71990c760afb7863318fda81c369a94b28636b1ff5975062fbe0d013c49/hyparam/hypgrep"
---

# HypGrep

Build a compact n-gram search index for a Parquet file using [`hyparquet`](https://github.com/hyparam/hyparquet) and [`hyparquet-writer`](https://github.com/hyparam/hyparquet-writer). Queries are case-insensitive substring matches — grep semantics over a precomputed index.

> Part of **[HypStack](https://hypstack.ai/)**, an open-source stack for AI observability.

## Why?

Enable efficient grep-style search on large Parquet datasets from any client without a server. Store your Parquet dataset on S3, generate a compact index file, and query it directly from a browser or other clients using HTTP range requests. The index tells you exactly which row blocks to fetch, so you only download the data you need.

Perfect for serverless architectures where you want to offer search capabilities without managing infrastructure.

## Benchmarks

Full-text search over 3,199,860 real LLM conversations ([WildChat-4.8M](https://huggingface.co/datasets/allenai/WildChat-4.8M)), the JSON conversation stored verbatim (14.7 GB of Parquet), searched with 109 queries across 15 shapes (tokens, phrases, JSON structure, code, Unicode, and regex) run against the same data on every engine and…
