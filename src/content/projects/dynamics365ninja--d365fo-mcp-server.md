---
repo: "dynamics365ninja/d365fo-mcp-server"
name: "d365fo-mcp-server"
description: "Exposes MCP tools that prove every method, field, label and form pattern against your real metadata before the AI writes code."
readmeQualityOk: true
url: "https://github.com/dynamics365ninja/d365fo-mcp-server"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [93]
topics: ["code-completion", "d365fo", "dynamics-365", "mcp", "azure", "erp", "github-copilot", "claude-code", "dynamics-365-finance-operations"]
stars: 168
forks: 64
openIssues: 3
closedIssues: 109
watchers: 14
contributors: 13
recentReleases: 0
createdAt: "2026-01-20T12:39:14Z"
lastCommitAt: "2026-11-05T11:24:14Z"
lastReleaseAt: "2026-07-30T08:11:36Z"
status: "thriving"
tags: []
healthScore: 99
undervaluedScore: 38
maintainers: ["dynamics365ninja", "HSOOppliger", "goshoom"]
openGraphImageUrl: "https://opengraph.githubassets.com/78fa3a3e25f254002b21307e3f09ea7216c4cdff070bcfc0b110ad87fd15495e/dynamics365ninja/d365fo-mcp-server"
---

# D365 F&O MCP Server

**22 AI tools that know every X++ class, table, form, and EDT in your D365FO codebase**

*Grounded AI development for Dynamics 365 Finance & Operations — works with GitHub Copilot and Claude Code*

*These connect an editor to a server that is already deployed — see [Quick Start](#quick-start) if you still need to set one up.*

---

## Why

AI assistants excel at C#, Python, and JavaScript. X++ is different: your D365FO codebase is private, deeply customized, and invisible to every model — so AI confidently generates code that doesn't compile.

This server pre-indexes your entire D365FO installation (580 000+ symbols across standard, ISV, and custom models) and exposes it as 22 specialized MCP tools (`axdb_sql` and `trace_d365fo` only once configured). Every signature, every CoC wrapper, every label, every form pattern — verified against your real metadata **before** the AI writes a single line.

| Task | Without this server | With this server |
|------|--------------------|------------------|
| Method signatures | Guessed → compile errors | Exact, from your codebase |
| Existing CoC wrappers | Manual AOT search | `extension_info(mode="coc")` in < 50 ms |
|…
