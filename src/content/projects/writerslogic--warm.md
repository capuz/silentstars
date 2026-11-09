---
repo: "writerslogic/warm"
name: "warm"
description: "Local-first associative memory and vector search for AI agents, with Rust, Python, Node.js, and MCP integrations."
readmeQualityOk: true
url: "https://github.com/writerslogic/warm"
homepage: "https://docs.holographic-memory.com/"
language: "Rust"
languages: ["Rust", "Python"]
languagePcts: [51, 38]
topics: ["hdc", "associative-memory", "edge-ai", "hyperdimensional-computing", "knowledge-graph", "local-first", "machine-learning", "neuro-symbolic", "nodejs", "rag"]
stars: 27
forks: 7
openIssues: 23
closedIssues: 22
watchers: 0
contributors: 4
recentReleases: 7
createdAt: "2026-02-24T20:03:27Z"
lastCommitAt: "2026-11-09T03:31:21Z"
lastReleaseAt: "2026-10-31T03:58:32Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "hidden_gem", "release_machine"]
healthScore: 89
undervaluedScore: 55
maintainers: ["dcondrey"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1166030581/f74aa53c-71b8-4b32-88de-beb0755c9730"
discussionCount: 0
---

# WARM

**WritersLogic Adaptive Retention & Memory.**

**Hybrid search, graph indexing, and vector-symbolic memory.**

**Local memory for agents and apps: full-text and vector search, a memory API and a vector-symbolic fact store in one embeddable Rust engine that makes no network calls.**

[Website](https://writerslogic.com/warm) ·
[Docs](https://writerslogic.com/warm/docs/) ·
[Get started](#get-started) ·
[Standards and provenance](https://github.com/writerslogic/warm/blob/HEAD/docs/reference/standards.md) ·
[Results](#headline-results) ·
[Capabilities](#what-ships-today) ·
[Limits](#limits) ·
[Contribute](https://github.com/writerslogic/warm/blob/HEAD/CONTRIBUTING.md)

## What it is

WARM is a Rust library that stores text, vectors and facts in a
directory on your machine and finds them again. It ships with Node.js bindings, C, WASM and UniFFI
bindings, an HTTP server with a Python client, and an MCP server. There are no service calls, no
telemetry and no model downloads unless you turn on a feature that asks for one.

| Capability | What you get |
|------------|--------------|
| Document search | Chunking, stemmed BM25 over blocked postings, Boolean and phrase queries, hybrid…
