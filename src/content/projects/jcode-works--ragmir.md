---
repo: "jcode-works/ragmir"
name: "ragmir"
description: "Cited retrieval for coding agents and the RAG systems you ship: open-source TypeScript library, CLI, and MCP server that runs locally or on your servers."
readmeQualityOk: true
url: "https://github.com/jcode-works/ragmir"
homepage: "https://ragmir.com"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [80]
topics: ["ai-agents", "local-first", "mcp", "rag", "typescript", "local-rag", "developer-tools", "mcp-server", "coding-agents", "document-retrieval"]
stars: 7
forks: 0
openIssues: 0
closedIssues: 2
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-06-28T11:15:29Z"
lastCommitAt: "2026-11-20T12:05:45Z"
lastReleaseAt: "2026-07-05T10:40:48Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 99
undervaluedScore: 57
maintainers: ["jb-thery"]
openGraphImageUrl: "https://opengraph.githubassets.com/b882a32dad91eba45591bf98afc99e7988cb93f09420fb66e70c0c502197c163/jcode-works/ragmir"
---

94% of real developer questions find the right file in the top 10 · 36 ms median search on a
  30,171-chunk monorepo · <a href="#benchmarks">benchmarks</a>

Ragmir turns your code, specifications, and office documents into a local search index. Claude
Code, Codex, or your own application queries it through MCP, the `rgr` CLI, or a TypeScript API,
and every passage comes back with a citation the agent can open and check. Your agent plans,
reasons, and writes with the model you choose; Ragmir finds the evidence. The same index runs on a
laptop for the first demo, then on a VPS, an on-premise server, or a network without internet
access.

```bash
npm install -D @jcode.labs/ragmir
npx rgr setup --agents claude,codex   # connect your agents
npx rgr sources add "docs/**/*.md" "src/**/*.ts"
npx rgr ingest
npx rgr search "how are permissions checked?" --compact
```
