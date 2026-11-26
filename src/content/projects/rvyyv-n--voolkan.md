---
repo: "rvyyv-n/voolkan"
name: "voolkan"
description: "ultra-fast vulkan renderer for minecraft 1.21.11 with support for older GPUs"
readmeQualityOk: true
url: "https://github.com/rvyyv-n/voolkan"
language: "Java"
languages: ["Java"]
languagePcts: [96]
topics: ["fabric", "minecraft", "optimization", "renderer", "vulkan", "fabric-mod", "fps-boost", "legacy-gpu", "low-latency", "windows"]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 4
recentReleases: 3
createdAt: "2026-10-04T22:28:43Z"
lastCommitAt: "2026-11-26T15:26:14Z"
lastReleaseAt: "2026-11-26T14:02:25Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 88
undervaluedScore: 55
maintainers: ["rvyyv-n", "xCollateral", "amiralimollaei"]
openGraphImageUrl: "https://opengraph.githubassets.com/5a02641222baffae5312af12fa4fdef6b7dc0fce8e45868a02ca1bd36d0c0858/rvyyv-n/voolkan"
---

**voolkan** is a high-performance Vulkan renderer for Minecraft 1.21.11 (Fabric) on **Windows** and **Apple Silicon macOS**, built for high frame rates, low input latency, and steady frame pacing — including on older GPUs and budget systems that other Vulkan renderers cannot run on.

## What voolkan solves

- **Driver bottlenecks:** Minecraft's OpenGL renderer is limited by driver overhead and single-threaded draw submission. voolkan replaces it with a native Vulkan engine that cuts CPU draw-call cost and submits GPU work more efficiently.
- **Older GPUs left behind:** Most Vulkan renderers require `VK_KHR_dynamic_rendering`. voolkan automatically falls back to a repaired classic `VkRenderPass` path when that extension is missing, so hardware such as **AMD GCN 1 (Radeon R7 350)** and other Vulkan 1.2 devices gets full Vulkan rendering instead of a startup error.
