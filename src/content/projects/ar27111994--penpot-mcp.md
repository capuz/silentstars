---
repo: "ar27111994/penpot-mcp"
name: "penpot-mcp"
description: "AI-agent skill for creating, auditing, and maintaining Penpot design systems, prototypes, tokens, and design-to-code workflows via the official Penpot MCP Server."
readmeQualityOk: true
url: "https://github.com/ar27111994/penpot-mcp"
homepage: "https://www.skills.sh/ar27111994/penpot-mcp"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [100]
topics: ["accessibility", "agent-skill", "ai-agent", "claude-code", "design-system", "design-to-code", "design-tokens", "mcp", "penpot", "ui-design"]
stars: 27
forks: 5
openIssues: 2
closedIssues: 1
watchers: 0
contributors: 5
recentReleases: 0
createdAt: "2026-05-24T17:39:11Z"
lastCommitAt: "2026-10-07T10:32:22Z"
lastReleaseAt: "2026-05-29T11:17:58Z"
status: "thriving"
tags: ["needs_contributors", "hidden_gem"]
healthScore: 83
undervaluedScore: 26
maintainers: ["ar27111994", "dependabot[bot]", "shkarinn"]
openGraphImageUrl: "https://opengraph.githubassets.com/293c3ef8a1d8fb188da3916268f1a6a31d68fa7fc6ef284edd63103e2a557612/ar27111994/penpot-mcp"
---

# penpot-mcp skill

> AI-agent skill for creating, auditing, and maintaining production-grade design projects and design systems — including flows, interactions, animations, and overlays — in [Penpot](https://penpot.app) via the official [Penpot MCP Server](https://help.penpot.app/mcp/).

## Compatible AI agents

Works with any MCP-compatible client: **Claude Code**, **Cursor**, **VS Code / Copilot**, **Codex / OpenCode**, **Amp**, **Cline**, **Windsurf**, **Claude Desktop** (via `mcp-remote`), and any agent supporting HTTP or SSE MCP transport.

## What this skill covers

- **Remote & local MCP setup** — up-to-date configs for all major MCP clients; Remote MCP recommended for most users; `/sse` fallback guidance for local transport conflicts
- **All 5 MCP tools** — `execute_code`, `high_level_overview`, `penpot_api_info`, `export_shape`, `import_image`
- **Penpot JS API patterns** — `penpotUtils` reference, read-only property gotchas, flex ordering quirks, board positioning, CSS export, plugin data API, community plugin boundaries
- **Font & typography constraints** — installed variant detection, library vs. layer fontSize types, stale `fontId` limitation
- **Write safety rules**…
