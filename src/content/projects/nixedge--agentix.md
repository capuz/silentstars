---
repo: "nixedge/agentix"
name: "agentix"
description: "Custom rust MCP server for indexing code, docs, gh issues and PRs"
readmeQualityOk: true
url: "https://github.com/nixedge/agentix"
language: "Rust"
languages: ["Rust"]
languagePcts: [89]
stars: 6
forks: 2
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-03-31T02:36:10Z"
lastCommitAt: "2026-08-09T04:41:57Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 67
undervaluedScore: 18
maintainers: ["disassembler"]
openGraphImageUrl: "https://opengraph.githubassets.com/e7d84ee45aa865e4af25bf651f5fd742c61b96b62e7afaf531714d5c04d2fa77/nixedge/agentix"
---

# agentic-nix

Hybrid code search for Claude. Index your codebases, documentation, and GitHub issues into
PostgreSQL (ParadeDB BM25 + pgvector HNSW). A Rust MCP server exposes the index to Claude Code
so it can answer questions about your code without reading every file from scratch.

**What this replaces:** Claude reading 50 files one by one to find something. Instead, Claude
queries the index with a single tool call and gets the 10 most relevant chunks in under a second.

---

## How it works

```
your repos ──► ingest ──► PostgreSQL (ParadeDB)
                               │
                          BM25 + vector          Ollama
                          hybrid search    ◄──  embeddings
                               │
                          MCP server ──► Claude Code
```

1. The `ingest` binary walks your repos, extracts named symbols via tree-sitter, embeds each
   chunk via Ollama, and stores everything in PostgreSQL.
2. The `mcp-server` binary sits between Claude and the database, exposing search tools over
   the MCP protocol (stdio).
3. Claude Code connects to the MCP server automatically and calls the tools when it needs
   to understand code.

---

## Prerequisites…
