---
repo: "YOLOW92/pagesift"
name: "pagesift"
description: "Local-first web & document ingestion engine in Rust — HTTP/browser capture, layout-aware PDF/Office/OCR parsing, persistent sync, and verifiable data graphs."
readmeQualityOk: true
url: "https://github.com/YOLOW92/pagesift"
homepage: "https://pagesift.tech"
language: "Rust"
languages: ["Rust"]
languagePcts: [82]
topics: ["ai-agents", "browser-automation", "data-extraction", "firecrawl", "html-to-markdown", "markdown", "mcp", "pdf-extraction", "rag", "rust"]
stars: 276
forks: 37
openIssues: 0
closedIssues: 2
watchers: 1
contributors: 2
recentReleases: 10
createdAt: "2026-10-20T17:30:59Z"
lastCommitAt: "2026-11-16T09:59:56Z"
lastReleaseAt: "2026-10-26T08:07:54Z"
status: "newborn"
tags: ["solo_builder", "release_machine"]
healthScore: 100
undervaluedScore: 34
maintainers: ["YOLOW92"]
openGraphImageUrl: "https://opengraph.githubassets.com/dfb57756b54dc0a58a6c9d35a06d20a42b834a0f82101fc168f56079c1dcd722/YOLOW92/pagesift"
discussionCount: 1
promoted: true
postedAt: "2026-10-31T02:07:17.829Z"
---

# pagesift 1.5.6

**Local-first web & document ingestion engine in Rust — HTTP/browser capture, layout-aware PDF/Office/OCR parsing, persistent sync, and verifiable data graphs.**  
One self-hosted Rust binary with a CLI, Firecrawl v1/v2 & Jina Reader HTTP APIs, an MCP server, a C ABI, and native Python / Node.js packages.

**English** · [简体中文](https://github.com/YOLOW92/pagesift/blob/HEAD/docs/README.zh-CN.md) · [日本語](https://github.com/YOLOW92/pagesift/blob/HEAD/docs/README.ja.md) · [Español](https://github.com/YOLOW92/pagesift/blob/HEAD/docs/README.es.md)

## Overview

`pagesift` turns live web pages, uploaded binary documents, archives, and long-lived monitored sources into clean Markdown, schema-validated JSON, and provenance-tracked `DataGraph` relations inside a single memory-bounded Rust binary. HTTP fetching, native document readers, HTML extraction, adaptive sync state, and evidence storage run in-process without requiring Python, JVM, or Node workers; a headless browser pool, NVIDIA GPU OCR, and user-configured LLM endpoints attach only when requested.

Drop-in or companion for: **Firecrawl** (self-hosted v1/v2 API), **Jina Reader** (`/r/` and `/s/`), **Crawl4AI**,…
