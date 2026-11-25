---
repo: "ZenFox3/Mali_Termux-WSI"
name: "Mali_Termux-WSI"
description: "Zero-copy Window System Integration (EGL, GLES, OpenGL, Vulkan) for ARM Mali GPUs on Android/Termux. No root required."
readmeQualityOk: true
url: "https://github.com/ZenFox3/Mali_Termux-WSI"
language: "C"
languages: ["C"]
languagePcts: [92]
topics: ["ahardwarebuffer", "android", "bionic", "drm", "freeglut", "glfw3", "glut", "khronos", "opengl", "opengl-es"]
stars: 7
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-11-12T12:13:45Z"
lastCommitAt: "2026-11-25T13:18:41Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 41
maintainers: ["ZenFox3"]
openGraphImageUrl: "https://opengraph.githubassets.com/bf53a4f3f3ab2a6ecf73859dc77a7a18de01d2ae7411b19fbcb35e7643591fe5/ZenFox3/Mali_Termux-WSI"
---

# Mali Termux WSI

Window System Integration (XCB) for Mali GPUs on Termux (Termux:X11).

## License

This project is licensed under the MIT License — see the [LICENSE](https://github.com/ZenFox3/Mali_Termux-WSI/blob/HEAD/LICENSE) file for details.

## Overview

A zero-copy Window System Integration (WSI) layer that lets desktop Linux
applications (X11, KDE, Minecraft, Firefox) run on Android’s proprietary
ARM Mali GPU, **without root** and **without Mesa/Zink**.

### Local device

| | |
|--|--|
| **Hardware** | Xiaomi 24040RN64Y (MediaTek) |
| **GPU** | Mali-G52 MC2 |
| **CPU** | MediaTek Helio G91 Ultra (MT6769G) |
| **OS** | Android 14 (stock, no root, locked bootloader) |
| **Environment** | Termux (Bionic linker, no proot) |

### Also tested on

| GPU | Testers (Discord) |
|-----|-------------------|
| Mali-G72, Mali-G78 | @saicharankandukuri (Zman) |
| Mali-G72 | @nonameforidea |
| Mali-G77 MC9 | @bullymaguire0024 (BullyMaguire) |
