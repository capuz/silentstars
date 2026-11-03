---
repo: "lennix1337/Genexus18MCP"
name: "Genexus18MCP"
description: "GeneXus MCP server with native SDK support for GeneXus 16–18 plus basic legacy compatibility for GeneXus 8, 9, 10.1–10.3, and 15 via reflection/COM drivers."
readmeQualityOk: true
url: "https://github.com/lennix1337/Genexus18MCP"
homepage: "https://www.npmjs.com/package/genexus-mcp"
language: "C#"
languages: ["C#"]
languagePcts: [72]
topics: ["ai-agent", "ai-agents", "ai-tools", "anthropic", "claude", "claude-code", "claude-desktop", "code-generation", "cursor", "developer-tools"]
stars: 41
forks: 28
openIssues: 3
closedIssues: 461
watchers: 5
contributors: 11
recentReleases: 0
createdAt: "2026-02-18T03:11:34Z"
lastCommitAt: "2026-11-03T10:51:59Z"
lastReleaseAt: "2026-05-12T17:29:10Z"
status: "thriving"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 100
undervaluedScore: 54
maintainers: ["lennix1337", "davidagostini", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/f8a4976990efeeef78d12fcee782fb3da8c9fd740931f93f78832d5edeb81fb5/lennix1337/Genexus18MCP"
---

# GeneXus MCP Server — Multi-version GeneXus for Claude, Cursor, and AI Agents

> **¿Hablás español?** → [Guía de inicio en español](https://github.com/lennix1337/Genexus18MCP/blob/HEAD/docs/GETTING_STARTED.es.md)
> **Fala português?** → [Guia de início em português](https://github.com/lennix1337/Genexus18MCP/blob/HEAD/docs/GETTING_STARTED.pt-br.md)
> **Stuck?** → [Troubleshooting guide](https://github.com/lennix1337/Genexus18MCP/blob/HEAD/TROUBLESHOOTING.md)
> **All docs** → [Documentation index](https://github.com/lennix1337/Genexus18MCP/blob/HEAD/docs/README.md)

---

**GeneXus MCP Server** lets AI agents — Claude Desktop, Claude Code, Cursor, Antigravity, and any MCP-compatible client — read, edit, analyze, and refactor objects inside a Knowledge Base supported by the selected native SDK or legacy compatibility driver. Native SDK paths work with the **real GeneXus SDK** and legacy paths use explicit reflection/COM adapters; neither path relies on a parsed copy of the KB.

In practice: you point the MCP at your KB, then ask your AI assistant things like *"list all transactions with attribute CustomerId"*, *"add a rule to the Order transaction that validates the total"*, or…
