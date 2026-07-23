---
repo: "aydiler/md-viewer"
name: "md-viewer"
description: "Fast, lightweight markdown viewer for Linux with tabs, file explorer, and live reload"
readmeQualityOk: true
url: "https://github.com/aydiler/md-viewer"
language: "Rust"
languages: ["Rust"]
languagePcts: [97]
topics: ["desktop-app", "egui", "file-explorer", "linux", "markdown", "markdown-viewer", "rust", "syntax-highlighting", "wayland", "x11"]
stars: 34
forks: 6
openIssues: 0
closedIssues: 17
watchers: 1
contributors: 4
recentReleases: 8
createdAt: "2026-01-21T01:32:05Z"
lastCommitAt: "2026-07-23T06:16:11Z"
lastReleaseAt: "2026-05-23T22:38:23Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 98
undervaluedScore: 48
maintainers: ["aydiler", "aki1ro", "MCXCC303"]
openGraphImageUrl: "https://opengraph.githubassets.com/edeb0fb34d19ba4a6e812646a686e850b775ddf0ad7d9a3e77630e21724dead0/aydiler/md-viewer"
---

# md-viewer

A fast, lightweight markdown viewer for Linux built with Rust and egui. Designed for distraction-free reading with excellent typography, syntax highlighting, and LaTeX math — from quick notes to scientific papers.

## Features

### Rendering
- **GitHub Flavored Markdown** - Full GFM support including tables, task lists, footnotes, and recognized emoji shortcodes such as `:pushpin:`
- **LaTeX Math** - Inline `$…$` and display `$$…$$` equations rendered via typst + mitex — fractions, sub/superscripts, `\boxed`, accents, matrices, and more — sized and baseline-aligned to the surrounding text
- **Syntax Highlighting** - 200+ languages via syntect with beautiful color schemes
- **Mermaid Diagrams** - Flowcharts, sequence diagrams, and more rendered natively via [merman](https://github.com/Latias94/merman) (click to enlarge)
- **Resizable Table Columns** - Drag column dividers to fit content (new in v0.1.5)
- **HTML Tables** - Rendered as formatted grids with proper cell padding
- **Images & SVG** - Embedded and remote image support (PNG, JPEG, GIF, SVG, HTTP URLs)
- **Unicode Support** - System font fallbacks (Noto, DejaVu) for emojis, CJK, and non-Latin scripts
- **60 FPS…
