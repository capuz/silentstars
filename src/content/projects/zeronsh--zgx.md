---
repo: "zeronsh/zgx"
name: "zgx"
description: "Retained Rust GUI framework with fine-grained updates for Linux and macOS"
readmeQualityOk: true
url: "https://github.com/zeronsh/zgx"
language: "Rust"
languages: ["Rust"]
languagePcts: [76]
stars: 5
forks: 5
openIssues: 2
closedIssues: 0
watchers: 0
contributors: 5
recentReleases: 3
createdAt: "2026-09-26T19:17:14Z"
lastCommitAt: "2026-10-26T18:08:46Z"
lastReleaseAt: "2026-10-26T08:56:51Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "fork_magnet"]
healthScore: 80
undervaluedScore: 64
maintainers: ["zeronsh[bot]", "wingleeio"]
openGraphImageUrl: "https://opengraph.githubassets.com/c3cb10c31c8787f4ba03ec5265dee17741a2ac9485493176767fbb24ac21e727/zeronsh/zgx"
---

# zgx

zgx is a retained-mode GUI framework in Rust for macOS, Windows and Linux. Components mount once and fine-grained signals update only the nodes that depend on them, so an idle window does no work and a busy one repaints only what changed. Interfaces are written in Rust or in Luau scripts that hot reload without losing state. It is young (0.1, used from git) and its API still changes.

## What it has

- **Layout** as CSS's flexbox and grid do it, defaults included: children stretch across and shrink to fit (`min-width: auto`), grids, wrapping, percentages, absolute positioning, `display: contents`, right-to-left with logical `start`/`end` edges, and layouts that answer the room they have.
- **Text:** shaped rich text with font fallbacks, selectable documents (drag, double and triple press, copy as HTML), editors with undo, clipboard, spellchecking, IME (Japanese, Chinese, Korean) and bidirectional text.
- **Paint:** a wgpu renderer (Metal, Direct3D 12, Vulkan; GL on Linux where no Vulkan driver is) that redraws only damaged regions, with rounded borders, gradients, shadows, backdrop blur, SVG, images, canvas drawing and custom WGSL fills.
- **Controls:** buttons, inputs,…
