---
repo: "J-CITY/IkigaiEngine"
name: "IkigaiEngine"
description: "Just simple game engine"
readmeQualityOk: true
url: "https://github.com/J-CITY/IkigaiEngine"
language: "C++"
languages: ["C++"]
languagePcts: [79]
stars: 11
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 4
recentReleases: 0
createdAt: "2020-07-30T12:19:17Z"
lastCommitAt: "2026-11-15T08:22:04Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 80
undervaluedScore: 63
maintainers: ["J-CITY", "daniilGlushchenko"]
openGraphImageUrl: "https://opengraph.githubassets.com/122e503db5c0494fd91c560f9ae475a4f74ca24fa93280f987dc27524edfef1f/J-CITY/IkigaiEngine"
---

# SimpleEngine
This is my sandbox project for learning computer graphics.

What's already there:

- Forward rendering with deferred rendering
- Support for custom shaders (grass, water, volumetric clouds)
- SSAO
- hdr, gamma correction
- Blinn Phong or PBD lightning
- Shadow map
- Bloom
- Motion blur
- God rays
- Skeletal animation
- Runtime plane slicing of convex [Destructible Meshes](https://github.com/J-CITY/IkigaiEngine/blob/HEAD/docs/destructible-mesh.md)
- FXAA

Also support irrKlang 3d sound

## Supported Platforms & Graphics APIs

| Platform | Graphics APIs | Details / Build Flags |
| :--- | :--- | :--- |
| **Windows** | OpenGL, Vulkan, DirectX 12 | Multi-API binary (`-g opengl vulkan dx12`) |
| **Linux** | OpenGL, Vulkan | `-g opengl vulkan` |
| **macOS** | Metal, Vulkan (via MoltenVK), OpenGL | Multi-API binary (`-g opengl vulkan metal`), Xcode / Make |
| **iOS** | Metal, OpenGL ES | `-g opengl metal`, Xcode project |
| **Android** | OpenGL ES (3.0, 3.1, 3.2) | SDL3 NativeActivity, configured via `--esVer` |
| **Meta Quest** | OpenGL ES (3.0, 3.1, 3.2) | OpenXR NativeActivity + GLES |
| **Web (Emscripten)** | WebGL 2.0 (OpenGL ES 3.0) | WebAssembly build (`-p web`) |…
