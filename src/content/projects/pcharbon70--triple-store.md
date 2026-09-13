---
repo: "pcharbon70/triple_store"
name: "triple_store"
description: "A RDF triple-store for the elixir ecosystem"
readmeQualityOk: true
url: "https://github.com/pcharbon70/triple_store"
language: "Elixir"
languages: ["Elixir"]
languagePcts: [99]
stars: 10
forks: 2
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2025-12-20T13:02:46Z"
lastCommitAt: "2026-09-13T08:29:24Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 72
undervaluedScore: 28
maintainers: ["pcharbon70"]
openGraphImageUrl: "https://opengraph.githubassets.com/a7a8b48db5e8c7c096b020c388d40dd9758d0d9338f66a32f51663394ae4760d/pcharbon70/triple_store"
---

# TripleStore

A high-performance RDF store implementation in Elixir with RocksDB storage, full SPARQL 1.1 support, and OWL 2 RL reasoning. Supports both triple and quad (named graph) storage schemas.

## Features

- **Persistent Storage**: RocksDB backend via erlang-rocksdb with dictionary encoding and optimized indices
  - Triple store (v1): SPO, POS, OSP indices
  - Quad store (v2): GSPO, GPOS, SPOG, POSG indices with named graphs
- **Named Graphs**: Quad store support for data isolation, multi-tenancy, and provenance tracking
- **SPARQL 1.1**: Full query support including SELECT, CONSTRUCT, ASK, DESCRIBE, UPDATE, and GRAPH clauses
- **OWL 2 RL Reasoning**: Forward-chaining materialization with semi-naive evaluation and graph-scoped reasoning
- **Query Optimization**: Cost-based optimizer with Leapfrog Triejoin for complex BGP queries

## Architecture

```
┌──────────────────────────────────────────────────────────────┐
│                    TripleStore Public API                     │
├───────────────┬──────────────────────┬───────────────────────┤
│ SPARQL Engine │   OWL 2 RL Reasoner  │   Transaction Mgr     │
├───────────────┴──────────────────────┴───────────────────────┤
│…
