---
repo: "PenguinBMDevs/lumino-rs"
name: "lumino-rs"
description: "A next-generation MIDI editor developed using Rust"
originalDescription: "使用Rust开发的新一代MIDI编辑器"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/PenguinBMDevs/lumino-rs"
language: "Rust"
languages: ["Rust"]
languagePcts: [98]
stars: 7
forks: 1
openIssues: 0
closedIssues: 2
watchers: 1
contributors: 4
recentReleases: 4
createdAt: "2025-12-14T02:37:03Z"
lastCommitAt: "2026-07-16T05:58:51Z"
lastReleaseAt: "2026-07-13T12:14:12Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 100
undervaluedScore: 66
maintainers: ["Enderman-bm"]
openGraphImageUrl: "https://opengraph.githubassets.com/03880749a5beb7ed9fd1021484b254db42b561e7950199d09c9c4774c0cecbc5/PenguinBMDevs/lumino-rs"
discussionCount: 4
---

# Lumino RS

A next-generation MIDI editor developed using Rust, built on a modern technology stack, providing a low-latency, cross-platform MIDI editing experience.

## Features

- 🎹 **Professional MIDI Editing**: Supports multi-track editing, note drawing, and velocity editing
- ⚡ **High-Performance Rendering**: Uses wgpu for GPU-accelerated rendering
- 🖥️ **Minimalist Appearance**: Based on winit + iced, providing a modern UI experience
- 🔌 **Multi-Backend MIDI I/O**: Supports KDMAPI, winmm, and cross-platform xsynth backends simultaneously, providing strong performance
- ⚙️ **Configuration Persistence**: Automatically saves window state and theme settings

## Build

### Prerequisites

- Recommended version: Rust 1.94.0 or newer
- Build tools for each platform:
  - **Windows**: Visual Studio Build Tools (recommended) or MSVC
  - **macOS**: Xcode Command Line Tools
  - **Linux**: GCC/Clang, pkg-config (recommended to run the build script directly)

### Compilation

```bash
# Clone the repository
git clone https://github.com/PenguinBMDevs/lumino-rs.git
cd lumino-rs

# Development build
cargo build

# High-performance development build
cargo build --profile fast-release

#…
