---
repo: "tr-nc/re-flora"
name: "re-flora"
description: "An experimental relaxation voxel game built in Rust with Vulkan, inviting you to cultivate a living voxel island at your own pace."
readmeQualityOk: true
url: "https://github.com/tr-nc/re-flora"
language: "Rust"
languages: ["Rust"]
languagePcts: [83]
topics: ["rust", "vulkan", "3d", "gamedev", "graphics", "rendering", "terrain-generation", "voxel-engine", "voxel-game"]
stars: 59
forks: 7
openIssues: 0
closedIssues: 1
watchers: 2
contributors: 3
recentReleases: 9
createdAt: "2025-02-18T19:58:09Z"
lastCommitAt: "2026-07-19T06:12:24Z"
lastReleaseAt: "2026-06-06T20:04:42Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 100
undervaluedScore: 58
maintainers: ["tr-nc"]
openGraphImageUrl: "https://opengraph.githubassets.com/0b7323253dd5a9a569591d378f97c60845ee26069e8430ad2c7090b27c735338/tr-nc/re-flora"
---

# Re: Flora

> Cultivate your own island ecosystem — a meditative voxel gardening game.

Re: Flora is a cozy voxel game prototype about shaping terrain, planting flora, and building a calm island atmosphere. Built with Vulkan ray tracing in Rust.

## Getting Started

**Prerequisites for building from source:**

- [Rust](https://rustup.rs/) via the pinned [`rust-toolchain.toml`](https://github.com/tr-nc/re-flora/blob/HEAD/rust-toolchain.toml)
- Vulkan-capable GPU with up-to-date drivers (RTX not required)
- Vulkan development packages:
  - Linux: `libvulkan-dev` + `vulkan-tools` (or distro equivalent)
  - Windows: [Vulkan SDK](https://vulkan.lunarg.com/sdk/home#vulkansdk)
- Slang 2025 compiler and shared library, supplied by a compatible Vulkan SDK or installed with `python3 scripts/install_slang.py`

Official release packages bundle Steam Audio and other non-system native libraries. Players only need a Vulkan-capable GPU/driver; the macOS package also bundles MoltenVK.

If your Vulkan SDK does not provide Slang, install the pinned compiler and point the build at it:

```bash
python3 scripts/install_slang.py
export SLANGC="$PWD/.tools/slang-2025.23/bin/slangc"
```

**Build and…
