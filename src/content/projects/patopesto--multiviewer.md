---
repo: "patopesto/Multiviewer"
name: "Multiviewer"
description: "A multi-protocol video multiviewer"
readmeQualityOk: true
url: "https://github.com/patopesto/Multiviewer"
homepage: "https://multiviewer.bambinito.net"
language: "Rust"
languages: ["Rust"]
languagePcts: [84]
topics: ["avfoundation", "decklink", "directshow", "mediafoundation", "multiview", "multiviewer", "ndi", "rust", "screen-capture", "spout2"]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-10-09T00:40:49Z"
lastCommitAt: "2026-10-29T05:47:51Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 51
maintainers: ["patopesto"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1411103163/2a64d679-a0e1-4041-bf3e-be674b76727d"
---

# Multiviewer

> A hardware-accelerated, multi-protocol video multiviewer built in Rust. Drag, resize, and snap video sources on an interactive canvas with real-time compositing.

📖 [Full Documentation](https://multiviewer.bambinito.net)

---

## 🌟 Features

- **Multi-Protocol Video Sources** — ingest from many video protocols or test patterns.
- **Hardware-Accelerated Compositor** — wgpu-based pipeline with YUV→RGB conversion on the GPU, minimal CPU↔GPU copies.
- **Interactive Canvas** — drag, resize, snap, and zoom layers intuitively.
- **Per-Source Settings** — configure each source individually with persistent session state.
- **Real-Time Output** — broadcast the composed view.
- **Cross-Platform** — native desktop applications for macOS, Windows, and Linux.

---

## 🎥 Supported Protocols

| Protocol | Source | Output | Platforms | Notes |
|----------|--------|--------|-----------|-------|
| **Test Patterns** | ✅ | — | macOS, Windows, Linux | SMPTE color bars and generative patterns |
| **NDI** | ✅ | ✅ | macOS, Windows, Linux |   |
| **OMT** | ✅ | ✅ | macOS, Windows, Linux | [Open Media Transport](https://github.com/openmediatransport)  |
| **Blackmagic DeckLink** | ✅ | ✅ |…
