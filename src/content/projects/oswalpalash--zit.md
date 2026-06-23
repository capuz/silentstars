---
repo: "oswalpalash/zit"
name: "zit"
description: "zit - Zig TUI Library"
url: "https://github.com/oswalpalash/zit"
language: "Zig"
languages: ["Zig"]
languagePcts: [92]
topics: ["zig", "zig-package", "tui", "zig-build", "zig-language", "zig-library", "ziglang"]
stars: 10
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2025-04-05T23:47:38Z"
lastCommitAt: "2026-06-23T06:42:08Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 90
undervaluedScore: 64
maintainers: ["oswalpalash"]
openGraphImageUrl: "https://opengraph.githubassets.com/e564b2fcf5695998ffb4ae41d1bbbf5baf85891d381d696b466e7a0fa9fc4c7e/oswalpalash/zit"
---

# Zit – Zig-first Terminal UI Toolkit

![Zig version](https://img.shields.io/badge/zig-0.16.x-f97316)

Zit helps you ship terminal dashboards, editors, and workflows with the same confidence you expect from GUI toolkits: a rich widget catalog, focus and typeahead helpers, fast rendering, and accessibility baked in. Zero dependencies, test coverage, and benchmarks included. The project is governed by four public-facing tenets: efficiency, reliability, stability, and features, in that order.

## Why Zit
- 30+ production-ready widgets (blocks/paragraphs, charts, tables with typeahead, context menus, popups, file browser, bracketed paste-aware inputs).
- Batteries-included UX: mouse + drag-and-drop payloads, focus rings, typeahead search on lists/tables/file browser, accessibility roles/announcements.
- Automatic terminal resizing: bind an `Application` to your input handler and renderer/reflow manager once; resize events update buffers and layout from the app loop.
- Thoughtful theming and motion: light/dark/high-contrast palettes, per-widget `setTheme`, animator with easing/yoyo, timers for periodic work.
- Works the Zig way: explicit `init`/`deinit`, allocator-friendly builders,…
