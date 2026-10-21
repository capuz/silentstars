---
repo: "getravi/duckDBSP"
name: "duckDBSP"
description: "Experimental DBSP implementation as a DuckDB extension"
readmeQualityOk: true
url: "https://github.com/getravi/duckDBSP"
language: "C++"
languages: ["C++"]
languagePcts: [93]
stars: 12
forks: 1
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 1
recentReleases: 0
createdAt: "2026-02-03T19:06:39Z"
lastCommitAt: "2026-10-21T23:09:28Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 77
undervaluedScore: 49
maintainers: ["getravi"]
openGraphImageUrl: "https://opengraph.githubassets.com/4258986402b3794f5114252a6f55a7bccf76b29cd8db7b417990f15411c2e60f/getravi/duckDBSP"
---

# DBSP for DuckDB

Real-time incrementally maintained materialized views for DuckDB, based on [Database Stream Processing (DBSP)](https://www.feldera.com/blog/what-is-dbsp) theory.

## Overview

Traditional materialized views recompute entirely when underlying data changes. DBSP-powered views update **incrementally** in O(delta) time - only processing the changes, not the entire dataset.

```
Traditional:  INSERT 1 row → Recompute 1M rows → O(n)
DBSP:         INSERT 1 row → Update affected aggregates → O(delta)
```

### Key Features

- **Incremental Updates**: Views update in O(delta) time, not O(n)
- **SQL Syntax**: Define views using familiar SQL
- **Cascading Views**: Views can reference other views
- **Automatic CDC**: Change Data Capture with sync detection
- **Delta read-back**: `dbsp_changes('view')` returns the last sync's
  output delta with signed weights
- **Attached catalogs**: views can source tables in `ATTACH`ed databases
  (`... FROM m.orders`); tables are keyed by canonical
  `catalog.schema.table`
- **Persistence**: Save/restore views across sessions
- **Auto-persist**: views survive a clean connection reopen with no
  explicit save/load calls…
