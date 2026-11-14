---
repo: "whiteknightonhorse/APIbase"
name: "APIbase"
description: "One MCP + REST endpoint to APIbase's live tool catalog (counts: https://apibase.pro/llms.txt), plus Integrator: an MCP storefront for any shop, paid by AI agents straight to the merchant wallet. No signup, no subscription, no API key to start — pay per call in USDC (x402 on Base or MPP on Tempo)."
readmeQualityOk: true
url: "https://github.com/whiteknightonhorse/APIbase"
homepage: "https://apibase.pro"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [76]
topics: ["ai-tools", "api-hub", "mcp", "mcp-server", "model-context-protocol", "ai-agents", "api-gateway", "docker", "typescript", "x402"]
stars: 10
forks: 5
openIssues: 44
closedIssues: 356
watchers: 0
contributors: 3
recentReleases: 3
createdAt: "2026-03-09T06:35:47Z"
lastCommitAt: "2026-11-14T10:08:35Z"
lastReleaseAt: "2026-10-27T13:55:38Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 96
undervaluedScore: 75
maintainers: ["whiteknightonhorse"]
openGraphImageUrl: "https://opengraph.githubassets.com/6bd8613e1afc96bf9290d9b691cfcc2cfe29ac0916befdcb40fc619a40e37e15/whiteknightonhorse/APIbase"
---

# APIbase.pro — The API Hub for AI Agents

One MCP + REST endpoint to 1381 tools from 400 providers. No signup, no subscription, no API key to start — pay per call in USDC (x402 on Base or MPP on Tempo).

Latest release: see the tag that equals package.json `version`; release notes in docs/releases/.

---

## Quick Start

```json
{
  "mcpServers": {
    "apibase": { "url": "https://apibase.pro/mcp" }
  }
}
```

That's the Claude Desktop config. Cursor, Windsurf, OpenAI Agents SDK, LangChain, Google ADK, CrewAI, Microsoft Copilot Studio, and plain REST: **[apibase.pro/connect](https://apibase.pro/connect)**.

---

## For AI Agents

- **[llms.txt](https://apibase.pro/llms.txt)** — concise LLM context
- **[ai.txt](https://apibase.pro/ai.txt)** — plain-text agent discovery
- **[mcp.json](https://apibase.pro/.well-known/mcp.json)** — MCP server metadata
- **MCP protocol versions** — 2025-11-25, 2025-06-18, 2025-03-26, 2024-11-05, 2024-10-07 (Streamable HTTP on `/mcp`); revision 2026-07-28 is not served yet (the released SDK does not support it). Current list: `protocolVersions` in mcp.json
- **[openapi.json](https://apibase.pro/.well-known/openapi.json)** — OpenAPI 3.1 spec
-…
