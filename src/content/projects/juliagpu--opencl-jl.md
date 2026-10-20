---
repo: "JuliaGPU/OpenCL.jl"
name: "OpenCL.jl"
description: "OpenCL Julia bindings"
readmeQualityOk: true
url: "https://github.com/JuliaGPU/OpenCL.jl"
homepage: "https://juliagpu.org/"
language: "Julia"
languages: ["Julia"]
languagePcts: [100]
topics: ["julia", "opencl"]
stars: 313
forks: 50
openIssues: 28
closedIssues: 162
watchers: 13
contributors: 49
recentReleases: 0
createdAt: "2013-10-26T21:34:26Z"
lastCommitAt: "2026-10-20T08:49:10Z"
lastReleaseAt: "2025-01-15T16:53:37Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 95
undervaluedScore: 40
maintainers: ["maleadt", "christiangnrd", "vchuravy"]
openGraphImageUrl: "https://opengraph.githubassets.com/7cf541c6576d50c3efa1dcf249621c22f918e665d1eeb87b72e6bd7cc490f77f/JuliaGPU/OpenCL.jl"
discussionCount: 2
---

# OpenCL.jl

[buildkite-img]: https://badge.buildkite.com/6b2a46bff67692115dea3ad5a275d2f80777a5a99ffe42adb0.svg?branch=main
[buildkite-url]: https://buildkite.com/julialang/opencl-dot-jl

*Julia interface for the OpenCL parallel computation API*

This package aims to be a complete solution for OpenCL programming in Julia, similar in
scope to [PyOpenCL](http://mathema.tician.de/software/pyopencl/) for Python. It provides a high level API for OpenCL to make programing
hardware accelerators, such as GPUs, FPGAs, and DSPs, as well as multicore CPUs much less
onerous.

**OpenCL.jl needs your help! If you can help maintaining this package, please reach out on
the [JuliaLang Slack](https://julialang.org/slack/) #gpu channel**

**Also note: OpenCL.jl is currently undergoing major changes. If you have old code,
developed for OpenCL.jl v0.9, please check [`NEWS.md`](https://github.com/JuliaGPU/OpenCL.jl/blob/HEAD/NEWS.md) for an overview of the
changes.**

## Installation

1. Install an OpenCL driver. You can install one system-wide, i.e., using your package
   manager, or use a JLL for a CPU back-end: `pocl_jll.jl` (all platforms), or
   `intel_opencl_rt_jll.jl` (Intel's CPU runtime, for…
