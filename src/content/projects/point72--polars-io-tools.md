---
repo: "Point72/polars-io-tools"
name: "polars-io-tools"
description: "Custom parsing extensions for lazy polars"
readmeQualityOk: true
url: "https://github.com/Point72/polars-io-tools"
homepage: "https://github.com/Point72/polars-io-tools/wiki"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["clickhouse", "lazy", "lazy-evaluation", "polars", "python", "rust", "sql"]
stars: 26
forks: 3
openIssues: 3
closedIssues: 8
watchers: 2
contributors: 6
recentReleases: 7
createdAt: "2026-05-13T13:36:47Z"
lastCommitAt: "2026-11-01T22:59:37Z"
lastReleaseAt: "2026-10-26T22:49:35Z"
status: "thriving"
tags: ["hidden_gem", "release_machine"]
healthScore: 94
undervaluedScore: 49
maintainers: ["timkpaine", "ptomecek", "feussy"]
openGraphImageUrl: "https://opengraph.githubassets.com/564120fa22ca43d7c53b3da7ea22a53fc9cea7cfeb6befcc5aa48b3b8ebf7e60/Point72/polars-io-tools"
---

Custom parsing extensions for lazy polars

## Overview

`polars-io-tools` extends [Polars](https://pola.rs/) lazy execution with custom I/O
sources that push filters and column projections all the way down into the systems
that hold your data — SQL databases, ClickHouse, Datadog, and Delta Lake — instead of
loading everything and filtering in memory. It also adds lazy-friendly operations
(joins, multi-source composition, time-series windows, caching, distributed execution)
that keep predicate pushdown working where vanilla Polars would otherwise give up and
materialize the whole frame.

Everything is exposed through the `piot` LazyFrame namespace and a handful of
top-level `scan_*` / `sink_*` functions, so it composes naturally with the Polars
API you already use.

### Who is this for

Reach for `polars-io-tools` when you want Polars' lazy API over data that lives in an
external store, and you care about *not* fetching rows or columns you will immediately
throw away. It is most valuable for large, partitioned, or remote datasets where a
filter on a date or key column should translate into a smaller query against the
source. If your data already fits comfortably in memory or lives…
