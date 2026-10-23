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
stars: 13
forks: 1
openIssues: 1
closedIssues: 34
watchers: 0
contributors: 1
recentReleases: 6
createdAt: "2026-08-08T04:03:28Z"
lastCommitAt: "2026-10-23T09:33:24Z"
lastReleaseAt: "2026-10-09T03:23:24Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "hidden_gem", "release_machine"]
healthScore: 98
undervaluedScore: 59
maintainers: ["sonhn85"]
openGraphImageUrl: "https://opengraph.githubassets.com/55bede3fa053645dc5b9db169cbd06c34ab088c7d40e4135c6e9ca30596b3ded/sonhn85/DuckDBExcelAddin"
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
