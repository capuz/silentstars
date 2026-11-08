---
repo: "rianvdm/lastfm-mcp"
name: "lastfm-mcp"
description: "An MCP server that provides seamless access to a user's Last.fm listening data and music information via AI assistants like Claude."
readmeQualityOk: true
url: "https://github.com/rianvdm/lastfm-mcp"
homepage: "https://lastfm-mcp.com/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [95]
topics: ["lastfm", "mcp", "mcp-server", "music"]
stars: 53
forks: 10
openIssues: 6
closedIssues: 18
watchers: 1
contributors: 3
recentReleases: 2
createdAt: "2025-06-12T16:58:24Z"
lastCommitAt: "2026-11-08T14:14:09Z"
lastReleaseAt: "2026-10-05T16:04:22Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 81
undervaluedScore: 46
maintainers: ["rianvdm", "vhata"]
openGraphImageUrl: "https://opengraph.githubassets.com/8e356e2293e62efa9110f67c659c051aa79f4ba2cbce74290a2882969eddb29d/rianvdm/lastfm-mcp"
discussionCount: 0
---

# Last.fm MCP Server

A [Model Context Protocol](https://modelcontextprotocol.io/) (MCP) server for Last.fm. Gives AI assistants access to your listening history, music discovery, and detailed track/artist/album information.

Runs on Cloudflare Workers. Your MCP client signs you in with OAuth the first time it connects, and after that every tool is available, from track and artist lookups to your own listening history.

## Quick start

### Claude.ai / Claude Desktop

1. Open **Settings** -> **Connectors** -> **Add Custom Connector**
2. Enter `https://lastfm-mcp.com/mcp`
3. Sign in to Last.fm when prompted

### Claude Code

```bash
claude mcp add --transport http lastfm "https://lastfm-mcp.com/mcp"
```

### Windsurf

Add to `~/.codeium/windsurf/mcp_config.json`:

```json
{
	"mcpServers": {
		"lastfm": {
			"serverUrl": "https://lastfm-mcp.com/mcp"
		}
	}
}
```

### Other MCP clients

For clients that don't support remote servers directly (Continue.dev, Zed, etc.), use `mcp-remote`:

```json
{
	"mcpServers": {
		"lastfm": {
			"command": "npx",
			"args": ["-y", "mcp-remote", "https://lastfm-mcp.com/mcp"]
		}
	}
}
```

### MCP Inspector

```bash
npx @modelcontextprotocol/inspector…
