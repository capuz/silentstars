---
repo: "djust-org/djust"
name: "djust"
description: "Phoenix LiveView-style reactive server-side rendering for Django with Rust-powered performance"
url: "https://github.com/djust-org/djust"
homepage: "https://djust.org"
language: "Python"
languages: ["Python"]
languagePcts: [68]
topics: ["django", "htmx-alternative", "liveview", "pwa", "python", "reactive", "real-time", "rust", "server-side-rendering", "websocket"]
stars: 75
forks: 5
openIssues: 6
closedIssues: 887
watchers: 2
contributors: 4
recentReleases: 0
createdAt: "2026-01-16T14:49:01Z"
lastCommitAt: "2026-06-25T02:08:42Z"
lastReleaseAt: "2026-01-29T02:28:46Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 100
undervaluedScore: 37
maintainers: ["johnrtipton"]
openGraphImageUrl: "https://opengraph.githubassets.com/a6dbff366e7b93d04594f17dc3a07fd5b9ce20fd65da92e6b6c96d78febcc94e/djust-org/djust"
discussionCount: 3
---

</p>

djust brings Phoenix LiveView-style reactive components to Django. You write
server-side Python; the client updates automatically over a WebSocket. There is
no JavaScript to write, no bundler, and no build step in your project.

**[djust.org](https://djust.org)** · **[Documentation](https://docs.djust.org)** · **[Quick Start](https://docs.djust.org/getting-started/)** · **[Examples](https://djust.org/examples/)**

## Features

- **Fast** — Rust-powered template engine and virtual DOM diffing (10–100x faster than plain Django rendering; see [Performance](#performance))
- **Reactive components** — Phoenix LiveView-style server-side reactivity
- **Django compatible** — works with existing Django templates and components
- **No build step** — ~55 KB gzipped client JavaScript, no bundling required
- **WebSocket updates** — real-time DOM patches over WebSocket, with HTTP fallback
- **Minimal payloads** — diffing sends only what changed
- **Rust core** — performance-critical paths (templates, VDOM, parsing) are written in Rust
- **Debug panel** — interactive debugging with event history and VDOM inspection
- **Lazy hydration** — defer WebSocket connections for below-the-fold…
