---
repo: "Rustify-All/rlucene"
name: "rlucene"
description: "Apache Lucene written in Rust"
readmeQualityOk: true
url: "https://github.com/Rustify-All/rlucene"
language: "Rust"
languages: ["Rust"]
languagePcts: [100]
stars: 9
forks: 2
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2024-11-04T10:53:23Z"
lastCommitAt: "2026-10-24T08:20:08Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 70
maintainers: ["LuXugang"]
openGraphImageUrl: "https://opengraph.githubassets.com/39092e6c6767e4a2b3770b395686ad43f361691bd9d5ec60598c1a520cb9d40a/Rustify-All/rlucene"
---

# RLucene

After a long period of private development, the RLucene repository was opened
to the public on September 5, 2026.

RLucene is a Rust port of [Apache Lucene](https://lucene.apache.org/), the
high-performance, full-featured search engine library.

## Index Compatibility

**For supported features, RLucene is index-compatible with Apache Lucene 10.1,
and each can read indexes created by the other.**

The goal is to stay as close to Apache Lucene as possible—nearly 100% aligned
in architecture, behavior, semantics, and everyday usage. If you've used
Lucene before, RLucene should feel familiar. It keeps the same core concepts
and workflows, including documents, fields, analyzers, index writers, readers,
searchers, and queries.

A few small changes are unavoidable because Rust and Java handle types,
ownership, and errors differently.

RLucene currently tracks Apache Lucene 10.1. Once this port is feature-complete
and stable, the plan is to keep RLucene aligned with the Lucene release just
before the latest one.

## Benchmark

We use several benchmarks from the search community to compare RLucene with
Apache Lucene under the same search workloads.

See the [latest benchmark…
