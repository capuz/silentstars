---
repo: "doyaGu/NeMo2"
name: "NeMo2"
description: "Reimplemented Virtools Engines"
readmeQualityOk: true
url: "https://github.com/doyaGu/NeMo2"
language: "CMake"
languages: ["CMake", "C++"]
languagePcts: [52, 24]
topics: ["game-engine", "reverse-engineering", "virtools"]
stars: 6
forks: 1
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2025-11-19T02:22:42Z"
lastCommitAt: "2026-11-13T04:40:21Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 70
undervaluedScore: 41
maintainers: ["doyaGu"]
openGraphImageUrl: "https://opengraph.githubassets.com/335a7b8f54b3385e6fec77c81c45a1669c8932891eabb5fca70bf918c9c7edcf/doyaGu/NeMo2"
---

# NeMo2

NeMo2 is a C++ reimplementation of the Virtools runtime. It includes the behavior
engine, math library, SDL_GPU rasterizer, input and sound managers, file readers,
and building blocks.

## Build

Requirements: CMake 3.25+, SDL3 3.4.20+, and a C/C++ toolchain. Linux and macOS
presets use Ninja; Windows presets use Visual Studio.

```bash
git clone --recurse-submodules https://github.com/doyaGu/NeMo2.git
cd NeMo2
cmake --preset linux-x64-runtime
cmake --build --preset linux-x64-runtime-release
```

Choose the preset for your platform and architecture: `windows-x86`,
`windows-x64`, `windows-arm64`, `linux-x64`, `linux-arm64`, `macos-x64`, or
`macos-arm64`, followed by `-runtime` or `-static`. Set `CMAKE_PREFIX_PATH` when
SDL3 is outside the default package search path.

After updating the repository, initialize its nested dependencies:

```bash
git submodule update --init --recursive
```

See [BUILD.md](https://github.com/doyaGu/NeMo2/blob/HEAD/BUILD.md) for the complete preset matrix, dependency setup,
staging, and incremental builds.

## Modules

| Path | Repository | Purpose |
|------|------------|---------|
| `Source/VxMath` | [VxMath](https://github.com/doyaGu/VxMath) |…
