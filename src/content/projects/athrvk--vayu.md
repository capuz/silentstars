---
repo: "athrvk/vayu"
name: "vayu"
description: "Open-source API client with a native C++ load-testing engine. Postman-style requests + k6-level load tests in one local app"
readmeQualityOk: true
url: "https://github.com/athrvk/vayu"
homepage: "https://athrvk.github.io/vayu/"
language: "TypeScript"
languages: ["TypeScript", "C++"]
languagePcts: [55, 43]
topics: ["testing-tools", "electron", "api-testing", "api-client", "load-testing", "performance", "postman-alternative", "bruno-alternative", "http-client", "performance-testing"]
stars: 18
forks: 5
openIssues: 36
closedIssues: 1868
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-01-02T06:18:04Z"
lastCommitAt: "2026-11-25T13:19:44Z"
lastReleaseAt: "2026-07-15T06:40:47Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 100
undervaluedScore: 66
maintainers: ["athrvk"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1126552851/b4223c70-1811-4cbf-acba-ece165f872cb"
discussionCount: 0
---

# Vayu - Open Source API Client and Native Load Tester in One Desktop App

**Vayu is a free, open source API client with a native C++ load engine - build requests like Postman, load test the same endpoint at 50k+ req/s, and let your coding agent drive all of it over MCP. One app, fully local, no account.**

- **50k+ req/s from the app's own UI** - 56,880 standalone, matching `wrk` and edging past `vegeta` on the same machine
- **Most Postman scripts run unmodified** - a QuickJS runtime implementing the `pm.*` API, the older `tests["..."]` / `postman.*` style and the bundled `require()` libraries (not `cheerio`, Backbone or Node built-ins)
- **MCP server built in** - Claude Code, Cursor, VS Code, Codex and Zed (via the stdio CLI) drive the same engine the UI does

MCP ([Model Context Protocol](https://athrvk.github.io/vayu/engine/mcp/)) is the open standard that lets coding agents such as Claude Code or Cursor call tools; Vayu exposes its engine as one, so an agent can send the request it just wrote, load test it and read the report without leaving your editor.

**Install:**

```powershell
winget install athrvk.Vayu
```
