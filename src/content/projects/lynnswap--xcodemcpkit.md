---
repo: "lynnswap/XcodeMCPKit"
name: "XcodeMCPKit"
description: "Local Xcode MCP proxy with a stable endpoint and approval automation"
readmeQualityOk: true
url: "https://github.com/lynnswap/XcodeMCPKit"
language: "Swift"
languages: ["Swift"]
languagePcts: [95]
topics: ["mcp", "swift", "xcode", "mcpbridge"]
stars: 29
forks: 4
openIssues: 7
closedIssues: 51
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2026-02-04T11:51:08Z"
lastCommitAt: "2026-10-14T08:58:39Z"
lastReleaseAt: "2026-02-10T09:52:17Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 97
undervaluedScore: 47
maintainers: ["lynnswap"]
openGraphImageUrl: "https://opengraph.githubassets.com/fdbfc219e0a1594baad4baf01753c2c3252472566ee8554318a98066b1c01a48/lynnswap/XcodeMCPKit"
---

# XcodeMCPKit

XcodeMCPKit is a server for using Xcode's MCP tools headlessly.

## Requirements

- macOS 15.4+
- An Xcode installation with native MCP tools
- [Homebrew](https://brew.sh/) for installation

## Quick start

### Install

For a new installation:

```bash
brew install lynnswap/tap/xcode-mcpkit
```

> [!NOTE]
> If you previously installed XcodeMCPKit with the shell installer or from source,
> run this command once to migrate to Homebrew, even if you have already run `brew install`:
>
> ```bash
> curl -fsSL https://github.com/lynnswap/XcodeMCPKit/releases/latest/download/install.sh | sh
> ```
>
> Restart the server and connected MCP clients afterward.

With Homebrew set up, no additional `PATH` setting is needed.

### Start the server

```bash
xcode-mcp-proxy-server
```

Keep this terminal open while using MCP. You can leave Xcode closed.

### Connect your MCP client

In another terminal, run the command for your client.

**Codex**

```bash
codex mcp add xcode --url http://localhost:8765/mcp
```

**Claude Code**

```bash
claude mcp add --transport http xcode http://localhost:8765/mcp
```

For other MCP clients, connect to `http://localhost:8765/mcp` using Streamable…
