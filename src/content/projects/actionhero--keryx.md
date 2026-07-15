---
repo: "actionhero/keryx"
name: "keryx"
description: "Keryx: The Fullstack TypeScript Framework for MCP and APIs"
readmeQualityOk: true
url: "https://github.com/actionhero/keryx"
homepage: "https://www.keryxjs.com"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [95]
topics: ["ai", "api", "bun", "framework", "full-stack", "mcp", "typescript", "drizzle", "mcp-framework", "mcp-server"]
stars: 32
forks: 5
openIssues: 4
closedIssues: 188
watchers: 1
contributors: 4
recentReleases: 0
createdAt: "2024-03-04T00:51:15Z"
lastCommitAt: "2026-07-15T05:54:53Z"
lastReleaseAt: "2026-02-22T00:16:28Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 96
undervaluedScore: 63
maintainers: ["evantahler", "devin-ai-integration[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/b08ccae88a900415181f0c76ecb6292f0a6cc0b8066289f774ee859d152527e8/actionhero/keryx"
discussionCount: 3
---

# Keryx

</p>

## What is this Project?

The big idea behind Keryx: **write your controller once, and it works everywhere.** A single action class handles HTTP requests, WebSocket messages, CLI commands, background tasks, and MCP tool calls — same inputs, same Zod validation, same middleware, same response. You write the logic once; the only thing that changes is how the request arrived and how the response gets delivered.

That last transport — MCP — is the reason I built this now. Every action is automatically an MCP tool, so AI agents authenticate with built-in OAuth 2.1, get typed errors, and call the exact same validated endpoints your HTTP clients do. There's no second MCP server to maintain and no schemas to keep in sync… you expose your app to agents by writing the app.

And it's a real backend, not a toy. You get Drizzle ORM with auto-migrations, background tasks with fan-out on Resque, streaming responses (SSE, chunked binary, and the same stream over WebSocket and MCP), OpenAPI generation, pagination and caching helpers, database transactions, and a companion Vite + React frontend that reads your actions with end-to-end type safety — no code generation. It's all on…
