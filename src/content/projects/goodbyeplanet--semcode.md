---
repo: "GoodbyePlanet/semcode"
name: "semcode"
description: "Semantic code-search (semcode) MCP. Indexes code symbols and commit history. Combines dense embeddings with sparse BM25 vectors for hybrid search that balances semantic understanding with keyword precision."
readmeQualityOk: true
url: "https://github.com/GoodbyePlanet/semcode"
language: "Python"
languages: ["Python"]
languagePcts: [99]
topics: ["embeddings", "jina-embeddings", "mcp", "qdrant-vector-database", "rag", "semantic-search", "vector-database", "ollama", "openai", "voyage-ai"]
stars: 7
forks: 2
openIssues: 5
closedIssues: 55
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-04-24T20:55:06Z"
lastCommitAt: "2026-09-07T08:34:45Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 96
undervaluedScore: 56
maintainers: ["GoodbyePlanet", "dependabot[bot]", "binggao1230"]
openGraphImageUrl: "https://opengraph.githubassets.com/0aa5e14a4a6225b48e5a8437e4c63837bddae3bc96a6db9e451b6d23823eda98/GoodbyePlanet/semcode"
---

# semcode

An MCP (Model Context Protocol) server providing hybrid semantic search over code across a set of
GitHub repositories that you list in `config.yaml`. It parses symbols
with *Tree-sitter* and indexes both code and git commit history, so AI clients can query them by
natural language or by symbol name.

Hybrid retrieval combines dense embeddings with BM25, so both natural-language queries
("where do we publish order events?") and symbol-name lookups (`PlaceOrderRequest`) work well.

Submitted on:

[mcpservers.org](https://mcpservers.org/servers/goodbyeplanet/semcode)

[mcpmarket.com](https://mcpmarket.com/server/semcode)

[mcp.so](https://mcp.so/servers/semcode)

## How it works

1. Fetches source files from configured GitHub repositories
2. Parses code symbols (functions, classes, methods, components) using Tree-sitter
3. Generates **two** embeddings per symbol — a dense semantic vector (pluggable provider: Jina Code V2 by default, or
   Voyage / OpenAI / Ollama) and a BM25 sparse vector keyed on code-identifier tokens (camelCase / snake_case split into
   subwords)
4. Stores both in Qdrant and retrieves them with **hybrid search** — Reciprocal Rank Fusion (RRF) over the…
