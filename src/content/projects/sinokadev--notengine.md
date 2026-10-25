---
repo: "sinokadev/notengine"
name: "notengine"
description: "Not Engine - Everything as code!"
readmeQualityOk: true
url: "https://github.com/sinokadev/notengine"
homepage: "https://notengine.readthedocs.io"
language: "C"
languages: ["C", "C++"]
languagePcts: [70, 29]
topics: ["game-development", "gameengine3d", "gamengine", "opengl", "gamedev"]
stars: 18
forks: 2
openIssues: 0
closedIssues: 2
watchers: 0
contributors: 3
recentReleases: 9
createdAt: "2026-06-11T20:59:18Z"
lastCommitAt: "2026-10-25T09:00:43Z"
lastReleaseAt: "2026-09-27T16:07:30Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded", "release_machine"]
healthScore: 99
undervaluedScore: 57
maintainers: ["sinokadev", "choonarine", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/4d84a4ea9269d665ca99c3750c85afa94569e0b8bb06895ae692041db821e8e4/sinokadev/notengine"
fundingLinks: ["BUY_ME_A_COFFEE:https://buymeacoffee.com/kanowara_sinoka"]
---

# Not Engine Beta

 [](https://github.com/sinokadev/notengine/actions) [](https://notengine.readthedocs.io/en/latest/)  [
](https://github.com/sinokadev/notengine/pulls) [](https://github.com/sinokadev/notengine/blob/main/LICENSE) 

> Everything as code!

A code-first game engine built on OpenGL, empowering you to build everything from scratch with clean, simple code.

**PRs and issues are welcome!**

2026-10-12: Anyway, It Works.

## Supported Features

- Skymap
- PBR shader
- Event system
- OBJ file import
- MTL material import (albedo, roughness, metallic, normal maps)
- Submesh support
- Play Audio

## Performance

| Version | Objects | Model | FPS | VSync |
|---|---:|---|---:|---|
| 0.1.5 | 1,000,000 | `notbox.obj` | 1 FPS | ON |
| 0.1.6 | 1,000,000 | `notbox.obj` | **30 FPS** | OFF |
| 0.1.10 | 1,000,000 | `notbox.obj` | **46 FPS** | OFF |

The same scene was used for both benchmarks.

Renderer optimization improved performance from **1 FPS to 30 FPS** — approximately **30× faster**.

### Test Environment

- CPU: AMD Ryzen 7 7800X3D (16) @ 5.05 GHz
- GPU: AMD Radeon RX 9070 XT [Discrete]
- Resolution: 1280×720
- Monitor: 165Hz

## Build

You will need the `cmake`, `ninja`…
