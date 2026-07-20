---
repo: "AshutoshMahala/zigraph"
name: "zigraph"
description: "Zero-dependency graph layout engine for Zig. Visualize DAGs in the terminal (Unicode/ANSI), SVG, or JSON."
readmeQualityOk: true
url: "https://github.com/AshutoshMahala/zigraph"
language: "Zig"
languages: ["Zig"]
languagePcts: [98]
stars: 17
forks: 2
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-01-25T07:55:56Z"
lastCommitAt: "2026-07-20T06:33:54Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 85
undervaluedScore: 16
maintainers: ["AshutoshMahala", "passchaos"]
openGraphImageUrl: "https://opengraph.githubassets.com/6f4c2620a6366da565e1c2c9e9dafdd5c3f640c941dd66209316fd1cb1fe1004/AshutoshMahala/zigraph"
---

# zigraph

**Zero-dependency graph layout engine for Zig.** Visualize DAGs, dependency trees, and flow graphs in terminals, SVG, or JSON.

<table>
<tr>
<td><strong>Terminal (Unicode)</strong></td>
<td><strong>SVG (Debug)</strong></td>
<td><strong>SVG (Splines)</strong></td>
<td><strong>SVG (Labels on Path)</strong></td>
</tr>
<tr>
<td>

</td>
<td>

</td>
<td>

</td>
<td>

</td>
</tr>
</table>

## Features

- **Zero dependencies** — Pure Zig, no libc required
- **Two layout engines** — Sugiyama (hierarchical DAGs) and Fruchterman-Reingold (force-directed)
- **Subgraphs (clusters)** — Hierarchical grouping with visual boundaries, nested subgraphs
- **Cycle breaking** — Automatic back-edge detection for cyclic graphs (DFS-based)
- **Directed & undirected edges** — `addDiEdge` / `addUnDiEdge` with per-edge arrow control
- **Three renderers** — Unicode (terminal), SVG (with splines), JSON (for tooling)
- **Edge labels** — Annotate edges with text, rendered in all output formats
- **Pluggable algorithms** — Bring your own crossing reduction, positioning, routing
- **Embedded-first** — Explicit allocators, ~40KB WASM target

## Installation

Run this command to add zigraph to your…
