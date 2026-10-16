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
stars: 52
forks: 26
openIssues: 97
closedIssues: 326
watchers: 2
contributors: 21
recentReleases: 0
createdAt: "2025-04-21T21:11:17Z"
lastCommitAt: "2026-10-16T08:10:05Z"
lastReleaseAt: "2026-03-16T13:17:51Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 95
undervaluedScore: 58
maintainers: ["pnn64"]
openGraphImageUrl: "https://opengraph.githubassets.com/e4b3cc1854845808e5107b93e8bc028078bb1d351c9e5990f1f94fc11047dff2/pnn64/deadsync"
---

DeadSync, as in "dead on sync", is a StepMania/ITG engine with Vulkan/OpenGL backends, focused on perfect sync and competitive-level performance. Cross-platform: Windows / Linux / BSD / macOS – x86_64 & ARM64.
⚠️ <b>DeadSync is under heavy development. Bugs are expected, features may change, and things *will* break. You have been warned.</b>

## Prerequisites

Before building, ensure you have the following installed on your system:

1.  **Rust**: Install via [rustup](https://rustup.rs/).
2.  **Vulkan SDK**: Download and install the SDK for your operating system from the [LunarG website](https://www.lunarg.com/vulkan-sdk/).

### Windows build dependencies

-   **CMake**: Install from [cmake.org](https://cmake.org/download/).
-   **Ninja**: Install from [ninja-build.org](https://ninja-build.org/).

#### Windows 7 builds

Use the Windows 7 target so unsupported Windows APIs are excluded:

```powershell
rustup toolchain install nightly --component rust-src
cargo +nightly build -Z build-std=std,panic_abort --release --locked --target x86_64-win7-windows-msvc --bin deadsync
scripts/check-win7-imports.ps1 -Path target/x86_64-win7-windows-msvc/release/deadsync.exe
```

For 32-bit builds,…
