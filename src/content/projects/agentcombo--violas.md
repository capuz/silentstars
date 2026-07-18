---
repo: "AgentCombo/Violas"
name: "Violas"
description: "An In-Memory Vector Group System for Semantic Search"
readmeQualityOk: true
url: "https://github.com/AgentCombo/Violas"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["semantic-search", "vector", "vector-database", "vector-search"]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 5
recentReleases: 0
createdAt: "2026-04-28T07:59:04Z"
lastCommitAt: "2026-07-18T05:46:07Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 64
undervaluedScore: 14
maintainers: ["DoubleNorth", "Mooner97"]
openGraphImageUrl: "https://opengraph.githubassets.com/3762ab60da1e93e7f31880369a982dbaeec1dfd74770a7acd96a6c1a7bb9b79d/AgentCombo/Violas"
---

# Violas

**In-Memory Vector Group System for Entity-Centric Vector Search.**

Violas is an in-memory vector group system for entity-centric vector search. Modern vector
databases typically store each item as an embedding and retrieve approximate
nearest neighbors in the embedding space. This is effective when embedding
proximity is enough, but it treats each vector as an independent searchable
object and leaves richer semantic information outside the retrieval model.

Violas addresses this gap with **VectorGroup**, a semantic-first storage
abstraction that keeps semantic entities, diverse representations, member
embeddings, and object-level dependencies together. On top of this structure,
**HDMG** indexes micro-clusters with heterogeneous traversal edges to support
efficient semantic search.

## Outline

- [Why Violas?](#why-violas)
- [Typical Cases](#typical-cases)
- [How It Works](#how-it-works)
- [Experiments](#experiments)
- [API Overview](#api-overview)
- [Quick Start](#quick-start)
- [Installation Options](#installation-options)
- [Repository Layout](#repository-layout)
- [Reproducing Benchmarks](#reproducing-benchmarks)

## Why Violas?

### From Vector Search to Semantic…
