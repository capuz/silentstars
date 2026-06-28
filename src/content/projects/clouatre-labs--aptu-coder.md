---
repo: "clouatre-labs/aptu-coder"
name: "aptu-coder"
description: "aptu-coder: MCP server for AST analysis, call graphs, and code structure (tree-sitter)"
url: "https://github.com/clouatre-labs/aptu-coder"
language: "Rust"
languages: ["Rust"]
languagePcts: [88]
topics: ["ai", "code-analysis", "developer-tools", "tree-sitter", "ast", "call-graph", "mcp", "mcp-server", "model-context-protocol", "rust"]
stars: 5
forks: 1
openIssues: 11
closedIssues: 449
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-02-27T20:53:09Z"
lastCommitAt: "2026-06-28T02:02:59Z"
lastReleaseAt: "2026-03-24T22:24:20Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "hidden_gem", "under_pressure"]
healthScore: 99
undervaluedScore: 58
maintainers: ["clouatre", "renovate[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/37daa831a4ca7b1909ed5b3f4f5c88cfdecf180e70967889ea7103ee1788e532/clouatre-labs/aptu-coder"
---

<h1 align="center">aptu-coder</h1>

</p>

> [!NOTE]
> Native agent tools (regex search, path matching, file reading) handle targeted lookups well. `aptu-coder` handles the mechanical, non-AI work: mapping directory structure, extracting symbols, and tracing call graphs. Offloading this to a dedicated tool reduces token usage and speeds up coding with better accuracy.

## Benchmarks

Auth migration task on Claude Code against [Django](https://github.com/django/django) (Python) source tree. [Full methodology](https://github.com/clouatre-labs/aptu-coder/blob/main/docs/benchmarks/v12/methodology.md).

| Mode | Sonnet 4.6 | Haiku 4.5 |
|---|---|---|
| MCP | 112k tokens, $0.39 | 406k tokens, $0.42 |
| Native | 276k tokens, $0.95 | 473k tokens, $0.53 |
| **Savings** | **59% fewer tokens, 59% cheaper** | **14% fewer tokens, 21% cheaper** |

AeroDyn integration audit task on Claude Code against [OpenFAST](https://github.com/OpenFAST/openfast) (Fortran) source tree. [Full methodology](https://github.com/clouatre-labs/aptu-coder/blob/main/docs/benchmarks/v13/methodology.md).

| Mode | Sonnet 4.6 | Haiku 4.5 |
|---|---|---|
| MCP | 472k tokens, $1.65 | 687k tokens, $0.72 |
| Native | 877k…
