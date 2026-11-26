---
repo: "javillegasna/oxedi"
name: "oxedi"
description: "Read and write X12 EDI 835 remittance files as tables — Python, DuckDB SQL, lossless, fast"
readmeQualityOk: true
url: "https://github.com/javillegasna/oxedi"
homepage: "https://javillegas.dev/oxedi/"
language: "Rust"
languages: ["Rust", "Python"]
languagePcts: [69, 26]
topics: ["arrow", "duckdb", "edi", "edi-835", "healthcare", "parser", "python", "remittance", "rust", "x12"]
stars: 6
forks: 2
openIssues: 14
closedIssues: 160
watchers: 0
contributors: 3
recentReleases: 10
createdAt: "2026-10-03T00:57:15Z"
lastCommitAt: "2026-11-26T23:34:37Z"
lastReleaseAt: "2026-10-12T16:42:13Z"
status: "newborn"
tags: ["solo_builder", "needs_contributors", "hidden_gem", "release_machine"]
healthScore: 98
undervaluedScore: 71
maintainers: ["javillegasna", "dependabot[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1402502840/9235ef3f-bdf9-461b-8284-1d558fd7346b"
---

# oxedi

A fast, lossless parser and writer for X12 EDI 835 files (electronic remittance advice). The
core is written in Rust and is available from Python and from DuckDB.

- **Lossless.** Every byte of the file is kept. Nothing is silently dropped, and the file can
  be written back exactly as it was read.
- **Ready-made tables.** Payments, claims, service lines and adjustments come out as typed
  tables that open in Polars, pandas, pyarrow or DuckDB.
- **Problems are reported, not raised.** Questionable data still parses. Each issue is a
  diagnostic that names the rule, the position and the value.

Documentation: **<https://javillegas.dev/oxedi/latest/>**. New here? Start with the
[five-minute tutorial](https://javillegas.dev/oxedi/latest/start/), or
**[try it in your browser](https://javillegas.dev/oxedi/viewer/)**: drop a file on the page and
see its tables and problems. Nothing is uploaded.

## Install

```bash
pip install oxedi                    # no Python dependencies
pip install "oxedi[polars]"          # or [pandas], [pyx12], [edi-835-parser]
```

Requires Python 3.11 or later. For DuckDB:

```sql
INSTALL oxedi FROM community;
LOAD oxedi;
```
