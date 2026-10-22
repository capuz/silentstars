---
repo: "dentiny/duckdb-distributed-execution"
name: "duckdb-distributed-execution"
description: "Distributed execution for duckdb queries."
readmeQualityOk: true
url: "https://github.com/dentiny/duckdb-distributed-execution"
language: "C++"
languages: ["C++"]
languagePcts: [92]
stars: 165
forks: 7
openIssues: 16
closedIssues: 27
watchers: 4
contributors: 3
recentReleases: 0
createdAt: "2025-10-12T05:38:25Z"
lastCommitAt: "2026-10-22T08:52:29Z"
status: "thriving"
tags: []
healthScore: 91
undervaluedScore: 38
maintainers: ["dentiny", "Andrewtangtang"]
openGraphImageUrl: "https://opengraph.githubassets.com/592357a672fc3127ee28a853652659c509718ccf5a27edcce0417a5b48d3c27a/dentiny/duckdb-distributed-execution"
---

# Duckherder - DuckDB Remote and Distributed Execution Extension

Duckherder is a DuckDB extension built upon [storage extension](https://github.com/duckdb/duckdb/pull/6066) that enables (certain) distributed query execution across multiple worker nodes using [Arrow Flight](https://arrow.apache.org/docs/format/Flight.html) for efficient data transfer. It allows you to seamlessly work with remote tables and execute queries in parallel across distributed workers while maintaining DuckDB's familiar SQL interface.

> [!WARNING]
> **This is a personal project and has nothing to do with DuckLabs.** It is not affiliated with, endorsed by, or associated with DuckDB Labs in any way.

## WIP Disclaimer
This repository is currently a work in progress, and not yet for production usage.
Feel free to play around with it, give me feedback, and ping me for feature request and collaboration!

## Table of Contents

- [Overview](#overview)
- [Architecture](#architecture)
- [Object-Storage-Backed Deployment Model](#object-storage-backed-deployment-model)
- [Distributed Execution System](#distributed-execution-system)
- [Installation](#installation)
- [Object Storage](#object-storage)
-…
