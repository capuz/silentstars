---
repo: "clouatre-labs/aptu-coder"
name: "aptu-coder"
description: "aptu-coder: MCP server for AST analysis, call graphs, and code structure (tree-sitter)"
readmeQualityOk: true
url: "https://github.com/clouatre-labs/aptu-coder"
language: "Rust"
languages: ["Rust"]
languagePcts: [88]
topics: ["ai", "code-analysis", "developer-tools", "tree-sitter", "ast", "call-graph", "mcp", "mcp-server", "model-context-protocol", "rust"]
stars: 5
forks: 1
openIssues: 6
closedIssues: 521
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-02-27T20:53:09Z"
lastCommitAt: "2026-08-29T17:27:30Z"
lastReleaseAt: "2026-03-24T22:24:20Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "hidden_gem"]
healthScore: 99
undervaluedScore: 59
maintainers: ["clouatre", "renovate[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/e49e3bfdbb72fd8d969466e6035cc7e3b55afc7eb1cb87095821437f65dd7c88/clouatre-labs/aptu-coder"
---

<h1 align="center">aptu-coder</h1>

</p>

> [!NOTE]
> Native agent tools (regex search, path matching, file reading) handle targeted lookups well. `aptu-coder` handles the mechanical, non-AI work: mapping directory structure, extracting symbols, and tracing call graphs, so a coding agent's context window is spent reasoning instead of re-deriving structure on every call.

Most code-intelligence tooling for AI agents indexes a codebase into a cloud embedding or vector store and retrieves by similarity search. aptu-coder instead parses the codebase into a structural graph on-device with tree-sitter and serves it locally over MCP: no source code leaves the machine, and retrieval is exact (symbol tables and call graphs) rather than approximate (nearest-neighbor similarity).

## Benchmarks

Auth migration task on Claude Code against [Django](https://github.com/django/django) (Python) source tree. [Full methodology](https://github.com/clouatre-labs/aptu-coder/blob/main/docs/benchmarks/v12/methodology.md).

| Mode | Sonnet 4.6 | Haiku 4.5 |
|---|---|---|
| MCP | 112k tokens, $0.39 | 406k tokens, $0.42 |
| Native | 276k tokens, $0.95 | 473k tokens, $0.53 |
| **Savings** | **59% fewer…
