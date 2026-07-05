---
repo: "kahliburke/Kaimon.jl"
name: "Kaimon.jl"
description: "MCP server giving AI agents full access to Julia's runtime via a live Gate — code execution, introspection, debugging, testing, and semantic search"
readmeQualityOk: true
url: "https://github.com/kahliburke/Kaimon.jl"
homepage: "https://kahliburke.github.io/Kaimon.jl/dev/"
language: "Julia"
languages: ["Julia"]
languagePcts: [99]
topics: ["ai", "claude-code", "debugging", "developer-tools", "julia", "mcp", "model-context-protocol", "agent", "cursor", "julia-lang"]
stars: 84
forks: 15
openIssues: 7
closedIssues: 33
watchers: 2
contributors: 4
recentReleases: 4
createdAt: "2026-02-27T08:43:55Z"
lastCommitAt: "2026-07-05T20:16:51Z"
lastReleaseAt: "2026-04-16T10:03:23Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 40
maintainers: ["kahliburke"]
openGraphImageUrl: "https://opengraph.githubassets.com/9621faa9876862265aac70d52e49d0103e91b86b6ab4ad30bdacf1d23abaedf4/kahliburke/Kaimon.jl"
---

# Kaimon.jl

</p>

**Opening the gate between AI and Julia.**

Kaimon is an MCP (Model Context Protocol) server that gives AI agents full access to
Julia's runtime. Connect Claude Code, Cursor, or any MCP client to a live Julia session
with a focused default surface of 49 tools for code execution, introspection, debugging,
testing, and code search.

## Key Features

- **Live Code Execution** — evaluate Julia code in persistent REPL sessions with full
  state, package access, and streaming output
- **Deep Introspection** — inspect types, methods, lowered IR, type-inferred code, and
  macro expansions directly from the agent
- **The Gate** — connect external Julia processes and register custom tools via ZMQ.
  Your app's domain logic becomes agent-callable with automatic schema generation
- **Interactive Debugging** — Infiltrator.jl integration with breakpoints, variable
  inspection, and expression evaluation at pause points
- **Semantic Code Search** — index projects into Qdrant and search with natural language
  queries like "function that handles HTTP routing"
- **Terminal Dashboard** — real-time TUI monitoring sessions, tool calls, test runs,
  and search results across all…
