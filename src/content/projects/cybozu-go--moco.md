---
repo: "cybozu-go/moco"
name: "moco"
description: "MySQL operator on Kubernetes using GTID-based semi-synchronous replication."
readmeQualityOk: true
url: "https://github.com/cybozu-go/moco"
homepage: "https://cybozu-go.github.io/moco/"
language: "Go"
languages: ["Go"]
languagePcts: [93]
topics: ["kubectl-plugins", "mysql", "kubernetes", "kubernetes-operator"]
stars: 381
forks: 40
openIssues: 30
closedIssues: 257
watchers: 14
contributors: 47
recentReleases: 0
createdAt: "2020-04-27T05:39:36Z"
lastCommitAt: "2026-10-29T05:49:34Z"
lastReleaseAt: "2021-04-30T18:54:52Z"
status: "thriving"
tags: ["needs_contributors", "legacy_hero"]
healthScore: 94
undervaluedScore: 38
maintainers: ["yamatcha", "mas9612", "arosh"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/259216197/291a8f00-c20a-11eb-8ae6-71698ee3e708"
---

# MOCO

MOCO is a [MySQL][] operator on Kubernetes.
Its primary function is to manage MySQL clusters using [GTID-based](https://dev.mysql.com/doc/refman/8.0/en/replication-gtids.html) [semi-synchronous](https://dev.mysql.com/doc/refman/8.0/en/replication-semisync.html) replication.  It does _not_ manage [group replication](https://dev.mysql.com/doc/refman/8.0/en/group-replication.html) clusters.

MOCO is designed to have the following properties.

- Compatibility with the standard MySQL
    - This is the reason that MOCO does not adopt group replication that has [a number of limitations](https://dev.mysql.com/doc/refman/8.0/en/group-replication-limitations.html).
- Safety
    - MOCO only allows writes to a single instance called the primary at a time.
    - MOCO configures loss-less semi-synchronous replication with sufficient replicas.
    - MOCO detects and excludes instances having [errant transactions](https://www.percona.com/blog/2014/05/19/errant-transactions-major-hurdle-for-gtid-based-failover-in-mysql-5-6/).
- Availability
    - MOCO can quickly switch the primary in case of the primary failure or restart.
    - MOCO allows up to 5 instances in a cluster.

Blog article:…
