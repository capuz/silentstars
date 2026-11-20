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
stars: 29
forks: 7
openIssues: 6
closedIssues: 13
watchers: 1
contributors: 5
recentReleases: 4
createdAt: "2026-08-13T15:23:04Z"
lastCommitAt: "2026-11-19T11:59:08Z"
lastReleaseAt: "2026-11-18T14:31:23Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 92
undervaluedScore: 49
maintainers: ["vogella", "estepper", "raybell"]
openGraphImageUrl: "https://opengraph.githubassets.com/12a56041aa3b35ef3b1c1548cd450c9f82c3cf8fa2eaa115092ed8fb73a32ebc/vogellacompany/eclipse-mcp-server"
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
It needs Eclipse 2026-06 or newer: the Java tools build on JDT APIs that release added, so on an older IDE the install is refused.
The site lists the newest build only.
