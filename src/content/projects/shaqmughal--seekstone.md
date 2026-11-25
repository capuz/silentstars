---
repo: "shaqmughal/seekstone"
name: "seekstone"
description: "The Obsidian MCP server that needs no plugin, no running Obsidian app — and doesn't blow your context window. Filesystem-direct: single-digit-ms keyword search, ~26 ms local semantic search, ~2 KB payloads, 25 tools."
readmeQualityOk: true
url: "https://github.com/shaqmughal/seekstone"
homepage: "https://seekstone.dev"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [91]
topics: ["ai", "claude", "llm", "markdown", "mcp", "model-context-protocol", "nodejs", "notes", "obsidian", "obsidian-ai"]
stars: 37
forks: 3
openIssues: 0
closedIssues: 7
watchers: 0
contributors: 5
recentReleases: 0
createdAt: "2026-05-29T01:30:23Z"
lastCommitAt: "2026-11-25T03:16:22Z"
lastReleaseAt: "2026-06-08T03:18:01Z"
status: "thriving"
tags: ["hidden_gem", "funded"]
healthScore: 99
undervaluedScore: 43
maintainers: ["shaqmughal", "seekstone-factory[bot]", "dependabot[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1252898213/ef8e274f-660a-4078-98d5-a8429f0e79c8"
fundingLinks: ["CUSTOM:https://buymeacoffee.com/shaqmughal"]
discussionCount: 1
---

---

|  | **Seekstone** | [obsidian-mcp-server](https://github.com/cyanheads/obsidian-mcp-server) (#1 by downloads) | REST-proxy servers |
|---|---|---|---|
| Local REST API plugin | **Not needed** | Required | Required |
| Obsidian app running | **Not needed — works with Obsidian closed** | Required | Required |
| Search payload @ 10k notes | **2.0 KB** | 47 KB | up to **95 MB** |
| Warm search latency @ 10k notes | **5.6 ms** | 732 ms (~131× slower) | up to 1,550 ms |
| Structured frontmatter queries | **Built-in (`query_notes`) — property/date/size predicates, answers in a few hundred bytes** | JSONLogic via REST | Varies |

---

---

## What is Seekstone?

**Seekstone is an Obsidian MCP server** — it gives Claude (and any [Model Context Protocol](https://modelcontextprotocol.io) client) direct read and write access to your Obsidian vault. No Obsidian app needs to be open, no plugins are required, and nothing leaves your machine.

It reads your vault **directly from disk** rather than routing through the Obsidian Local REST API plugin, and holds a warm full-text index in-process. The practical difference is twofold:
