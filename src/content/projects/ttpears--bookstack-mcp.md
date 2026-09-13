---
repo: "ttpears/bookstack-mcp"
name: "bookstack-mcp"
description: "MCP server for BookStack wiki — search, read, create, and manage documentation via AI assistants"
readmeQualityOk: true
url: "https://github.com/ttpears/bookstack-mcp"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [95]
topics: ["gemini-cli-extension"]
stars: 35
forks: 19
openIssues: 5
closedIssues: 2
watchers: 0
contributors: 7
recentReleases: 2
createdAt: "2025-08-14T03:18:58Z"
lastCommitAt: "2026-09-13T08:29:51Z"
lastReleaseAt: "2026-07-22T03:36:14Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "fork_magnet"]
healthScore: 80
undervaluedScore: 59
maintainers: ["ttpears", "ToxicOrca", "ws404dev"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1037730689/5e544211-ed82-4d49-80a7-f36deeb49e71"
---

# BookStack MCP Server

A [Model Context Protocol](https://modelcontextprotocol.io) (MCP) server that gives AI assistants full access to your [BookStack](https://www.bookstackapp.com) documentation — search, read, create, and manage content.

```bash
npx bookstack-mcp
```

Field notes: [Why my BookStack MCP server starts read-only](https://hackyourworld.com/bookstack-mcp-server-read-only-by-default/) covers the shared-token rate-limit failure, process-wide cache, response-size measurements, and permission boundaries that shaped the current design.

## Features

- 20 read-only tools + 20 write tools for complete BookStack API coverage
- Books, chapters, pages, shelves, attachments, and comments — full CRUD
- Recycle bin support — restore or permanently delete soft-deleted content
- Type-safe input validation with Zod (auto-coerces string/number params for broad client compatibility)
- Embedded URLs and content previews in all responses
- Markdown export fallback for HTML-authored pages, so AI clients always get usable content
- Token-efficient responses: compact JSON, no redundant fields, no N+1 fetches — ~30–55% smaller payloads than 3.x
- Write operations disabled by default for…
