---
repo: "taf2/mdvi"
name: "mdvi"
description: "cli based Markdown viewer"
readmeQualityOk: true
url: "https://github.com/taf2/mdvi"
language: "Rust"
languages: ["Rust"]
languagePcts: [100]
stars: 288
forks: 18
openIssues: 0
closedIssues: 2
watchers: 1
contributors: 2
recentReleases: 2
createdAt: "2026-02-10T17:44:54Z"
lastCommitAt: "2026-11-02T15:17:33Z"
lastReleaseAt: "2026-11-02T13:41:02Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 77
undervaluedScore: 21
maintainers: ["taf2", "tura-ai-agent"]
openGraphImageUrl: "https://opengraph.githubassets.com/af5cda742024abe569638bbe3774ae293b8f4ca601558524536acd4caa38202e/taf2/mdvi"
---

# mdvi

`mdvi` is a terminal markdown viewer with Vim-style navigation.

It renders markdown into a polished full-screen TUI with fast keyboard navigation, clear typography, and predictable behavior for large files.

## Features

- Full-screen terminal viewer (`crossterm` + `ratatui`)
- Vim-style navigation controls
- Visible cursor and `line:column` cursor position in the status bar
- High-quality markdown rendering via `pulldown-cmark`
- Word wrapping that keeps scrolling, search, selection, and inline images aligned
- Configurable content width with `--width` (for example, 72 or 80 terminal columns)
- Unicode-aware layout and cursor movement, including wide characters and emoji
- Support for:
  - headings
  - lists and task lists
  - blockquotes
  - inline markdown images (``) and HTML `<img ...>` tags
  - lazy image loading with immediate placeholder layout reservation
  - syntax-highlighted fenced code blocks and inline code
  - links, aligned tables with distinct headers, footnotes, emphasis/strong/strikethrough
- Configurable image backend via `--image-protocol` (`auto`, `symbols`, `halfblocks`, `sixel`, `kitty`, `iterm2`)
- SVG images, rasterized with `resvg`
- High-detail…
