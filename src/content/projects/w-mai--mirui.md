---
repo: "W-Mai/mirui"
name: "mirui"
description: "A lightweight, no_std ECS-driven UI framework for embedded, desktop, and WebAssembly"
readmeQualityOk: true
url: "https://github.com/W-Mai/mirui"
homepage: "https://mirui.rs/"
language: "Rust"
languages: ["Rust"]
languagePcts: [99]
topics: ["ecs", "embedded", "framework", "gui", "no-std", "rust", "ui", "wasm"]
stars: 20
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-05-06T09:23:34Z"
lastCommitAt: "2026-09-20T08:40:37Z"
lastReleaseAt: "2026-05-09T19:03:52Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 41
maintainers: ["W-Mai"]
openGraphImageUrl: "https://opengraph.githubassets.com/db27ac4fb38aab16c4eefb3d7ecdaca9a2b402f54d10135d2a22c58f454531d8/W-Mai/mirui"
---

# mirui

A `no_std`, ECS-driven UI framework for embedded, mobile, desktop, Linux, and WebAssembly targets. Layout, hit testing, and draw geometry use Q24.8 fixed point before submission to the software rasterizer, SDL GPU, WGPU, Web Canvas, framebuffer, DRM, and NuttX backends.

[Open the interactive gallery](https://mirui.rs/) or run `cargo run -p gallery --example orbit_console_demo` locally.

## Features

- **ECS architecture** — entities, components, systems, resources, queries; system scheduler with named priority slots
- **`no_std` + `alloc`** — runs on bare-metal MCUs (ESP32-C3, STM32) with a global allocator
- **Subpixel rasterizer** — 24.8 fixed-point throughout (layout, rendering, hit-test, events). Scanline coverage AA on any `Path`; SDF / 2×2 supersample fast paths for quad fills
- **Vector drawing** — `Canvas` exposes `fill_path` / `stroke_path` / `draw_line` / `draw_arc`; `DrawCommand::FillPath` puts path fills inside the same View pipeline as built-in widgets
- **Typography** — shaped text supports bounded layout, fallback fonts, bidirectional scripts, path placement, oriented carets, selection geometry, and path-aware hit testing
- **Layout** — Flexbox, absolute…
