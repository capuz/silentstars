---
repo: "GameFoundry/B3DFrameworkExamples"
name: "B3DFrameworkExamples"
description: "Example projects for B3D Framework"
readmeQualityOk: true
url: "https://github.com/GameFoundry/B3DFrameworkExamples"
language: "C++"
languages: ["C++"]
languagePcts: [91]
stars: 66
forks: 24
openIssues: 11
closedIssues: 14
watchers: 15
contributors: 2
recentReleases: 0
createdAt: "2018-03-16T11:35:08Z"
lastCommitAt: "2026-10-24T06:52:41Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero", "under_pressure"]
healthScore: 62
undervaluedScore: 37
maintainers: ["BearishSun"]
openGraphImageUrl: "https://opengraph.githubassets.com/e030df04bbff6868ac6a8c810e0e53d6f0d3dea877b5f570b04a981ee9312f95/GameFoundry/B3DFrameworkExamples"
---

# B3D Framework Examples

A collection of small, focused projects demonstrating how to use the B3D Framework. Each example is self-contained and well commented, intended to serve both as a learning resource and as a starting point for your own projects.

# Building

The examples are bundled with the main [B3D Framework](https://github.com/GameFoundry/B3DFramework) repository as a git submodule and are built as part of the framework — there are no separate build steps. Follow the framework's [build instructions](https://github.com/GameFoundry/B3DFramework/blob/master/Documentation/GitHub/compiling.md), and the example binaries will be placed alongside the rest of the framework output.

Toolchain requirements match the parent project: Git, CMake 4.2 or newer, and a C++17 compiler. Windows builds use Visual Studio 2026 with the v145 platform toolset (MSVC 14.50 or newer) and Windows 11 SDK 10.0.26100.0 or newer. Example projects are enabled by default and can be toggled via the `B3D_BUILD_EXAMPLES` CMake option.

# Examples

* **Audio** — Importing audio clips and using audio sources and listeners.
* **Decals** — Projecting decal textures onto other surfaces.
* **GUI** — The built-in…
