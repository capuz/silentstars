---
repo: "jinghaihan/vue-stream-markdown"
name: "vue-stream-markdown"
description: "Streaming markdown output, Useful for text streams like LLM outputs."
readmeQualityOk: true
url: "https://github.com/jinghaihan/vue-stream-markdown"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [79]
topics: ["customizable", "katex", "markdown", "mermaid", "stream", "vue", "latex"]
stars: 228
forks: 12
openIssues: 1
closedIssues: 24
watchers: 1
contributors: 10
recentReleases: 0
createdAt: "2025-11-25T06:13:27Z"
lastCommitAt: "2026-08-30T09:24:16Z"
lastReleaseAt: "2025-12-17T09:53:01Z"
status: "thriving"
tags: ["solo_builder", "funded"]
healthScore: 96
undervaluedScore: 33
maintainers: ["jinghaihan", "LZHD", "feliperaul"]
openGraphImageUrl: "https://opengraph.githubassets.com/c399ed3ad9d53a026f395c85770d47169d4fa008725b9d27e9402215bf64ed51/jinghaihan/vue-stream-markdown"
fundingLinks: ["GITHUB:https://github.com/jinghaihan"]
---

# vue-stream-markdown

A markdown renderer specially optimized for streaming scenarios, inspired by [streamdown](https://streamdown.ai/). Designed to achieve smoother streaming rendering through syntax inference and highly customizable rendering elements.

</p>

</p>

## Features

- **Streaming-optimized rendering** - Incomplete node completion with loading states for images, tables, and code blocks to prevent visual jitter
- **Syntax highlighting** - Highlight code with Shiki through the independently installable `@stream-markdown/code` extension
- **Diagram rendering** - Combine Mermaid and Beautiful Mermaid renderers with deterministic fallback
- **Mathematical typesetting** - Parse mathematical notation with comark and render it with KaTeX
- **Native HTML and custom tags** - Render safe HTML and map custom tags directly to Vue components
- **Interactive controls** - Copy and download buttons for images, tables, and code blocks
- **Fully customizable** - Replace any comark/native tag or UI component with your own Vue components
- **Theme-aware scoped styles** - Scoped styles under `.stream-markdown` with semantic `data-stream-markdown` attributes, following…
