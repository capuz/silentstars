---
repo: "kenn-io/benchdb"
name: "benchdb"
description: "Continuous performance testing with comparable benchmark histories, fleet-aware trends, and CI regression reports"
readmeQualityOk: true
url: "https://github.com/kenn-io/benchdb"
homepage: "https://benchdb.io"
language: "Go"
languages: ["Go"]
languagePcts: [71]
topics: ["benchmarking", "continuous-benchmarking", "continuous-integration", "developer-tools", "performance-testing", "regression-testing"]
stars: 6
forks: 1
openIssues: 1
closedIssues: 1
watchers: 0
contributors: 8
recentReleases: 0
createdAt: "2026-08-27T14:21:01Z"
lastCommitAt: "2026-10-30T11:03:18Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 88
undervaluedScore: 53
maintainers: ["wesm", "mariusvniekerk", "rodboev"]
openGraphImageUrl: "https://opengraph.githubassets.com/f423d7aac2d254ab17dfb9bc3a84a70db81032a4822b55726ab1dfac82463ac6/kenn-io/benchdb"
---

# BenchDB

BenchDB is a self-hosted server for benchmark results. Your benchmark harness
writes JSON, the `benchdb` CLI uploads it, and BenchDB keeps the history of
each benchmark on each machine. The dashboard shows trends and comparisons, and
`benchdb ci report` tells a pull request whether it made a benchmark slower.

BenchDB works with benchmarks in any language that can write JSON. It does not
run or schedule benchmarks.

Start with the [quickstart](https://benchdb.io/docs/quickstart/), or read the
[documentation](https://benchdb.io/docs/) for the full reference.

## What a result records

A benchmark number alone cannot tell you whether a change helped. Each BenchDB
result also records the commit, the run, the machine, the unit, and the raw
observations. BenchDB groups results that share a benchmark case, context,
machine, and repository into one series. It scores each new result against that
series' history. CI reports also compare it with the matching result from a
baseline run.
[Concepts](https://github.com/kenn-io/benchdb/blob/HEAD/docs/site/concepts.md) defines these terms and the status rules.

## When to use it

BenchDB fits teams that benchmark every commit or…
