---
repo: "SysAdminDoc/Bookmark-Organizer-Pro"
name: "Bookmark-Organizer-Pro"
description: "A powerful, professional-grade bookmark manager with AI-powered categorization, multi-theme support, and advanced organization features."
readmeQualityOk: true
url: "https://github.com/SysAdminDoc/Bookmark-Organizer-Pro"
language: "Python"
languages: ["Python"]
languagePcts: [93]
topics: ["ai", "bookmarks", "dark-theme", "python", "pyqt6"]
stars: 7
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 3
recentReleases: 8
createdAt: "2026-01-07T13:46:26Z"
lastCommitAt: "2026-09-05T07:47:52Z"
lastReleaseAt: "2026-08-22T16:17:43Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 78
undervaluedScore: 59
maintainers: ["SysAdminDoc"]
openGraphImageUrl: "https://opengraph.githubassets.com/ab7973ef43c4048b2fcbb279f0566fd63478e026091fb3176580910415e21355/SysAdminDoc/Bookmark-Organizer-Pro"
discussionCount: 2
---

# Bookmark Organizer Pro

Bookmark Organizer Pro is a local-first desktop bookmark and research manager. It keeps browser saves, offline copies, highlights, and search indexes on your machine, with optional AI and MCP access when you choose to enable them.

Executable product contract: 69 CLI subcommands, 37 MCP tools, 6 AI providers, 3 extension surfaces, 59 service modules, 45 UI modules, and 53 test files.

### MCP setup

Add to your MCP config:

```json
{
  "mcpServers": {
    "bookmark-organizer-pro": {
      "command": "python",
      "args": ["-m", "bookmark_organizer_pro.mcp_server"]
    }
  }
}
```

Installed from PyPI, the same server starts with
`uvx --from "bookmark-organizer-pro[mcp]" bop-mcp`, which is the command
`packaging/server.json` declares for MCP registry clients.

After restart, the MCP-compatible client can query your bookmark library directly.
The server exposes bookmark search, semantic/hybrid retrieval, snapshots,
research flows, reader highlights, highlights due for review, per-bookmark highlight
Markdown export, and scoped reader review, note, and orphan-relink updates.
Read-only MCP tokens can list and export reader data; review recording, note
edits,…
