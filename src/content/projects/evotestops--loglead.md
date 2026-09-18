---
repo: "EvoTestOps/LogLead"
name: "LogLead"
description: "LogLead performs log loading, log enhancement, log feature engineering, log analysis, log anomaly detection also via MCP-server. "
readmeQualityOk: true
url: "https://github.com/EvoTestOps/LogLead"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["anomaly-detection", "benchmarking", "log-analysis", "log-anomaly", "log-data", "mcp-server"]
stars: 31
forks: 4
openIssues: 8
closedIssues: 28
watchers: 3
contributors: 12
recentReleases: 0
createdAt: "2023-09-22T04:31:18Z"
lastCommitAt: "2026-09-18T08:18:33Z"
lastReleaseAt: "2026-02-17T13:52:15Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 85
undervaluedScore: 57
maintainers: ["mmantyla", "ChanhNguyen17", "jnyyssol"]
openGraphImageUrl: "https://opengraph.githubassets.com/9b56f60ae6d3bb42e102e936f44cdf6df4396fca838df8469e14271f499b0606/EvoTestOps/LogLead"
---

# LogLead
LogLead is designed to efficiently benchmark log anomaly detection algorithms and log representations. LogLead is also used as a backend for projects such as [LogDelta](https://github.com/EvoTestOps/LogDelta) and [VisualLogAnalyzer](https://github.com/EvoTestOps/VisualLogAnalyzer), which offer a more user-friendly approach to log analysis and log anomaly detection. MCP-server of Loglead allow AI agents like Claude code to perform log analysis with loglead. 

## Table of contents

- [LogLead](#loglead)
  * [Installing LogLead](#installing-loglead)
    + [Known issues](#known-issues)
  * [Demos](#demos)
    + [Thunderbird Supercomputer Log Demo](#thunderbird-supercomputer-log-demo)
    + [Hadoop Distributed File System (HDFS) Log Demo](#hadoop-distributed-file-system-hdfs-log-demo)
  * [Loading](#loading)
  * [MCP server](#mcp-server)
    + [Registering it with an MCP client](#registering-it-with-an-mcp-client)
  * [Testing](#testing)
  * [Example of Anomaly Detection results](#example-of-anomaly-detection-results)
  * [Functional overview](#functional-overview)
  * [Reference](#reference)

## Installing LogLead

Install with [`uv`](https://docs.astral.sh/uv/):
```
uv add…
