---
repo: "YOLOW92/pagesift"
name: "pagesift"
description: "Self-hosted web scraper, crawler and document parser for AI agents: URLs, PDFs with OCR and Office files to clean Markdown/JSON. Firecrawl- and Jina-compatible API, MCP server, agent endpoint, Python/Node SDKs. Single Rust binary."
readmeQualityOk: true
url: "https://github.com/YOLOW92/pagesift"
homepage: "https://pagesift.tech"
language: "Rust"
languages: ["Rust"]
languagePcts: [81]
topics: ["ai-agents", "browser-automation", "data-extraction", "firecrawl", "html-to-markdown", "markdown", "mcp", "pdf-extraction", "rag", "rust"]
stars: 272
forks: 37
openIssues: 0
closedIssues: 2
watchers: 1
contributors: 2
recentReleases: 10
createdAt: "2026-10-20T17:30:59Z"
lastCommitAt: "2026-11-14T00:06:49Z"
lastReleaseAt: "2026-10-26T08:07:54Z"
status: "newborn"
tags: ["solo_builder", "release_machine"]
healthScore: 100
undervaluedScore: 34
maintainers: ["YOLOW92"]
openGraphImageUrl: "https://opengraph.githubassets.com/1692da406b7fc6d3f7e58ea53888d766276371b1af45d2b178ee78ab508c9e54/YOLOW92/pagesift"
discussionCount: 1
promoted: true
postedAt: "2026-10-31T02:07:17.829Z"
---

# pagesift 1.4.1

**The web and document layer for AI agents: any URL, document, email, archive or source file in, clean Markdown, structured JSON or DataGraph relations out.**  
One self-hosted Rust binary with a CLI, Firecrawl and Jina Reader APIs, an MCP server, and packages for Python, Node.js, Go, Java, C#, Ruby, PHP and more.

**Measured:** PDF to Markdown 2.5 ms per page, 20.08× faster than the next best tool; HTML to Markdown 0.23 ms per page, 8.36× faster; main content 1.0 ms per page, 7.26× faster (lower is better); Office 81.9 files/s, 3.03× the next best (higher is better).

**English** · [简体中文](https://github.com/YOLOW92/pagesift/blob/HEAD/docs/README.zh-CN.md) · [日本語](https://github.com/YOLOW92/pagesift/blob/HEAD/docs/README.ja.md) · [Español](https://github.com/YOLOW92/pagesift/blob/HEAD/docs/README.es.md)

## What it is

pagesift reads the web and documents for software that thinks: it fetches a URL, rendering JavaScript only when that
adds content, or opens a local file, and returns the content as Markdown or structured JSON. It covers single pages,
whole sites, scanned PDFs, browser actions, change monitoring and research runs driven by your own model.

Can…
