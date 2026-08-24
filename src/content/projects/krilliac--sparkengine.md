---
repo: "Krilliac/SparkEngine"
name: "SparkEngine"
description: "A free, open-source C++23 3D game engine for FPS and beyond — DirectX 12, Vulkan, Jolt Physics, ECS, ImGui editor, AngelScript scripting"
readmeQualityOk: true
url: "https://github.com/Krilliac/SparkEngine"
language: "C++"
languages: ["C++"]
languagePcts: [95]
topics: ["3d", "3d-game-engine", "angelscript", "cpp", "directx", "ecs", "fps", "game-development", "game-engine", "gamedev"]
stars: 27
forks: 1
openIssues: 0
closedIssues: 7
watchers: 2
contributors: 2
recentReleases: 0
createdAt: "2025-07-26T14:07:25Z"
lastCommitAt: "2026-08-24T04:24:00Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 97
undervaluedScore: 60
maintainers: ["Krilliac", "github-actions[bot]", "claude"]
openGraphImageUrl: "https://opengraph.githubassets.com/0940e9f354b0f4ef698e4dcd393369a9c5e8e2cf91e7a0a8ffcf2c87ae886b40/Krilliac/SparkEngine"
discussionCount: 1
---

# Spark Engine

A C++23 open-source 3D game engine with a full RHI abstraction layer, ECS (EnTT), Jolt Physics, AngelScript scripting, and an ImGui-based editor. Originally built around first-person shooters, it now includes genre templates for RPGs, MMOs, RTS, racing, open-world, and platformers.

> 🌐 **Website now live:** [sparkengine.dev](https://sparkengine.dev/)

---

## Getting Started

SparkEngine is currently distributed as source. No versioned installer or
prebuilt release has been published yet; the release-readiness gates remain
authoritative. The in-tree [installer documentation](https://github.com/Krilliac/SparkEngine/blob/HEAD/SparkInstaller/README.md)
describes development and packaging workflows, not an available download.

**Build from source:**

```bash
git clone --recurse-submodules https://github.com/Krilliac/SparkEngine.git
cd SparkEngine

# Windows
.\generate.bat -g "Visual Studio 17 2022" release
.\build.ps1 -config Release -editor -angelscript

# Linux / macOS
./generate.sh release -g Ninja
./build.sh release
```

Visual Studio and Ninja Multi-Config builds keep binaries isolated under
`build/bin/<Config>` (for example,…
