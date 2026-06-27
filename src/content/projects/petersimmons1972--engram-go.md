---
repo: "petersimmons1972/engram-go"
name: "engram-go"
description: "Self-hosted MCP memory server — 35 tools for persistent context across AI coding sessions. Runs on Docker with PostgreSQL + pgvector + Ollama."
url: "https://github.com/petersimmons1972/engram-go"
language: "Go"
languages: ["Go"]
languagePcts: [93]
topics: ["ai-agents", "ai-memory", "claude", "golang", "llm", "mcp", "model-context-protocol", "ollama", "pgvector", "postgresql"]
stars: 7
forks: 2
openIssues: 22
closedIssues: 875
watchers: 0
contributors: 2
recentReleases: 3
createdAt: "2026-04-10T10:31:37Z"
lastCommitAt: "2026-06-27T06:22:26Z"
lastReleaseAt: "2026-05-05T04:03:30Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "under_pressure"]
healthScore: 99
undervaluedScore: 65
maintainers: ["petersimmons1972"]
openGraphImageUrl: "https://opengraph.githubassets.com/c631b814f6ee954cb4a45c6b54dc1f4592b12c3cdea4de1349f370a29299da8f/petersimmons1972/engram-go"
---

Every time you close your AI coding session, it forgets everything. The JWT library you chose. The expiry bug you spent an afternoon on. The pattern you explicitly rejected. Gone. Next session, the agent starts from zero and you start explaining.

```python
# Session start — before touching any code
memory_recall("session handoff recent decisions", project="myapp")

# After settling on a technical choice
memory_store(
    "Chose RS256 over HS256: the API gateway needs to verify tokens without
     holding the signing secret. HS256 would require distributing the key to
     every service. Do not change this without updating the gateway config.",
    memory_type="decision",
    project="myapp"
)
```

---

## Local-First by Default

> **Your memories stay on your machine.**

Engram stores everything locally by design. Your PostgreSQL keeps every memory. Embeddings run locally via Ollama in local-only mode. Nothing leaves your machine unless you explicitly send it. Supported bootstrap modes:

- **Local-only (recommended for fresh clones)** — no external dependencies; start with `docker-compose.local.yml`.
- **Hybrid** — external Ollama/Olla router, started by `make up` via…
