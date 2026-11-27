---
repo: "Jubstaaa/hono-telescope"
name: "hono-telescope"
description: "Laravel Telescope-style debugging for Hono — plus an MCP server so your AI agent can read the app's live requests, exceptions and queries"
readmeQualityOk: true
url: "https://github.com/Jubstaaa/hono-telescope"
homepage: "https://hono-telescope.ilkerbalcilar.com/telescope"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [95]
topics: ["bun", "debugging", "hono", "middleware", "monitoring", "nodejs", "observability", "performance", "telescope", "typescript"]
stars: 28
forks: 0
openIssues: 0
closedIssues: 2
watchers: 2
contributors: 2
recentReleases: 0
createdAt: "2025-10-16T13:31:02Z"
lastCommitAt: "2026-11-27T12:57:38Z"
lastReleaseAt: "2025-10-31T09:29:47Z"
status: "thriving"
tags: ["hidden_gem", "funded"]
healthScore: 95
undervaluedScore: 62
maintainers: ["Jubstaaa", "dependabot[bot]", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/67eb20df1acab9ef5642ebf05ebd49b5dbc2d684f5bb1b4543d0b4c3950b3088/Jubstaaa/hono-telescope"
fundingLinks: ["GITHUB:https://github.com/Jubstaaa", "BUY_ME_A_COFFEE:https://buymeacoffee.com/jubstaa"]
discussionCount: 0
---

# hono-telescope

A debugging tool for Hono applications, inspired by Laravel Telescope: a dashboard that shows
you every request with the logs, queries, exceptions and outgoing calls that happened inside it.

**The same endpoint is also an MCP server.** Point Claude Code, Cursor or any MCP client at it
and your coding agent reads the running application's telemetry directly — the actual exception,
the request that produced it, and the queries that ran — instead of being handed a pasted stack
trace. Nothing else in the Hono ecosystem does that.

Zero runtime dependencies. Works on Node.js and Bun.

---

## 🌐 Live Demo

A hosted instance of [the example app](https://github.com/Jubstaaa/hono-telescope/blob/HEAD/src/example/index.ts), deployed from `main`. No installation needed.

**[📊 Open the dashboard](https://hono-telescope.ilkerbalcilar.com/telescope)** — API base: `https://hono-telescope.ilkerbalcilar.com`

Hit a few endpoints and watch the entries appear:
