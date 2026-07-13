---
repo: "oswalpalash/zit"
name: "zit"
description: "zit - Zig TUI Library"
readmeQualityOk: true
url: "https://github.com/oswalpalash/zit"
language: "Zig"
languages: ["Zig"]
languagePcts: [91]
topics: ["zig", "zig-package", "tui", "zig-build", "zig-language", "zig-library", "ziglang"]
stars: 11
forks: 1
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2025-04-05T23:47:38Z"
lastCommitAt: "2026-07-13T06:38:19Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 89
undervaluedScore: 65
maintainers: ["oswalpalash"]
openGraphImageUrl: "https://opengraph.githubassets.com/babe8f29a1576de58ecc22aac9eab56b7f673cae5f68fc761ca1cb1b13d0b93d/oswalpalash/zit"
---

# Zit – Zig-first Terminal UI Toolkit

Zit helps you ship terminal dashboards, editors, and workflows with the same confidence you expect from GUI toolkits: a rich widget catalog, focus and typeahead helpers, fast rendering, and accessibility baked in. Zero dependencies, test coverage, and benchmarks included. The project is governed by four public-facing tenets: efficiency, reliability, stability, and features, in that order.

## Why Zit
- 30+ production-ready widgets (blocks/paragraphs, charts, tables with typeahead, context menus, popups, file browser, bracketed paste-aware inputs).
- Batteries-included UX: mouse + drag-and-drop payloads, focus rings, typeahead search on lists/tables/file browser, accessibility roles/announcements.
- Automatic terminal resizing: bind an `Application` to your input handler and renderer/reflow manager once; resize events update buffers and layout from the app loop.
- Thoughtful theming and motion: light/dark/high-contrast palettes, per-widget `setTheme`, animator with easing/yoyo, timers for periodic work.
- Works the Zig way: explicit `init`/`deinit`, allocator-friendly builders, zero global state, tested layouts + render paths, rendering…
