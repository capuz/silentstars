---
repo: "grepsr/pline.ai"
name: "pline.ai"
description: "MCP server and agent skill for the pline.ai API: scrape, crawl, batch-scrape, map, and search the web from Claude, Cursor, Codex, and any MCP client."
readmeQualityOk: true
url: "https://github.com/grepsr/pline.ai"
homepage: "https://pline.ai"
language: "Rust"
languages: ["Rust", "Python"]
languagePcts: [41, 30]
topics: ["agent-skills", "ai-agents", "crawler", "mcp", "mcp-server", "model-context-protocol", "rust", "web-scraping", "pline"]
stars: 19
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 5
recentReleases: 10
createdAt: "2026-09-17T06:36:38Z"
lastCommitAt: "2026-11-23T10:28:53Z"
lastReleaseAt: "2026-10-14T06:36:55Z"
status: "thriving"
tags: ["hidden_gem", "release_machine"]
healthScore: 86
undervaluedScore: 48
maintainers: ["subediparas5", "rajmaharjan-grepsr", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/49ad7e550cd4550c17cbd45455f17b36e4d9750c362e8bb50fb7ee64b09169a0/grepsr/pline.ai"
---

# pline.ai API — Agent skill and MCP

Use the hosted pline.ai API from an agent skill or an MCP client. Both integrations use your own
API key and call the same hosted scraping API. The scraping backend is not part of this repository.

| Integration | Contents | Requirements |
|---|---|---|
| [pline-ai skill](https://github.com/grepsr/pline.ai/blob/HEAD/skills/pline-ai/SKILL.md) | Agent instructions, API reference, Python CLI for scrape, batch, crawl, map, and search | Python 3.10+; no pip dependencies |
| [MCP server](https://github.com/grepsr/pline.ai/blob/HEAD/mcp-server/README.md) | Ten tools over local stdio; embedded usage guide and API reference | `npx -y pline-ai` (Node.js 18+); also a Docker image, prebuilt binaries, or a Cargo source build |
| [n8n community node](https://github.com/grepsr/pline.ai/blob/HEAD/n8n-pline/README.md) | `n8n-nodes-pline`: Scrape, Batch Scrape, Crawl, Map and Search operations for n8n workflows | n8n 1.x; install from n8n's community nodes panel |

**Fastest setup:** run `npx -y pline-ai@latest init` and enter your API key. It configures every
supported MCP client on your machine and installs the skill; see [Quick install](#quick-install).
