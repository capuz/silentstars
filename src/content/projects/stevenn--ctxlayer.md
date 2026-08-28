---
repo: "stevenn/ctxlayer"
name: "ctxlayer"
description: "Context-sharing MCP Gateway on Cloudflare"
readmeQualityOk: true
url: "https://github.com/stevenn/ctxlayer"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [99]
topics: ["ai-agents", "cloudflare-workers", "durable-objects", "hono", "mcp", "model-context-protocol", "oauth", "rag", "react", "self-hosted"]
stars: 9
forks: 1
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2026-05-23T03:19:04Z"
lastCommitAt: "2026-08-28T14:32:24Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 88
undervaluedScore: 44
maintainers: ["stevenn", "claude"]
openGraphImageUrl: "https://opengraph.githubassets.com/b9fe844024e75febb00d257b2f981ca1573b9fb8ceca1c4e50dc92c85c6308d8/stevenn/ctxlayer"
---

# ctxlayer

Agent context layer — an MCP service on Cloudflare that:

- serves curated org docs (Markdown, with Vectorize-backed RAG search) as MCP
  resources and a `search_docs` tool — and speaks the [Open Knowledge Format
  (OKF)](https://github.com/GoogleCloudPlatform/knowledge-catalog/blob/main/okf/SPEC.md)
  in and out, so an org's library round-trips with any OKF bundle;
- proxies other MCP servers (HTTP/SSE natively; a stdio MCP server is
  supported via bring-your-own-bridge — run your own stdio↔HTTP bridge and
  register its URL as a `streamable_http` upstream), centralising per-user
  credentials sealed at rest;
- exposes a React + Vite SPA for self-onboarding, BlockNote + Yjs
  collaborative markdown editing, admin upstream management, and usage
  analytics.

## Screenshots

|  |  |
| --- | --- |
| [](docs/screenshots/admin-upstreams.png) | [](docs/screenshots/usage.png) |
| **Curate & gate upstream MCP servers** — cache their tools, attach org playbooks + docs per tool | **Usage analytics** — calls, tokens, and top tools per user / upstream |
| [](docs/screenshots/connect-upstreams.png) | [](docs/screenshots/skills.png) |
| **Self-service onboarding** — connect…
