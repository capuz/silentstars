---
repo: "tempoxyz/tidx"
name: "tidx"
description: "tidx indexes Tempo chain data into a hybrid PostgreSQL + ClickHouse architecture for fast point lookups (OLTP) and lightning-fast analytics (OLAP)."
readmeQualityOk: true
url: "https://github.com/tempoxyz/tidx"
homepage: "https://tidx.sh"
language: "Rust"
languages: ["Rust"]
languagePcts: [98]
topics: ["analytics", "blockchain-indexer", "clickhouse", "indexer", "postgresql", "rust", "tempo"]
stars: 107
forks: 26
openIssues: 2
closedIssues: 1
watchers: 0
contributors: 32
recentReleases: 0
createdAt: "2026-01-22T02:26:09Z"
lastCommitAt: "2026-09-19T08:15:10Z"
lastReleaseAt: "2026-01-25T04:07:11Z"
status: "thriving"
tags: []
healthScore: 82
undervaluedScore: 34
maintainers: ["jxom", "brendanjryan", "kamsz"]
openGraphImageUrl: "https://opengraph.githubassets.com/6d53ba4f5a44698138ba82c38ac50fbcea7e1fd9e4f17154850a400ce68d93e8/tempoxyz/tidx"
---

<picture>
    <source media="(prefers-color-scheme: dark)" srcset=".github/banner-dark.svg">
    <source media="(prefers-color-scheme: light)" srcset=".github/banner-light.svg">
  </picture>
</p>

</p>

---

**tidx** is [Tempo](https://tempo.xyz)'s chain indexer. It ingests blocks, transactions, and logs from a Tempo node, then makes them queryable through SQL, an HTTP API, and a CLI. Its hybrid PostgreSQL and ClickHouse architecture supports fast point lookups (OLTP) and large analytical queries (OLAP).

Use tidx when you need structured Tempo chain data without building an indexing pipeline from scratch. Common use cases include analytics dashboards, block explorers, wallet balance lookups, token analytics, and DEX activity tracking.

## Features

- **Tiered Storage:** hot window in PostgreSQL (OLTP), full archive in ClickHouse (OLAP), queried as one
- **Event/Function Decoding:** Query decoded events or function calldata by ABI signature (no pre-registration)
- **HTTP API + CLI:** Query data via REST, SQL, or command line

## Table of Contents

- [Quickstart](#quickstart)
- [Overview](#overview)
- [Learn more](#learn-more)
- [Installation](#installation)
-…
