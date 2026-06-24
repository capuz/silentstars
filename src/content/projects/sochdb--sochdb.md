---
repo: "sochdb/sochdb"
name: "sochdb"
description: "SochDB is a high-performance embedded, ACID-compliant vector database purpose-built for AI agents and memory"
url: "https://github.com/sochdb/sochdb"
homepage: "https://sochdb.dev"
language: "Rust"
languages: ["Rust"]
languagePcts: [96]
topics: ["ai-agents", "ai-agents-mcp", "ai-agents-memory", "database", "embeddings", "knowledge", "knowledge-graph", "knowledge-graph-embeddings", "knowledge-graphs-embeddings", "llm"]
stars: 34
forks: 5
openIssues: 1
closedIssues: 1
watchers: 0
contributors: 5
recentReleases: 0
createdAt: "2026-01-01T06:26:46Z"
lastCommitAt: "2026-06-24T00:25:23Z"
lastReleaseAt: "2026-01-12T08:48:11Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 89
undervaluedScore: 38
maintainers: ["sushanthpy", "tatavishnurao", "micklebt"]
openGraphImageUrl: "https://opengraph.githubassets.com/4c9f79457b9f180ff67c88f9c1c31a95fbd91772076c51d90d5c1674ea52d3cf/sochdb/sochdb"
discussionCount: 1
---

<h1 align="center">
    <br>
</h1>

## What is SochDB?

SochDB is an **embedded, AI-native database** that puts your structured data, embeddings, and agent memory in **one engine, one file** — then assembles token-budgeted context for your LLM in a single query.

Instead of wiring a relational DB + a vector DB + a cache + prompt-packing glue, you get it all on one ACID, columnar storage engine — embedded, offline-capable, no servers:

- **SQL** — SQL-92-compatible with `JOIN`s, aggregates (`GROUP BY` / `SUM` / `AVG` / `HAVING`), and MySQL/PostgreSQL/SQLite dialect normalization
- **Vector + keyword hybrid search** — HNSW vectors fused with BM25 via Reciprocal Rank Fusion
- **Bi-temporal knowledge graph** — relationships with point-in-time ("as-of") recall
- **Context Query Builder** — multi-source fusion under a token budget, with TOON dense output
- **Full ACID** — MVCC + WAL + Serializable Snapshot Isolation

## Comparison

### Database + retrieval layer

| Feature | SochDB | SQLite + vec | Postgres + pgvector | Chroma | LanceDB |
|---------|--------|--------|----------------------|--------|---------|
| Embedded | ✅ | ✅ | ❌ | ✅ | ✅ |
| Vector search | ✅ HNSW | ⚠️ (via extension)…
