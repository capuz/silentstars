---
repo: "Dicklesworthstone/frankenmermaid"
name: "frankenmermaid"
description: "Next-gen Rust diagram engine: 32 Mermaid-compatible diagram types, 18 layout algorithms plus Auto, intent-aware error recovery, deterministic output, and SVG/Canvas2D/terminal/WASM renderers from one shared IR."
readmeQualityOk: true
url: "https://github.com/Dicklesworthstone/frankenmermaid"
homepage: "https://frankenmermaid.pages.dev/"
language: "HTML"
languages: ["HTML"]
languagePcts: [96]
topics: ["cli", "diagrams", "mermaid", "rust", "wasm"]
stars: 60
forks: 12
openIssues: 4
closedIssues: 16
watchers: 0
contributors: 3
recentReleases: 3
createdAt: "2026-02-11T18:35:24Z"
lastCommitAt: "2026-11-09T04:34:24Z"
lastReleaseAt: "2026-11-07T18:30:51Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 86
undervaluedScore: 50
maintainers: ["Dicklesworthstone"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1155643809/7887f859-fae0-40b2-b135-5412cc26845d"
---

# frankenmermaid

**A Rust-first, Mermaid-compatible diagram engine with intent-aware parsing, 18 layout algorithms plus Auto, and SVG / terminal / Canvas2D / WASM rendering from a single intermediate representation.**

**Live Showcase:** <https://frankenmermaid.com/> (or <https://frankenmermaid.pages.dev/>)
*80+ interactive examples, live editor, presenter mode, style studio, diagnostics panel, and determinism checker.*

```bash
curl -fsSL "https://raw.githubusercontent.com/Dicklesworthstone/frankenmermaid/main/install.sh" | bash
```

---

## mermaid-js fails to render the certified large-graph corpus from 2,000 nodes upward

`mermaid-js 11.15.0` raises `RangeError: Maximum call stack size exceeded` on all seven pinned
2,000–10,000-node architecture, flowchart, and database-schema workloads. frankenmermaid renders
all seven.

| Surface | Status | Evidence |
|---------|--------|----------|
| WASM API renders deck manifests | Implemented | 2 evidence refs |
| CLI deck command emitting a standalone HTML presentation | Implemented | 2 evidence refs |
| CLI detect command | Implemented | 2 evidence refs |
| CLI parse command with IR JSON evidence | Implemented | 1 evidence refs |
|…
