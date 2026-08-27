---
repo: "giauphan/codeatlas-mcp-server"
name: "codeatlas-mcp-server"
description: "Local-first MCP server for AI-powered codebase intelligence — AST analysis, dependency graphs, and semantic search. Your source code never leaves your machine."
readmeQualityOk: true
url: "https://github.com/giauphan/codeatlas-mcp-server"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [95]
stars: 9
forks: 0
openIssues: 0
closedIssues: 5
watchers: 0
contributors: 2
recentReleases: 1
createdAt: "2026-06-24T15:20:49Z"
lastCommitAt: "2026-08-27T14:32:01Z"
lastReleaseAt: "2026-08-27T10:22:45Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 98
undervaluedScore: 53
maintainers: ["giauphan", "google-labs-jules[bot]", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/5d9b2b1f20f18b575c4dd66ac4480ef59b4548fd19f37b8a8e4d8444374b8384/giauphan/codeatlas-mcp-server"
---

# CodeAtlas MCP Server

Local-first MCP server for AI-powered codebase intelligence — AST analysis, dependency graphs, and semantic search. Your source code never leaves your machine.

## 📌 What is CodeAtlas MCP Server?

A **Model Context Protocol (MCP)** server that provides:
- **AST Analysis**: Parse TypeScript, Python, PHP, and more.
- **Dependency Graphs**: Visualize call chains and module relationships.
- **Semantic Search**: Find code by meaning, not just syntax.
- **Local-First**: Your code stays on your machine; no telemetry by default.
- **Cloud Optional**: Connect to [codeatlas-platform](https://github.com/giauphan/codeatlas-platform) for dream memory, genome immune system, and skills sync.

### Why Use It?
| Use Case | Benefit |
|---|---|
| **AI IDE Integration** | Claude Desktop, Cursor, VSCode — get context-aware code intelligence. |
| **Codebase Audits** | Automate dependency analysis, security scans, and refactoring insights. |
| **Semantic Search** | Find functions, classes, or modules by intent, not just name. |
| **Multi-Language Support** | Works with TypeScript, Python, PHP, and more via AST parsers. |

---

## 🏗 Architecture

```
AI IDE → MCP stdio/SSE →…
