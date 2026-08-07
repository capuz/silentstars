---
repo: "iqea-ai/duckdb-snowflake"
name: "duckdb-snowflake"
description: "A powerful DuckDB extension that enables seamless querying of Snowflake databases using Arrow ADBC drivers with runtime loading capabilities."
readmeQualityOk: true
url: "https://github.com/iqea-ai/duckdb-snowflake"
language: "C++"
languages: ["C++"]
languagePcts: [78]
stars: 58
forks: 12
openIssues: 0
closedIssues: 20
watchers: 2
contributors: 9
recentReleases: 2
createdAt: "2025-09-06T22:46:49Z"
lastCommitAt: "2026-08-07T05:15:12Z"
lastReleaseAt: "2026-08-02T03:55:03Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 95
undervaluedScore: 53
maintainers: ["venkata-chikkam", "praveentandra", "wjsetzer"]
openGraphImageUrl: "https://opengraph.githubassets.com/f9ee6d479b729fce2cd5cb4c1ff1e45acc90e6343b8903d9ca1f41969b60be6c/iqea-ai/duckdb-snowflake"
---

# DuckDB Snowflake Extension

A DuckDB extension for querying Snowflake from DuckDB via the Apache Arrow ADBC Snowflake driver. Data flows between the two systems as Arrow record batches, so result sets stay columnar end-to-end.

**This extension works with DuckDB v1.5.5.**

## Quick Start

### Get the Latest Extension Build (v1.5.5)

Install DuckDB 1.5.5 (or newer) and then install the Snowflake extension directly from the community repository:

```sql
INSTALL snowflake FROM community;
LOAD snowflake;
``` 

Confirm your DuckDB version meets the requirement:

```sql
PRAGMA version;
```

### Installation

```sql
-- Install and load the extension
INSTALL snowflake FROM community;
LOAD snowflake;
```

### Basic Usage

```sql
-- 1. Create a Snowflake profile
CREATE SECRET my_snowflake_secret (
    TYPE snowflake,
    ACCOUNT 'your_account_identifier',
    USER 'your_username',
    PASSWORD 'your_password',
    DATABASE 'your_database',      -- Optional: default database
    WAREHOUSE 'your_warehouse'     -- Optional: default warehouse
);

-- 2.1 Query Snowflake data using pass through query
SELECT * FROM snowflake_query(
    'SELECT * FROM customers WHERE state = ''CA''',…
