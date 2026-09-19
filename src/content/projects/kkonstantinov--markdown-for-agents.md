---
repo: "KKonstantinov/markdown-for-agents"
name: "markdown-for-agents"
description: "HTML to Markdown converter for AI agents. 90+% fewer tokens, one dependency, works everywhere."
readmeQualityOk: true
url: "https://github.com/KKonstantinov/markdown-for-agents"
homepage: "http://markdown-for-agents.vercel.app"
language: "TypeScript"
languages: ["TypeScript", "Python"]
languagePcts: [58, 22]
topics: ["agents", "ai", "artificial-intelligence", "markdown", "typescript", "ai-agents", "content-negotiation", "html-to-markdown", "mcp", "middleware"]
stars: 31
forks: 3
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-02-25T13:15:05Z"
lastCommitAt: "2026-09-19T08:15:28Z"
lastReleaseAt: "2026-03-15T22:16:39Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 53
undervaluedScore: 12
maintainers: ["KKonstantinov", "github-actions[bot]", "stephenway"]
openGraphImageUrl: "https://opengraph.githubassets.com/0651e4284b1effbfaf44f6b6cf177fb4c763d5a4678dd0a631ee3c43acb2fe40/KKonstantinov/markdown-for-agents"
---

# markdown-for-agents

Runtime-agnostic HTML to Markdown converter built for AI agents. One dependency, works everywhere.

Convert any HTML page into clean, token-efficient Markdown — with built-in content extraction to strip away navigation, ads, and boilerplate. Inspired by [Cloudflare's Markdown for Agents](https://blog.cloudflare.com/markdown-for-agents/).

**[Try it in the playground](https://markdown-for-agents.vercel.app/playground)** — paste a URL or HTML and see the conversion live.

Audit any URL — no installation required:

```bash
npx @markdown-for-agents/audit https://docs.github.com/en/copilot/get-started/quickstart
```

```
           HTML            Markdown        Savings
───────────────────────────────────────────────────
Tokens     138,550         9,364           -93.2%
Chars      554,200         37,456          -93.2%
Words      27,123          4,044
Size       541.3 KB        36.6 KB         -93.2%
```

## Features

- **Runtime-agnostic** — Node.js, Bun, Deno, Cloudflare Workers, Vercel Edge, browsers
- **Content extraction** — strip nav, footer, ads, sidebars, cookie banners automatically
- **Framework middleware** — drop-in support for Express, Fastify,…
