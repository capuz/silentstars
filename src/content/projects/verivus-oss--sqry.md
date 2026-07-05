---
repo: "verivus-oss/sqry"
name: "sqry"
description: "Semantic code search engine - by Verivus (sqry.dev)"
readmeQualityOk: true
url: "https://github.com/verivus-oss/sqry"
homepage: "https://sqry.dev"
language: "C"
languages: ["C", "Rust"]
languagePcts: [74, 25]
topics: ["call-graph", "cli", "code-search", "developer-tools", "developer-tools-ai-agent", "lsp", "mcp", "rust", "semantic-search", "tree-sitter"]
stars: 26
forks: 5
openIssues: 0
closedIssues: 7
watchers: 1
contributors: 5
recentReleases: 0
createdAt: "2025-10-26T07:53:10Z"
lastCommitAt: "2026-07-05T21:00:07Z"
lastReleaseAt: "2026-04-02T03:13:20Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 91
undervaluedScore: 54
maintainers: ["sqry-release-plz[bot]", "verivusOSS-releases", "verivus-open"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1083528058/7eb263b3-2f66-4c93-a8a6-f34de7e52e14"
---

# sqry

sqry is a local semantic code search tool. It parses source code into AST-backed symbol and relationship graphs so you can ask code questions that text search cannot answer reliably.

Website: https://sqry.dev

## Current Capabilities

- Structural queries over symbol kind, language, visibility, names, return types, references, and relations.
- Graph analysis for callers, callees, imports, exports, call paths, cycles, unused symbols, duplicates, impact, semantic diff, and focused subgraphs.
- Edge-backed `returns:<TypeName>` and resolution-aware `resolved_via:<kind>` predicates for supported graph paths.
- Workspace-aware indexing through `.sqry-workspace` registries and VS Code `.code-workspace` `sqry.workspace` blocks. 
- Daemon-backed shared graph loading through `sqryd` for editor, MCP, and repeated-agent workflows.
- MCP integration for AI assistants. Standalone `sqry-mcp` currently exposes 38 tools; daemon-hosted MCP exposes a 16-tool subset. Use `tools/list`, `sqry-mcp --list-tools`, or `sqry://meta/manifest` as the authoritative catalog.
- LSP and VS Code extension support for editor workflows.

> **Removed in 21.0.0:** the experimental natural-language surface…
