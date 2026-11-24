---
repo: "hydra-db/selfgraph"
name: "selfgraph"
description: "Build and query versioned knowledge graphs for AI agents, with any graph database."
readmeQualityOk: true
url: "https://github.com/hydra-db/selfgraph"
homepage: "https://github.com/hydra-db/selfgraph"
language: "Python"
languages: ["Python", "TypeScript"]
languagePcts: [50, 50]
topics: ["agent", "graphs", "knowledge-graph", "ontology", "knowledge-graphs", "knowledge-management"]
stars: 230
forks: 74
openIssues: 20
closedIssues: 225
watchers: 1
contributors: 48
recentReleases: 10
createdAt: "2026-11-04T05:07:01Z"
lastCommitAt: "2026-11-24T01:55:03Z"
lastReleaseAt: "2026-11-14T18:18:08Z"
status: "newborn"
tags: ["needs_contributors", "release_machine"]
healthScore: 97
undervaluedScore: 36
maintainers: ["arrry-hydraDB", "saurav-shakya", "aryankalantri"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1445185933/488a93d2-3b01-49fa-9461-b15a96773735"
---

One SDK for graphs and ontologies, over any graph database, in Python and TypeScript.

## Why SelfGraph

- **Text in, graph out.** Extract entities and relations with any LLM, or without one.
- **Any graph database.** Neo4j, Memgraph, FalkorDB, HydraDB, or embedded Kuzu, behind one API.
- **Facts that change.** Every change is versioned, newer facts retire older ones, and you can read the graph as of any past time, or as it was known then.
- **An ontology, not just a graph.** Types, synonyms, and definitions ground a question, so the answerability check knows a firm is a `Company`.
- **Light by default, powerful on request.** One `level` option moves every capability from free and deterministic to LLM-backed.
- **Knows when it has no answer.** An LLM-free answerability check, readiness lint, and certified facts tell an agent what the graph holds.
- **No vector store.** Retrieval walks the graph from keyword matches and returns the source passages. Embeddings are optional.
- **SDK, CLI, and MCP server** over the same graph, in Python and TypeScript.
