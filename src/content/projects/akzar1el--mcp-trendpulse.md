---
repo: "AKzar1el/mcp-trendpulse"
name: "mcp-trendpulse"
description: "Google News + Google Trends MCP server for keyword, market, SEO, and content research. Free OSS."
readmeQualityOk: true
url: "https://github.com/AKzar1el/mcp-trendpulse"
homepage: "https://akzar1el.github.io/mcp-trendpulse/"
language: "Python"
languages: ["Python"]
languagePcts: [92]
topics: ["data-scraping", "google-news", "google-trends", "mcp-server", "model-context-protocol", "nlp", "python", "trends-analysis", "content-strategy", "keyword-research"]
stars: 6
forks: 0
openIssues: 3
closedIssues: 2
watchers: 1
contributors: 2
recentReleases: 10
createdAt: "2026-07-07T23:08:23Z"
lastCommitAt: "2026-11-05T14:04:43Z"
lastReleaseAt: "2026-09-19T22:15:13Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 85
undervaluedScore: 55
maintainers: ["AKzar1el"]
openGraphImageUrl: "https://opengraph.githubassets.com/79fa6883528263714d4376f599c55be7335c92be4ab73cbb3f9587f1b667a3d9/AKzar1el/mcp-trendpulse"
discussionCount: 1
---

# mcp-trendpulse

**TrendPulse** is a Python Model Context Protocol (MCP) server for researching current news and search-interest trends. It combines Google News discovery and article extraction with Google Trends analysis so MCP clients can inspect what is trending, compare keyword momentum, explore related demand, and add current-news context to research workflows.

The project currently ships as a **community/self-hosted MCP server** and also contains the implementation for a separate **hosted TrendPulse by DigestSEO** surface for remote MCP clients such as ChatGPT and Codex. The hosted layer uses a smaller, goal-oriented tool surface while the community server keeps the full low-level research toolkit available to developers.

> **Project status:** the local/community server is usable today. The DigestSEO-hosted MCP and public OpenAI plugin are not released yet and should not be treated as available endpoints.

Engineering context: TrendPulse is part of the [DigestSEO](https://digestseo.com/) MCP ecosystem. It complements [mcp-gsc](https://digestseo.com/gsc-mcp/) for Google Search Console data, [mcp-geo](https://digestseo.com/geo-mcp/) for AI visibility, and…
