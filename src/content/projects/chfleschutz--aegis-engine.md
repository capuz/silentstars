---
repo: "chFleschutz/aegis-engine"
name: "aegis-engine"
description: "Vulkan Render Engine written in modern C++"
readmeQualityOk: true
url: "https://github.com/chFleschutz/aegis-engine"
language: "C++"
languages: ["C++"]
languagePcts: [94]
topics: ["cpp", "vulkan", "render-engine"]
stars: 11
forks: 1
openIssues: 76
closedIssues: 199
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2023-07-18T10:17:18Z"
lastCommitAt: "2026-11-22T11:54:05Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "under_pressure"]
healthScore: 94
undervaluedScore: 68
maintainers: ["chFleschutz"]
openGraphImageUrl: "https://opengraph.githubassets.com/2575a5c3dfbc2b2a81b0884417418b4c65c4ca18be4aacee6d280bb6e119f2bf/chFleschutz/aegis-engine"
---

# Aegis Engine

C++ render engine developed with Vulkan to explore low level graphics programming

###

###

> **Note**
>
> *My original Master's Thesis version is archived in the [thesis branch](https://github.com/chFleschutz/aegis-engine/tree/thesis) or at the [thesis tag](https://github.com/chFleschutz/aegis-engine/releases/tag/thesis).*

# Features

- **Physically Based Rendering (PBR)** - Realistic lighting and materials, with image based lighting from HDR environments
- **GLTF & OBJ Loading** - Loading of custom 3D models
- **Immediate Mode Editor UI** - Editor tools using Dear ImGui and ImGuizmo
- **Entity Component System (ECS)** - Efficient object management using EnTT
- **Render Graph** - Passes declare the resources they read and write; the graph orders them and places the barriers
- **Bindless Resources** - Images and samplers in one descriptor heap, buffers through device addresses
- **Deferred Rendering** - Improved lighting performance
- **HDR Rendering and Tone Mapping** - Enables wider color range for more visible details
- **Physically Based Bloom** - Realistic glow effect around bright areas created using convolution
- **Mesh Shaders Pipeline** - Modern geometry…
