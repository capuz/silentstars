---
repo: "laurentvv/generator-assets"
name: "generator-assets"
description: "Headless, modular local AI pipeline: 2D/3D Godot & Blender assets (Flux.1, SDXL, ESRGAN), AI video generation (Wan 2.1/2.2, LTX-2.5, MiniMax-H3) with 4K YouTube masters, and AI music loops (MiniMax-Music3 via audio.cpp) — 100% Vulkan/GGUF, no CUDA, no cloud."
readmeQualityOk: true
url: "https://github.com/laurentvv/generator-assets"
language: "Python"
languages: ["Python"]
languagePcts: [91]
topics: ["audio-generation", "blender", "esrgan", "flux-dev", "game-development", "gguf", "godot", "godot-4", "makehuman", "pbr-textures"]
stars: 9
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-08-25T20:51:12Z"
lastCommitAt: "2026-11-08T10:17:51Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 43
maintainers: ["laurentvv"]
openGraphImageUrl: "https://opengraph.githubassets.com/72d817a5b6f4845bad03e58b3a42fba755a28d1d378951d8cb513f2a9352ac61/laurentvv/generator-assets"
---

# ⚔️ Generator Assets

### The 100% Local AI Media Factory — Video, 3D, Music, Voices & Sprites
**Zero CUDA • Zero PyTorch • Zero Cloud • Pure C++ Vulkan & GGUF for AMD Radeon, Intel Arc & NVIDIA**

---

## ⚡ Why Generator Assets?

Most AI generation frameworks (ComfyUI, Automatic1111) rely on heavy Python stacks, multi-gigabyte PyTorch runtimes, CUDA locks, and unmanaged VRAM bloat.  
`generator-assets` is built as an **industrial, headless local media factory** designed to produce engine-ready game and video assets in seconds:

| The Problem with Traditional AI Tools | The Generator Assets Solution |
| :--- | :--- |
| ❌ **Locked to NVIDIA CUDA** (requires 15+ GB CUDA SDK) | ✅ **100% Vulkan & GGUF**: runs natively on **AMD Radeon** (RX 6000/7000/8000), **Intel Arc**, and NVIDIA with zero CUDA lock-in. |
| ❌ **PyTorch memory leaks & GPU driver crashes** | ✅ **Zero PyTorch runtime**: powered by ultra-optimized pure C++ engines (`sd-cli`, `audio.cpp`, `llama.cpp`, `trellis.cpp`). |
| ❌ **Outputs raw images requiring manual shader setup** | ✅ **Engine-native formats**: exports `.tres` (PBR ORM), `.glb` 3D meshes with baked textures, `.gdshader` files, and loop-ready `.ogg` streams. |…
