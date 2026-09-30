---
repo: "silverling/xuan"
name: "xuan"
description: "An image editor for Linux and Windows, inspired by Compositor and ported from it."
readmeQualityOk: true
url: "https://github.com/silverling/xuan"
language: "Rust"
languages: ["Rust"]
languagePcts: [93]
topics: ["egui", "image-editor", "linux", "photoshop", "wayland", "wgpu", "rust", "windows"]
stars: 61
forks: 2
openIssues: 1
closedIssues: 4
watchers: 1
contributors: 1
recentReleases: 6
createdAt: "2026-09-19T16:20:22Z"
lastCommitAt: "2026-09-30T09:57:32Z"
lastReleaseAt: "2026-09-28T12:45:59Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 86
undervaluedScore: 39
maintainers: ["silverling"]
openGraphImageUrl: "https://opengraph.githubassets.com/45a716fe0def30b2c7c1b5f4ca9cb3631d9b3d2d07a5b06687e5f44702a59504/silverling/xuan"
---

# Xuan

A native image editor for layered compositions, photo retouching, and camera RAW development on Linux and Windows.

This project is inspired by [Compositor](https://github.com/robbietilton/Compositor) and is a Rust port of its core features for Linux and Windows. It is a work in progress, and the current release is a demo with basic functionality.

## Features

- Compose with layers, groups, masks, blend modes, editable text, and shapes.
- Use standalone mask layers to mask everything below them, limited to their group when grouped. Click the empty area of the Layers panel to deselect, then click Add layer mask; or choose Layer Mask → New Mask Layer.
- Retouch with selections, brushes, clone stamp, healing, filters, and adjustment layers.
- Draw with Wacom, Parblo, and other system-supported tablets on Linux and Windows, with pressure, tilt, and eraser-tip support.
- Smooth mouse and pen strokes with adjustable brush stroke smoothing.
- Develop Nikon NEF/NRW, Canon CR2/CR3/CRW, Fujifilm RAF, and Sony ARW files and return to their RAW settings at any time.
- Open HEIC/HEIF photos directly on Linux and Windows, without installing a converter.
- Save editable `.xuan`…
