---
repo: "Aoody743/MetalVI"
name: "MetalVI"
description: "Run the Game on Apple Silicon Macs (M1–M5): native Metal backend, zero-copy unified memory, Metal Shader Converter. Bring your own game."
readmeQualityOk: true
url: "https://github.com/Aoody743/MetalVI"
language: "Rust"
languages: ["Rust"]
languagePcts: [94]
topics: ["apple-silicon", "d3d12", "emulation", "game-porting", "gta-vi", "gta6", "macos", "metal", "rosetta2", "rust"]
stars: 5
forks: 2
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 54
recentReleases: 0
createdAt: "2026-11-25T02:19:02Z"
lastCommitAt: "2026-11-27T12:54:09Z"
status: "newborn"
tags: ["hidden_gem"]
healthScore: 80
undervaluedScore: 54
maintainers: ["Aoody743", "fxceless", "Marvisak"]
openGraphImageUrl: "https://opengraph.githubassets.com/4c34c0964a691c6f8d915ad93b68a914b24f5697744c04236d6284b0ac2e557c/Aoody743/MetalVI"
---

M1 · M2 · M3 · M4 · M5 &nbsp;|&nbsp; macOS 15+ &nbsp;|&nbsp; Rust · Wine · Metal · Metal Shader Converter

> **Bring your own game.** MetalVI contains **no game files, assets, keys or proprietary DLLs**, and never will. It runs only from a copy of the game that **you legally own and dumped yourself**. It doesn't download, decrypt or unpack anything, and it contains nothing for getting around DRM. See [Legal](#legal).

---

## The short version

Most attempts to run console games on a Mac stack translation layers: the game's D3D12 calls are translated to PC D3D12, which Apple's D3DMetal translates again into Metal. On a Mac that stack has to pretend the GPU is a discrete card, so the console's **unified memory** gets emulated by copying and hashing gigabytes every frame. We measured about 1.4 GB uploaded and 7.5 GB compared per frame, which caps that design at **about 1–2 fps in 3D, however much you optimise it**.
