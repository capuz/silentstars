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
stars: 202
forks: 13
openIssues: 115
closedIssues: 442
watchers: 0
contributors: 12
recentReleases: 10
createdAt: "2026-07-14T07:09:28Z"
lastCommitAt: "2026-11-05T11:23:59Z"
lastReleaseAt: "2026-10-18T08:28:35Z"
status: "thriving"
tags: ["release_machine"]
healthScore: 96
undervaluedScore: 33
maintainers: ["hawkingrei", "Icemap", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/b6c7ece1b1e2daf524103737f82dfafc5ca5bee7fed7c343aeee40e6b2ee99a9/nowledge-co/hawdb"
---

# <img src="docs/images/hawdb-mark.svg" alt="" width="40" height="41" align="absmiddle"> HawDB

HawDB is an AI-native embedded database for agents. It keeps the facts an agent reasons over — entities, relationships, documents, and events — in one crash-safe process, returns them as bounded context, and gives each agent its own durable branch to work in.

- **Context layer.** Graph structure, relational rows, lexical search, and vector search share one engine. A retrieval request takes search candidates, filters them, walks the authorized graph, reranks with a typed score, and hydrates the result from the canonical snapshot. See [Context, in one pipeline](#context-in-one-pipeline).
- **Built for agent workloads.** Agents talk to the database through parameterized Cypher and SQL. Every read has an explicit row and payload budget, and an over-budget request fails instead of returning a silently truncated answer. A read transaction pins one published snapshot, so a multi-step plan sees one consistent state.
- **Branches for agents.** A copy-on-write branch costs metadata and an empty WAL, not a copy of the data. An agent can try a plan, write intermediate facts, or run a long task on…
