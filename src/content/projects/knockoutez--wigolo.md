---
repo: "KnockOutEZ/wigolo"
name: "wigolo"
description: "The go-to web for your agent!"
readmeQualityOk: true
url: "https://github.com/KnockOutEZ/wigolo"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [98]
topics: ["agent", "ai", "ai-agent", "metasearch", "privacy", "search", "search-engine", "mcp", "mcp-server", "model-context-protocol"]
stars: 7
forks: 0
openIssues: 2
closedIssues: 23
watchers: 0
contributors: 1
recentReleases: 2
createdAt: "2026-04-12T15:04:11Z"
lastCommitAt: "2026-07-05T06:33:58Z"
lastReleaseAt: "2026-07-01T17:47:58Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 98
undervaluedScore: 57
maintainers: ["KnockOutEZ"]
openGraphImageUrl: "https://opengraph.githubassets.com/3c32fc258e8b7eacf58fd2db052e75040cdfb0a0831efbf71656636a0f0bfd9e/KnockOutEZ/wigolo"
---

Local-first web intelligence over MCP — **no keys, no cloud, no metered bill.**

[Quickstart](#quickstart) · [Tools](#the-tools) · [Why wigolo](#why-its-different) · [Benchmark](#benchmark) · [Architecture](#architecture) · [Configuration](#configuration) · [Contribute](#contributing)

</div>

---

wigolo runs on your machine as an MCP server and gives an AI coding agent one durable surface for everything web-related — **search, fetch, crawl, extract, cache, find-similar, research,** and autonomous gather loops. The core tools need no API keys, nothing it touches leaves `~/.wigolo/`, and there's no bill that grows with how much your agent thinks.

</div>

## Quickstart

Requires **Node ≥ 20** and ~1.5 GB of free disk. macOS, Linux, and Windows.

One command installs the local engine (search, browser, on-device models), wires it into your agent, and sets up the MCP connection:

```bash
npx wigolo init --non-interactive --agents=<your-agent>
```

- **`<your-agent>`** — one or more of `claude-code` · `cursor` · `codex` · `gemini-cli` · `vscode` · `windsurf` · `zed` · `antigravity` (comma-separated).

That's the whole setup — **search, fetch, crawl, extract, cache, and find-similar…
