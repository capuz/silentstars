---
repo: "nowledge-co/hawdb"
name: "hawdb"
description: "the open-source Context/Knowledge Layer Database"
readmeQualityOk: true
url: "https://github.com/nowledge-co/hawdb"
homepage: "https://hawdb.ai"
language: "Rust"
languages: ["Rust"]
languagePcts: [97]
topics: ["memory-database", "graph", "graph-algorithms", "graph-database"]
stars: 206
forks: 13
openIssues: 148
closedIssues: 523
watchers: 0
contributors: 12
recentReleases: 10
createdAt: "2026-07-14T07:09:28Z"
lastCommitAt: "2026-11-15T11:23:30Z"
lastReleaseAt: "2026-10-18T08:28:35Z"
status: "thriving"
tags: ["release_machine"]
healthScore: 95
undervaluedScore: 33
maintainers: ["Icemap", "hawkingrei", "wey-gu"]
openGraphImageUrl: "https://opengraph.githubassets.com/391934df335ba1e560ed569e6f09e935dfee47bf7b8a741dea102ed5d0cb5062/nowledge-co/hawdb"
---

# <img src="https://raw.githubusercontent.com/nowledge-co/hawdb/HEAD/docs/images/hawdb-mark.svg" alt="" width="40" height="41" align="absmiddle"> HawDB

HawDB is an AI-native embedded database for agents. It keeps the facts an agent reasons over — entities, relationships, documents, and events — in one crash-safe process, returns them as bounded context, and gives each agent its own durable branch to work in.

- **Context layer.** Graph structure, relational rows, lexical search, and vector search share one engine. A retrieval request takes search candidates, filters them, walks the authorized graph, reranks with a typed score, and hydrates the result from the canonical snapshot. See [Context, in one pipeline](#context-in-one-pipeline).
- **Built for agent workloads.** Agents talk to the database through parameterized Cypher and SQL. Every read has an explicit row and payload budget, and an over-budget request fails instead of returning a silently truncated answer. A read transaction pins one published snapshot, so a multi-step plan sees one consistent state.
- **Branches for agents.** A copy-on-write branch costs metadata and an empty WAL, not a copy of the data. An agent can try…
