---
repo: "AKzar1el/mcp-geo"
name: "mcp-geo"
description: "AI visibility tracker MCP for ChatGPT, Claude, Perplexity, Gemini & Google AIO. Free OSS/self-host; optional EUR 99 AI Visibility Audit."
readmeQualityOk: true
url: "https://github.com/AKzar1el/mcp-geo"
homepage: "https://geo-mcp.digestseo.com/audit"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [93]
topics: ["aeo", "ai-visibility", "answer-engine-optimization", "brand-monitoring", "chatgpt", "claude", "cloudflare-workers", "gemini", "generative-engine-optimization", "geo"]
stars: 45
forks: 1
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 2
recentReleases: 10
createdAt: "2026-05-24T08:49:18Z"
lastCommitAt: "2026-09-20T08:45:57Z"
lastReleaseAt: "2026-09-19T13:58:55Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 90
undervaluedScore: 40
maintainers: ["AKzar1el"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1248149433/7a15a22d-dbd4-4e0c-a5f3-454ff9f21ec9"
discussionCount: 2
---

# DigestSEO — AI Visibility MCP for SEO & GEO

## Quick Install

Runs locally over stdio with your own API keys — all data stays on your machine (see [Privacy Policy](#privacy-policy)). Set at least one engine key (`OPENAI_API_KEY`, `ANTHROPIC_API_KEY`, `GEMINI_API_KEY`, `PERPLEXITY_API_KEY`, `SERPAPI_API_KEY`); engines without a key skip gracefully.

**Runtime:** Node.js 22.13+ (CI exercises Node 22 and 24).

**Claude Desktop / any MCP client (npx):**

```json
{
  "mcpServers": {
    "digestseo": {
      "command": "npx",
      "args": ["-y", "@digestseo/mcp-geo"],
      "env": {
        "OPENAI_API_KEY": "sk-...",
        "GEMINI_API_KEY": "your_key_here"
      }
    }
  }
}
```

**ChatGPT (remote MCP):** ChatGPT does not connect directly to local STDIO MCP servers. For ChatGPT, use the [self-hosted remote MCP setup](#chatgpt-remote-mcp) below, or OpenAI Secure MCP Tunnel for a server running on a local/private machine. The public `geo-mcp.digestseo.com/mcp` endpoint is not a turnkey no-key fresh-scan service.

**Claude Code:**

```bash
claude mcp add --transport stdio digestseo -s user --env GEMINI_API_KEY=your_key_here -- npx -y @digestseo/mcp-geo
```

**Codex CLI:**

```bash…
