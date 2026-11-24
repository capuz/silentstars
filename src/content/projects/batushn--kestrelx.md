---
repo: "Batushn/KestrelX"
name: "KestrelX"
description: "Clean-room Xbox Series X|S compatibility & dual-wave RDNA2 -> SM 6.6 DXIL shader recompiler (C++23 / D3D12) | v0.9.0: 68/68 Dual-GPU PASS, SVT 64KB, KXVC AES-128-CTR, DXR BVH, PresentX HUD, Shader Census & PE Probe"
readmeQualityOk: true
url: "https://github.com/Batushn/KestrelX"
homepage: "https://github.com/Batushn/KestrelX/releases"
language: "C++"
languages: ["C++"]
languagePcts: [99]
topics: ["compatibility-layer", "cpp23", "d3d12", "dxil", "rdna2", "shader-recompiler", "windows", "xbox", "xbox-series", "emulator"]
stars: 5
forks: 0
openIssues: 0
closedIssues: 32
watchers: 0
contributors: 2
recentReleases: 8
createdAt: "2026-11-23T20:41:28Z"
lastCommitAt: "2026-11-24T01:59:35Z"
lastReleaseAt: "2026-11-24T01:59:40Z"
status: "newborn"
tags: ["hidden_gem", "release_machine"]
healthScore: 100
undervaluedScore: 63
maintainers: ["Batushn", "Firat20026"]
openGraphImageUrl: "https://opengraph.githubassets.com/4c97890ee18142cdda68ed747cdef1d6d47113ab4befb1f3482b646479eb158f/Batushn/KestrelX"
discussionCount: 1
---

---

## Hardware Visual Showcase

Every image below is captured directly from real **D3D12 Ultimate** hardware after KestrelX dynamically decodes raw **GFX10.3 (RDNA2)** microcode, lifts it into CFG basic-block IR, emits SM 6.6 HLSL, compiles signed DXIL in-process via `dxcompiler.dll`, and renders on both **NVIDIA GeForce RTX 4060** and **AMD Radeon 780M**:

      waitable flip-model swapchain (<code>DXGI_PRESENT_ALLOW_TEARING</code>), high-res frame limiter &amp; borderless fullscreen</sub>
      Dual-GPU rasterization parity: <b>7222 vs 7224 px (&lt;0.03%)</b></sub>
      Dual-GPU cross-vendor rendering parity: <b>0/255 bit-exact</b></sub>

---
