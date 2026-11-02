---
repo: "vmikhailov/code-explorer"
name: "code-explorer"
description: "Ontology-driven codebase indexer and query service. Parses C#, TypeScript/JS, Go, Python, and SQL into an embedded graph database. Exposes Model Context Protocol (MCP) tools for AI agents to perform deep static analysis, cross-project call-graph tracing, and data lineage mapping."
readmeQualityOk: true
url: "https://github.com/vmikhailov/code-explorer"
language: "C#"
languages: ["C#"]
languagePcts: [73]
topics: ["ai-agents", "architecture", "ast", "claude-code", "code-graph", "cursor", "data-lineage", "developer-tools", "dotnet", "linter"]
stars: 16
forks: 0
openIssues: 0
closedIssues: 5
watchers: 2
contributors: 2
recentReleases: 10
createdAt: "2026-06-03T18:26:31Z"
lastCommitAt: "2026-11-02T13:38:18Z"
lastReleaseAt: "2026-10-20T02:15:33Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 100
undervaluedScore: 52
maintainers: ["vmikhailov"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1258598670/62acaa50-5650-45ce-b200-42fb43361758"
---

# CodeExplorer (`ce`) — Make AI Coding Agents Production-Safe

**AI agents see files, not architecture.** CodeExplorer (`ce`) gives your AI coding agents (`Claude Code`, `Cursor`, `GitHub Copilot`, `Windsurf`, `Cline`) and engineering teams a **live cross-service map of every API, queue, and database in VS Code & MCP—plus hard architectural guardrails in CI**.

**✓ Live Architecture Map in VS Code** • **✓ Surgical MCP Context (7.5× Faster, 40× Fewer Tokens)** • **✓ CI Architecture Gates** • **✓ 100% Local SQLite Graph**

It indexes polyglot source files, project manifests, HTTP/gRPC/GraphQL endpoints, message broker topologies, and SQL schemas into a single local SQLite graph (`.codeexplorer/graph.db`) powered by an embedded OpenCypher-to-SQL compiler:

1. **Live Architecture Map in VS Code**: Interactive C1/C2/C3 service topologies, concentric architectural tiers, async broker flows, and database lineage with click-to-source navigation.
2. **Surgical MCP Context for AI Agents**: Gives coding agents instant access to call chains, cross-service dependencies, data lineage, and blast-radius impact analysis without burning millions of tokens on blind `grep` searches.
3. **CI…
