---
repo: "marquaye/scanic"
name: "scanic"
description: "Modern Document Scanning library"
readmeQualityOk: true
url: "https://github.com/marquaye/scanic"
homepage: "https://marquaye.github.io/scanic/"
language: "JavaScript"
languages: ["JavaScript", "Python"]
languagePcts: [49, 27]
stars: 43
forks: 6
openIssues: 0
closedIssues: 5
watchers: 0
contributors: 3
recentReleases: 1
createdAt: "2025-07-06T08:32:26Z"
lastCommitAt: "2026-07-05T20:17:13Z"
lastReleaseAt: "2026-05-18T13:03:21Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 93
undervaluedScore: 59
maintainers: ["marquaye", "dependabot[bot]", "ulrichstark"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1014699464/ce907808-8241-449a-8900-1181be7da46d"
discussionCount: 0
---

</a>
</p>

    <br />
</p>

# Scanic

**Ultra-fast, production-ready document scanning for the modern Web.**

Scanic is a high-performance document scanner library that brings professional-grade document edge detection and perspective correction to the browser and Node.js. By combining **Rust-powered WebAssembly** for pixel crunching and **GPU-accelerated Canvas** for image warping, Scanic delivers near-native performance (~10ms transforms) with a tiny footprint.

[**Documentation**](https://marquaye.github.io/scanic) | [**Live Demo**](https://marquaye.github.io/scanic/demo/) | [**Framework Examples**](#💻-framework-examples) | [**API Reference**](https://marquaye.github.io/scanic/api/reference)

---

## 🚀 Why Scanic?

Traditional web scanning solutions often force a trade-off:
- **OpenCV.js**: Powerful, but requires a massive **30MB+** download.
- **Pure JS**: Lightweight, but struggles with real-time performance and complex transforms.

**Scanic bridges this gap:**
- **Hybrid Engine**: Rust/WASM handles the CPU-heavy edge detection.
- **Turbo Warp**: Custom Triangle Subdivision algorithm utilizes the GPU for perspective correction.
- **Zero Latency**: Designed for real-time…
