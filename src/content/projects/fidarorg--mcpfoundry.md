---
repo: "FidarOrg/mcpfoundry"
name: "mcpfoundry"
description: "Forge production-ready MCP servers from databases or OpenAPI specs."
url: "https://github.com/FidarOrg/mcpfoundry"
language: "TypeScript"
languages: ["TypeScript", "Handlebars"]
languagePcts: [58, 23]
topics: ["ai", "cli", "mcp", "model-context-protocol", "openapi", "postgres", "scaffolding"]
stars: 13
forks: 1
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 10
recentReleases: 0
createdAt: "2026-06-14T01:27:01Z"
lastCommitAt: "2026-07-03T12:40:25Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 78
undervaluedScore: 31
maintainers: ["jamesmob", "shab15", "Venomzahi"]
openGraphImageUrl: "https://opengraph.githubassets.com/e5d1392d86e908083b21715cb61437b26b82b96b9e8a9eb5107626a722f5e326/FidarOrg/mcpfoundry"
---

### Create **secure, production-ready MCP servers** from your database or API — in under 5 minutes. ⚒️

[**Quick Start**](#-quick-start-60-seconds) · [Features](#-why-mcpfoundry) · [Security](#-the-ztai-security-shield-optional) · [Examples](#-two-ways-to-create) · [Contributing](./CONTRIBUTING.md)

</div>

---

</div>

> **Stop hand-writing MCP servers.** Point `mcpfoundry` at a database or an OpenAPI spec and get a clean, runnable, *secure-by-option* MCP server whose tools **actually run** — real parameterised SQL or real HTTP calls, not `TODO` stubs. Node.js or Python. Zero boilerplate.

---

## ⚡ Quick Start (60 seconds)

```bash
npx mcpfoundry create \
  --type openapi \
  --input https://petstore3.swagger.io/api/v3/openapi.json \
  --output ./petstore-mcp

cd petstore-mcp && npm install && npm start
# 🎉  MCP server live on http://localhost:3000/mcp
```

That's a full MCP server — every endpoint turned into a validated tool — running. No SDK wrangling, no transport plumbing, no boilerplate.

**Connect it to Claude in one step:** every generated project includes a ready-to-use **`.mcp.json`**. Open the folder in **Claude Code** (it auto-detects the file), or paste the block…
