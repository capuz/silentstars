---
repo: "colopl/colopresso"
name: "colopresso"
description: "PNG to Advanced Format converter library and application."
readmeQualityOk: true
url: "https://github.com/colopl/colopresso"
homepage: "https://colopl.github.io/colopresso/"
language: "C"
languages: ["C", "TypeScript"]
languagePcts: [50, 32]
stars: 7
forks: 0
openIssues: 1
closedIssues: 5
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2025-11-13T06:04:51Z"
lastCommitAt: "2026-10-01T10:23:54Z"
lastReleaseAt: "2025-12-26T11:53:01Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 94
undervaluedScore: 70
maintainers: ["renovate[bot]", "zeriyoshi", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/b2dc6ea27d686f2c310578bc3b3ef4e56288f3d63178d274b4e2830bda803fbc/colopl/colopresso"
---

# 🎨 colopresso

</p>

  <strong>All-in-one tool for converting and optimizing PNG images to next-gen formats</strong>
</p>

</p>

</p>

---

**colopresso** is an open-source project that provides a high-performance library `libcolopresso` for converting and color-reducing PNG images to WebP, AVIF, and optimized PNG, along with CLI / GUI applications that leverage its capabilities.

</p>

</p>

## ✨ Features

- 🚀 **Fast Conversion** — High-speed processing with a native C99-based library
- 📦 **Multiple Format Support** — WebP, AVIF, optimized PNG (256-color, Reduced RGBA32, Limited RGBA4444)
- 🖥️ **Cross-Platform** — Supports Windows, macOS, and Linux
- 🎛️ **Flexible Deployment** — Choose from CLI, Electron app, or Node.js
- ⚙️ **Profile System** — Save, export, and import per-format parameters
- 🌐 **WebAssembly Support** — WASM builds for Node.js and legacy Electron fallback paths

## 📥 Quick Start

```bash
git clone --recursive "https://github.com/colopl/colopresso.git"
cd colopresso
```

For detailed build instructions, see the [Build Guide](#build-linux).

> [!IMPORTANT]
> **AVX2 instruction set support is required on x86_64 (amd64) platforms for CLI (native builds),…
