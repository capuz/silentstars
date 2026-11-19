---
repo: "nirholas/pumpfun-mcp"
name: "pumpfun-mcp"
description: "Free, read-only pump.fun and Solana MCP server: bonding curves, holders, creator claims, SNS and swap quotes."
readmeQualityOk: true
url: "https://github.com/nirholas/pumpfun-mcp"
homepage: "https://nirholas.github.io/pumpfun-mcp/"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [100]
topics: ["model-context-protocol", "solana", "mcp-server", "pump-fun", "bonding-curve", "solana-name-service", "three-ws", "claude-code-plugin"]
stars: 12
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 1
createdAt: "2026-06-30T23:22:51Z"
lastCommitAt: "2026-11-19T04:35:18Z"
lastReleaseAt: "2026-11-10T22:27:13Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 73
undervaluedScore: 29
maintainers: ["nirholas"]
openGraphImageUrl: "https://opengraph.githubassets.com/b506cd2482bb8a3d4c20cbbc3e8075c8e3750bf2880aacbcbeb77396b7a15fc8/nirholas/pumpfun-mcp"
fundingLinks: ["CUSTOM:https://three.ws"]
discussionCount: 0
---

---

> A free, read-only [Model Context Protocol](https://modelcontextprotocol.io) server for **pump.fun** and **Solana**. It gives Claude — or any MCP client — live token discovery, on-chain bonding-curve and holder analysis, creator fee-claim tracking, Solana Name Service resolution, KOL signals, read-only swap quotes, and shareable live 3D token snapshots. Every Solana RPC and pump.fun API call runs server-side on the canonical [three.ws](https://three.ws) backend, so the data is live and on-chain while the client stays zero-config: **no API keys, no RPC URL, no wallet.**

## Install

### Claude Code (one-liner)

```bash
claude mcp add pumpfun -- npx -y @three-ws/pumpfun-mcp
```

### Claude Desktop / Cursor / any MCP client

Add to your MCP config (`claude_desktop_config.json`, `.cursor/mcp.json`, `.mcp.json`, etc.):

```json
{
	"mcpServers": {
		"pumpfun": {
			"command": "npx",
			"args": ["-y", "@three-ws/pumpfun-mcp"]
		}
	}
}
```

Restart the client and the pump.fun tools appear. No install step required.

### Run directly

```bash
npx -y @three-ws/pumpfun-mcp
# or install globally and run the bin
npm i -g @three-ws/pumpfun-mcp && pumpfun-mcp
```
