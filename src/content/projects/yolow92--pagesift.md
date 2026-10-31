---
repo: "YOLOW92/pagesift"
name: "pagesift"
description: "Rust web scraper & crawler for AI agents: URLs, PDFs and Office files → clean Markdown/JSON. Firecrawl- and Jina Reader-compatible API, MCP server, Python/Node SDKs. Self-hosted single binary."
readmeQualityOk: true
url: "https://github.com/YOLOW92/pagesift"
language: "Rust"
languages: ["Rust"]
languagePcts: [79]
topics: ["ai-agents", "browser-automation", "data-extraction", "firecrawl", "html-to-markdown", "markdown", "mcp", "pdf-extraction", "rag", "rust"]
stars: 175
forks: 19
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-10-20T17:30:59Z"
lastCommitAt: "2026-10-31T01:29:18Z"
lastReleaseAt: "2026-10-26T08:07:54Z"
status: "newborn"
tags: ["solo_builder", "release_machine"]
healthScore: 100
undervaluedScore: 34
maintainers: ["YOLOW92", "claude"]
openGraphImageUrl: "https://opengraph.githubassets.com/8a9e9a39776fa728bf44317d48a580b80877f12f128f5297ebd460d8526a850b/YOLOW92/pagesift"
discussionCount: 0
promoted: true
---

# pagesift 0.81.4

**Turn web pages, PDFs and Office files into clean Markdown for LLMs and AI agents.**  
One self-hosted Rust binary: CLI, Firecrawl-compatible HTTP API, Jina Reader endpoint, MCP server, Python and Node.js packages.

**English** · [简体中文](https://github.com/YOLOW92/pagesift/blob/HEAD/docs/README.zh-CN.md) · [日本語](https://github.com/YOLOW92/pagesift/blob/HEAD/docs/README.ja.md) · [Español](https://github.com/YOLOW92/pagesift/blob/HEAD/docs/README.es.md)

## What it is

pagesift fetches a URL (rendering JavaScript only when the page needs it) or reads a local file, keeps the
main content, and returns Markdown plus metadata. It scrapes single pages, batches and whole sites, and
runs as a command, a library, an HTTP service or an MCP server.

Can replace or sit alongside: **Firecrawl** (same v1/v2 API, self-hosted), **Jina Reader** (`/r/<url>`),
**Crawl4AI**, **trafilatura** / **Readability**, **pymupdf4llm** / **pypdf**, **Kreuzberg**.

## At a glance

- **Input:** URLs (HTTP, or a headless browser when needed), HTML, PDF, Word (.docx), Excel (.xlsx), PowerPoint (.pptx), EPUB, CSV
- **Output:** Markdown, HTML, raw HTML, links, images, metadata (title, publication…
