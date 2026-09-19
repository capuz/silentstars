---
repo: "Dicklesworthstone/frankentui"
name: "frankentui"
description: "Minimal, high-performance terminal UI kernel with diff-based rendering, inline mode, and RAII terminal cleanup"
readmeQualityOk: true
url: "https://github.com/Dicklesworthstone/frankentui"
language: "Rust"
languages: ["Rust", "C"]
languagePcts: [76, 20]
topics: ["rendering", "rust", "terminal", "tui", "ui-framework"]
stars: 280
forks: 29
openIssues: 0
closedIssues: 40
watchers: 1
contributors: 3
recentReleases: 4
createdAt: "2026-01-31T19:21:45Z"
lastCommitAt: "2026-09-19T01:38:17Z"
lastReleaseAt: "2026-09-14T02:36:49Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 100
undervaluedScore: 34
maintainers: ["Dicklesworthstone"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1146846864/533be7a1-3a15-4b0b-9469-6f8185e15aa4"
---

# FrankenTUI (ftui)

```
███████╗██████╗  █████╗ ███╗   ██╗██╗  ██╗███████╗███╗   ██╗████████╗██╗   ██╗██╗
██╔════╝██╔══██╗██╔══██╗████╗  ██║██║ ██╔╝██╔════╝████╗  ██║╚══██╔══╝██║   ██║██║
█████╗  ██████╔╝███████║██╔██╗ ██║█████╔╝ █████╗  ██╔██╗ ██║   ██║   ██║   ██║██║
██╔══╝  ██╔══██╗██╔══██║██║╚██╗██║██╔═██╗ ██╔══╝  ██║╚██╗██║   ██║   ██║   ██║██║
██║     ██║  ██║██║  ██║██║ ╚████║██║  ██╗███████╗██║ ╚████║   ██║   ╚██████╔╝██║
╚═╝     ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═══╝╚═╝  ╚═╝╚══════╝╚═╝  ╚═══╝   ╚═╝    ╚═════╝ ╚═╝
```

</div>

High‑performance terminal UI kernel -- 850K+ lines of Rust across 20 crates, 80+ widget/stateful-widget implementations, 45 interactive demo screens, a Bayesian intelligence layer, resizable pane workspaces, and in-tree web/WASM backends -- focused on correctness, determinism, and clean architecture.

## Try It in Your Browser

All 45 screens run as WASM at **[frankentui.com/web](https://frankentui.com/web)** — no install, no toolchain. It renders through WebGPU where that exists and falls back to canvas2d, so Chrome, Edge, Safari and Firefox all work.

Phones too: swipe in from either edge to change screens, and the bar along the bottom carries a button for…
