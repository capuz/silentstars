---
repo: "BenchBox-dev/benchbox"
name: "benchbox"
description: "`benchbox` is a \"benchmarking toolbox\" that makes it simple to benchmark analyitic (OLAP) data tools with SQL and dataframes."
readmeQualityOk: true
url: "https://github.com/BenchBox-dev/benchbox"
homepage: "https://benchbox.dev"
language: "Python"
languages: ["Python"]
languagePcts: [91]
stars: 12
forks: 1
openIssues: 9
closedIssues: 57
watchers: 1
contributors: 4
recentReleases: 0
createdAt: "2026-01-16T15:11:04Z"
lastCommitAt: "2026-10-21T23:36:47Z"
lastReleaseAt: "2026-05-20T11:49:42Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 97
undervaluedScore: 61
maintainers: ["joeharris76"]
openGraphImageUrl: "https://opengraph.githubassets.com/111a4fc4565207999b729e390880e8b32bf4cf534091221aad25fa8f769a65e3/BenchBox-dev/benchbox"
discussionCount: 2
---

```text
█                   █    █
█▀▀▄ █▀▀█ █▀▀▄ █▀▀▀ █▀▀▄ █▀▀▄ ▄▀▀▄ ▀▄▄▀
█▄▄▀ █▄▄▄ █  █ █▄▄▄ █  █ █▄▄▀ ▀▄▄▀ ▄▀▀▄
```

# BenchBox

BenchBox is an open-source Python toolkit for benchmarking analytical data
platforms. It generates and loads data, runs repeatable workloads, validates
execution, and records comparable results through one workflow.

Use BenchBox to evaluate local databases, cloud data warehouses, and DataFrame
runtimes with the same benchmark definitions. It is built for data engineers,
platform evaluators, and performance practitioners who need evidence they can
inspect and reproduce.

BenchBox focuses on online analytical processing (OLAP). If you need an
online transaction processing (OLTP) benchmark, see the
[comparison of database benchmarking tools](https://github.com/BenchBox-dev/benchbox/blob/HEAD/docs/concepts/benchmarking-tools-compared.md).

## Why BenchBox?

- **Run recognized workloads.** Use TPC-H, TPC-DS, TPC-DI, ClickBench, SSB,
  Join Order Benchmark, and BenchBox's focused primitive workloads.
- **Compare different kinds of engines.** Run the same benchmark against SQL
  databases, cloud warehouses, and native DataFrame APIs.
- **Control the full…
