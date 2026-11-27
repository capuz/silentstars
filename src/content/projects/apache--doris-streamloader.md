---
repo: "apache/doris-streamloader"
name: "doris-streamloader"
description: "Stream Loader for Apache Doris"
readmeQualityOk: true
url: "https://github.com/apache/doris-streamloader"
homepage: "https://doris.apache.org"
language: "Go"
languages: ["Go"]
languagePcts: [95]
topics: ["bigquery", "database", "dbt", "delta-lake", "elt", "etl", "hadoop", "hive", "hudi", "iceberg"]
stars: 37
forks: 25
openIssues: 10
closedIssues: 2
watchers: 37
contributors: 32
recentReleases: 0
createdAt: "2024-01-17T09:47:53Z"
lastCommitAt: "2026-11-27T12:53:08Z"
lastReleaseAt: "2025-04-10T07:50:40Z"
status: "thriving"
tags: ["fork_magnet"]
healthScore: 81
undervaluedScore: 29
maintainers: ["morningman", "liaoxin01"]
openGraphImageUrl: "https://opengraph.githubassets.com/257ed0983198d1811e984c71a341d72eeccc2b60771e2c39ab00ecd050473779/apache/doris-streamloader"
---

# Apache Doris Streamloader

A robust, high-performance and user-friendly alternative to the traditional curl-based Stream Load.

## Key Features

- **Parallel Loading**: Split data files automatically and perform parallel loading
- **Support for Multiple Files and Directories**: Support multiple files and directories load with one shot
- **Path Traversal Support**: Support path traversal when the source files are in directories
- **Resilience and Continuity**: Resume loading from previous failures and cancellations
- **Automatic Retry Mechanism**: Retry automatically when failure
- **Comprehensive and Concise Input Parameters**

## Usage

```shell
doris-streamloader --source_file={FILE_LIST} --url={FE_OR_BE_SERVER_URL}:{PORT} --header={STREAMLOAD_HEADER} --db={TARGET_DATABASE} --table={TARGET_TABLE}
```

- `FILE_LIST`: directory or file list, support \* wildcard
- `FE_OR_BE_SERVER_URL` & `PORT`: Doris FE or BE hostname or IP and HTTP port
- `STREAMLOAD_HEADER`: supports all headers as `curl` Stream Load does，multiple headers are separated by '?'
- `TARGET_DATABASE` & `TARGET_TABLE`: indicate the target database and table where the data will be loaded

e.g.:
