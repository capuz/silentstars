---
repo: "kirich1409/maven-mcp"
name: "maven-mcp"
description: "Maven dependency intelligence MCP server and Claude Code / Grok Build plugin"
readmeQualityOk: true
url: "https://github.com/kirich1409/maven-mcp"
language: "Python"
languages: ["Python"]
languagePcts: [97]
stars: 12
forks: 0
openIssues: 0
closedIssues: 6
watchers: 0
contributors: 2
recentReleases: 1
createdAt: "2026-09-29T08:51:40Z"
lastCommitAt: "2026-10-04T10:02:26Z"
lastReleaseAt: "2026-10-02T19:30:10Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 97
undervaluedScore: 27
maintainers: ["kirich1409"]
openGraphImageUrl: "https://opengraph.githubassets.com/037a7a9151d795b9866521f44d316ecacb6a7cd8fab65b20be5e38cc984193e9/kirich1409/maven-mcp"
---

# maven-mcp

Agent plugin for Claude Code, Grok Build, Cursor, and Codex that provides Maven dependency intelligence via an MCP server — query artifact versions, scan projects for outdated dependencies, check for vulnerabilities, and fetch changelogs.

## How it works

The plugin bundles a single-file Python 3 MCP server (`plugin/server/server.py`) that speaks MCP over stdio (JSON-RPC 2.0 on stdin/stdout) or over a stateless Streamable HTTP endpoint. It uses the Python standard library only — zero pip dependencies. The plugin registers the server via `.mcp.json` (Claude Code, Grok Build) and `mcp.json` (Cursor, Codex), both `command: python3`, so it installs with no extra runtime setup. The server can also be run standalone and connected to any MCP-compatible agent — see [Use with any MCP client](#use-with-any-mcp-client).

Version lookups use the repositories the build file declares. Maven Central, Google Maven, and the Gradle Plugin Portal are used when that scope declares none. Private repositories need credentials — see [Configuration](https://github.com/kirich1409/maven-mcp/blob/HEAD/docs/configuration.md).

**Gradle scanning** runs the project's wrapper once and reads…
