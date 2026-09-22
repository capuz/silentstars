---
repo: "epam/TimeBase-MCP"
name: "TimeBase-MCP"
description: "MCP Server for TimeBase"
readmeQualityOk: true
url: "https://github.com/epam/TimeBase-MCP"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["timebase", "deltix", "mcp"]
stars: 8
forks: 0
openIssues: 1
closedIssues: 5
watchers: 0
contributors: 4
recentReleases: 5
createdAt: "2026-05-19T14:25:21Z"
lastCommitAt: "2026-09-22T08:45:47Z"
lastReleaseAt: "2026-08-31T12:26:30Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 93
undervaluedScore: 51
maintainers: ["TyomaVader", "dependabot[bot]", "andymalakov"]
openGraphImageUrl: "https://opengraph.githubassets.com/3b187c74a2cad9648f5f046048dc42da7c5e77351cb05f73ff21bdd47d1e99d7/epam/TimeBase-MCP"
---

# TimeBase MCP

A [Model Context Protocol](https://modelcontextprotocol.io/introduction) server that lets a coding agent (Claude Code, VS Code, Cursor, Claude Desktop, etc.) explore and query [TimeBase](https://kb.timebase.info): list streams, read schemas and symbols, preview messages, run QQL queries, and inspect server status and activity.

The server can run two ways:

- **Locally**, your agent launches `timebase-mcp` as a local process (`stdio`) that connects to your TimeBase.
- **Remotely**, you deploy `timebase-mcp` as a shared HTTP service that multiple users connect their agents to.

## Which guide do I need?

| You want to | Go to |
| - | - |
| Use TimeBase MCP locally (Cursor, VS Code, Claude Code/Desktop) | [Agent Plugins Quickstart](https://github.com/epam/TimeBase-Agent-Plugins#quickstart) |
| Manual local setup | [Local setup](https://github.com/epam/TimeBase-MCP/blob/HEAD/docs/local-setup.md) |
| Deploy a shared remote MCP server | [Remote deployment](https://github.com/epam/TimeBase-MCP/blob/HEAD/docs/remote-deployment.md) |
| Connect to a running remote server | [Connect to a remote server](https://github.com/epam/TimeBase-MCP/blob/HEAD/docs/connect-remote.md) |…
