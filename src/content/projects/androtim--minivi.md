---
repo: "Androtim/MiniVI"
name: "MiniVI"
description: "MiniVI: low-VRAM (8 GB) & NVIDIA/AMD Xbox Series (Scarlett / GDK) compatibility layer for Windows (fork of cool_fox / VIctory). No game files."
readmeQualityOk: true
url: "https://github.com/Androtim/MiniVI"
language: "Rust"
languages: ["Rust"]
languagePcts: [100]
topics: ["compatibility-layer", "d3d12", "gdk", "rdna2", "rust", "scarlett", "windows", "xbox-series"]
stars: 7
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 121
recentReleases: 0
createdAt: "2026-11-26T15:13:55Z"
lastCommitAt: "2026-11-27T12:54:29Z"
status: "newborn"
tags: ["hidden_gem"]
healthScore: 80
undervaluedScore: 47
maintainers: ["DoubleGhosty", "Androtim", "Esteban-V"]
openGraphImageUrl: "https://opengraph.githubassets.com/6de83e840309d8d638c9648aba2e69e03d824b7451d9ed57d7f9e43d1cb2250b/Androtim/MiniVI"
---

# MiniVI

**MiniVI** is an experimental **Xbox Series** (**Scarlett** / **GDK**) Windows compatibility layer focused specifically on **8 GB VRAM** GPUs and **16–32 GB system RAM** hosts. Built on [DoubleGhosty/cool_fox](https://github.com/DoubleGhosty/cool_fox) (within the broader VIctory lineage), MiniVI pairs upstream multi-vendor GPU translation (`RDNA2` compute/graphics shaders -> host `D3D12` / `DXIL`) with tight DXGI budget governance, tile-level mip streaming, and clean-room Windows host shims.

> **Strictly Clean-Room / Source-Only Repository:** Zero game executables, asset archives, keys, screenshots, or binary artifacts are stored here. Users supply their own legally owned runtime executable and data directory locally. Automated `cargo test -p xtask` policy checks block leaked binary blobs, titles, or prohibited strings on every commit.

---
