---
repo: "Verilean/sparkle"
name: "sparkle"
description: "A type-safe, formally verifiable HDL compiler in Lean 4. Inspired by Clash, built for high-assurance hardware synthesis."
readmeQualityOk: true
url: "https://github.com/Verilean/sparkle"
language: "Lean"
languages: ["Lean"]
languagePcts: [89]
topics: ["formal-verification", "hardware-synthesis", "hdl", "lean4", "risc-v"]
stars: 188
forks: 21
openIssues: 6
closedIssues: 25
watchers: 4
contributors: 7
recentReleases: 0
createdAt: "2026-01-16T00:52:35Z"
lastCommitAt: "2026-11-26T23:37:56Z"
lastReleaseAt: "2026-08-28T02:12:00Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 89
undervaluedScore: 34
maintainers: ["junjihashimoto", "menik1126", "plex1"]
openGraphImageUrl: "https://opengraph.githubassets.com/3dce5ba3fe699c213ca1528cbe19b0371b862cf78aa7848ca48b9cdccb398592/Verilean/sparkle"
---

# Sparkle HDL

**Write hardware in Lean 4. Prove it correct. Generate Verilog.**

A type-safe hardware description language that brings dependent types and
theorem proving to hardware design.

**Live docs & benchmarks:** the project publishes three hosted pages at
[verilean.github.io/sparkle](https://verilean.github.io/sparkle/):

- 📘 [**Tutorial (JupyterLite)**](https://verilean.github.io/sparkle/tutorial/) —
  the multi-chapter beginner course, runnable in-browser via xeus-lean.
  *(Known issue: some environments fail to boot the Lean kernel or load Sparkle;
  when that happens, read the rendered notebooks under
  [`docs/tutorial/Notebooks/`](https://github.com/Verilean/sparkle/blob/HEAD/docs/tutorial/Notebooks/) or use the
  Docker path in [Quick Start](#quick-start) below.)*
- 🔎 [**API reference (doc-gen4)**](https://verilean.github.io/sparkle/api/) —
  fully cross-linked documentation for every public definition, generated
  from the source with `lake build Sparkle:docs`.
