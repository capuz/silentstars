---
repo: "cnmsql/cnmsql"
name: "cnmsql"
description: "CNMSQL - CloudNative for MySQL Operator - Seamlessly manage MySQL clusters on top of Kubernetes"
readmeQualityOk: true
url: "https://github.com/cnmsql/cnmsql"
homepage: "https://cnmsql.co/"
language: "Go"
languages: ["Go"]
languagePcts: [99]
topics: ["kubernetes", "kubernetes-operator", "mariadb", "mariadb-mysql", "mariadb-server", "mysql", "mysql-database", "percona-mysql"]
stars: 9
forks: 0
openIssues: 13
closedIssues: 52
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-06-10T15:09:40Z"
lastCommitAt: "2026-10-04T10:00:33Z"
lastReleaseAt: "2026-06-25T13:42:29Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "under_pressure"]
healthScore: 93
undervaluedScore: 52
maintainers: ["yyewolf", "dependabot[bot]", "renovate[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/c73a921766fe1f5eb9b590f9c3831b3c12506a124db06cd9da0cb514919602bf/cnmsql/cnmsql"
---

# CNMSQL - CloudNative for MySQL

A Kubernetes operator for [Percona Server for MySQL](https://www.percona.com/software/mysql-database/percona-server). It runs MySQL clusters with operator-owned lifecycle management, GTID replication with automatic failover, physical backups to S3-compatible object storage, and point-in-time recovery.

> CNMSQL - CloudNative for MySQL is an independent project. It is not affiliated with, endorsed by, or associated with Oracle, MySQL, the [CNCF](https://www.cncf.io/), or the [CloudNativePG](https://cloudnative-pg.io/) project and its maintainers.

Full documentation at **[cnmsql.co](https://cnmsql.co)**.

## What It Does

Declare a `Cluster` resource and the operator provisions Pods, PVCs, credentials, TLS material, and role-routed Services.

**Replication and failover.** One primary plus GTID-based replicas. Planned switchover for upgrades, automatic failover when the primary goes down, and rejoin of a former primary as a replica.

Each cluster gets three Services: a read-write endpoint for the primary (`-rw`), a read-only endpoint for replicas (`-ro`), and a read endpoint for any ready instance (`-r`). Routing follows the `mysql.cnmsql.co/role`…
