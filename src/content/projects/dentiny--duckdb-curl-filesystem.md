---
repo: "dentiny/duckdb-curl-filesystem"
name: "duckdb-curl-filesystem"
description: "Filesystem built upon libcurl."
readmeQualityOk: true
url: "https://github.com/dentiny/duckdb-curl-filesystem"
language: "C++"
languages: ["C++"]
languagePcts: [81]
stars: 13
forks: 2
openIssues: 3
closedIssues: 14
watchers: 1
contributors: 4
recentReleases: 0
createdAt: "2025-09-21T22:46:56Z"
lastCommitAt: "2026-09-22T08:46:10Z"
lastReleaseAt: "2025-10-03T08:29:13Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 83
undervaluedScore: 36
maintainers: ["dentiny"]
openGraphImageUrl: "https://opengraph.githubassets.com/8422b30a147e8865358a862259eba837e5c3da5c8cb3b1be1d64e6ffab17e5d7/dentiny/duckdb-curl-filesystem"
---

# curl_httpfs - DuckDB extension for connection pool, HTTP/2 and asynchronous network IO

## What is curl_httpfs?

It's a DuckDB extension that provides additional IO features upon [httpfs extension](https://duckdb.org/docs/stable/core_extensions/httpfs/overview.html), including connection pool, HTTP/2, and async network IO.

It's 100% compatible with `httpfs` extension, all advanced features are implemented based on uses curl-based solution, meanwhile it also allows users to fallback to httplib.

## Usage
```sql
-- Install and load the curl_httpfs extension
FORCE INSTALL curl_httpfs FROM community;
LOAD curl_httpfs;

-- Users could access file as usual.
D SELECT length(content) AS char_count FROM read_text('https://raw.githubusercontent.com/dentiny/duck-read-cache-fs/main/test/data/stock-exchanges.csv');
┌────────────┐
│ char_count │
│   int64    │
├────────────┤
│   16205    │
└────────────┘

-- Switch back to httplib.
D SET httpfs_client_implementation='httplib';

-- Switch back to curl.
D SET httpfs_client_implementation='curl';
```
