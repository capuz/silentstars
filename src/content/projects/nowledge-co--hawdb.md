---
repo: "nowledge-co/hawdb"
name: "hawdb"
description: "the open-source Context/Knowledge Layer Database"
readmeQualityOk: true
url: "https://github.com/nowledge-co/hawdb"
homepage: "https://hawdb.ai"
language: "Rust"
languages: ["Rust"]
languagePcts: [98]
topics: ["memory-database", "graph", "graph-algorithms", "graph-database"]
stars: 191
forks: 11
openIssues: 72
closedIssues: 316
watchers: 0
contributors: 9
recentReleases: 10
createdAt: "2026-07-14T07:09:28Z"
lastCommitAt: "2026-10-24T08:21:21Z"
lastReleaseAt: "2026-10-18T08:28:35Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 96
undervaluedScore: 34
maintainers: ["hawkingrei", "dependabot[bot]", "Fengzdadi"]
openGraphImageUrl: "https://opengraph.githubassets.com/e03274dd2f36366449e760b121a328569b4f32d28bd6c89a302198707a861a97/nowledge-co/hawdb"
---

# HawDB

HawDB is an embedded knowledge and context database. It keeps the facts an agent or application reasons over — entities, relationships, documents, and events — in one crash-safe process, and returns them as bounded context.

Graph structure, relational rows, lexical search, and vector search share one engine. A retrieval request takes search candidates, filters them, walks the authorized graph, reranks with a typed score, and hydrates the result from the canonical snapshot.

HawDB is written in Rust and licensed under Apache-2.0. It is built for Nowledge Mem, currently in nightly integration. The library is the product: any host that needs a durable context layer opens it the same way.

The site and in-browser playground are at [hawdb.ai](https://hawdb.ai). Their source is [nowledge-co/hawdb-website](https://github.com/nowledge-co/hawdb-website).

## Install

HawDB is a Rust library. Published releases are on crates.io. The repository pins Rust 1.97.1.

```toml
[dependencies]
hawdb = "0.7"
```

To follow the repository tip instead of a release:

```toml
hawdb = { git = "https://github.com/nowledge-co/hawdb" }
```

Or build the default library from a checkout:

```console…
