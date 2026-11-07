---
repo: "get-engram/engram"
name: "engram"
description: "Persistent, searchable long-term memory for AI agents. MCP-native. Works with ChatGPT, Claude, Cursor, and any MCP client."
readmeQualityOk: true
url: "https://github.com/get-engram/engram"
homepage: "https://getengram.app"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [100]
stars: 22
forks: 7
openIssues: 67
closedIssues: 196
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2026-04-08T07:40:20Z"
lastCommitAt: "2026-11-07T22:51:42Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "under_pressure"]
healthScore: 93
undervaluedScore: 50
maintainers: ["debragail"]
openGraphImageUrl: "https://opengraph.githubassets.com/40cf2eed9cd128e9eac0de5e1d5fd7cc20874ccadd4cb63a03c659173618626a/get-engram/engram"
discussionCount: 2
---

# Engram

**Memory infrastructure for AI agents.** Store every conversation verbatim. Search by meaning.

Engram is an MCP-native memory server that stores complete, uncompressed conversation transcripts and makes them searchable via semantic search. Connect any MCP-compatible client — Claude Desktop, Claude Code, Cursor, Windsurf, Zed — and your agent remembers everything across sessions.

## Quick start

### Claude Code

```
/plugin marketplace add get-engram/engram
/plugin install engram@engram
```

Restart Claude Code and approve access in the browser. There is no API key to
copy and no config file to edit — the server implements the MCP authorization
flow (RFC 9728 / 8414 / 7591, PKCE), so the client discovers it, registers
itself, and signs you in. A free account is created as part of signing in.

The plugin also ships a skill that tells Claude when to search memory and what
is worth saving, so context accumulates without being asked.

### Any other MCP client

Point it at the remote server and let OAuth handle access:

```json
{
  "mcpServers": {
    "engram": {
      "type": "http",
      "url": "https://mcp.getengram.app/mcp"
    }
  }
}
```

For a client that only speaks…
