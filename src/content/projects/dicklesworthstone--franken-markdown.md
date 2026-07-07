---
repo: "Dicklesworthstone/franken_markdown"
name: "franken_markdown"
description: "Pure-Rust, dependency-lean, ultra-fast Markdown -> beautiful all-in-one HTML & tiny optimized PDF (library + single-binary CLI: fmd)"
readmeQualityOk: true
url: "https://github.com/Dicklesworthstone/franken_markdown"
language: "HTML"
languages: ["HTML"]
languagePcts: [88]
stars: 16
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 2
createdAt: "2026-06-27T02:12:28Z"
lastCommitAt: "2026-07-07T06:37:52Z"
lastReleaseAt: "2026-07-03T15:16:09Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 44
maintainers: ["Dicklesworthstone"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1281851258/67bdbb74-f8c7-4ede-9cf5-90c71c3a3c95"
---

# franken_markdown

**A clean-room Rust renderer and `fmd` CLI that turns Markdown into
self-contained HTML, compact tagged PDF, and browser/WASM output from one
auditable core.**

```bash
cargo install franken_markdown
# or: curl -fsSL https://raw.githubusercontent.com/Dicklesworthstone/franken_markdown/main/install.sh | bash
```

</div>

> **Current status.** `0.2.0` is published on crates.io, and the `v0.2.0`
> GitHub release ships smoke-tested `fmd` archives for Linux x86_64, macOS
> Intel, macOS Apple Silicon, and Windows x86_64. `main` now documents the
> current renderer: shared HTML/PDF syntax highlighting, measured PDF table
> allocation, ASCII and Mermaid diagram fitting, vector SVG/frankenmermaid
> drawing in PDF, staged native writes, opt-in Asupersync batch rendering,
> browser/WASM package sources, and several measured scalar hot-path
> optimizations. The WASM package is built and checked in CI, but is not yet
> published to npm. SIMD and deeper pagination remain roadmap work.

## Contents

- [TL;DR](#tldr)
- [Quick Example](#quick-example)
- [Design Philosophy](#design-philosophy)
- [Performance And CPU Strategy](#performance-and-cpu-strategy)
-…
