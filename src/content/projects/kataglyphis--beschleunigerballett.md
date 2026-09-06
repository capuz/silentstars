---
repo: "Kataglyphis/BeschleunigerBallett"
name: "BeschleunigerBallett"
description: "🚀 C++23 based acceleration playground. Contains renderer with Vulkan support. Serves as playground for me to test new CMake/C++/Vulkan... features🚀 "
readmeQualityOk: true
url: "https://github.com/Kataglyphis/BeschleunigerBallett"
homepage: "https://beschleunigerballette.jonasheinle.de/"
language: "C++"
languages: ["C++"]
languagePcts: [84]
topics: ["rendering", "vulkan", "path-tracing", "physically-based-rendering", "cmake", "cpp", "rust"]
stars: 7
forks: 2
openIssues: 0
closedIssues: 4
watchers: 2
contributors: 4
recentReleases: 0
createdAt: "2021-09-18T12:48:54Z"
lastCommitAt: "2026-09-06T08:04:01Z"
lastReleaseAt: "2025-11-14T21:07:11Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 98
undervaluedScore: 83
maintainers: ["Kataglyphis"]
openGraphImageUrl: "https://opengraph.githubassets.com/84e54e7d656dd23d594ed2d504336137eaa0df0b116184ca9030ed16b9630eaf/Kataglyphis/BeschleunigerBallett"
---

</a>

  <h1>BeschleunigerBallett</h1>

  <h4>Experimental graphics engine and renderer playground for Vulkan, a Rust WebGPU sibling renderer, modern CMake, testing, packaging, and optional Rust integration.</h4>
</div>

  <br> 
</div>

see also [**__Official homepage__**](https://beschleunigerballette.jonasheinle.de/). 

## Overview

BeschleunigerBallett is a renderer and graphics-engine playground used to explore modern graphics APIs and the surrounding engineering workflow. The repository combines a C++23-modules Vulkan engine, a companion Rust WebGPU renderer (native + browser), build automation, packaging, testing, documentation, and Rust integration.

## Highlights

- Vulkan renderer (C++23 modules) with forward + deferred rasterization, ray tracing, path tracing, PBR, cascaded shadow maps (consumed by both lighting paths), skybox, volumetric clouds, OBJ loading, and mip mapping
- VMA-backed memory, fence-synced uploads with a persistent staging buffer, a persisted `VkPipelineCache`, and fail-fast Vulkan error handling (exceptions are disabled project-wide)
- Companion Rust WebGPU renderer (`third_party/OxidANT/crates/webgpu_renderer`): glTF 2.0/GLB, PBR + IBL, CSM, SSAO,…
