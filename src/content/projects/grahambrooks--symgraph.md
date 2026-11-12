---
repo: "grahambrooks/symgraph"
name: "symgraph"
description: "Semantic code intelligence MCP server - build knowledge graphs of codebases to enhance AI-assisted code exploration."
readmeQualityOk: true
url: "https://github.com/grahambrooks/symgraph"
language: "Rust"
languages: ["Rust"]
languagePcts: [95]
topics: ["mcp-server"]
stars: 16
forks: 2
openIssues: 1
closedIssues: 4
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-02-01T17:56:08Z"
lastCommitAt: "2026-11-12T05:43:42Z"
lastReleaseAt: "2026-04-12T17:32:55Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 91
undervaluedScore: 55
maintainers: ["grahambrooks", "github-actions[bot]", "auto-managed[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/22d47ab287e775ed7d712fad34205cd3a942de95da9ded1ae5f42f892cb3163a/grahambrooks/symgraph"
---

# symgraph

Semantic code intelligence MCP server - build knowledge graphs of codebases to enhance AI-assisted code exploration.

symgraph is a rust implementation of https://github.com/colbymchenry/codegraph. Why? Ongoing exploration of compiled
binary deployment of MCP Servers.

## Features

- **Multi-language support**: Rust, TypeScript, JavaScript, Python, Go, Java, C,
  C++, C#, Kotlin, Scala, Groovy, Ruby, shell (sh/bash/zsh/ksh) — plus package
  manifests. Extensionless scripts are recognised by their `#!` line
- **Symbol extraction**: functions, classes, methods, structs, interfaces, traits, enums, constants
- **Relationship tracking**: calls, contains, imports, exports, extends, implements,
  field reads/writes, enum dispatch
- **Impact analysis**: trace the effect of changes through the codebase
- **Coupling analysis**: module dependency graph with fan-in/out and cycles,
  coupling scored on strength × distance × volatility, god-struct ranking, and
  enum dispatch-site discovery
- **Search**: prefix search over symbol names, plus semantic (bm25) search over
  identifier tokens and docstrings
- **Git-aware**: per-symbol blame and per-file churn feed the volatility…
