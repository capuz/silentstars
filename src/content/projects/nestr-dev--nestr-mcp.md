---
repo: "nestr-dev/nestr-mcp"
name: "nestr-mcp"
description: "MCP server for connecting AI assistants to Nestr"
readmeQualityOk: true
url: "https://github.com/nestr-dev/nestr-mcp"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [93]
stars: 5
forks: 1
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-01-13T22:04:40Z"
lastCommitAt: "2026-10-15T08:31:59Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 98
undervaluedScore: 70
maintainers: ["joostschouten", "oskarszoon", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/6fedc949d7503f598718c3345d403b35f7ccaa8ab3c00ff1a58197f42d6155f3/nestr-dev/nestr-mcp"
---

# @nestr/mcp

MCP (Model Context Protocol) server for [Nestr](https://nestr.io) - connect AI assistants like Claude to your workspace.

## What is this?

This MCP server allows AI assistants to interact with your Nestr workspace:

- Search for tasks, projects, and roles
- Create and update nests
- View organizational structure (circles, roles, accountabilities)
- Get workspace insights and metrics
- Add comments and collaborate

## Quick Start

**Visit [mcp.nestr.io](https://mcp.nestr.io)** for the easiest setup with step-by-step instructions for Claude Desktop, Claude Code, and Cursor.

### Claude Desktop

1. Go to **Settings → Connectors → Add custom connector**
2. Set **Name** to `Nestr` and **Remote MCP URL** to `https://mcp.nestr.io/mcp`
3. Click "Add" then "Authenticate" to log in with Nestr

### Claude Code

```bash
claude mcp add nestr --transport http https://mcp.nestr.io/mcp
```

Then run `/mcp` in Claude Code and click "Authenticate" to log in.

### Using the npm Package (Local)

If you prefer to run the MCP server locally:

```bash
npx @nestr/mcp
```

Configure your AI client with:

```json
{
  "mcpServers": {
    "nestr": {
      "command": "npx",
      "args": ["-y",…
