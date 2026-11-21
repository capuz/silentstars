---
repo: "YOLOW92/pagesift"
name: "pagesift"
description: "Local-first web & document ingestion engine in Rust — HTTP/browser capture, layout-aware PDF/Office/OCR parsing, persistent sync, verifiable data graphs, and evidence-grounded AI context."
readmeQualityOk: true
url: "https://github.com/YOLOW92/pagesift"
homepage: "https://pagesift.tech"
language: "Rust"
languages: ["Rust"]
languagePcts: [84]
topics: ["ai-agents", "browser-automation", "data-extraction", "firecrawl", "html-to-markdown", "markdown", "mcp", "pdf-extraction", "rag", "rust"]
stars: 296
forks: 37
openIssues: 0
closedIssues: 2
watchers: 1
contributors: 2
recentReleases: 10
createdAt: "2026-10-20T17:30:59Z"
lastCommitAt: "2026-11-21T12:02:01Z"
lastReleaseAt: "2026-10-26T08:07:54Z"
status: "newborn"
tags: ["solo_builder", "release_machine"]
healthScore: 100
undervaluedScore: 33
maintainers: ["YOLOW92"]
openGraphImageUrl: "https://opengraph.githubassets.com/298c60cdbce982cb426a1cdf216477ad6c71ade7931fa2f7fb256e2e1b55f196/YOLOW92/pagesift"
discussionCount: 1
promoted: true
postedAt: "2026-10-31T02:07:17.829Z"
---

# pagesift 1.6.2

**Local-first web & document ingestion engine in Rust — HTTP/browser capture, layout-aware PDF/Office/OCR parsing, persistent sync, verifiable data graphs, and evidence-grounded AI context.**  
One self-hosted Rust binary with a CLI, Firecrawl v1/v2 & Jina Reader HTTP APIs, an MCP server, a C ABI, and native Python / Node.js packages.

**English** · [简体中文](https://github.com/YOLOW92/pagesift/blob/HEAD/docs/README.zh-CN.md) · [日本語](https://github.com/YOLOW92/pagesift/blob/HEAD/docs/README.ja.md) · [Español](https://github.com/YOLOW92/pagesift/blob/HEAD/docs/README.es.md)

## Overview

`pagesift` turns live web pages, uploaded binary documents, archives, and long-lived monitored sources into clean Markdown, schema-validated JSON, provenance-tracked `DataGraph` relations, and budget-compiled `ContextPack` evidence inside a single memory-bounded Rust binary. HTTP fetching, native document readers, HTML extraction, adaptive sync state, incremental context indexing, and evidence storage run in-process without requiring Python, JVM, or Node workers; a headless browser pool, NVIDIA GPU OCR, and user-configured LLM endpoints attach only when requested.
