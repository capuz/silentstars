---
repo: "samyama-ai/samyama-graph"
name: "samyama-graph"
description: "Graph-vector database that queried 1 billion edges for $2.50. Rust, OpenCypher, vector search, 14 graph algorithms. 74M nodes / 1B edges on a single machine."
readmeQualityOk: true
url: "https://github.com/samyama-ai/samyama-graph"
homepage: "https://samyama.dev"
language: "Rust"
languages: ["Rust"]
languagePcts: [95]
topics: ["cypher", "graph-algorithms", "graph-database", "knowledge-graph", "rust", "vector-search", "billion-edges", "cypher-query-language", "graph-rag", "hnsw"]
stars: 170
forks: 14
openIssues: 60
closedIssues: 151
watchers: 1
contributors: 11
recentReleases: 0
createdAt: "2026-01-19T10:51:28Z"
lastCommitAt: "2026-08-23T04:09:50Z"
lastReleaseAt: "2026-01-31T08:06:12Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 94
undervaluedScore: 31
maintainers: ["sandeepkunkunuru", "nareshkolimi"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1137421559/3b6b5a21-5b8b-4bac-9992-1a472215b557"
---

<h1 align="center">Samyama Graph</h1>
    <strong>The graph database that queried 1 billion edges for $2.50</strong>
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
- ✅ No AWS account or credentials needed — the image is publicly available

**Step 2 — Pull the Docker image**

```bash
docker pull public.ecr.aws/f9f6l5u4/samyama-graph:1.1.0
```

**Step 3 — Docker Compose setup**

Create a clean folder, then create `docker-compose.yml` inside it.

Linux & Mac:

```bash
mkdir…
