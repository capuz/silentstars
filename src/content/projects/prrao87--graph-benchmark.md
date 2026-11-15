---
repo: "prrao87/graph-benchmark"
name: "graph-benchmark"
description: "Graph benchmarks for Ladybug, Kuzu, lance-csr and DuckPGQ"
readmeQualityOk: true
url: "https://github.com/prrao87/graph-benchmark"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["graph", "graph-benchmark", "graph-database", "performance"]
stars: 16
forks: 4
openIssues: 1
closedIssues: 5
watchers: 2
contributors: 5
recentReleases: 0
createdAt: "2026-01-24T19:06:49Z"
lastCommitAt: "2026-11-15T11:20:48Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 93
undervaluedScore: 32
maintainers: ["prrao87"]
openGraphImageUrl: "https://opengraph.githubassets.com/df98840b0e6d2a18fc720e253273500c8bd0aa93a6ebd832295f079dff1612fa/prrao87/graph-benchmark"
---

# Graph benchmarks

This repo was originally a benchmark for Kuzu described in this [blog post](https://thedataquarry.com/posts/embedded-db-2/). Since October 2025, Kuzu has been archived and is no longer maintained. Kuzu is now succeeded by a fork, [Ladybug](https://github.com/LadybugDB/ladybug), maintained by @adsharma.

The benchmarks below are updated to compare multi-hop retrieval performance across newer systems like Ladybug, [lance-graph](https://github.com/lance-format/lance-graph),
an open source graph engine built in Rust on top of the Lance format, [lance-csr](https://github.com/hyperdimensionalcomputingai/lance-csr), a fork of lance-graph, and [DuckPGQ](https://duckpgq.org/), a community extension that adds SQL/PGQ graph pattern matching to [DuckDB](https://duckdb.org/).

It does the following:

* Generate an artificial social network dataset, including persons, interests and locations
  * You can scale up the size of the artificial dataset using the scripts provided and test query performance on larger graphs
* Ingest the dataset into several graph systems: Neo4j (community edition), Kuzu, Ladybug, lance-graph, lance-csr and DuckDB + DuckPGQ
* Run a set of queries…
