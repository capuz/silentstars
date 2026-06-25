---
repo: "mlm-games/repose"
name: "repose"
description: "Native Compose-like Rust UI for mobile, desktop and web, via wgpu shaders and taffy. (is not webview based)"
url: "https://github.com/mlm-games/repose"
homepage: "https://mlm-games.github.io/repose/"
language: "Rust"
languages: ["Rust"]
languagePcts: [98]
stars: 7
forks: 1
openIssues: 2
closedIssues: 8
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2025-10-01T11:50:53Z"
lastCommitAt: "2026-06-25T01:32:25Z"
lastReleaseAt: "2026-01-22T16:09:34Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 86
undervaluedScore: 66
maintainers: ["mlm-games"]
openGraphImageUrl: "https://opengraph.githubassets.com/955c4bc433de9351a1ff88803a35f43c08e40e28bd9f0da57d292630fbf55515/mlm-games/repose"
fundingLinks: ["GITHUB:https://github.com/mlm-games"]
---

# Repose

A small, composable UI toolkit in Rust with a Compose-like API, cross-platform runners (desktop/Android/web), and a WGPU renderer.

> **Status: pre-1.0**. API (mostly minor) might change. A few working apps exist, and there shouldn't be any major issues.

Useful for simple apps (though aiming for bigger ones in the future), and for developers who want a Compose-like experience in Rust without the overhead of embedding a web view or maintaining separate native UI codebases.

## Features

- **Declarative UI** - Compose-like API with `View` functions, reactive `Signal`s, and `remember` for state
- **Cross-platform** - Desktop (winit), Android, and WebAssembly
- **Layout** - Flexbox and Grid via Taffy
- **Rendering** - Rectangles, borders, rounded clips, ellipses, text, images via WGPU
- **Text** - Shaping, metrics, and wrapping via cosmic-text with caching
- **Input** - Pointer events, scrolling, focus traversal, IME support
- **Widgets** - Text, Button, TextField, Checkbox, Switch, Slider, ScrollArea, LazyColumn
- **Navigation** - Typed stack navigation with transitions (`repose-navigation`)
- **Accessibility** - AccessKit integration on desktop, semantic node pipeline
-…
