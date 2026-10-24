---
repo: "djouallah/lakehouse_benchmark"
name: "lakehouse_benchmark"
description: "https://djouallah.github.io/lakehouse_benchmark/"
readmeQualityOk: true
url: "https://github.com/djouallah/lakehouse_benchmark"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 16
forks: 1
openIssues: 0
closedIssues: 1
watchers: 2
contributors: 2
recentReleases: 10
createdAt: "2026-09-20T01:17:16Z"
lastCommitAt: "2026-10-24T08:08:15Z"
lastReleaseAt: "2026-10-21T23:54:01Z"
status: "newborn"
tags: ["hidden_gem", "release_machine"]
healthScore: 90
undervaluedScore: 53
maintainers: ["djouallah", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/29a997a23c68ddcdc44964fcbdb2ae97d952358229c224c8a2aa61b2b928be52/djouallah/lakehouse_benchmark"
---

## Small Data Benchmark
Most benchmarks are big data using big compute. Here we are testing small to medium data with small compute. The purpose is to stress test: spill to disk, bad join orders, being hard on engines. Adding more compute just hides the issues.

**[Interactive results →](https://djouallah.github.io/lakehouse_benchmark/)**

## Real workload

The Real workload tab is not a benchmark. It simulates a data engineer's job: every hour new AEMO files land, and each engine's dbt project folds them into its own Iceberg tables, which only grow. As in real life, each engine's SQL is tuned for that engine. The one fixed rule is that every engine writes with the same `merge` on the same key, so runs stay safe to run concurrently. Files processed is the indicator.

## Adding an engine

A candidate engine must pass all three; the `candidate engine` workflow checks them:

1. **SQL**: it runs the TPC-H suite as SQL.
2. **Read from Azure**: it reads the OneLake Iceberg tables through the REST catalog, and raw files in the lakehouse Files section.
3. **Write Iceberg**: it creates and fills an Iceberg table through the same catalog.

Bonus:

- It finishes TPC-DS.
- It supports more…
