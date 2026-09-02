---
repo: "dnotitia/akb"
name: "akb"
description: "AKB — Agent Knowledgebase. Organizational memory for AI agents: vault-scoped docs / tables / files unified by URI graph, served over MCP."
readmeQualityOk: true
url: "https://github.com/dnotitia/akb"
language: "Python"
languages: ["Python"]
languagePcts: [69]
topics: ["agent", "claude", "claude-code", "fastapi", "knowledge-base", "knowledge-graph", "mcp", "model-context-protocol", "multi-tenant", "pgvector"]
stars: 156
forks: 9
openIssues: 12
closedIssues: 48
watchers: 5
contributors: 10
recentReleases: 0
createdAt: "2026-05-07T07:54:22Z"
lastCommitAt: "2026-09-02T08:04:01Z"
lastReleaseAt: "2026-05-28T07:59:42Z"
status: "thriving"
tags: []
healthScore: 95
undervaluedScore: 28
maintainers: ["imjhyuk-oss", "kwoo24-oss", "skt8776-oss"]
openGraphImageUrl: "https://opengraph.githubassets.com/7404181006d2573ba743cd0dd6e8e1e0cdfdb7ed0abe85c27aae62fa5b8ba3a7/dnotitia/akb"
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
the AS — see [`docs/mcp-clients/web-connectors.md`](https://github.com/dnotitia/akb/blob/HEAD/docs/mcp-clients/web-connectors.md))
also accept Claude Code's `mcp add --transport http` + `mcp login` flow
end-to-end, without a PAT.

## MCP protocol compatibility

AKB keeps one tool and authorization core behind two…
