---
repo: "zeronsh/zgx"
name: "zgx"
description: "Retained Rust GUI framework with fine-grained updates for Linux and macOS"
readmeQualityOk: true
url: "https://github.com/zeronsh/zgx"
language: "Rust"
languages: ["Rust"]
languagePcts: [71]
stars: 10
forks: 11
openIssues: 4
closedIssues: 10
watchers: 0
contributors: 8
recentReleases: 10
createdAt: "2026-09-26T19:17:14Z"
lastCommitAt: "2026-11-07T13:54:57Z"
lastReleaseAt: "2026-11-03T18:08:45Z"
status: "newborn"
tags: ["hidden_gem", "release_machine", "fork_magnet"]
healthScore: 94
undervaluedScore: 69
maintainers: ["zeronsh[bot]", "wingleeio", "hoangvu12"]
openGraphImageUrl: "https://opengraph.githubassets.com/9003168c614da3986244f0ca9fa8c7a2926ac2f4e39413fb1b21feb5d63052a7/zeronsh/zgx"
---

# zgx

zgx is a retained-mode GUI framework in Rust for macOS, Windows and Linux. Components mount once and fine-grained signals update only the nodes that depend on them, so an idle window does no work and a busy one repaints only what changed. Interfaces are written in Rust or in Luau scripts that hot reload without losing state. It is young (0.1, on crates.io) and its API still changes.

## What it has

- **Layout** as CSS's flexbox and grid do it, defaults included: children stretch across and shrink to fit (`min-width: auto`), grids, wrapping, percentages, absolute positioning, `display: contents`, right-to-left with logical `start`/`end` edges, and layouts that answer the room they have.
- **Text:** shaped rich text with font fallbacks, selectable documents (drag, double and triple press, copy as HTML), editors with undo, clipboard, spellchecking, IME (Japanese, Chinese, Korean) and bidirectional text.
- **Paint:** a wgpu renderer (Metal, Direct3D 12, Vulkan; GL on Linux where no Vulkan driver is) that redraws only damaged regions, with rounded borders, gradients, shadows, backdrop blur, SVG, images, canvas drawing and custom WGSL fills.
- **Controls:** buttons, inputs,…
