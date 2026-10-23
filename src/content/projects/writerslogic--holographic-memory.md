---
repo: "writerslogic/holographic-memory"
name: "holographic-memory"
description: "High-performance Holographic Memory System (HMS) for Node.js, powered by Rust. This library implements Vector Symbolic Architectures (VSA) using Binary Spatter Code (BSC) to enable semantic search, analogical reasoning, and associative memory at scale."
readmeQualityOk: true
url: "https://github.com/writerslogic/holographic-memory"
homepage: "https://holographic-memory.com"
language: "Rust"
languages: ["Rust", "Python"]
languagePcts: [47, 43]
topics: ["hdc", "associative-memory", "edge-ai", "high-performance", "hyperdimensional-computing", "knowledge-graph", "local-first", "machine-learning", "neuro-symbolic", "nodejs"]
stars: 21
forks: 6
openIssues: 30
closedIssues: 12
watchers: 0
contributors: 3
recentReleases: 1
createdAt: "2026-02-24T20:03:27Z"
lastCommitAt: "2026-10-23T09:32:27Z"
lastReleaseAt: "2026-10-20T22:43:57Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "hidden_gem"]
healthScore: 85
undervaluedScore: 49
maintainers: ["dcondrey", "bercedev", "dependabot[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1166030581/f74aa53c-71b8-4b32-88de-beb0755c9730"
discussionCount: 0
---

# Holographic Memory

**Local memory for agents and apps: full-text and vector search, a memory API and a vector-symbolic fact store in one embeddable Rust engine that makes no network calls.**

[Website](https://holographic-memory.com) ·
[Docs](https://docs.holographic-memory.com/) ·
[Get started](#get-started-in-60-seconds) ·
[Results](#headline-results) ·
[Why "holographic"?](#why-is-it-called-holographic) ·
[Capabilities](#what-ships-today) ·
[Limits](#limits) ·
[Contribute](https://github.com/writerslogic/holographic-memory/blob/HEAD/CONTRIBUTING.md)

## What it is

Holographic Memory (HMS for short) is a Rust library that stores text, vectors and facts in a
directory on your machine and finds them again. It ships with Node.js bindings, C, WASM and UniFFI
bindings, an HTTP server with a Python client, and an MCP server. There are no service calls, no
telemetry and no model downloads unless you turn on a feature that asks for one.

| Capability | What you get |
|------------|--------------|
| Document search | Chunking, stemmed BM25 over blocked postings, Boolean and phrase queries, hybrid fusion with embeddings you supply, metadata filters, byte offsets |
| Vector index |…
