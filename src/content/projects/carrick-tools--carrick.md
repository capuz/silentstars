---
repo: "carrick-tools/carrick"
name: "carrick"
description: "Carrick maps your entire TypeScript codebase across services and repositories, giving AI agents full context on existing types, routes, and function behaviours over MCP before they write duplicate or breaking code."
readmeQualityOk: true
url: "https://github.com/carrick-tools/carrick"
homepage: "https://carrick.tools"
language: "Rust"
languages: ["Rust", "TypeScript"]
languagePcts: [74, 25]
topics: ["ai-agents", "code-intelligence", "developer-tools", "github-actions", "llm", "mcp", "mcp-server", "microservices", "rust", "static-analysis"]
stars: 7
forks: 1
openIssues: 1265
closedIssues: 688
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2025-04-03T10:08:36Z"
lastCommitAt: "2026-11-11T15:54:54Z"
lastReleaseAt: "2025-06-12T12:56:41Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 86
undervaluedScore: 72
maintainers: ["daveymoores"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/959763391/dac13534-76f2-4ea8-a118-9b822f967248"
postedAt: "2026-11-08T10:50:02.108Z"
---

# Carrick

### TypeScript codebase intelligence for AI agents & IDEs.

Coding agents working across full-stack and multi-service codebases routinely rebuild existing helpers, trust stale type definitions, and modify API contracts without knowing who consumes them.

Carrick solves this by indexing your entire TypeScript ecosystem, from frontend apps to backend services, whether they live in a monorepo or across multiple repositories. By integrating deeply with the TypeScript compiler, Carrick traces every route, type, and cross-service call while recording function behaviour—so agents search by intent rather than name and stay grounded in your real architecture.

Delivered via MCP for AI agents and LSP for IDEs, Carrick ensures models see existing endpoints and utilities before generating new code. The scanner is source-available, runs from your CLI or CI pipeline, and includes a Free plan so you can start building safer agent workflows immediately.

## Get started

```bash
npm install -g carrick
carrick init
```

`carrick init` signs you in, connects your agent and downloads your index. The [quick start](https://docs.carrick.tools/quickstart) has the details (Node 24 or newer).…
