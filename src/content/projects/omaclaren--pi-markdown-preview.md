---
repo: "omaclaren/pi-markdown-preview"
name: "pi-markdown-preview"
description: "Rendered markdown + LaTeX preview for pi"
readmeQualityOk: true
url: "https://github.com/omaclaren/pi-markdown-preview"
language: "JavaScript"
languages: ["JavaScript", "TypeScript"]
languagePcts: [56, 42]
stars: 125
forks: 18
openIssues: 1
closedIssues: 5
watchers: 0
contributors: 4
recentReleases: 0
createdAt: "2026-02-18T02:02:59Z"
lastCommitAt: "2026-09-16T08:47:25Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 90
undervaluedScore: 32
maintainers: ["omaclaren", "ryan-reynoldss", "rtecco"]
openGraphImageUrl: "https://opengraph.githubassets.com/f3c64933eadf4a4669a4fcfd00084598d475fded372d97824704358a6231e87f/omaclaren/pi-markdown-preview"
---

# pi-markdown-preview

Preview assistant responses and local Markdown, LaTeX, code, diff, and other text-based files from [pi](https://pi.dev) in the terminal, browser, or as PDF, with math rendering, syntax highlighting, Mermaid, and theme-aware styling.

## Screenshots

Preview adapts to your pi theme. Examples with a custom theme and the built-in defaults:

**Terminal preview (custom theme):**

**Terminal preview (default dark):**

**Terminal preview (default light):**

**Browser preview (default dark and light):**

| Default dark | Default light |
|:--:|:--:|
|  |  |

## Features

- **Terminal preview (default)** — renders markdown as PNG images displayed inline (Kitty, iTerm2, Ghostty, WezTerm). Long responses are split across navigable pages at block boundaries when possible, with a fixed-height fallback for oversized content.
- **Browser preview** — opens rendered HTML in your default browser as a single continuous scrollable document, with optional completion-level auto-refresh and response navigation via `--watch` (`-w`)
- **PDF export** — exports markdown to PDF via pandoc + LaTeX and opens it in your default PDF viewer
- **LLM-callable artifact export** — lets pi render…
