---
repo: "doitintl/doit-mcp-server"
name: "doit-mcp-server"
description: "DoiT official MCP Server"
readmeQualityOk: true
url: "https://github.com/doitintl/doit-mcp-server"
homepage: "https://www.doit.com"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [97]
stars: 13
forks: 2
openIssues: 5
closedIssues: 4
watchers: 1
contributors: 15
recentReleases: 0
createdAt: "2025-04-07T07:50:28Z"
lastCommitAt: "2026-09-03T08:12:29Z"
lastReleaseAt: "2026-05-07T09:29:12Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 85
undervaluedScore: 67
maintainers: ["spark2ignite", "taltultc", "adamgajzlerowicz"]
openGraphImageUrl: "https://opengraph.githubassets.com/2e1ab74c21b88b6280fab945c6b240ef0158494836e428bf98bbd6f5610ca99d/doitintl/doit-mcp-server"
---

# DoiT MCP Server

DoiT MCP Server provides access to the DoiT API. This server enables LLMs like Claude to access DoiT platform data for troubleshooting and analysis.

## Authentication

How you authenticate depends on the connection method:

| Method | URL / command | Auth |
| --- | --- | --- |
| Remote (Streamable HTTP) | `https://mcp.doit.com/mcp` | OAuth — your client opens a DoiT sign-in and consent page. |
| Local (stdio) | `npx -y @doitintl/doit-mcp-server@latest` | Personal API token via `DOIT_API_KEY`. |

The legacy SSE endpoint (`https://mcp.doit.com/sse`) is deprecated and should not be used for new setups.

Your DoiT plan must include API access. Tools follow the same permissions as the [DoiT API](https://developer.doit.com/).

The Claude Desktop steps below are examples, not the only supported clients. Cursor, VS Code, Amazon Q, Claude Code, and others are covered in the [Connections](https://help.doit.com/docs/mcp/connections) guide.

## Remote (Streamable HTTP)

Example with Claude Desktop: add a custom connector (**+ → Add connector → Add custom connector**) and set the remote MCP server URL to `https://mcp.doit.com/mcp`. Complete DoiT sign-in when prompted.

##…
