---
repo: "datafusion-contrib/datafusion-distributed"
name: "datafusion-distributed"
description: "Library for bringing distributed capabilities to Apache DataFusion"
readmeQualityOk: true
url: "https://github.com/datafusion-contrib/datafusion-distributed"
homepage: "https://datafusion-contrib.github.io/datafusion-distributed/"
language: "Rust"
languages: ["Rust"]
languagePcts: [100]
topics: ["arrow", "datafusion", "distributed", "distributed-computing", "distributed-systems"]
stars: 171
forks: 83
openIssues: 62
closedIssues: 178
watchers: 6
contributors: 57
recentReleases: 2
createdAt: "2025-06-19T17:31:37Z"
lastCommitAt: "2026-10-30T10:23:11Z"
lastReleaseAt: "2026-08-20T09:15:13Z"
status: "thriving"
tags: ["needs_contributors"]
healthScore: 93
undervaluedScore: 49
maintainers: ["gabotechs", "alexanderbianchi", "jayshrivastava"]
openGraphImageUrl: "https://opengraph.githubassets.com/826a910ad9c4452f79bb7c8a67c6dd0981f3541a608f1bba1f7c6f35374a5bec/datafusion-contrib/datafusion-distributed"
discussionCount: 2
---

# DataFusion Distributed

Scale [Apache DataFusion](https://github.com/apache/datafusion) across a
cluster — without leaving the DataFusion you already know.

> [!NOTE]
> This project is not part of Apache DataFusion.

DataFusion Distributed is a toolkit that extends Apache DataFusion with
distributed query execution. It aims for a developer experience as close as
possible to vanilla DataFusion while staying unopinionated about your networking
stack.

It's **not** an out-of-the-box distributed engine — it's a library for building
one, with sane defaults for the common case of file-based data sources. A
distributed plan **is** a normal DataFusion physical plan, with a few extra
nodes that stream Arrow data between machines, so you can take an existing
single-node DataFusion system and add distributed execution with minimal
changes.

## Getting started

Going distributed takes exactly three things:

1. Enable the distributed planner on your session.
2. Tell it where your workers are.
3. Run the worker gRPC servers.

The [Quick start](https://datafusion-contrib.github.io/datafusion-distributed/user-guide/01-quick-start.html)
walks through all three in a few minutes. For everything…
