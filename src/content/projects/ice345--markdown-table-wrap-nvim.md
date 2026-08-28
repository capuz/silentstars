---
repo: "ice345/markdown-table-wrap.nvim"
name: "markdown-table-wrap.nvim"
description: "Optimized the `render-markdown` plugin to address line-breaking issues within table cells."
readmeQualityOk: true
url: "https://github.com/ice345/markdown-table-wrap.nvim"
language: "Lua"
languages: ["Lua"]
languagePcts: [100]
stars: 30
forks: 3
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 2
recentReleases: 7
createdAt: "2026-05-19T06:07:00Z"
lastCommitAt: "2026-08-28T14:23:03Z"
lastReleaseAt: "2026-08-01T08:41:14Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 94
undervaluedScore: 42
maintainers: ["ice345", "ken85illo"]
openGraphImageUrl: "https://opengraph.githubassets.com/93dd3c0982d962cc0a6bc0bccd4147fc751b3d3d8d9a803aa95a47b956052665/ice345/markdown-table-wrap.nvim"
---

# markdown-table-wrap.nvim

A Neovim/LazyVim plugin for rendering Markdown pipe tables with wrapped cell content.

Automatic rendering never modifies the Markdown source buffer and does not fork or patch `render-markdown.nvim`. Explicit Source-aware cell mappings can edit one selected cell by design. The plugin provides three display modes: a stable full-document reader, a source-position-preserving inline overlay, and a floating preview.

## Why

`render-markdown.nvim` makes normal Markdown tables pleasant to read, but very long cell content can still overflow the terminal width. Neovim's normal line wrapping breaks the whole source line, so table borders and columns no longer line up visually.

`markdown-table-wrap.nvim` parses pipe tables, calculates display widths with `vim.api.nvim_strwidth`, allocates columns to fit the current text area, and wraps long content inside each cell.

For documents that use native `wrap`, reader mode is the most robust option. It mirrors the current Markdown document into a protected scratch buffer and replaces every supported top-level pipe table with real Unicode buffer lines. Ordinary prose can still soft-wrap, while long source rows and URLs…
