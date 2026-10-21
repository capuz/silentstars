---
repo: "rootlyhq/rootly-mcp-server"
name: "rootly-mcp-server"
description: "Rootly MCP server"
readmeQualityOk: true
url: "https://github.com/rootlyhq/rootly-mcp-server"
homepage: "https://rootly.com/ai-labs"
language: "Python"
languages: ["Python"]
languagePcts: [99]
stars: 45
forks: 23
openIssues: 0
closedIssues: 8
watchers: 2
contributors: 14
recentReleases: 0
createdAt: "2025-03-12T17:14:50Z"
lastCommitAt: "2026-10-21T17:31:57Z"
status: "thriving"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 98
undervaluedScore: 63
maintainers: ["spencerhcheng", "kwent", "sylvainkalache"]
openGraphImageUrl: "https://opengraph.githubassets.com/79afc111de23a40de58881c98d19c061f8a9785d2fff809e1849a9418b49c3d1/rootlyhq/rootly-mcp-server"
---

# Rootly MCP Server

An MCP server for the [Rootly API](https://docs.rootly.com/api-reference/overview) for Cursor, Windsurf, Claude, and other MCP clients.

## Quick Start

Use the hosted MCP server. No local installation required.

### Hosted Transport Options

- **Streamable HTTP (recommended):** `https://mcp.rootly.com/mcp`
- **Code Mode:** `https://mcp.rootly.com/mcp-codemode`
- **SSE (deprecated, removed after 2026-11-20):** `https://mcp.rootly.com/sse`

> [!WARNING]
> **SSE is deprecated.** The hosted `https://mcp.rootly.com/sse` endpoint and the self-hosted `--transport sse` option will be removed after **2026-11-20**. Switch your client to Streamable HTTP (`https://mcp.rootly.com/mcp`) or Code Mode (`https://mcp.rootly.com/mcp-codemode`); for most clients that means changing the URL and, if your client config has one, setting the transport to `http`/`streamable-http`. SSE responses now carry `Deprecation`, `Sunset` and `Link: rel="successor-version"` headers.

Hosted tool profiles:

- **Full (default):** use the URLs above as-is
- **Slim (~70 tools):** add `?tool_profile=slim` to the hosted URL, for example `https://mcp.rootly.com/mcp?tool_profile=slim`
- **Header…
