---
repo: "strale-io/strale"
name: "strale"
description: "New tools for your agent. No new accounts. One connection to a growing library of tools agents can pay for per call."
readmeQualityOk: true
url: "https://github.com/strale-io/strale"
homepage: "https://strale.io"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [81]
topics: ["ai-agents", "api", "eu-ai-act", "mcp", "quality", "trust", "typescript", "agentic-payments", "compliance", "crewai"]
stars: 5
forks: 1
openIssues: 31
closedIssues: 30
watchers: 0
contributors: 3
recentReleases: 2
createdAt: "2026-02-25T17:36:39Z"
lastCommitAt: "2026-11-07T22:41:12Z"
lastReleaseAt: "2026-11-05T12:33:59Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "hidden_gem"]
healthScore: 90
undervaluedScore: 69
maintainers: ["petterlindstrom79"]
openGraphImageUrl: "https://opengraph.githubassets.com/cbe44f225bfb96b6892f92d9905bd4a8f53e7a5eb96f306c4c05f7acdd221856/strale-io/strale"
discussionCount: 0
---

# Strale

Pay-per-call tools for AI agents — one API key or an x402 wallet. MCP server, REST API, TypeScript and Python SDKs.

## What Strale is

Strale is a capability marketplace for AI agents. Agents call `strale.do()`
at runtime to reach tools — company registry lookups,
compliance checks, financial validation, Web3 security, and more — plus
bundled solutions for multi-step workflows like a full KYB check or company
due diligence, instead of the agent's own code hardcoding integrations and
managing credentials for every data source it might need.

Each tool page lists inputs, output fields, price, limitations and source.
Testing modes vary by tool. Read the current catalogue, free-tier list and
country coverage from [platform facts](https://api.strale.io/v1/platform/facts).

## How to use it

### MCP server (recommended: no install)

```json
{
  "mcpServers": {
    "strale": {
      "type": "streamableHttp",
      "url": "https://api.strale.io/mcp?src=gh-readme",
      "headers": {
        "Authorization": "Bearer sk_live_your_key_here"
      }
    }
  }
}
```

Works with Claude Desktop, Claude Code, Cursor, and any MCP client
supporting Streamable HTTP. For local stdio…
