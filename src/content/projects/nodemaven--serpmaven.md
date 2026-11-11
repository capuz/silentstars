---
repo: "nodemaven/serpmaven"
name: "serpmaven"
description: "Self-hosted Google search scraper for Python. Scrape Google SERP results with a real Chrome browser and your own residential proxy. Self-hosted SERP API alternative with JSON output, an HTTP API and an MCP server for AI agents."
readmeQualityOk: true
url: "https://github.com/nodemaven/serpmaven"
homepage: "https://go.nodemaven.com/gserp"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["google-scraper", "google-search", "serp", "web-scraping", "mcp", "ai-agents", "browser-automation", "google-search-api", "headless-chrome", "mcp-server"]
stars: 115
forks: 10
openIssues: 0
closedIssues: 0
watchers: 3
contributors: 5
recentReleases: 10
createdAt: "2026-10-01T16:39:14Z"
lastCommitAt: "2026-11-11T11:19:20Z"
lastReleaseAt: "2026-10-29T09:14:43Z"
status: "newborn"
tags: ["solo_builder", "release_machine"]
healthScore: 89
undervaluedScore: 34
maintainers: ["alkaz-nodemaven", "arslan-atajykov"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1400382351/1441dc75-843d-46b8-8126-905f96790f32"
---

[Quickstart](#quickstart) · [Output](#what-you-get) · [Poisoned results](#poisoned-results-protection) · [HTTP API](#run-it-as-an-api) · [MCP](#use-it-from-an-ai-agent-mcp) · [Docker](#docker) · [How it works](#how-it-works) · [Options](#options)

| ✅ **100%** | 📉 **0.4 MB** | ⚡ **1.4 s** |
|:---:|:---:|:---:|
| success rate | per search | per search on a warm proxy IP |

Scrape Google search results (SERP) with a real Chrome browser and your own
residential proxy, and get clean JSON back. Use it as a CLI, a Python library,
a local HTTP API, or an MCP server that gives AI agents live Google search.

Plain HTTP is no longer a reliable way to scrape Google, and a fresh browser on a
fresh proxy IP is refused quickly. So the scraper warms its first sticky proxy
session with ordinary browsing and starts later ones from the cookies Google
already accepts, lets the browser pass Google's checks, and then fetches results
pages directly over HTTPS with the browser's own cookies. Captchas and
blocks are reported as such, never as "no results".

## Features

⚡ **Hybrid mode**<br>
Results pages over HTTPS between Google's checks: a fraction of a browser's traffic and time. The browser takes…
