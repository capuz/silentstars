---
repo: "dataviz-rs/dataviz"
name: "dataviz"
description: "Fast pure-Rust plotting: 120+ chart types incl. 3D (molecules, DNA, isosurfaces), genomics, trading and ML charts, live windows, animations, maps, HTML/PNG/SVG/PDF, WebAssembly, and a Claude Code plugin. Faster and lighter than plotters."
readmeQualityOk: true
url: "https://github.com/dataviz-rs/dataviz"
homepage: "https://docs.rs/dataviz"
language: "Rust"
languages: ["Rust"]
languagePcts: [97]
topics: ["charts", "data-visualization", "finance", "graphs", "maps", "matplotlib-alternative", "plotly-alternative", "plotting", "real-time", "rust"]
stars: 9
forks: 2
openIssues: 0
closedIssues: 5
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2025-01-03T09:16:18Z"
lastCommitAt: "2026-11-15T08:19:04Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 100
undervaluedScore: 75
maintainers: ["sameteraslan"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/911545640/45927e26-b2d1-4cb5-8b3b-f64c3034c8b8"
---

# **DataViz** 🚀

**Fast, pure-Rust plotting: 120+ chart types, interactive windows, live
data, animations, maps, math and every language — with the least CPU and
memory of the Rust plotting libraries.**

**[Guide and chart catalog](https://dataviz-rs.github.io/dataviz/)** ·
**[Live demo in the browser](https://dataviz-rs.github.io/dataviz/demo/)** ·
[API docs](https://docs.rs/dataviz) · [Examples](https://github.com/dataviz-rs/dataviz-examples)

## Why dataviz

- **Fast and lean.** Its own rasterizer draws straight into the output
  buffer: a 10-million-point line renders in about 0.1 s with a few MB of
  extra memory, a live chart redraws in 1–2 ms. 8–50× faster than
  matplotlib, and faster and lighter than plotters, ruviz, kuva and
  charts-rs in nearly every measurement ([numbers below](#performance)).
  Optional multi-core and GPU backends.
- **Everything in one crate.** 120+ chart types — lines, bars, statistics,
  heatmaps, contours, 3D, maps, sankey, networks — plus ready-made charts
  for **data scientists** (ROC/PR curves, confusion matrices, regression
  bands, density contours, dendrograms), **biologists and clinicians**
  (DNA sequence logos, gene tracks, Manhattan,…
