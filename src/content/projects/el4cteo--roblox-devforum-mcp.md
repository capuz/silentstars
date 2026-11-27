---
repo: "EL4CTEO/roblox-devforum-mcp"
name: "roblox-devforum-mcp"
description: "Give your AI coding agent the Roblox DevForum and official creator docs — check if a bug is already known, read the accepted answer, and verify APIs before writing Luau."
readmeQualityOk: true
url: "https://github.com/EL4CTEO/roblox-devforum-mcp"
homepage: "https://www.npmjs.com/package/@el4cteo/roblox-devforum-mcp"
language: "Rust"
languages: ["Rust"]
languagePcts: [98]
topics: ["ai", "claude", "devforum", "luau", "mcp", "model-context-protocol", "roblox", "roblox-studio", "ai-agents", "claude-code"]
stars: 13
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 7
createdAt: "2026-03-30T13:16:02Z"
lastCommitAt: "2026-11-27T16:25:08Z"
lastReleaseAt: "2026-09-03T01:33:16Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded", "release_machine"]
healthScore: 87
undervaluedScore: 51
maintainers: ["EL4CTEO"]
openGraphImageUrl: "https://opengraph.githubassets.com/e1a6d114982e850ad393ab1e5e29d2dacd1a6f26f2f8c7d0fdffbcbf7b986e41/EL4CTEO/roblox-devforum-mcp"
fundingLinks: ["GITHUB:https://github.com/EL4CTEO"]
---

An [MCP](https://modelcontextprotocol.io) server that gives your AI coding agent the **Roblox DevForum** and the **official creator docs**: check if a bug is already known, read the accepted answer, verify APIs before writing Luau.

No API key, no login. One native Rust binary: starts in ~12 ms, ~6 MB RAM.

## Install

```bash
claude mcp add roblox-devforum -- npx -y @el4cteo/roblox-devforum-mcp
```

[DeepSeek Harness](https://github.com/deepseek-ai/deepseek-harness):

```bash
dsh plugin --profile web add @el4cteo/roblox-devforum-mcp
```

Any other MCP client:

```json
{
  "mcpServers": {
    "roblox-devforum": {
      "command": "npx",
      "args": ["-y", "@el4cteo/roblox-devforum-mcp"]
    }
  }
}
```

No Node.js? Grab the binary from the [latest release](https://github.com/EL4CTEO/roblox-devforum-mcp/releases/latest) or `cargo install roblox-devforum-mcp`, then:

```bash
claude mcp add roblox-devforum -- /path/to/roblox-devforum-mcp
```
