---
repo: "EL4CTEO/rbx-studio-mcp"
name: "rbx-studio-mcp"
description: "Free, open-source MCP server for Roblox Studio. 35 tools, a console panel that runs coding agents, editor-safe script edits."
readmeQualityOk: true
url: "https://github.com/EL4CTEO/rbx-studio-mcp"
homepage: "https://www.npmjs.com/package/@el4cteo/rbx-studio-mcp"
language: "Luau"
languages: ["Luau", "Rust"]
languagePcts: [51, 40]
topics: ["ai-agents", "claude", "luau", "mcp", "mcp-server", "model-context-protocol", "roblox", "roblox-development", "roblox-studio", "ai"]
stars: 20
forks: 2
openIssues: 0
closedIssues: 4
watchers: 3
contributors: 4
recentReleases: 0
createdAt: "2026-08-20T23:30:01Z"
lastCommitAt: "2026-11-27T16:26:11Z"
lastReleaseAt: "2026-08-22T00:04:26Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 98
undervaluedScore: 47
maintainers: ["EL4CTEO", "JrrrGent", "Codder13"]
openGraphImageUrl: "https://opengraph.githubassets.com/135dd3450871c497b77e4da09457bc35f65b4219b97d8765365027607a9b11c2/EL4CTEO/rbx-studio-mcp"
fundingLinks: ["GITHUB:https://github.com/EL4CTEO"]
---

Free, open-source MCP server that lets an AI agent drive Roblox Studio: read your place, edit scripts, build, playtest, take screenshots. 35 tools, plus a console panel that can run coding agents inside Studio.

## Install

Windows (x64, ARM) and macOS (Apple silicon, Intel). Native binary picked by npm; `npx` needs Node 18+.

**1. The plugin**

```bash
npx -y @el4cteo/rbx-studio-mcp --install-plugin
```

Or drop `StudioMCP.rbxmx` from [Releases](https://github.com/EL4CTEO/rbx-studio-mcp/releases) into your Studio plugins folder.

**2. The server**

```bash
claude mcp add rbx-studio -- npx -y @el4cteo/rbx-studio-mcp
```

Codex CLI:

```bash
codex mcp add rbx-studio -- npx -y @el4cteo/rbx-studio-mcp
```

Cursor, Claude Desktop, Gemini CLI, Windsurf:

```json
{
  "mcpServers": {
    "rbx-studio": {
      "command": "npx",
      "args": ["-y", "@el4cteo/rbx-studio-mcp"]
    }
  }
}
```

VS Code / Copilot (`.vscode/mcp.json`) uses `"servers"` instead of `"mcpServers"`, plus `"type": "stdio"`.

opencode (`opencode.json`):

```json
{
  "mcp": {
    "rbx-studio": {
      "type": "local",
      "command": ["npx", "-y", "@el4cteo/rbx-studio-mcp"],
      "enabled": true
    }
  }
}
```
