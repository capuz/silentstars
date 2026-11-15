---
repo: "jcode-works/jcode-ragmir"
name: "jcode-ragmir"
description: "Cited retrieval for coding agents and the RAG systems you ship: open-source TypeScript library, CLI, and MCP server that runs locally or on your servers."
readmeQualityOk: true
url: "https://github.com/jcode-works/jcode-ragmir"
homepage: "https://ragmir.com"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [78]
topics: ["ai-agents", "local-first", "mcp", "rag", "typescript", "local-rag", "developer-tools", "mcp-server", "coding-agents", "document-retrieval"]
stars: 6
forks: 0
openIssues: 0
closedIssues: 2
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-06-28T11:15:29Z"
lastCommitAt: "2026-11-15T11:22:54Z"
lastReleaseAt: "2026-07-05T10:40:48Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 98
undervaluedScore: 58
maintainers: ["jb-thery"]
openGraphImageUrl: "https://opengraph.githubassets.com/cf7d3594062a4b9bd39a8e0f5319626793aab10a3cfa83c8a89da8acbc2e969d/jcode-works/jcode-ragmir"
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

| Without Ragmir | With Ragmir |
| --- | --- |
| Code search misses the specs, spreadsheets, and scanned PDFs around the code. | One local index for code and documents, with optional local OCR. |
| Whole files pasted into the prompt, then pasted again on the next question. | A few compact citations per question; passages…
