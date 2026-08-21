---
repo: "JeelGajera/jspdf-md-renderer"
name: "jspdf-md-renderer"
description: "A jsPDF utility to render Markdown directly into formatted PDFs with custom designs."
readmeQualityOk: true
url: "https://github.com/JeelGajera/jspdf-md-renderer"
homepage: "https://jeelgajera.github.io/jspdf-md-renderer/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [92]
topics: ["jspdf", "markdown", "renderer", "jspdf-md", "javascript", "pdf-generation", "md-to-pdf"]
stars: 22
forks: 4
openIssues: 0
closedIssues: 16
watchers: 2
contributors: 6
recentReleases: 0
createdAt: "2024-12-11T10:43:43Z"
lastCommitAt: "2026-08-21T04:12:11Z"
lastReleaseAt: "2025-04-12T07:10:36Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 92
undervaluedScore: 62
maintainers: ["JeelGajera", "claude", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/157b44b315047fc8c7a8f4f3946eccb889e42dc5a7d8e0820cb7d20fd025f86e/JeelGajera/jspdf-md-renderer"
discussionCount: 1
---

# jsPDF Markdown Renderer

A utility to render Markdown directly into formatted PDFs using `jsPDF`.

## Highlights

- Rich markdown support (headings, lists, tables, images, code, blockquotes, links)
- Page geometry derived from margins — no manual content-area arithmetic
- Overridable block renderers, so you can draw any block yourself
- A render result reporting anything that could not be drawn
- Configurable typography, spacing, and block styling
- Header/footer and page-number support
- Safe inline layout and long-token wrapping
- Optional security enforcement for untrusted markdown

## Installation

`jspdf`, `jspdf-autotable` and `marked` are peer dependencies — the renderer
draws into a `jsPDF` document you construct, so it uses the copy your project
already has rather than bundling a second one.

```sh
npm install jspdf-md-renderer jspdf jspdf-autotable marked
```

| Peer | Supported |
| --- | --- |
| `jspdf` | `^2 \|\| ^3 \|\| ^4` |
| `jspdf-autotable` | `^3 \|\| ^4 \|\| ^5` |
| `marked` | `^18` |

`marked`'s range is deliberately narrow: its tokenizer output is this library's
layout input, and earlier majors emit different blank-line tokens that move
content vertically on…
