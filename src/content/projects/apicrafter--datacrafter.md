---
repo: "apicrafter/datacrafter"
name: "datacrafter"
description: "NoSQL extract, transform, load (ETL) toolkit with Python"
readmeQualityOk: true
url: "https://github.com/apicrafter/datacrafter"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["data-pipelines", "etl", "data-engineering"]
stars: 16
forks: 3
openIssues: 0
closedIssues: 26
watchers: 2
contributors: 2
recentReleases: 0
createdAt: "2022-03-19T08:46:48Z"
lastCommitAt: "2026-10-07T10:30:52Z"
lastReleaseAt: "2025-12-09T09:54:31Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 70
undervaluedScore: 45
maintainers: ["ivbeg"]
openGraphImageUrl: "https://opengraph.githubassets.com/b9b26ca0852d0b04603c68b3c2039ce97a48ecde0b4afe59348f029bf0f57fa8/apicrafter/datacrafter"
---

# Datacrafter - NoSQL ETL Tool

**Datacrafter** is an open-source NoSQL ETL (Extract, Transform, Load) tool designed for data extraction, transformation, and loading with a focus on NoSQL data formats. It provides a command-line interface for building data pipelines that extract data from various sources, process it, and load it into different destinations.

> **Note:** This project is in alpha stage. Code migration from a closed repository is in progress, and documentation is being continuously improved.

## Features

- **NoSQL-first**: JSON Lines and BSON are the native intermediate formats
- **Compressed inputs**: `.gz` / `.bz2` / `.xz` / `.zst` files are read transparently by stream-capable sources
- **CLI-first YAML projects**: declare extract → process → load in `datacrafter.yml`
- **File and URL extraction**: CSV, JSON, JSONL, XML, XLS/XLSX, ZIP+XML, patterned HTML indexes, RSS/Atom, DCAT catalogs, APIBackuper, trusted Python `collect()` scripts
- **Record transforms**: `keymap`, `typemap`, custom Python `process(record)`, plus optional `autotype` (sample-based type inference) and `autoid` (stable `_id`)
- **Inspect**: `datacrafter schema` and `datacrafter metrics` read…
