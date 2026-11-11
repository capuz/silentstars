---
repo: "vogellacompany/eclipse-mcp-server"
name: "eclipse-mcp-server"
description: "MCP server for Eclipse"
readmeQualityOk: true
url: "https://github.com/vogellacompany/eclipse-mcp-server"
homepage: "https://vogellacompany.github.io/eclipse-mcp-server/"
language: "Java"
languages: ["Java"]
languagePcts: [99]
stars: 26
forks: 6
openIssues: 1
closedIssues: 8
watchers: 1
contributors: 5
recentReleases: 3
createdAt: "2026-08-13T15:23:04Z"
lastCommitAt: "2026-11-11T11:18:10Z"
lastReleaseAt: "2026-11-04T07:29:21Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 96
undervaluedScore: 53
maintainers: ["vogella", "estepper", "raybell"]
openGraphImageUrl: "https://opengraph.githubassets.com/76e9f859758dff4c0d5448c6e328488618dec80b3195a71af86668996ebc452b/vogellacompany/eclipse-mcp-server"
---

# Eclipse MCP Server

Turns a running Eclipse IDE into an [MCP](https://modelcontextprotocol.io) server, so that external LLM clients (Claude Code, Cursor, any MCP-capable agent) can ask the IDE for what they cannot cheaply reconstruct from files: the resolved Java model, the builder's problem markers, the debugger and the live workbench.

Built and maintained by [vogella GmbH](https://vogella.com/services/), and used in our consulting and in our AI based Java cleanup services [for legacy code and code optimization](https://vogella.com/services/).

The server is **disabled by default**, listens on `127.0.0.1` only and rejects every request without the bearer token.
Most tools are read-only; every tool that changes something says so in its own description, and those that can default to a dry run do.

## Installing

In Eclipse, choose *Help > Install New Software*, add

```
https://vogellacompany.github.io/eclipse-mcp-server/
```

and install the **Eclipse MCP Server** feature.
The site carries the newest build only; older versions are available as the repository zip attached to each GitHub release, through *Add > Archive*.

## Building

Requires JDK 25 and Maven 3.9 or newer.…
