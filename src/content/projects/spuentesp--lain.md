---
repo: "spuentesp/lain"
name: "lain"
description: "High-performance MCP server for AI coding agents: persistent knowledge graph, blast radius analysis, semantic search. Built in Rust."
readmeQualityOk: true
url: "https://github.com/spuentesp/lain"
language: "Rust"
languages: ["Rust"]
languagePcts: [88]
topics: ["agentic-coding", "agentic-rag", "agentic-workflows", "llm-tools", "mcp", "mcp-server", "mcp-servers", "petgraph", "rust", "treesitter"]
stars: 6
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 5
createdAt: "2026-04-26T21:49:34Z"
lastCommitAt: "2026-08-18T04:07:38Z"
lastReleaseAt: "2026-08-11T20:05:24Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 70
undervaluedScore: 57
maintainers: ["spuentesp"]
openGraphImageUrl: "https://opengraph.githubassets.com/7f023b0fd71f320f0751d389db65f2fe225b3a419d90be8ca8b4395cb4307192/spuentesp/lain"
---

# LAIN-mcp

LAIN builds a map of how all the code in your project connects — what calls what, what depends on what, which files tend to change together. Then it lets your AI coding assistant ask questions about that map. So instead of the AI just looking at one file and guessing, it can ask "if I change this function, what else breaks?" and get a real answer. It plugs into any AI agent that supports MCP and runs in the background while you work.

## TL;DR

```bash
# Install (interactive — will add `lain` to PATH)
curl -fsSL https://raw.githubusercontent.com/spuentesp/lain/main/install.sh | bash

# Or non-interactive
curl -fsSL https://raw.githubusercontent.com/spuentesp/lain/main/install.sh | \
  bash /dev/stdin --yes

# Configure your project
mkdir -p ~/projects/biller && cd ~/projects/biller
lain repos add auth-svc    https://github.com/acme/auth-svc.git
lain repos add billing-svc https://github.com/acme/billing-svc.git
lain workspaces create biller-core --members auth-svc,billing-svc

# Run the server
lain server --config ./repos.yaml --transport http --port 9999
# Open http://localhost:9999 — that's the Command Center.
```

## What is Lain?

Lain is a persistent…
