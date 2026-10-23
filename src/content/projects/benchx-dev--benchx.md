---
repo: "benchx-dev/benchx"
name: "benchx"
description: "Benchmark all the things"
readmeQualityOk: true
url: "https://github.com/benchx-dev/benchx"
language: "Python"
languages: ["Python"]
languagePcts: [95]
stars: 8
forks: 3
openIssues: 16
closedIssues: 7
watchers: 3
contributors: 7
recentReleases: 0
createdAt: "2026-08-13T14:57:06Z"
lastCommitAt: "2026-10-23T08:47:00Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 81
undervaluedScore: 44
maintainers: ["ev-br", "rok", "MarcoGorelli"]
openGraphImageUrl: "https://opengraph.githubassets.com/b1c8280c62472433408cd0dcdb81f21310fc13f39f925012a982d69c9f87e5dd/benchx-dev/benchx"
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

For this to work, the schema must be designed correctly up front: rigorous
about measurement semantics (units, estimators, uncertainty), neutral toward
harnesses and languages, and rich enough that future use cases can sit on top
of it without schema changes. The current draft is grounded in a review of
metrology standards (VIM/GUM) and of existing benchmarking systems and
harnesses, with a migration contract…
