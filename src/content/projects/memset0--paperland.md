---
repo: "memset0/paperland"
name: "paperland"
description: "(100% Vibe Coding) A self-hosted academic paper management system with AI-powered Q&A, automatic metadata enrichment, and Zotero integration."
readmeQualityOk: true
url: "https://github.com/memset0/paperland"
homepage: "https://paperland.dev.mem.ac/"
language: "TypeScript"
languages: ["TypeScript", "Vue"]
languagePcts: [59, 41]
topics: ["openspec", "zotero-plugin", "vibe-research"]
stars: 6
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 4
recentReleases: 0
createdAt: "2026-03-17T04:37:21Z"
lastCommitAt: "2026-08-26T04:17:34Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 73
undervaluedScore: 44
maintainers: ["memset0"]
openGraphImageUrl: "https://opengraph.githubassets.com/7a477453d0b74c1a83b4e4bd08185f0378c8baf27301c01a0e36ea6ba3b87a13/memset0/paperland"
---

# Paperland

[中文文档](https://github.com/memset0/paperland/blob/HEAD/README.zh_CN.md)

A self-hosted academic paper management system with AI-powered Q&A, automatic metadata enrichment, and Zotero integration.

## Features

- **Paper Management** — Add papers via arXiv ID, Semantic Scholar corpus ID, or manual entry. Automatic metadata fetching (title, authors, abstract) from multiple sources.
- **AI-Powered Q&A** — Ask template-based or free-form questions about papers using configurable LLM backends. Supports LaTeX math rendering.
- **PDF Viewer** — Built-in PDF viewer with dual-panel layout (PDF + paper info & Q&A).
- **Service Pipeline** — Pluggable service architecture with dependency graph scheduling, concurrency control, and rate limiting.
- **Zotero Integration** — Zotero 7 sidebar plugin for seamless paper sync, auto-detection of arXiv IDs, and tag synchronization.
- **Tag System** — Organize papers with tags, synced between Paperland and Zotero.
- **Responsive Design** — Desktop sidebar layout and mobile-friendly interface.

## Tech Stack

| Component | Technology |
|-----------|------------|
| Runtime | [Bun](https://bun.sh) |
| Frontend | Vue 3 + Vite + Pinia + Tailwind…
