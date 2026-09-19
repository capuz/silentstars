---
repo: "sonhn85/DuckDBExcelAddin"
name: "DuckDBExcelAddin"
description: "A native Microsoft Excel XLL add-in for querying Excel ranges with DuckDB SQL and parameter binding."
readmeQualityOk: true
url: "https://github.com/sonhn85/DuckDBExcelAddin"
homepage: "https://github.com/sonhn85/DuckDBExcelAddin"
language: "C"
languages: ["C"]
languagePcts: [99]
topics: ["addin", "analytics", "c", "duckdb", "embedded", "excel", "office", "spreadsheet", "sql", "windows"]
stars: 5
forks: 0
openIssues: 1
closedIssues: 22
watchers: 0
contributors: 1
recentReleases: 3
createdAt: "2026-08-08T04:03:28Z"
lastCommitAt: "2026-09-19T01:27:23Z"
lastReleaseAt: "2026-09-18T13:55:10Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 98
undervaluedScore: 67
maintainers: ["sonhn85"]
openGraphImageUrl: "https://opengraph.githubassets.com/16722f13193cb8a4ca84a7512b8cff779195b4ccfca1e1ade9314e7a3eee3983/sonhn85/DuckDBExcelAddin"
---

# DuckDBExcelAddin


A native Microsoft Excel XLL add-in for querying Excel ranges with DuckDB SQL and parameter binding.

## Screenshot



## Quick Start

```excel
=DUCKDB.EXEC(
"SELECT cif, SUM(amount)
 FROM xlrange(1)
 GROUP BY cif",
A1:D10000
)
```

Query Excel ranges directly with DuckDB SQL and return the result as a dynamic array.

## Features

- Native DuckDB integration
- Query Excel ranges
- Parameter binding from Excel values
- Asynchronous execution
- No .NET runtime required

## Status

> **Stable**
>
> Core functionality is considered stable and suitable for production use. Future releases will prioritize backward compatibility with existing workbooks.

## Comparison with xlDuckDB

This project was inspired by [xlDuckDB](https://github.com/RusselWebber/xlDuckDb), an XLL add-in that integrates DuckDB with Microsoft Excel.

| Feature | DuckDBExcelAddin | xlDuckDB |
|----------|----------|----------|
| Native Excel formula experience | ✅ | ✅ |
| Dynamic array (spill) results | ✅ | ✅ |
| Query external files | ✅ | ✅ |
| Query Excel ranges | ✅ | ✅ |
| Parameter binding from Excel values | ✅ | ❌ |
| `xlrange` type inference…
