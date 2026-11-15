---
repo: "lw-xiong/Silica"
name: "Silica"
description: "Native Rust/GPUI knowledge base - migrateable from Obsidian"
readmeQualityOk: true
url: "https://github.com/lw-xiong/Silica"
language: "Rust"
languages: ["Rust"]
languagePcts: [84]
stars: 27
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 2
createdAt: "2026-10-31T11:55:02Z"
lastCommitAt: "2026-11-15T11:19:25Z"
lastReleaseAt: "2026-11-08T11:20:57Z"
status: "newborn"
tags: ["hidden_gem"]
healthScore: 90
undervaluedScore: 40
maintainers: ["lw-xiong", "kishi160708"]
openGraphImageUrl: "https://opengraph.githubassets.com/91ddb6af787ca492955c4d03d91c46f3166dd6f38650382de2ae5ab65e5fb0b2/lw-xiong/Silica"
---

Silica is a native desktop knowledge base written in Rust on GPUI. It opens an Obsidian vault exactly as it sits on disk: the same `.obsidian` configuration, the same Markdown dialect, the same `.canvas` and `.base` files. Nothing is imported or converted, and the vault folder is the only source of truth. Silica is an independent, clean-room implementation and is not affiliated with Obsidian.

## Status

Reader and writer are substantially complete. All five development phases have landed, including phase 5 (plugins). `silica-markdown` parses CommonMark (all 652 spec examples) plus the GitHub extensions Obsidian uses into a single spanned tree with byte spans, and renders reading-view HTML that matches Obsidian on all 1,009 corpus notes.

The app opens a real vault in a three-pane shell: Files, reading view, and side panes for Backlinks, Outgoing links, Tags, All properties, Outline, and live Graph view. The reading view also lists a note's backlinks at its bottom (↗ per linking note, click to open), toggleable with `backlink:toggle-backlinks-in-document`. Search supports grouping, sorting, copying results, vault-wide search & replace, and term-index candidate pre-filtering (~10…
