---
repo: "zjc19891106/MarkdownDisplayView"
name: "MarkdownDisplayView"
description: "A view for display markdown text.support markdown streaming like gpt&claude&gemini&deepseek"
readmeQualityOk: true
url: "https://github.com/zjc19891106/MarkdownDisplayView"
language: "Swift"
languages: ["Swift"]
languagePcts: [100]
topics: ["aiconversation", "markdown", "markdown-viewer", "streaming-text", "performance-markdown-render", "typewriter-style-streaming-animation", "ai-text-chunking", "ios-swift", "markdown-swift", "markdownview"]
stars: 230
forks: 33
openIssues: 1
closedIssues: 31
watchers: 3
contributors: 3
recentReleases: 0
createdAt: "2025-12-15T08:13:55Z"
lastCommitAt: "2026-09-18T08:27:13Z"
lastReleaseAt: "2026-01-07T01:46:44Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 94
undervaluedScore: 33
maintainers: ["zjc19891106"]
openGraphImageUrl: "https://opengraph.githubassets.com/55270a23be7e2c316e4f0ba2d19038f7eab12f9741d6e36be6edd577b616775f/zjc19891106/MarkdownDisplayView"
---

*English | [中文](https://github.com/zjc19891106/MarkdownDisplayView/blob/HEAD/README_zh.md)*

# MarkdownDisplayView

A high-performance **100% pure native** UIKit Markdown renderer for iOS built on TextKit 2, with a **built-in native LaTeX math & chemistry (inorganic/organic) typesetting engine**, configurable styles, background parsing, incremental UI updates, and real-time AI/SSE streaming.

- **100% Pure Native (Zero-WebView)**: In-house recursive-descent LaTeX parser and CoreGraphics/CoreText 2D geometric typesetting engine with zero web-view overhead and instant sub-millisecond rendering.
- **Exclusive Chemical Formula Support**: Native support for inorganic reaction equations (`\ce` with auto subscripts/charges/equilibrium) and organic structural formulas (`\chemfig` vector-drawn benzene rings, aromatic rings, TNT, toluene, substituents).
- **Excellent Memory Efficiency**: A 16 KB sample document (covering most styles) loads and scrolls in ~60–70 MB on an iPhone 14 Pro.
- **Fluid AI Streaming**: Handles random-length chunks with a peak memory of ~140 MB, dropping back to ~70 MB once streaming finishes; stays around ~40 MB in real multi-turn AI conversations.
- **20 Bundled…
