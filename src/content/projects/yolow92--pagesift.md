---
repo: "YOLOW92/pagesift"
name: "pagesift"
description: "Self-hosted web scraper, crawler and document parser for AI agents: URLs, PDFs with OCR and Office files to clean Markdown/JSON. Firecrawl- and Jina-compatible API, MCP server, agent endpoint, Python/Node SDKs. Single Rust binary."
readmeQualityOk: true
url: "https://github.com/YOLOW92/pagesift"
language: "Rust"
languages: ["Rust"]
languagePcts: [84]
topics: ["ai-agents", "browser-automation", "data-extraction", "firecrawl", "html-to-markdown", "markdown", "mcp", "pdf-extraction", "rag", "rust"]
stars: 192
forks: 21
openIssues: 0
closedIssues: 2
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-10-20T17:30:59Z"
lastCommitAt: "2026-11-04T07:59:29Z"
lastReleaseAt: "2026-10-26T08:07:54Z"
status: "newborn"
tags: ["solo_builder", "release_machine"]
healthScore: 100
undervaluedScore: 33
maintainers: ["YOLOW92", "claude"]
openGraphImageUrl: "https://opengraph.githubassets.com/da2bdbb8a9d459e2fd462c13fe7ac6a80cb1065a855a0a4eb5c704c40c3e8711/YOLOW92/pagesift"
discussionCount: 0
promoted: true
postedAt: "2026-10-31T02:07:17.829Z"
---

# pagesift 1.1.0

**The web and document layer for AI agents: any URL, PDF or Office file in, clean Markdown or JSON out.**  
One self-hosted Rust binary with a CLI, Firecrawl and Jina Reader APIs, an MCP server, and Python and Node.js packages.

**English** · [简体中文](https://github.com/YOLOW92/pagesift/blob/HEAD/docs/README.zh-CN.md) · [日本語](https://github.com/YOLOW92/pagesift/blob/HEAD/docs/README.ja.md) · [Español](https://github.com/YOLOW92/pagesift/blob/HEAD/docs/README.es.md)

## What it is

pagesift reads the web and documents for software that thinks: it fetches a URL, rendering JavaScript only when that
adds content, or opens a local file, and returns the content as Markdown or structured JSON. It covers single pages,
whole sites, scanned PDFs, browser actions, change monitoring and research runs driven by your own model.

Can replace or sit alongside: **Firecrawl** (same v1/v2 API, self-hosted), **Jina Reader** (`/r/` and `/s/`),
**Crawl4AI**, **trafilatura**, **Readability**, **pymupdf4llm**, **Docling**, **Kreuzberg**, **xberg**.

## At a glance

- **Input:** URLs, HTML, PDF including scanned pages (OCR), image files (OCR), Word (.docx, .doc), Excel (.xlsx, .xlsb,…
