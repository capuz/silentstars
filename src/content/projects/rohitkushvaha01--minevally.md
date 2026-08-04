---
repo: "RohitKushvaha01/MineVally"
name: "MineVally"
description: "A voxel game written in c++ with vulkan"
readmeQualityOk: true
url: "https://github.com/RohitKushvaha01/MineVally"
language: "C++"
languages: ["C++", "Java"]
languagePcts: [69, 29]
stars: 6
forks: 2
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 1
createdAt: "2024-08-09T04:09:52Z"
lastCommitAt: "2026-08-04T06:10:49Z"
lastReleaseAt: "2026-08-02T08:16:35Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 61
maintainers: ["RohitKushvaha01", "itsvks19"]
openGraphImageUrl: "https://opengraph.githubassets.com/bc2994ac878dc82330164e94c73cdc552d319fe8ee0c5cb2bbcd3a2935188b97/RohitKushvaha01/MineVally"
---

# MineVally

Minecraft-style voxel engine in C++20 with Vulkan.

## Tech Stack

**C++20** | **Vulkan** | **SDL2** | **ImGui** | **GLM** | **nlohmann/json**

## Structure

```
src/
  main.cpp              entry point
  core/                 engine lifecycle, event bus, config, types, block registry
  systems/
    window/             SDL2 window
    input/              keyboard, mouse, touch controller (Android)
    camera/             camera, view/proj, frustum, underwater effect
    render/             Vulkan backend, mesh creation, arenas, occlusion
    terrain/            sine-based heightmap terrain generation
    chunk/              chunk grid, gen/mesh worker pool, job queue
    ui/                 ImGui settings panel, debug overlay
    timer/              frame time stats
android/                Android Gradle project (APK build)
assets/                 blocks.json (data-driven block definitions), textures
shaders/                GLSL 450 vertex/fragment shaders
cmake/                  build helpers, shader compilation
tests/                  unit tests
third_party/            volk, imgui, nlohmann/json, FastNoiseLite, stb, SDL, GLM, glslang
```

## Assets
The textures are…
