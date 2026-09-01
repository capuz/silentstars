---
repo: "pnn64/deadsync"
name: "deadsync"
description: "DeadSync is an ITG/StepMania engine with Vulkan/OpenGL backends, focused on perfect sync and competitive-level performance."
readmeQualityOk: true
url: "https://github.com/pnn64/deadsync"
homepage: "https://www.deadsync.dance/"
language: "Rust"
languages: ["Rust"]
languagePcts: [99]
stars: 50
forks: 23
openIssues: 42
closedIssues: 304
watchers: 2
contributors: 19
recentReleases: 0
createdAt: "2025-04-21T21:11:17Z"
lastCommitAt: "2026-09-01T08:47:10Z"
lastReleaseAt: "2026-03-16T13:17:51Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 97
undervaluedScore: 60
maintainers: ["pnn64"]
openGraphImageUrl: "https://opengraph.githubassets.com/7e7ade859b2b8fb0b07b3dce0fa9bfa53d00b37a350dee36608935c56696f3d4/pnn64/deadsync"
---

</div>
<hr>

DeadSync, as in "dead on sync", is a StepMania/ITG engine with Vulkan/OpenGL backends, focused on perfect sync and competitive-level performance. Cross-platform: Windows / Linux / BSD / macOS – x86_64 & ARM64.
<br><br>
⚠️ <b>DeadSync is under heavy development. Bugs are expected, features may change, and things *will* break. You have been warned.</b>
</div>
<hr>

## Prerequisites

Before building, ensure you have the following installed on your system:

1.  **Rust**: Install via [rustup](https://rustup.rs/).
2.  **Vulkan SDK**: Download and install the SDK for your operating system from the [LunarG website](https://www.lunarg.com/vulkan-sdk/).

### Windows build dependencies

-   **CMake**: Install from [cmake.org](https://cmake.org/download/).
-   **Ninja**: Install from [ninja-build.org](https://ninja-build.org/).

### Linux build dependencies (Ubuntu/Debian)
```bash
sudo apt update
sudo apt install --no-install-recommends build-essential clang cmake pkg-config libclang-dev libdbus-1-dev libudev-dev libasound2-dev libpipewire-0.3-dev libvulkan-dev libgl1-mesa-dev
```

### macOS build dependencies (Homebrew)

Install the toolchain and native libraries:
```bash…
