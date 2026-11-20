---
repo: "dllu/viboceros"
name: "viboceros"
description: "Vibe-coded open source implementation of Rhinoceros in Rust"
readmeQualityOk: true
url: "https://github.com/dllu/viboceros"
language: "Rust"
languages: ["Rust", "Python"]
languagePcts: [73, 24]
stars: 9
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-09-01T03:13:32Z"
lastCommitAt: "2026-11-20T11:49:35Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 43
maintainers: ["dllu"]
openGraphImageUrl: "https://opengraph.githubassets.com/a250b2e94ffe8db5b959897af723aa3f53a54053d6aa21d47bf53049bbed017f/dllu/viboceros"
---

# Viboceros

An open-source CAD application in Rust, working toward a reimplementation of
Rhinoceros 3D. It combines usd-brep/SMLib modeling with a command-driven
egui/wgpu interface, multiple viewports, snapping, layers, groups, and undo/redo.

The project is in early development. Analytic and NURBS geometry, trimmed B-reps,
meshes, SubDs, and 3DM/STL/STEP interchange are supported with limitations; full Rhino
compatibility is still in progress.

## Build and run

The current build supports Linux with Wayland or X11. Install Rust 1.95 or
newer, CMake, a C++17 compiler, `patch`, and oneTBB development libraries
(`libtbb-dev` on Ubuntu).

```sh
GIT_LFS_SKIP_SMUDGE=1 git submodule update --init third_party/opennurbs third_party/usd-brep
cargo run --release
```

All builds link usd-brep. Set `CMAKE_BUILD_PARALLEL_LEVEL` to limit native build
jobs if needed. wgpu uses Vulkan when available.

## Documentation

[Headless Python modeling](https://github.com/dllu/viboceros/blob/HEAD/docs/python.md) covers scripting commands, selecting
geometry, exchanging files, and capturing shaded views.
