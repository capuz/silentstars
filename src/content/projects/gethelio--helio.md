---
repo: "gethelio/helio"
name: "helio"
description: "Governance proxy for MCP - enforce policies, route approvals, check evidence, track spend, and audit every AI agent tool call. No changes to   agent code or MCP servers."
readmeQualityOk: true
url: "https://github.com/gethelio/helio"
homepage: "https://helio.so"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [97]
topics: ["ai-agent", "mcp", "mcp-proxy", "proxy", "mcp-governance", "model-context-protocol"]
stars: 8
forks: 5
openIssues: 24
closedIssues: 46
watchers: 1
contributors: 2
recentReleases: 10
createdAt: "2026-05-19T16:45:52Z"
lastCommitAt: "2026-07-09T20:44:16Z"
lastReleaseAt: "2026-07-05T19:12:31Z"
status: "newborn"
tags: ["solo_builder", "needs_contributors", "hidden_gem", "release_machine", "under_pressure", "fork_magnet"]
healthScore: 88
undervaluedScore: 61
maintainers: ["olivrg"]
openGraphImageUrl: "https://opengraph.githubassets.com/65f4da1d86fa0b8b3eb4108edb650067476d89f4edda02fd51828b8123e63cd9/gethelio/helio"
---

<h1 align="center">Helio</h1>
</p>

</p>

</p>

---

Helio is an MCP proxy that sits between your AI agents and the tools they use. Every tool call passes through Helio, which enforces policies, checks evidence, routes approvals, tracks spend, and records everything - **without changing your agent code or your MCP servers.**

```bash
npx @gethelio/proxy init
```

`@gethelio/proxy` is the only Node package you install. It ships the proxy runtime and bundled dashboard UI assets together.

## Why Helio?

Your agent just called an API you didn't expect. It spent money you didn't authorize. It modified a production record you can't easily undo.

Model providers are building governance for their own platforms but your agents run across Claude, ChatGPT, LangChain, CrewAI, and custom frameworks. No single platform governs the full picture. And none of them govern what happens in downstream systems like Stripe, Salesforce, or GitHub.

Helio governs what agents **do to the rest of the world** across any MCP-compatible agent, any tool, any platform.

## How It Works

</p>

Two integration paths:

1. **Proxy only**: Point your MCP client at Helio instead of your MCP server. Zero code changes.…
