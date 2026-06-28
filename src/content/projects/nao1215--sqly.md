---
repo: "nao1215/sqly"
name: "sqly"
description: "executes SQL against CSV, TSV, LTSV, JSON, JSONL, Parquet, Microsoft Excel™ , ACH, and Fedwire files with shell."
url: "https://github.com/nao1215/sqly"
language: "Go"
languages: ["Go"]
languagePcts: [88]
topics: ["command-line", "command-line-tool", "golang", "csv", "sql", "sqlite3", "tsv", "ltsv", "excel", "cross-platform"]
stars: 145
forks: 4
openIssues: 1
closedIssues: 301
watchers: 2
contributors: 5
recentReleases: 0
createdAt: "2022-10-30T05:47:08Z"
lastCommitAt: "2026-06-28T01:47:08Z"
lastReleaseAt: "2022-11-11T13:29:49Z"
status: "thriving"
tags: ["solo_builder", "funded"]
healthScore: 96
undervaluedScore: 43
maintainers: ["nao1215", "dependabot[bot]", "edsilegxrepo"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/559441860/8b0bcead-5e2d-41e6-bda4-f5ecb1f4130f"
fundingLinks: ["GITHUB:https://github.com/nao1215"]
---

# sqly

sqly runs SQL against CSV, TSV, LTSV, JSON, JSONL, Parquet, Excel, ACH, and Fedwire files. It imports them into an [SQLite3](https://www.sqlite.org/index.html) in-memory database, so joins, CTEs, and aggregates all work. Compressed files (`.gz`, `.bz2`, `.xz`, `.zst`, `.z`, `.snappy`, `.s2`, `.lz4`) are read transparently.

Run a query directly, or open the interactive shell with completion and history.

```shell
sqly --sql "SELECT * FROM data" data.csv.gz
sqly --sql "SELECT user_name, position FROM user JOIN identifier ON user.identifier = identifier.id" testdata/user.csv testdata/identifier.csv
```

## Install

```shell
go install github.com/nao1215/sqly@latest
```

```shell
brew install nao1215/tap/sqly
```

Runs on Windows, macOS, and Linux. Requires Go 1.25 or later when building from source.

## Run SQL: --sql

Pass file or directory paths as arguments; sqly imports each one and names the table after the file (so `user.csv` becomes table `user`).

```shell
$ sqly --sql "SELECT * FROM user" testdata/user.csv
+-----------+------------+------------+-----------+
| user_name | identifier | first_name | last_name |
+-----------+------------+------------+-----------+
|…
