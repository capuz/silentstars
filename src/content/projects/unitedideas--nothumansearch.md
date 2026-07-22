---
repo: "unitedideas/nothumansearch"
name: "nothumansearch"
description: "Search engine for AI agents — ranks sites by agentic readiness (llms.txt, OpenAPI, MCP, ai-plugin). MCP server, REST API, full-text search. 8,000+ indexed sites."
readmeQualityOk: true
url: "https://github.com/unitedideas/nothumansearch"
homepage: "https://nothumansearch.ai"
language: "Go"
languages: ["Go"]
languagePcts: [62]
topics: ["agent-discovery", "agentic-ai", "ai-agents", "ai-plugin", "ai-tools", "anthropic", "claude", "fly-io", "go", "llms-txt"]
stars: 9
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-04-14T00:01:12Z"
lastCommitAt: "2026-07-22T06:09:48Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 70
undervaluedScore: 49
maintainers: ["unitedideas"]
openGraphImageUrl: "https://opengraph.githubassets.com/6d2128879159c0b2e2eb1ff866186fd2bd82949c989a0de50dc14d7a7ba4ce13/unitedideas/nothumansearch"
---

# Not Human Search

**Search engine for AI agents.** Indexes sites ranked by *agentic readiness* — llms.txt, OpenAPI, ai-plugin, MCP servers, and structured APIs.

🌐 **Live site:** [nothumansearch.ai](https://nothumansearch.ai)
🔌 **MCP server:** `claude mcp add --transport http nothumansearch https://nothumansearch.ai/mcp`
📊 **Live score:** [nothumansearch.ai/score](https://nothumansearch.ai/score) — check any URL
🛠 **API:** [nothumansearch.ai/api/v1/search?q=](https://nothumansearch.ai/api/v1/search?q=)

## Why

LLM agents and autonomous systems can't "browse the web" efficiently the way humans do. They need machine-readable signals — llms.txt, OpenAPI schemas, MCP endpoints, ai-plugin manifests. NHS is the first search engine that explicitly ranks by *how agent-friendly a site actually is*, not by traditional SEO.

## What's indexed

- **1,900+ agent-first sites** scored across 7 agentic signals (see `/api/v1/stats` for current live count)
- **500+ MCP servers** with live JSON-RPC probe verification
- **Agent-first filter** — every indexed site has at least one strong agent signal (llms.txt, ai-plugin, OpenAPI, structured API, MCP server)
- Continuously refreshed via daily…
