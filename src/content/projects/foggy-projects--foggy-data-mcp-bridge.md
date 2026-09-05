---
repo: "foggy-projects/foggy-data-mcp-bridge"
name: "foggy-data-mcp-bridge"
description: "MCP Data Bridge for Java. Enabling safe Text-to-Query via a semantic layer, making enterprise data accessible to AI Agents."
readmeQualityOk: true
url: "https://github.com/foggy-projects/foggy-data-mcp-bridge"
homepage: "https://foggy-projects.github.io/foggy-data-mcp-bridge/"
language: "Java"
languages: ["Java"]
languagePcts: [74]
topics: ["agent", "data-analysis", "java", "llm", "mcp", "semantic-layer", "spring-boot", "text-to-sql"]
stars: 7
forks: 1
openIssues: 6
closedIssues: 32
watchers: 0
contributors: 3
recentReleases: 8
createdAt: "2025-12-17T04:11:33Z"
lastCommitAt: "2026-09-05T07:47:38Z"
lastReleaseAt: "2026-07-04T05:46:20Z"
status: "thriving"
tags: ["hidden_gem", "release_machine"]
healthScore: 95
undervaluedScore: 74
maintainers: ["foggy-projects"]
openGraphImageUrl: "https://opengraph.githubassets.com/b421ca2e50ff171de42b0126e530e1682b1761df0a77573a407d7bca92d89f75/foggy-projects/foggy-data-mcp-bridge"
discussionCount: 1
---

</p>

<h1 align="center">Foggy Data MCP Bridge</h1>

  A governed semantic layer that lets AI assistants query business data through MCP—without making raw database schemas the AI interface.
</p>

</p>

</p>

## Overview

Giving an LLM direct access to database schemas and asking it to generate SQL
couples the AI to physical tables, dialect details, and fragile join logic.
Foggy puts a semantic and governance layer in between:

```text
AI client
   │  MCP / JSON Query DSL
   ▼
Foggy Runtime
   ├── TM/QM semantic models
   ├── namespace and field policies
   ├── query planning and dialect translation
   └── model lifecycle and Runtime API
   │
   ▼
MySQL · PostgreSQL · SQL Server · SQLite · optional MongoDB
```

AI clients work with business concepts such as revenue, customer, product, and
order date. Foggy resolves those concepts into governed, read-oriented queries
and handles joins, aggregation, and database dialects at runtime.

## Highlights

- **Semantic modeling** — define reusable table models (TM) and query models
  (QM) with FSScript.
- **MCP-native access** — expose analyst, business, and administrative tool
  surfaces over JSON-RPC.
- **Structured query DSL** — keep…
