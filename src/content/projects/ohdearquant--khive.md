---
repo: "ohdearquant/khive"
name: "khive"
description: "khive is a system of records and operations for agent-native organizations"
readmeQualityOk: true
url: "https://github.com/ohdearquant/khive"
homepage: "https://www.khive.ai"
language: "Rust"
languages: ["Rust"]
languagePcts: [90]
topics: ["ai-agents", "context-engineering", "harness", "knowledge-graph", "rust", "sparql", "mcp", "embeddings", "ontology", "semantic-search"]
stars: 33
forks: 5
openIssues: 170
closedIssues: 1703
watchers: 0
contributors: 4
recentReleases: 10
createdAt: "2026-06-07T01:30:30Z"
lastCommitAt: "2026-10-06T10:41:41Z"
lastReleaseAt: "2026-08-14T19:26:05Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 98
undervaluedScore: 50
maintainers: ["ohdearquant"]
openGraphImageUrl: "https://opengraph.githubassets.com/4df9213fbde530402aa31a5ae9926e43eb28680851ca08e98e2da5721f2351d8/ohdearquant/khive"
---

# khive

**[Documentation](https://ohdearquant.github.io/khive/)** &middot; **[Discord](https://discord.gg/JDj9ENhUE8)**

Vector search finds similar text. A knowledge graph finds _structure_: lineages, dependencies,
contradictions, gaps. khive gives your research agent a typed, queryable graph that grows as it
works. Read a paper and entities and edges fall out. Make a connection and it's traversable
immediately. Come back next session and the graph remembers what you built.

There's no Neo4j to run and no separate SPARQL endpoint to deploy. It's SQLite on disk, MCP over
stdio, and `cargo test` finishes in 4 seconds.

---

## What you get

| Capability                  | How                                                                                                                                                      |
| --------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **145 verbs, 14 packs**     | KG, GTD, memory, brain, comm, schedule, knowledge, session, tool, exec, git, code, workspace, blob: all load by default…
