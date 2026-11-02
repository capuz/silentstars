---
repo: "Digidai/website2markdown"
name: "website2markdown"
description: "Convert any URL to clean Markdown. Cloudflare Worker with 14 site adapters, MCP Server, Agent Skills, llms.txt. Open source, Apache-2.0. https://md.genedai.me"
readmeQualityOk: true
url: "https://github.com/Digidai/website2markdown"
homepage: "https://mdget.dev/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [99]
topics: ["markdown", "ai-agents", "cloudflare-workers", "llms-txt", "mcp", "typescript", "url-to-markdown", "web-scraping"]
stars: 8
forks: 1
openIssues: 0
closedIssues: 16
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-02-17T11:09:36Z"
lastCommitAt: "2026-11-02T15:17:42Z"
lastReleaseAt: "2026-03-26T12:01:52Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 91
undervaluedScore: 59
maintainers: ["Digidai"]
openGraphImageUrl: "https://opengraph.githubassets.com/f50ff3fddbce150f0ae2c002c19b0b00d31b59d2e562edd0e891c2173d194723/Digidai/website2markdown"
---

# URL to Markdown Converter

[English](https://github.com/Digidai/website2markdown/blob/HEAD/README.md) | [简体中文](https://github.com/Digidai/website2markdown/blob/HEAD/README.zh-CN.md)

Convert **any** web page to clean Markdown — JS-heavy SPAs, paywalled content, Chinese platforms (WeChat, Zhihu, Feishu), and more. Powered by Cloudflare Workers with a 5-layer fallback pipeline and 14 site adapters.

The hosted service lives at **[mdget.dev](https://mdget.dev)**. The old address `md.genedai.me` still works the same way, so existing integrations need no change.

### Quick Start

```bash
# Convert any URL to Markdown (try it now!)
curl -H "Accept: text/markdown" https://mdget.dev/https://example.com

# WeChat article
curl -H "Accept: text/markdown" "https://mdget.dev/https://mp.weixin.qq.com/s/YOUR_ARTICLE_ID"

# JSON output with metadata
curl "https://mdget.dev/https://example.com?format=json&raw=true"
```

Or just open in your browser: **[mdget.dev/https://example.com](https://mdget.dev/https://example.com)**

Need browser-rendered pages (WeChat, Feishu, JS-heavy SPAs) or higher limits?
Get a free API key at **[mdget.dev/portal/](https://mdget.dev/portal/)**.

## How It Works

```…
