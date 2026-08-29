---
repo: "Lulzx/cuda-metal"
name: "cuda-metal"
description: "CUDA compiler and runtime for Apple Silicon"
readmeQualityOk: true
url: "https://github.com/Lulzx/cuda-metal"
language: "C++"
languages: ["C++"]
languagePcts: [80]
topics: ["apple-silicon", "compiler", "cuda", "gpu", "llvm", "macos", "metal"]
stars: 159
forks: 10
openIssues: 0
closedIssues: 1
watchers: 3
contributors: 1
recentReleases: 7
createdAt: "2026-02-18T07:21:26Z"
lastCommitAt: "2026-08-29T17:27:21Z"
lastReleaseAt: "2026-08-29T11:22:23Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 99
undervaluedScore: 35
maintainers: ["Lulzx"]
openGraphImageUrl: "https://opengraph.githubassets.com/a412fc0f6f768c6a4f7930e4b1791fcddb2c6e5a9c75c2a0c321406ebfba765b/Lulzx/cuda-metal"
---

# CuMetal

CuMetal recompiles a tested subset of CUDA C++ and PTX for Apple Metal and
provides a clean-room CUDA compatibility runtime for Apple Silicon. It is
experimental: supported paths run real Metal kernels, while unsupported paths
should fail explicitly.

## Install with Homebrew

```bash
brew install lulzx/tap/cumetal
cumetal doctor
```

The tap installs the recommended Release/source-first configuration and keeps
the optional `libcuda.dylib` alias off.

## Build from source

```bash
cmake -B build -DCMAKE_BUILD_TYPE=Release
cmake --build build -j"$(sysctl -n hw.ncpu)"
bash scripts/ci_report.sh build --exclude-regex '^bench_'

build/cumetalc samples/vectorAdd/vectorAdd.cu -o vectorAdd
./vectorAdd
```

Requirements are macOS 14 or newer on Apple Silicon, CMake, LLVM 18+ libraries,
a CUDA-capable Clang 21-23 frontend, and Apple's public `metal` and `metallib`
tools. See the
[build and installation guide](https://github.com/Lulzx/cuda-metal/blob/HEAD/docs/build.md) before packaging or installing.

For a staged GPU demonstration:

```bash
bash demos/apollo/run.sh
```

Apollo requires numerical checks and `device=apple_gpu` provenance at every
stage. Other bounded…
