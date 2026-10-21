---
repo: "shader-slang/slang-rhi"
name: "slang-rhi"
description: "Slang Render Hardware Interface"
readmeQualityOk: true
url: "https://github.com/shader-slang/slang-rhi"
language: "C++"
languages: ["C++"]
languagePcts: [95]
stars: 215
forks: 64
openIssues: 31
closedIssues: 94
watchers: 6
contributors: 54
recentReleases: 0
createdAt: "2024-08-23T15:55:20Z"
lastCommitAt: "2026-10-21T08:49:35Z"
status: "thriving"
tags: []
healthScore: 92
undervaluedScore: 41
maintainers: ["skallweitNV", "fknfilewalker", "nv-slang-bot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/558d0582dc3e401ed46e1ca4aa11dd48f4699e35586fd80ed991fa53c19c58f3/shader-slang/slang-rhi"
---

# slang-rhi

`slang-rhi` is a C++ render hardware interface for the Slang shading language,
originally based on Slang's "gfx" layer. It provides a common API for resource
management, shader binding, and graphics, compute, and ray tracing workloads.

Backends include Direct3D 11, Direct3D 12, Vulkan, Metal, CUDA, WebGPU, and CPU.
Availability and feature support vary by platform and device; see the
[API implementation status](https://github.com/shader-slang/slang-rhi/blob/HEAD/docs/api.md) and query device capabilities at runtime.

## Project status and compatibility

`slang-rhi` is under active development. The public API is free to change, and
neither source compatibility nor binary compatibility (ABI) is currently
guaranteed between revisions or releases. When updating, expect to rebuild
dependent code and adapt it to API changes. Use headers and binaries from the
same revision.

## Getting started

You need Git, a C++20 compiler, CMake 3.25 or newer for the presets, and Ninja.
On Windows, run from a Visual Studio developer shell. See the
[build guide](https://github.com/shader-slang/slang-rhi/blob/HEAD/docs/building.md) for platform prerequisites and configuration options.…
