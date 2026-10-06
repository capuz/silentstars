---
repo: "nvpro-samples/vk_slang_editor"
name: "vk_slang_editor"
description: "A shader-driven livecoding tool using Vulkan and the Slang shading language."
readmeQualityOk: true
url: "https://github.com/nvpro-samples/vk_slang_editor"
language: "C++"
languages: ["C++"]
languagePcts: [95]
stars: 60
forks: 2
openIssues: 2
closedIssues: 3
watchers: 2
contributors: 3
recentReleases: 0
createdAt: "2025-08-09T11:23:30Z"
lastCommitAt: "2026-10-06T10:40:20Z"
lastReleaseAt: "2026-03-19T16:31:59Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 81
undervaluedScore: 25
maintainers: ["NBickford-NV", "pixeljetstream"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1034969190/99f9e56e-7759-4724-ad7a-9649bf835b1f"
discussionCount: 1
---

# vk_slang_editor

A shader-driven livecoding tool using Vulkan and the [Slang](https://shader-slang.org/) shading language. Download it [here](https://github.com/nvpro-samples/vk_slang_editor/releases)!

Vk_slang_editor lets you write Slang shaders, compile them, and quickly see and interact with the result. Notably, it lets you write multi-pass pipelines in a single file, add arbitrary shader parameters, load meshes and textures; and much more -- while Slang's language features can make writing complex or large shaders easier.

This editor was initially created for the SIGGRAPH 2025 *Introduction to Slang* interactive lab. You can download the lab slides covering topics from basics to generics [here](https://developer.download.nvidia.com/ProGraphics/nvpro-samples/SlangLab/Slides.pdf), and the full lab materials (including SlangPy files) [here](https://developer.download.nvidia.com/ProGraphics/nvpro-samples/SlangLab/Lab.zip)!

## Features

* **Shader reflection:**
  * Supports compute, vertex, fragment, hull, domain, and geometry shaders
  * vk_slang_editor automatically recognizes shader parameters named `iTime`, `iFrame`, `iResolution`, `iMouse`, `iView`, `iProj`, `texFrame`,…
