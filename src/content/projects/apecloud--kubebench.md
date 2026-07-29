---
repo: "apecloud/kubebench"
name: "kubebench"
description: "A Kubernetes operator for running benchmark tests on databases to evaluate their performance."
readmeQualityOk: true
url: "https://github.com/apecloud/kubebench"
language: "Go"
languages: ["Go"]
languagePcts: [88]
stars: 16
forks: 1
openIssues: 8
closedIssues: 5
watchers: 2
contributors: 7
recentReleases: 2
createdAt: "2023-06-20T09:32:13Z"
lastCommitAt: "2026-07-29T06:14:00Z"
lastReleaseAt: "2026-07-22T09:44:41Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 73
undervaluedScore: 41
maintainers: ["JashBook", "kizuna-lek", "ldming"]
openGraphImageUrl: "https://opengraph.githubassets.com/e6a6890fb4dbce935badbf97475bae5dacb14cc27b1dc990af2a11f2aba8d9f3/apecloud/kubebench"
---

# kubebench
A Kubernetes operator for running benchmark tests on databases to evaluate their performance.

## Installation (Helm)

Installing the kubebench via Helm can be done with the following commands. This requires your machine to have Helm installed. Install Helm

```sh
# add repo
helm repo add kubeblocks https://apecloud.github.io/helm-charts

# install kubebench
helm install kubebench kubeblocks/kubebench --version 0.0.1
```

to delete this release, you can do so with the followint command:
```sh
helm uninstall kubebench
```

## Benchmarks

| Benchmark Name                     | Use                 | Status    |
|------------------------------------|---------------------|-----------|
| [Pgbench](https://github.com/apecloud/kubebench/blob/HEAD/docs/pgbench.md)         | Postgres Performance | Supported |
| [Sysbench](https://github.com/apecloud/kubebench/blob/HEAD/docs/sysbench.md)       | Database Performance | Supported |
| [TPCC](https://github.com/apecloud/kubebench/blob/HEAD/docs/tpcc.md)               | OLTP Performance    | Supported |
| [TPCDs](https://github.com/apecloud/kubebench/blob/HEAD/docs/tpcds.md)             | OLAP Performance    | Supported |
|…
