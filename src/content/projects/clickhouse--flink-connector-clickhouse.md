---
repo: "ClickHouse/flink-connector-clickhouse"
name: "flink-connector-clickhouse"
description: "Official Apache Flink connector for ClickHouse "
readmeQualityOk: true
url: "https://github.com/ClickHouse/flink-connector-clickhouse"
language: "Java"
languages: ["Java"]
languagePcts: [99]
topics: ["flink", "flink-streaming", "java", "clickhouse"]
stars: 28
forks: 11
openIssues: 38
closedIssues: 45
watchers: 5
contributors: 69
recentReleases: 1
createdAt: "2023-07-05T13:01:32Z"
lastCommitAt: "2026-08-04T06:11:52Z"
lastReleaseAt: "2026-05-27T07:49:29Z"
status: "thriving"
tags: ["needs_contributors", "hidden_gem"]
healthScore: 84
undervaluedScore: 59
maintainers: ["mzitnik", "Marais", "EliFrun"]
openGraphImageUrl: "https://opengraph.githubassets.com/bed029bf5834c16b3f546fe7456fc03401370819973d54acd67eb722fedabee3/ClickHouse/flink-connector-clickhouse"
---

<p><img src="https://github.com/ClickHouse/clickhouse-js/blob/a332672bfb70d54dfd27ae1f8f5169a6ffeea780/.static/logo.svg" width="200px" align="center"></p>
<h1>ClickHouse Flink Connector</h1>
</div>

Table of Contents
* [About The Project](#about-the-project)
* [Supported Flink Versions](#supported-flink-versions)
* [Installation](#installation)
* [DataStream API](#dataStream-api)
    * [Snippets](#snippet)
    * [Examples](#example)
* [Table API](#table-api)
    * [Snippets](#snippet-1)
    * [Examples](#example-1)
* [Supported ClickHouse Types](#supported-clickHouse-types)
* [Configuration Options](#configuration-options)
  * [Client Configuration](#client-configuration)
  * [Sink Configuration](#sink-configuration)
  * [Sink Metrics](#sink-metrics)
* [Limitations](#limitations)
* [Contributing](#contributing)

## About The Project

This is a repo of ClickHouse official Apache Flink Connector supported by the ClickHouse team.
The connector supports two main Apache Flink APIs: 
- DataStreamAPI
- Table API (This feature is not implemented yet and is planned for a future release)

## Supported Flink Versions

| Version | Dependency                       | ClickHouse Client Version |…
