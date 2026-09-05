---
repo: "The-40-Thieves/obsidian-tc"
name: "obsidian-tc"
description: "Obsidian Turbocharged — governed, agent-ready Obsidian MCP server. 163 tools across 31 domains, multi-vault native, pluggable embeddings. TypeScript + Rust. AGPL-3.0-only."
readmeQualityOk: true
url: "https://github.com/The-40-Thieves/obsidian-tc"
homepage: "https://github.com/The-40-Thieves/obsidian-tc/wiki"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [92]
topics: ["ai-agents", "mcp", "model-context-protocol", "obsidian", "obsidian-md", "rust", "typescript"]
stars: 5
forks: 1
openIssues: 0
closedIssues: 30
watchers: 0
contributors: 3
recentReleases: 10
createdAt: "2026-05-18T22:15:05Z"
lastCommitAt: "2026-09-05T07:49:26Z"
lastReleaseAt: "2026-07-14T03:09:47Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 99
undervaluedScore: 71
maintainers: ["suavecito585"]
openGraphImageUrl: "https://opengraph.githubassets.com/6c983f2bc4caec09e026986962d667ffa2c388a05d704bd8fa6f8b9c2716bd05/The-40-Thieves/obsidian-tc"
---

# obsidian-tc

> Obsidian Turbocharged — governed, agent-ready vault access over MCP.

```bash
npm install -g obsidian-tc      # Node >= 24 or Bun >= 1.1
```

Also ships as a Docker image (`ghcr.io/the-40-thieves/obsidian-tc`), a one-click `.mcpb` bundle, and standalone binaries.

Since v5.0 (2026-07-24), the Local REST API plugin ships its own built-in MCP server — 18
tools at `https://127.0.0.1:27124/mcp/` for vault CRUD, search, and commands. obsidian-tc adds
three things it doesn't have: **governed writes** (folder ACLs, human-in-the-loop confirmation,
compare-and-swap, an audit log), **fused retrieval** (BM25 + vector + graph, RRF-fused and
reranked), and **memory that lives in the vault** — episodes, activation decay, and explicit
forgetting, under the same ACL as every other write.

The fastest way to try it, no install step and no config file:

```sh
npx obsidian-tc /path/to/vault
```

Lexical search and every note tool work immediately; semantic and graph-seeded retrieval need
an embeddings backend (Ollama by default), which is the upgrade a config file buys you.

## Why this exists

An AI agent with raw filesystem access to your Obsidian vault can do real damage:…
