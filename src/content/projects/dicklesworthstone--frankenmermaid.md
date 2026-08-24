---
repo: "Dicklesworthstone/frankenmermaid"
name: "frankenmermaid"
description: "Rust-first Mermaid-compatible diagram engine with smarter parsing, deterministic layouts, and high-quality output across CLI, SVG, terminal, and WASM targets"
readmeQualityOk: true
url: "https://github.com/Dicklesworthstone/frankenmermaid"
language: "HTML"
languages: ["HTML"]
languagePcts: [96]
topics: ["cli", "diagrams", "mermaid", "rust", "wasm"]
stars: 24
forks: 6
openIssues: 0
closedIssues: 9
watchers: 0
contributors: 3
recentReleases: 1
createdAt: "2026-02-11T18:35:24Z"
lastCommitAt: "2026-08-24T04:21:19Z"
lastReleaseAt: "2026-07-11T16:34:03Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 49
maintainers: ["Dicklesworthstone"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1155643809/7887f859-fae0-40b2-b135-5412cc26845d"
---

# frankenmermaid

**A Rust-first, Mermaid-compatible diagram engine with intent-aware parsing, 15 layout algorithms, and SVG / terminal / Canvas2D / WASM rendering from a single intermediate representation.**

**Live Demo:** <https://dicklesworthstone.github.io/frankenmermaid/>
*80+ interactive examples, live editor, presenter mode, style studio, diagnostics panel, and determinism checker.*

```bash
curl -fsSL "https://raw.githubusercontent.com/Dicklesworthstone/frankenmermaid/main/install.sh" | bash
```

</div>

---

## mermaid-js fails to render the certified large-graph corpus from 2,000 nodes upward

`mermaid-js 11.15.0` raises `RangeError: Maximum call stack size exceeded` on all seven pinned
2,000–10,000-node architecture, flowchart, and database-schema workloads. frankenmermaid renders
all seven.

| Surface | Status | Evidence |
|---------|--------|----------|
| CLI detect command | Implemented | 2 evidence refs |
| CLI parse command with IR JSON evidence | Implemented | 1 evidence refs |
| CLI SVG rendering | Implemented | 1 evidence refs |
| CLI terminal rendering | Implemented | 1 evidence refs |
| CLI validate command with structured diagnostics | Implemented | 1…
