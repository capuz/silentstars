---
repo: "tangcent/maven-indexer-mcp"
name: "maven-indexer-mcp"
description: "MCP server that indexes local Maven and Gradle caches so AI agents can search classes, implementations, method signatures, and   source code from internal/private Java dependencies."
readmeQualityOk: true
url: "https://github.com/tangcent/maven-indexer-mcp"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [96]
stars: 23
forks: 4
openIssues: 0
closedIssues: 3
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2025-12-14T12:25:01Z"
lastCommitAt: "2026-10-24T08:07:33Z"
lastReleaseAt: "2026-04-21T06:16:34Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 78
undervaluedScore: 32
maintainers: ["tangcent"]
openGraphImageUrl: "https://opengraph.githubassets.com/b2fbc4b450906cfbff9dd975f7264dd9c8e2c9651a5597df88989ddd013d17a0/tangcent/maven-indexer-mcp"
---

# Maven Index

An MCP server and CLI that indexes your local Maven repository (`~/.m2/repository`) and Gradle cache
(`~/.gradle/caches/modules-2/files-2.1`) to provide AI agents with tools to search for Java classes, method signatures,
and source code — even for internal company packages and non-well-known public libraries.

## Quick Install

There are two ways to give an agent access to the index. Pick one, or use both:

- **CLI + Agent Skill**: for terminal coding agents (Claude Code, Codex, Gemini CLI, OpenCode, Cursor).
  The agent runs `maven-indexer-cli` commands, guided by the `maven-indexer` skill. No tool schemas
  sit in the context window, so it uses fewer tokens.
- **MCP server**: for IDE-integrated agents (Cursor, Kiro, Windsurf, JetBrains, ...). See [MCP server](#mcp-server).

### CLI + Agent Skill

#### Install script (recommended)

One command installs `maven-indexer-cli` from npm and the `maven-indexer` skill for every coding
agent it detects:

```bash
curl -fsSL https://raw.githubusercontent.com/tangcent/maven-indexer-mcp/main/install.sh | bash
```

Requires Node.js 18+ and npm. Pass options after `bash -s --`:

```bash
curl -fsSL…
