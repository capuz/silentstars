---
repo: "AI-Riksarkivet/ra-mcp"
name: "ra-mcp"
description: "MCPs for Riksarkivet open APIs. This covers both agents and mcps"
readmeQualityOk: true
url: "https://github.com/AI-Riksarkivet/ra-mcp"
homepage: "https://ai-riksarkivet.github.io/ra-mcp/"
language: "Python"
languages: ["Python"]
languagePcts: [83]
topics: ["agents", "iiif", "iiif-image", "iiif-presentation", "mcp", "mcp-server", "oai-pmh", "riksarkivet", "search-engine", "fastmcp"]
stars: 15
forks: 2
openIssues: 1
closedIssues: 7
watchers: 0
contributors: 4
recentReleases: 0
createdAt: "2025-06-05T09:40:12Z"
lastCommitAt: "2026-07-05T21:01:45Z"
lastReleaseAt: "2026-02-09T15:15:41Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 88
undervaluedScore: 72
maintainers: ["Borg93", "dependabot[bot]", "carpelan"]
openGraphImageUrl: "https://opengraph.githubassets.com/5d146aa5a0b187fb6416b98c580ed29a4f7ab6ddc2e10e2bce9ca978589f65e1/AI-Riksarkivet/ra-mcp"
---

</div>


# ra-mcp




A [Model Context Protocol](https://modelcontextprotocol.io/) server and CLI for searching and browsing transcribed historical documents from the Swedish National Archives (Riksarkivet). Provides full-text search across millions of AI-transcribed pages, complete page transcriptions, handwritten text recognition, interactive document viewing, and archival research guides — all as MCP tools that any LLM client can use.

## Quick Start (MCP)

**Streamable HTTP** — works with ChatGPT, Claude, and any MCP-compatible client:

```
https://riksarkivet-ra-mcp.hf.space/mcp
```

**Claude Code:**

```bash
claude mcp add --transport http ra-mcp https://riksarkivet-ra-mcp.hf.space/mcp
```

**IDE (mcp.json):**

```json
{
  "mcpServers": {
    "ra-mcp": {
      "type": "streamable-http",
      "url": "https://riksarkivet-ra-mcp.hf.space/mcp"
    }
  }
}
```

**Claude.ai (web & desktop) — no install:** it's a *remote* server, so add it as a custom connector by URL. Settings → **Connectors** → **Add custom connector** → paste `https://riksarkivet-ra-mcp.hf.space/mcp` → **Add**. The ra-mcp tools then appear in new chats. (Requires a plan with…
