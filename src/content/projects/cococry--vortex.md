---
repo: "cococry/vortex"
name: "vortex"
description: "high performance, independent wayland compositor"
readmeQualityOk: true
url: "https://github.com/cococry/vortex"
homepage: "https://vortexcomp.org"
language: "C"
languages: ["C"]
languagePcts: [93]
topics: ["high-performance", "high-performance-rendering", "high-performance-ui", "independent", "wayland-compositor"]
stars: 54
forks: 1
openIssues: 0
closedIssues: 3
watchers: 2
contributors: 2
recentReleases: 0
createdAt: "2025-10-02T19:09:51Z"
lastCommitAt: "2026-11-10T11:42:22Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 100
undervaluedScore: 55
maintainers: ["cococry", "h8d13"]
openGraphImageUrl: "https://opengraph.githubassets.com/40bd03f56432f782fa6d35259f2522a61a41b9737c0396f49adad111c9a58924/cococry/vortex"
---

# vortex

`vortex` is an independent wayland compositor written in C.

---

## Overview

Currently under active development as a high-performance, independent Wayland compositor
focused on creating a notoriously fast and visually appealing Wayland desktop experience.

The project's goal is to create a self-contained platform dedicated entirely to desktop compositing.
In other words, the compositor is responsible only for compositing and its related aspects (such as window animations and IPC),
while components like the desktop shell are intentionally abstracted away from it.

## Build & Run

Make sure you have the required dependencies installed (debian packages shown):

```bash
sudo apt install meson ninja-build libwayland-dev wayland-protocols libdrm-dev libgbm-dev libegl-dev libgl-dev libwayland-egl-backend-dev libinput-dev libudev-dev libxcursor-dev xcursor-themes libxkbcommon-dev libpixman-1-dev libseat-dev libliftoff-dev libcglm-dev libx11-dev libx11-xcb-dev libxkbcommon-x11-dev libxcb-present-dev
```

For Vulkan rendering support, additionally install:

```bash
sudo apt install libvulkan-dev
```

Clone & build:
```bash
git clone https://github.com/cococry/vortex.git
cd…
