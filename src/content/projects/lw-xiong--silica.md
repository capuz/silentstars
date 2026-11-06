---
repo: "lw-xiong/Silica"
name: "Silica"
description: "Native Rust/GPUI knowledge base - migrateable from Obsidian"
readmeQualityOk: true
url: "https://github.com/lw-xiong/Silica"
language: "Rust"
languages: ["Rust"]
languagePcts: [82]
stars: 19
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-10-31T11:55:02Z"
lastCommitAt: "2026-11-06T11:23:29Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 70
undervaluedScore: 38
maintainers: ["lw-xiong"]
openGraphImageUrl: "https://opengraph.githubassets.com/16e9fdbb5ba0c8c13e3bd2601be1d4d495017d843cc0b08e889fc55f3b9d8502/lw-xiong/Silica"
---

Silica is a native desktop knowledge base written in Rust on GPUI. It opens an Obsidian vault exactly as it sits on disk: the same folder, the same `.obsidian` configuration, the same Markdown dialect, the same `.canvas` and `.base` files. There is no import step, no conversion, and no second copy of anything. The vault folder is the only source of truth. Silica is an independent, clean-room implementation and is not affiliated with Obsidian.

## Status

Reader and writer are done. All five development phases have landed, including phase 5 (plugins). `silica-markdown` parses CommonMark — all 652 spec examples — plus the GitHub extensions Obsidian uses, into a single spanned tree with byte spans, and renders reading-view HTML that matches Obsidian on 1007 of 1009 corpus notes.

The app opens a real vault in a three-pane shell: Files, reading view, and side panes for Backlinks, Outgoing links, Tags, All properties, and Outline. Search supports grouping, sorting, copying results, and vault-wide search & replace. The quick switcher, graph, command palette, and a Settings modal that writes are all present. Notes open in Live Preview or Source mode with find and replace, multiple…
