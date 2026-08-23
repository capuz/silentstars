---
repo: "AzPepoze/linux-wallpaperengine"
name: "linux-wallpaperengine"
description: "Wallpaper engine for Linux Written in C++ (C Sokol)"
readmeQualityOk: true
url: "https://github.com/AzPepoze/linux-wallpaperengine"
language: "C++"
languages: ["C++"]
languagePcts: [98]
topics: ["linux", "raylib", "wallpaper", "wallpaper-engine-software", "golang"]
stars: 22
forks: 0
openIssues: 1
closedIssues: 1
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-01-15T15:35:39Z"
lastCommitAt: "2026-08-23T04:10:18Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 40
maintainers: ["AzPepoze", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/7f18111a02cd02c6587d0e26b679ed28d06791d3edbccdd9776faf77832f237c/AzPepoze/linux-wallpaperengine"
---

# Linux Wallpaper Engine

Linux renderer for Wallpaper Engine projects.

## Requirements

### System requirements

- Linux
- GCC or Clang with C++20 support
- [xmake](https://xmake.io/)
- Vulkan development libraries and a working Vulkan GPU driver
- [Slang](https://github.com/shader-slang/slang) compiler/runtime libraries
- X11 development libraries (`libX11`, `libXcursor`, `libXi`)
- FFmpeg development libraries (`libavformat`, `libavcodec`, `libavutil`, `libswscale`)
- VA-API development libraries (`libva`, `libva-drm`)
- `libdrm`
- A local Wallpaper Engine installation with its original `assets/` data (required at runtime; set `WALLPAPER_ENGINE_PATH` or `engine_path` in `config.json`)

### Dependencies managed by xmake

The following dependencies are fetched by xmake and normally do not need to be installed manually:

- Sokol
- linmath.h
- Vulkan-Headers
- LZ4
- cJSON
- stb
- Dear ImGui (debug builds only)

### Arch Linux / CachyOS

```bash
sudo pacman -S --needed \
    xmake \
    gcc \
    vulkan-icd-loader \
    shader-slang \
    libx11 \
    libxcursor \
    libxi \
    ffmpeg \
    libva \
    libdrm
```

A Vulkan driver for your GPU is also required, for example…
