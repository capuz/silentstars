---
repo: "sdsrss/code-graph-mcp"
name: "code-graph-mcp"
description: "AST knowledge graph MCP server for Claude Code — semantic search, call graph traversal, HTTP route tracing, impact analysis. Auto-indexes 10 languages via Tree-sitter."
readmeQualityOk: true
url: "https://github.com/sdsrss/code-graph-mcp"
language: "Rust"
languages: ["Rust", "JavaScript"]
languagePcts: [68, 21]
topics: ["ast", "call-graph", "claude-code", "claude-code-plugin", "code-navigation", "knowledge-graph", "mcp", "rust", "semantic-search", "tree-sitter"]
stars: 96
forks: 19
openIssues: 0
closedIssues: 15
watchers: 1
contributors: 4
recentReleases: 0
createdAt: "2026-03-10T17:42:45Z"
lastCommitAt: "2026-11-18T12:01:43Z"
lastReleaseAt: "2026-03-14T04:36:15Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 100
undervaluedScore: 39
maintainers: ["sdsrss", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/e3b3fd518353f5b6e9bc66368b33e51eeb7fb8d58577ea27b6f84a4f0628bd35/sdsrss/code-graph-mcp"
---

# code-graph-mcp

A high-performance code knowledge graph server implementing the [Model Context Protocol (MCP)](https://modelcontextprotocol.io/). Indexes codebases into a structured AST knowledge graph with semantic search, call graph traversal, and HTTP route tracing — designed to give AI coding assistants deep, structured understanding of your code.

## Features

- **Multi-language parsing** — Tree-sitter AST extraction across tiers of depth:
  - **Full** (calls + imports + inheritance): TypeScript/TSX, JavaScript, Go, Python, Rust, Java.
