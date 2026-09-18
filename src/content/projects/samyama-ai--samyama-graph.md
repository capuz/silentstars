---
repo: "samyama-ai/samyama-graph"
name: "samyama-graph"
description: "Rust graph-vector database: OpenCypher (99.9% of evaluated TCK scenarios pass), vector search, graph algorithms, RESP + HTTP. LDBC SNB Interactive and BI complete; 1B edges on one machine."
readmeQualityOk: true
url: "https://github.com/samyama-ai/samyama-graph"
homepage: "https://samyama.dev"
language: "Rust"
languages: ["Rust"]
languagePcts: [96]
topics: ["cypher", "graph-algorithms", "graph-database", "knowledge-graph", "rust", "vector-search", "graph-rag", "hnsw", "mcp-server", "opencypher"]
stars: 172
forks: 15
openIssues: 84
closedIssues: 368
watchers: 1
contributors: 12
recentReleases: 0
createdAt: "2026-01-19T10:51:28Z"
lastCommitAt: "2026-09-18T08:27:38Z"
lastReleaseAt: "2026-01-31T08:06:12Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 96
undervaluedScore: 34
maintainers: ["sandeepkunkunuru", "Kalyanpulikanti-01"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1137421559/3b6b5a21-5b8b-4bac-9992-1a472215b557"
---

<h1 align="center">Samyama Graph</h1>
    <strong>99.9% of the openCypher TCK's evaluated scenarios pass · SNB Interactive 21/21 and SNB BI 20/20, no timeouts · 1B edges on one machine</strong>
  </p>
  </p>
    💬 <strong><a href="https://chat.whatsapp.com/Jjjkb3uWRDi1YMdfffaD9d">Join the Samyama OSS community on WhatsApp</a></strong> — questions, help, and updates.
  </p>
</p>

---

## What is Samyama Graph?

Samyama Graph is a Rust-native graph-vector database that lets developers store, query, search, and analyze connected data in one system.

It brings together graph traversal, OpenCypher-style querying, vector search, graph algorithms, and Redis-compatible access, making it useful for GraphRAG, knowledge graphs, AI agent memory, and large-scale relationship analytics.

### Quickstart

#### Option 1 — Run with Docker Compose

**Step 1 — Prerequisites**

- ✅ Docker Desktop installed and running — [Watch setup video →](https://samyama.dev/videos)
- ✅ No account or credentials needed — the image is public on GitHub Container Registry (`latest` is the newest release; pin a version such as `:1.8.0` for a reproducible setup)

**Step 2 — Pull the Docker image**

```bash
docker pull…
