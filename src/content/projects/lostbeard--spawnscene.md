---
repo: "LostBeard/SpawnScene"
name: "SpawnScene"
description: "Create interactive 3D Gaussian Splat scenes from a single photo entirely in your browser."
readmeQualityOk: true
url: "https://github.com/LostBeard/SpawnScene"
homepage: "https://spawnscene.com/"
language: "C#"
languages: ["C#"]
languagePcts: [94]
topics: ["2d-to-3d", "blazor", "blazor-webassembly", "gaussian-splatting", "ilgpu", "gpgpu", "depth-estimation", "onnxruntime-web", "webgpu", "stochastic-rasterization"]
stars: 16
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-03-06T21:16:58Z"
lastCommitAt: "2026-09-28T10:05:39Z"
status: "thriving"
tags: ["solo_builder", "funded"]
healthScore: 80
undervaluedScore: 45
maintainers: ["LostBeard"]
openGraphImageUrl: "https://opengraph.githubassets.com/454d4f111e4f09bd0d0618b90ba1acd2e1067d7d9eec4853855d6ed3aac75aa7/LostBeard/SpawnScene"
fundingLinks: ["GITHUB:https://github.com/LostBeard", "CUSTOM:https://github.com/LostBeard#donate-with-crypto"]
---

# SpawnScene

> Create interactive 3D Gaussian Splat scenes from a single photo — entirely in your browser.

**SpawnScene** is a fully client-side Gaussian Splatting application built with Blazor WebAssembly. It uses monocular depth estimation (DistillAnyDepth / DepthAnything V2) to generate 3D scenes from a single photograph, with the entire pipeline running on the GPU via WebGPU and SpawnDev.ILGPU.

## ✨ What It Does

- **🔮 Depth Estimation** — DistillAnyDepth (default) and DepthAnything V2 via ONNX Runtime Web on the WebGPU execution provider
- **⚡ GPU Gaussian Generation** — ILGPU compute kernel unprojects depth + color into 14M+ packed Gaussian splats
- **🎲 Stochastic Rasterization** — Sort-free rendering via Monte Carlo estimation (StochasticSplats, ICCV 2025). Eliminates the radix sort bottleneck entirely, maintaining 45-60 FPS with 14M+ splats
- **🔄 Temporal Accumulation** — Multi-SPP with velocity-adaptive EMA blending for progressive convergence
- **👁 Real-Time Viewer** — WebGPU splat renderer with EWA anti-aliasing and CAS post-processing sharpening
- **📦 PLY / SPLAT Loading** — Load pre-built scenes from `.ply` or `.splat` files
- **🔒 Fully Client-Side** — No…
