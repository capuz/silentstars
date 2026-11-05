---
repo: "desplega-ai/agent-fs"
name: "agent-fs"
description: "A persistent, searchable filesystem for AI agents."
readmeQualityOk: true
url: "https://github.com/desplega-ai/agent-fs"
homepage: "https://agent-fs.dev"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [94]
topics: ["agentic", "agents", "filesystem", "s3", "llms", "human-in-the-loop", "orchestration"]
stars: 25
forks: 10
openIssues: 5
closedIssues: 4
watchers: 0
contributors: 11
recentReleases: 0
createdAt: "2026-03-15T02:56:04Z"
lastCommitAt: "2026-11-05T00:18:19Z"
lastReleaseAt: "2026-05-04T22:32:29Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 88
undervaluedScore: 48
maintainers: ["desplega-bot", "tarasyarema", "marcelpallares"]
openGraphImageUrl: "https://opengraph.githubassets.com/455702a13cc8d12d10867637dac8b9f081836ad6515045bac8be3b4d7ffc00a1/desplega-ai/agent-fs"
---

---

Agent FS gives AI agents a structured filesystem with built-in semantic search, versioning, and identity management. It runs as a CLI and an HTTP server with integrated MCP support — so any AI coding assistant can use it as a long-term memory and file store.

agent-fs was built to power the shared filesystem in [agent-swarm](https://github.com/desplega-ai/agent-swarm) — a multi-agent coordination framework. While it was designed for swarm agents to share files, search content, and collaborate, it works as a standalone filesystem for any AI agent.

## Key Features

- **Semantic search**: Index and search files using vector embeddings (OpenAI, Google GenAI, OpenRouter, Cheaper Inference, or local). Local runs nomic-embed-text-v1.5 on llama.cpp or EmbeddingGemma 2 on transformers.js.
- **SQL queries** — Run sandboxed DuckDB SQL over stored documents (CSV, TSV, Parquet, Excel, JSON, NDJSON, SQLite, DuckDB) — see [docs/sql.md](https://github.com/desplega-ai/agent-fs/blob/HEAD/docs/sql.md)
- **Structured storage** — SQLite-backed file operations with metadata and versioning
- **S3-compatible sync** — Sync agent workspaces to any S3-compatible object store
- **Identity management**…
