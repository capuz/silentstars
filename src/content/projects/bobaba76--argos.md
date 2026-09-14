---
repo: "bobaba76/Argos"
name: "Argos"
description: "Local-first persistent memory for AI agents — hybrid vector + graph store (Kuzu, DuckDB), local embeddings, versioned facts with conflict resolution, multi-agent MCP/REST API"
readmeQualityOk: true
url: "https://github.com/bobaba76/Argos"
homepage: "https://bobaba76.github.io/Argos/"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["ai-memory", "duckdb", "hermes", "knowledge-graph", "kuzu", "persistent-memory", "rag", "sentence-transformers", "vector-search", "agent-memory"]
stars: 8
forks: 1
openIssues: 30
closedIssues: 258
watchers: 0
contributors: 3
recentReleases: 1
createdAt: "2026-08-06T07:23:50Z"
lastCommitAt: "2026-09-14T09:12:25Z"
lastReleaseAt: "2026-09-07T11:15:51Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 98
undervaluedScore: 59
maintainers: ["bobaba76"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1324883856/caaa2d1c-8f15-489c-ac6b-4a250802577a"
discussionCount: 0
---

# Argos

Persistent memory for AI agents, on your own machine. A Hermes plugin with a standalone server: hybrid vector + graph store, local embeddings, and an external API (MCP + REST).

## Capabilities

- **Facts persist across sessions.** Tell it once, ask weeks later.
- **Changes are versioned, not erased.** Updating a fact chains a new version onto the old one. Ask "what changed?" and get the history.
- **Semantic search.** Vector + keyword fusion (RRF), optional GPU reranker (BAAI/bge-reranker-base, similarity + cross-encoder blend), date-anchored temporal handling, and a change-intent chain-unfold pass.
- **Relationship graph.** A Kùzu graph of entities, relations, and aliases backs entity-aware retrieval boosts. Multi-hop graph traversal is **unproven**: the 2026-09-02 A/B (#139) only exercised a regex-built graph on which traversal never engaged, so its "flat" result is not evidence either way (#364; see CLAIMS-AUDIT §4). Traversal is disabled in the live config; alias expansion is the graph's only live retrieval contribution.
- **Ambient context.** Time, location, weather, and recent file activity inject every turn via a `pre_llm_call` hook.
- **Insight capture.** "I just…
