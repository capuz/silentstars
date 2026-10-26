---
repo: "szaffarano/org-mcp-server"
name: "org-mcp-server"
description: "MCP server for org-mode and org-roam knowledge base management"
readmeQualityOk: true
url: "https://github.com/szaffarano/org-mcp-server"
language: "Rust"
languages: ["Rust"]
languagePcts: [99]
topics: ["agent", "mcp", "mcp-server", "org-mode", "org-roam", "rust", "emacs-orgmode", "knowledge-base", "neovim"]
stars: 42
forks: 9
openIssues: 9
closedIssues: 16
watchers: 2
contributors: 3
recentReleases: 0
createdAt: "2025-09-14T13:56:34Z"
lastCommitAt: "2026-10-26T09:18:17Z"
lastReleaseAt: "2025-11-03T07:30:49Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 85
undervaluedScore: 49
maintainers: ["renovate[bot]", "szaffarano", "CGenie"]
openGraphImageUrl: "https://opengraph.githubassets.com/81b312c49086a0f1cf10eb7a21b87905796b445a13d50aae6e58f9823674bc8c/szaffarano/org-mcp-server"
---

# org-mcp-server

**🚧 Work in Progress**: This project is under active development.

A [Model Context Protocol (MCP)](https://modelcontextprotocol.io/) server for
org-mode knowledge management. Provides search, content access, and note
linking capabilities for your org-mode files through the MCP protocol.

## Features

### MCP Resources

- `org://` — List all org-mode files in configured directories
- `org://{file}` — Access raw content of `{file}`
- `org-outline://{file}` — Get hierarchical structure of `{file}` as JSON
- `org-heading://{file}#{heading}` — Access specific headings by path
- `org-id://{id}` — Find content by org-mode ID properties
- `org-agenda://` — List all agenda items and tasks
- `org-agenda://today` — Today's scheduled agenda items
- `org-agenda://week` — This week's scheduled agenda items
- `org-agenda://day/{YYYY-MM-DD}` — Agenda for a specific day
- `org-agenda://week/{N}` — Agenda for week number N
- `org-agenda://month/{N}` — Agenda for month number N
- `org-agenda://query/from/{YYYY-MM-DD}/to/{YYYY-MM-DD}` — Custom date range

### MCP Tools

- `org-file-list` — List all org files in configured directories
- `org-search` — Full-text fuzzy search across…
