---
repo: "vowstar/ptouch-rs"
name: "ptouch-rs"
description: "Brother P-Touch label printer driver and tools for Linux"
readmeQualityOk: true
url: "https://github.com/vowstar/ptouch-rs"
language: "Rust"
languages: ["Rust"]
languagePcts: [99]
stars: 12
forks: 6
openIssues: 0
closedIssues: 6
watchers: 3
contributors: 5
recentReleases: 3
createdAt: "2026-03-09T09:20:28Z"
lastCommitAt: "2026-08-24T04:20:29Z"
lastReleaseAt: "2026-07-24T12:40:41Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 61
maintainers: ["vowstar", "hauuau", "jlpoolen"]
openGraphImageUrl: "https://opengraph.githubassets.com/883f6f9b6a80643c8492bcce179d05b5189aec357977e93dfba9955d5ba2d87a/vowstar/ptouch-rs"
---

# ptouch-rs

Rust tool for Brother P-Touch USB label printers. CLI and GUI.

## Features

- Print text labels with custom font, size, alignment and rotation
- Print images (PNG, JPEG, GIF, BMP, TIFF, WebP, SVG, and more)
- Compose multi-element labels (text + image + cut mark + padding)
- Save and reload designs as self-contained `.ptl` layout files (images
  embedded), then print them from the GUI or CLI
- Template layouts with `{{name}}` placeholders and batch-print from a CSV
- Chain print and multi-copy support
- Print quality modes on 360 dpi models (high resolution 360x720, draft 360x180)
- GUI with live preview, zoom, and drag-and-drop element reordering
- Export to image (PNG, JPEG, BMP, GIF, TIFF, WebP) without a printer connected
- Feed and cut tape without printing

## Supported Printers

PT-9200DX, PT-2300, PT-2420PC, PT-9500PC, PT-9700PC, PT-2450PC, PT-18R,
PT-1950, PT-2700, PT-1230PC, PT-2430PC, PT-2730, PT-H500, PT-E500, PT-E550W,
PT-P700, PT-P750W, PT-D410, PT-D450, PT-D460BT, PT-D600, PT-D610BT,
PT-P710BT, PT-E310BT, PT-E560BT and more.

Tape widths: 3.5mm, 6mm, 9mm, 12mm, 18mm, 24mm, 36mm.

## Building

Requires Rust stable toolchain.

**Linux** (libusb + udev):…
