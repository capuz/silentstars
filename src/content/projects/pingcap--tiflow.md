---
repo: "pingcap/tiflow"
name: "tiflow"
description: "This repo maintains DM (a data migration platform) and TiCDC (change data capture for TiDB)"
readmeQualityOk: true
url: "https://github.com/pingcap/tiflow"
language: "Go"
languages: ["Go"]
languagePcts: [87]
topics: ["cdc", "tidb", "mysql", "kafka", "ticdc", "dm"]
stars: 463
forks: 311
openIssues: 742
closedIssues: 3261
watchers: 69
contributors: 255
recentReleases: 0
createdAt: "2019-08-09T11:34:44Z"
lastCommitAt: "2026-08-24T04:21:01Z"
lastReleaseAt: "2020-10-30T08:14:04Z"
status: "thriving"
tags: ["needs_contributors", "legacy_hero", "fork_magnet"]
healthScore: 93
undervaluedScore: 38
maintainers: ["GMHDBJD", "OliverS929", "joechenrh"]
openGraphImageUrl: "https://opengraph.githubassets.com/156b25b61a2c323216d25e372a81f6883cf1aa513efaaa139fce2132c1f709de/pingcap/tiflow"
---

# TiFlow

## Introduction

**TiFlow** is a unified data replication platform for [TiDB](https://docs.pingcap.com/tidb/stable) that consists of two main components: TiDB Data Migration (DM) and TiCDC.

* DM enables full data migration and incremental data replication from MySQL or MariaDB to TiDB.
* TiCDC replicates change data to various downstream systems, such as MySQL protocol-compatible databases and [Kafka](https://kafka.apache.org/).

> **Note**:
>
> The TiCDC in this repository is only used for versions v8.5.x and lower (old architecture). A TiCDC with new architecture is hosted in [github.com/pingcap/ticdc](https://github.com/pingcap/ticdc), starting from v8.5.4.

For more details, see [DM README](https://github.com/pingcap/tiflow/blob/HEAD/README_DM.md) and [TiCDC README](https://github.com/pingcap/tiflow/blob/HEAD/README_TiCDC.md).

You can also check out the [DeepWiki documentation](https://deepwiki.com/pingcap/tiflow) for more information.

## License

**TiFlow** is under the Apache 2.0 license. See the [LICENSE](https://github.com/pingcap/tiflow/blob/HEAD/LICENSE) file for details.
