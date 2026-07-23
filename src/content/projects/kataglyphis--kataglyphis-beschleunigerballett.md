---
repo: "Kataglyphis/Kataglyphis-BeschleunigerBallett"
name: "Kataglyphis-BeschleunigerBallett"
description: "🚀 C++23 based acceleration playground. Contains renderer with Vulkan/OpenGL support. Serves as playground for me to test new CMake/C++/Vulkan/... features.🚀 "
readmeQualityOk: true
url: "https://github.com/Kataglyphis/Kataglyphis-BeschleunigerBallett"
homepage: "https://beschleunigerballette.jonasheinle.de/"
language: "C++"
languages: ["C++"]
languagePcts: [69]
topics: ["rendering", "vulkan", "path-tracing", "physically-based-rendering", "cmake", "cpp", "rust"]
stars: 8
forks: 2
openIssues: 0
closedIssues: 4
watchers: 2
contributors: 4
recentReleases: 0
createdAt: "2021-09-18T12:48:54Z"
lastCommitAt: "2026-07-23T06:14:36Z"
lastReleaseAt: "2025-11-14T21:07:11Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 100
undervaluedScore: 81
maintainers: ["Kataglyphis"]
openGraphImageUrl: "https://opengraph.githubassets.com/a0a5d85339ea4c00d9eb535a8b118689e5868fd347c2e0130d8aba67e855c6dc/Kataglyphis/Kataglyphis-BeschleunigerBallett"
fundingLinks: ["GITHUB:https://github.com/Kataglyphis"]
---

</a>

  <h1>Kataglyphis-BeschleunigerBallett</h1>

  <h4>Experimental graphics engine and renderer playground for Vulkan, OpenGL, modern CMake, testing, packaging, and optional Rust integration.</h4>
</div>

  <br> 
</div>

see also [**__Official homepage__**](https://beschleunigerballette.jonasheinle.de/). 

## Overview

Kataglyphis-BeschleunigerBallett is a renderer and graphics-engine playground used to explore modern graphics APIs and the surrounding engineering workflow. The repository combines a C++23-modules Vulkan engine, a companion Rust WebGPU renderer (native + browser), build automation, packaging, testing, documentation, and Rust integration.

## Highlights

- Vulkan renderer (C++23 modules) with forward + deferred rasterization, ray tracing, path tracing, PBR, cascaded shadow maps (consumed by both lighting paths), skybox, volumetric clouds, OBJ loading, and mip mapping
- VMA-backed memory, fence-synced uploads with a persistent staging buffer, a persisted `VkPipelineCache`, and fail-fast Vulkan error handling (exceptions are disabled project-wide)
- Companion Rust WebGPU renderer (`ExternalLib/Kataglyphis-RustProjectTemplate/crates/webgpu_renderer`): glTF 2.0/GLB,…
