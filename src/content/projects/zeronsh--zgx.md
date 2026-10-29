---
repo: "zeronsh/zgx"
name: "zgx"
description: "Retained Rust GUI framework with fine-grained updates for Linux and macOS"
readmeQualityOk: true
url: "https://github.com/zeronsh/zgx"
language: "Rust"
languages: ["Rust", "Luau"]
languagePcts: [68, 20]
stars: 5
forks: 6
openIssues: 0
closedIssues: 2
watchers: 0
contributors: 5
recentReleases: 6
createdAt: "2026-09-26T19:17:14Z"
lastCommitAt: "2026-10-29T05:50:54Z"
lastReleaseAt: "2026-10-28T18:06:59Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine", "fork_magnet"]
healthScore: 100
undervaluedScore: 81
maintainers: ["zeronsh[bot]", "wingleeio"]
openGraphImageUrl: "https://opengraph.githubassets.com/bfe00d96e0cb1731247912b2078def75c247c09531149e01db39ef4c323e0c44/zeronsh/zgx"
---

# zgx

zgx is a retained-mode GUI framework in Rust for macOS, Windows and Linux. Components mount once and fine-grained signals update only the nodes that depend on them, so an idle window does no work and a busy one repaints only what changed. Interfaces are written in Rust or in Luau scripts that hot reload without losing state. It is young (0.1, on crates.io) and its API still changes.

## What it has

- **Layout** as CSS's flexbox and grid do it, defaults included: children stretch across and shrink to fit (`min-width: auto`), grids, wrapping, percentages, absolute positioning, `display: contents`, right-to-left with logical `start`/`end` edges, and layouts that answer the room they have.
- **Text:** shaped rich text with font fallbacks, selectable documents (drag, double and triple press, copy as HTML), editors with undo, clipboard, spellchecking, IME (Japanese, Chinese, Korean) and bidirectional text.
- **Paint:** a wgpu renderer (Metal, Direct3D 12, Vulkan; GL on Linux where no Vulkan driver is) that redraws only damaged regions, with rounded borders, gradients, shadows, backdrop blur, SVG, images, canvas drawing and custom WGSL fills.
- **Controls:** buttons, inputs,…
