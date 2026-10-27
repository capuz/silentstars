---
repo: "QumirLabs/qumirdb"
name: "qumirdb"
description: "Run SQL queries on Parquet files, on your computer or in a browser."
readmeQualityOk: true
url: "https://github.com/QumirLabs/qumirdb"
homepage: "https://db.qumir.dev"
language: "C++"
languages: ["C++"]
languagePcts: [81]
topics: ["database", "sql"]
stars: 10
forks: 1
openIssues: 82
closedIssues: 72
watchers: 1
contributors: 1
recentReleases: 8
createdAt: "2026-05-30T19:07:12Z"
lastCommitAt: "2026-10-27T09:17:07Z"
lastReleaseAt: "2026-10-23T00:48:14Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine", "under_pressure"]
healthScore: 88
undervaluedScore: 54
maintainers: ["resetius"]
openGraphImageUrl: "https://opengraph.githubassets.com/9ec33b33278f21a0acb829472d689963d06310b239a8eba954374ca1e2cb6e34/QumirLabs/qumirdb"
discussionCount: 1
---

# QumirDB

**The same compiled query runs natively and in your browser.**

QumirDB is an analytical query engine for Parquet. It handles scans,
filters, joins, aggregates, and sort. A planner uses predicate pushdown,
join reorder, and row-group pruning to plan each query.

Every query compiles through LLVM into a generated kernel. It does not run
through an interpreter. The same codegen path builds host machine code and
also builds WebAssembly. The same fused kernel runs on the server, or in the
browser against OPFS-backed datasets. There is no separate browser engine to
keep in sync with the native one.

Compiled queries have one more benefit. User code can join the same kernel.
You register a Rust module with `CREATE MODULE`. Its bitcode joins the
query's LLVM module before optimization runs. Then LLVM inlines the Rust
code, propagates constants through it, and vectorizes it together with the
SQL. See [UDFs that disappear into the
query](#udfs-that-disappear-into-the-query) below.

Try it live at **[db.qumir.dev](https://db.qumir.dev)**.

## Project principles

1. **A database at the forefront of the field.** QumirDB draws on modern
   database ideas. Beauty, clarity, and…
