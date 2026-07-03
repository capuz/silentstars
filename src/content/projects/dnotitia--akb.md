---
repo: "dnotitia/akb"
name: "akb"
description: "AKB — Agent Knowledgebase. Organizational memory for AI agents: vault-scoped docs / tables / files unified by URI graph, served over MCP."
url: "https://github.com/dnotitia/akb"
language: "Python"
languages: ["Python", "TypeScript", "Shell"]
languagePcts: [52, 24, 21]
topics: ["agent", "claude", "claude-code", "fastapi", "knowledge-base", "knowledge-graph", "mcp", "model-context-protocol", "multi-tenant", "pgvector"]
stars: 67
forks: 5
openIssues: 2
closedIssues: 30
watchers: 3
contributors: 10
recentReleases: 10
createdAt: "2026-05-07T07:54:22Z"
lastCommitAt: "2026-07-03T06:24:58Z"
lastReleaseAt: "2026-05-28T07:59:42Z"
status: "newborn"
tags: ["hidden_gem", "release_machine"]
healthScore: 98
undervaluedScore: 40
maintainers: ["kwoo24-oss", "byongjohnhan-oss", "imjhyuk-oss"]
openGraphImageUrl: "https://opengraph.githubassets.com/a6240f91c10279f95d7e416c3a7959796775b2bfef82f83320ddcdb3af100376/dnotitia/akb"
---

</p>

# AKB — Agent Knowledge Base

> **Organizational memory for AI agents.** Git-backed knowledge base served
> over the **Model Context Protocol (MCP)** — agents read and write directly
> with hybrid semantic + keyword search, structured tables, files, and a URI
> graph. Drop-in alternative to Confluence / Notion for Claude Code, Cursor,
> Windsurf, and any MCP-aware agent.

## Works with

Any agent client that speaks **MCP (Streamable HTTP or stdio)**:

- **Claude Code** — CLI / VS Code / JetBrains
- **Claude Desktop** — macOS / Windows
- **Cursor**, **Windsurf**, **Cline**, **Continue** — via the
  [`akb-mcp`](https://www.npmjs.com/package/akb-mcp) stdio proxy
- Custom agents — direct HTTP `POST /mcp/` with a Bearer token

The default flow uses a Personal Access Token. Deployments with the
optional **MCP OAuth Resource Server** path turned on (via Keycloak as
the AS — see [`docs/mcp-clients/web-connectors.md`](./docs/mcp-clients/web-connectors.md))
also accept Claude Code's `mcp add --transport http` + `mcp login` flow
end-to-end, without a PAT.

## Plugins

Beyond raw MCP access, AKB ships ready-made **agent plugins** for **Claude Code**
and **Codex** that wrap common vault…
