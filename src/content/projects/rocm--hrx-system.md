---
repo: "ROCm/hrx-system"
name: "hrx-system"
description: "HRX: Hip Runtime Extended"
readmeQualityOk: true
url: "https://github.com/ROCm/hrx-system"
homepage: "https://rocm.github.io/hrx-system/loom/"
language: "C"
languages: ["C", "C++"]
languagePcts: [51, 30]
stars: 71
forks: 34
openIssues: 8
closedIssues: 70
watchers: 4
contributors: 118
recentReleases: 1
createdAt: "2026-03-27T03:37:03Z"
lastCommitAt: "2026-11-06T02:44:54Z"
lastReleaseAt: "2026-10-29T04:05:32Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 98
undervaluedScore: 45
maintainers: ["benvanik"]
openGraphImageUrl: "https://opengraph.githubassets.com/bd6999f0c8d8bd031df174594b6a92ed9084b921e1e81abbfe625003a9c46043/ROCm/hrx-system"
---

# HRX System

> [!CAUTION]
> This is early-access runtime infrastructure. Expect API, packaging, and
> deployment details to move while the fork is brought up. This is not an
> official component within the ROCm stack.

The HRX System is a collection of minimal runtime components providing an
alternative implementation of HIP as it presently ships within ROCm. It
provides a common substrate for low latency, high performance integration
with AMD's GPU, NPU, and CPU products.

## What Is Included

- `runtime/`: core runtime components
- `libhrx/`: the public HRX C ABI, C++ helpers, HIP compatibility binding,
  streaming support, CTS, and debug passthrough tools.
- `build_tools/`: shared CMake/Bazel translation helpers, CI packaging
  scripts, sanitizer wiring, and common build overlays.

Project-specific build support lives with the project it serves. Runtime CMake
bootstrap and dependencies are under `runtime/build_tools/`, while libhrx owns
`libhrx/build_tools/`. Shared generator and build-system mechanics stay under
root `build_tools/`, with shared third-party CMake configuration beside the
matching Bazel overlays in `build_tools/third_party/`.

The public install exports…
