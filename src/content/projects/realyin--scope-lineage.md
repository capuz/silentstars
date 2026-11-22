---
repo: "realyin/scope-lineage"
name: "scope-lineage"
description: "Turn Spark/Hive SQL into structured, traceable facts for Agents, RAG, and AI knowledge bases."
readmeQualityOk: true
url: "https://github.com/realyin/scope-lineage"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["agents", "column-lineage", "data-engineering", "data-lineage", "hive", "knowledge-graph", "metadata", "rag", "spark", "sql"]
stars: 5
forks: 1
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2026-08-09T08:57:49Z"
lastCommitAt: "2026-11-22T11:52:14Z"
lastReleaseAt: "2026-08-19T14:45:39Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 88
undervaluedScore: 49
maintainers: ["realyin"]
openGraphImageUrl: "https://opengraph.githubassets.com/0b52dbee0d8e3d2a4bc7aa6869905eaa37d3acc844e6a4bdb67ca1bfd4b211b3/realyin/scope-lineage"
---

# Scope Lineage

[中文](https://github.com/realyin/scope-lineage/blob/HEAD/README.zh-CN.md) | English

**Turn Spark/Hive SQL into structured, traceable facts for Agents, RAG, search, and AI knowledge
bases.**

> Table lineage tells you where data comes from. Scope Lineage tells you how it became what it is.

Scope Lineage is an offline static analyzer that preserves CTEs, subqueries, field expressions,
JOINs, filters, aggregates, windows, and uncertainty as versioned `lineage.json` and
`diagnostics.json` artifacts. AI applications can reason from addressable evidence instead of
guessing from raw SQL or a flat table-lineage edge.

The package has three layers, each with its own remit:
