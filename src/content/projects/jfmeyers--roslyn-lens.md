---
repo: "jfmeyers/roslyn-lens"
name: "roslyn-lens"
description: "Token-efficient MCP server for .NET codebase navigation via Roslyn semantic analysis — designed for Claude Code."
readmeQualityOk: true
url: "https://github.com/jfmeyers/roslyn-lens"
homepage: "https://www.nuget.org/packages/RoslynLens"
language: "C#"
languages: ["C#"]
languagePcts: [90]
topics: ["claude-code", "mcp", "roslyn-analyzer"]
stars: 5
forks: 2
openIssues: 0
closedIssues: 76
watchers: 0
contributors: 3
recentReleases: 4
createdAt: "2026-03-14T15:12:07Z"
lastCommitAt: "2026-07-04T22:21:17Z"
lastReleaseAt: "2026-06-08T14:22:29Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 95
undervaluedScore: 75
maintainers: ["jfmeyers", "ericnewton76"]
openGraphImageUrl: "https://opengraph.githubassets.com/bf58377d9922479ebd0fffcc6269bd1910263e83d3c80c94e459dfe96f3f1fdc/jfmeyers/roslyn-lens"
discussionCount: 0
---

# RoslynLens

A token-efficient MCP (Model Context Protocol) server for .NET codebase
navigation, powered by Roslyn semantic analysis. Designed for use with
[Claude Code](https://docs.anthropic.com/en/docs/claude-code).

Instead of reading entire `.cs` files (500-2000+ tokens each), Claude Code
queries this MCP server and receives focused, semantic results (30-150
tokens). This dramatically reduces token consumption when working with
large .NET solutions.

## Features

### 34 Navigation & Analysis Tools

| Tool | Purpose |
| ---- | ------- |
| `find_symbol` | Locate type/method definitions by name (supports glob patterns) |
| `find_references` | Find all usages of a symbol |
| `find_implementations` | Find interface implementors and derived classes |
| `find_callers` | Find direct callers of a method |
| `find_overrides` | Find overrides of virtual/abstract methods |
| `find_dead_code` | Detect unused types, methods, and properties (with filters) |
| `find_isolated_symbols` | Detect degree-0 types: no incoming refs and no solution-type deps |
| `find_god_nodes` | Identify types/methods with disproportionately high in-degree |
| `find_surprising_dependencies` | Rank unexpected…
