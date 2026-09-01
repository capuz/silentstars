---
repo: "Dokploy/mcp"
name: "mcp"
description: "The Official MCP package for Dokploy"
readmeQualityOk: true
url: "https://github.com/Dokploy/mcp"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [100]
topics: ["agents", "ai", "dokploy", "dokploy-mcp", "mcp"]
stars: 361
forks: 76
openIssues: 7
closedIssues: 32
watchers: 1
contributors: 10
recentReleases: 6
createdAt: "2025-06-02T07:05:26Z"
lastCommitAt: "2026-09-01T08:49:41Z"
lastReleaseAt: "2026-08-06T07:47:00Z"
status: "thriving"
tags: ["release_machine"]
healthScore: 89
undervaluedScore: 41
maintainers: ["Siumauricio", "flow-systems", "franktronics"]
openGraphImageUrl: "https://opengraph.githubassets.com/d643221141980d05a1b7935683605af71b0a9635ec49ac045ab8d4c56dc22f54/Dokploy/mcp"
discussionCount: 1
---

# Dokploy MCP Server

Dokploy MCP Server exposes **all Dokploy API endpoints** as tools consumable via the Model Context Protocol (MCP). It allows MCP-compatible clients (e.g., AI models, other applications) to interact with your Dokploy server programmatically.

With **508 tools** across **49 categories**, this server provides complete coverage of the Dokploy API — from project and application management to databases, notifications, SSO, Docker, backups, and more.

## Getting Started

### Requirements

- Node.js >= v18.0.0 (or Docker)
- Cursor, VS Code, Claude Desktop, or another MCP Client
- A running Dokploy server instance

### Install in Cursor

Go to: `Settings` -> `Cursor Settings` -> `MCP` -> `Add new global MCP server`

Add this to your Cursor `~/.cursor/mcp.json` file. You may also install in a specific project by creating `.cursor/mcp.json` in your project folder. See [Cursor MCP docs](https://docs.cursor.com/context/model-context-protocol) for more info.

```json
{
  "mcpServers": {
    "dokploy-mcp": {
      "command": "npx",
      "args": ["-y", "@dokploy/mcp"],
      "env": {
        "DOKPLOY_URL": "https://your-dokploy-server.com",
        "DOKPLOY_API_KEY":…
