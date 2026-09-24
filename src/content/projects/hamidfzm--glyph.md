---
repo: "hamidfzm/glyph"
name: "glyph"
description: "A modern, cross-platform markdown viewer and editor with native styling, live preview, AI assistance, and offline-first."
readmeQualityOk: true
url: "https://github.com/hamidfzm/glyph"
homepage: "https://glyph-md.github.io/"
language: "TypeScript"
languages: ["TypeScript", "Rust"]
languagePcts: [73, 23]
topics: ["desktop-app", "linux-app", "macos-app", "markdown", "markdown-viewer", "windows-app", "cross-platform", "gfm", "react", "rust"]
stars: 30
forks: 3
openIssues: 72
closedIssues: 209
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2026-03-13T14:06:29Z"
lastCommitAt: "2026-09-24T08:41:42Z"
lastReleaseAt: "2026-05-18T23:56:08Z"
status: "thriving"
tags: ["hidden_gem", "funded", "under_pressure"]
healthScore: 94
undervaluedScore: 43
maintainers: ["hamidfzm", "dependabot[bot]", "github-actions[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1180878810/f273e7a4-82f1-402f-be38-920d000e2d04"
fundingLinks: ["CUSTOM:https://github.com/hamidfzm/glyph/blob/main/DONATE.md"]
discussionCount: 13
---

# Glyph

A modern, cross-platform markdown viewer and editor with platform-native styling.

Built with [Tauri v2](https://v2.tauri.app), React 19, and TypeScript.

## Demo

## Try It

The [`samples/`](https://github.com/hamidfzm/glyph/blob/HEAD/samples) directory is a tiny demo workspace. Open it as a folder (`Cmd/Ctrl+Shift+O`) to see every rendering feature plus working wikilinks. [`samples/README.md`](https://github.com/hamidfzm/glyph/blob/HEAD/samples/README.md) is the showcase document; the surrounding files exist so its `[[wikilinks]]` resolve.

## Features

### Markdown Rendering
- GitHub Flavored Markdown, alerts, footnotes, heading anchors, and emoji shortcodes
- Wikilinks and backlinks with hover preview and inline note embeds (`[[note]]`, `![[note]]`)
- Math (KaTeX), Mermaid and D2 diagrams, CSV/TSV tables, and syntax-highlighted code (6 themes)
- YAML frontmatter, sanitised inline HTML, and bidirectional (RTL) text
- Local and remote images with a zoomable lightbox, plus inline video and audio playback
- Per-syntax toggles in Settings → Markdown

### Editor
- Source, split, and live-preview modes per tab
- New untitled (in-memory) documents (`Cmd/Ctrl+N`), save with…
