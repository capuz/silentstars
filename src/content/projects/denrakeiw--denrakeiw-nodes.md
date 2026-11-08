---
repo: "DenRakEiw/DenRakEiw_Nodes"
name: "DenRakEiw_Nodes"
description: "Comfyui Node Pack"
readmeQualityOk: true
url: "https://github.com/DenRakEiw/DenRakEiw_Nodes"
language: "Python"
languages: ["Python"]
languagePcts: [95]
stars: 36
forks: 3
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 2
recentReleases: 0
createdAt: "2025-07-25T13:04:40Z"
lastCommitAt: "2026-11-08T10:41:28Z"
status: "thriving"
tags: []
healthScore: 73
undervaluedScore: 33
maintainers: ["DenRakEiw"]
openGraphImageUrl: "https://opengraph.githubassets.com/2570a32a8b29cd61adf2455257f1c3442b9e82006b934a1efbbe7f9a1346c581/DenRakEiw/DenRakEiw_Nodes"
---

# Denrakeiw Nodes

Comprehensive ComfyUI custom nodes for **image generation**, **latent space manipulation**, **Flux LayerDiffuse & Flux 2/3 RGBA transparency**, and **multi-image composition**.

## 🎨 Core Nodes

### Color Generator
Generates solid color images with 130+ predefined colors.
- **Input**: Width/height (1-8192px), color selection
- **Output**: Image, color name, hex code

### 📁 Load Image Sequence
Sequential image loading from folders with state management.
- **Features**: Auto-increment, sorting options, loop mode, error handling
- **Output**: Current image, filename, index, total count
- **Advantage**: Low memory usage vs batch loading

### 🖼️ Multi-Image Aspect Ratio Composer
Advanced multi-image composition with intelligent layouts.

**🎛️ Dynamic Controls:**
- **Input Count**: 1-8 images with dynamic UI updates
- **Aspect Ratios**: 1:1, 4:3, 16:9, 9:16, 21:9, 3:2, 5:4, 2:1, etc.
- **Megapixels**: 0.5-32 MP with auto-calculation
- **Layouts**: Horizontal, Vertical, Smart Grid, Classic Grid

**🎭 Face Detection:**
- **Haar Cascade**: Fast CPU-based detection
- **DNN Face**: Advanced deep learning detection
- **Smart Cropping**: Centers images around detected…
