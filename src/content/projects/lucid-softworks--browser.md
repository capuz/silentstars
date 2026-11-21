---
repo: "lucid-softworks/browser"
name: "browser"
description: "A web browser written from scratch — a platform-agnostic Rust engine (networking, HTML/CSS parsing, DOM, style, layout, paint) with a thin native app shell per OS."
readmeQualityOk: true
url: "https://github.com/lucid-softworks/browser"
language: "Rust"
languages: ["Rust", "JavaScript"]
languagePcts: [76, 20]
topics: ["appkit", "browser", "browser-engine", "css", "dom", "from-scratch", "html-parser", "layout-engine", "rendering-engine", "rust"]
stars: 133
forks: 8
openIssues: 1
closedIssues: 52
watchers: 1
contributors: 9
recentReleases: 0
createdAt: "2026-06-21T16:02:07Z"
lastCommitAt: "2026-11-21T11:36:30Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors"]
healthScore: 92
undervaluedScore: 28
maintainers: ["ImLunaHey", "danperks", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/f93f2b7a0006a1c51856175fe8616338aad2c5f48d32493ae00957071e4affb8/lucid-softworks/browser"
---

# browser

A web browser written from scratch.

- **Rust** is "the inners": the actual engine — networking, parsing, DOM, style,
  layout, and paint. The engine is **platform-agnostic** and produces an RGBA framebuffer.
- The **desktop app** (window, URL bar, tabs, event loop) is a shared **Rust / Rune** shell
  for **Windows, Linux, and macOS**. The original **Swift / AppKit** shell remains available
  on macOS. Both use the same Rust engine and Lumen JavaScript runtime. The shared desktop
  app bundles Inter so page text works without a standard system-font installation.

## Guiding constraint

The **eventual goal is to rewrite everything in Rust**, including the parts we currently
reuse. So every reused crate is walled off behind *our own* module boundary, and swapping
it for a hand-written implementation later is a localized change, not a refactor:
