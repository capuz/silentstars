---
repo: "benchx-dev/benchx"
name: "benchx"
description: "Benchmark all the things"
readmeQualityOk: true
url: "https://github.com/benchx-dev/benchx"
homepage: "https://benchx.dev"
language: "Python"
languages: ["Python"]
languagePcts: [94]
stars: 8
forks: 3
openIssues: 27
closedIssues: 18
watchers: 2
contributors: 7
recentReleases: 1
createdAt: "2026-08-13T14:57:06Z"
lastCommitAt: "2026-11-23T10:29:05Z"
lastReleaseAt: "2026-11-06T17:20:00Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 85
undervaluedScore: 53
maintainers: ["rok", "ev-br", "MarcoGorelli"]
openGraphImageUrl: "https://opengraph.githubassets.com/19a11dd48c2e6ff40b81fb83e8d7a0e1d2507dd5135c5a764cb66787b1d0f1af/benchx-dev/benchx"
---

# benchx

A design for a continuous benchmarking system — not one monolithic tool, but a
cluster of cooperating components (benchmark runners on compute nodes,
schedulers, ingestion adapters, result storage, views, comparison and alerting
services) that together let a project measure its performance on every change
and trust what it sees.

## Approach: schema first

Everything here flows out of one artifact: the **benchmark result schema**. It
defines what a measurement result is, what makes two results comparable, and
how histories of results are identified and preserved. Every other component —
runner, scheduler, dashboard, alerter, migration tool — is designed *around*
the schema, producing or consuming it, rather than the schema being shaped by
any single tool's needs.
