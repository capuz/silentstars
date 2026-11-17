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
stars: 28
forks: 8
openIssues: 20
closedIssues: 26
watchers: 0
contributors: 4
recentReleases: 10
createdAt: "2026-02-24T20:03:27Z"
lastCommitAt: "2026-11-17T12:17:28Z"
lastReleaseAt: "2026-11-11T09:28:33Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "hidden_gem", "release_machine"]
healthScore: 91
undervaluedScore: 56
maintainers: ["dcondrey", "dependabot[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1166030581/f74aa53c-71b8-4b32-88de-beb0755c9730"
discussionCount: 0
---

# WARM

**Local memory for AI agents and applications.**

WARM (WritersLogic Adaptive Retention & Memory) gives agents persistent memory, full-text and
vector search, and source provenance in one embeddable Rust engine. Use it inside your application,
through HTTP, or from an MCP client, with storage on infrastructure you control.

[Website](https://writerslogic.com/warm) ·
[Docs](https://writerslogic.com/warm/docs/) ·
[Get started](#get-started) ·
[Standards and provenance](https://github.com/writerslogic/warm/blob/HEAD/docs/reference/standards.md) ·
[Evaluation](#evaluation) ·
[Capabilities](#what-ships-today) ·
[Limits](#limits) ·
[Contribute](https://github.com/writerslogic/warm/blob/HEAD/CONTRIBUTING.md)

## What it is

WARM is a Rust library that stores text, vectors and facts in a
directory on your machine and finds them again. It ships with optional Node.js, C, WASM and UniFFI
bindings, an HTTP server with portable JavaScript and Python clients, and an MCP server.
The embedded engine makes no service calls or telemetry requests: the `offline` job in [ci.yml](https://github.com/writerslogic/warm/blob/HEAD/.github/workflows/ci.yml) runs the default-feature test suite in a…
