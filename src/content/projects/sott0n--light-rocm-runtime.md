---
repo: "sott0n/light-rocm-runtime"
name: "light-rocm-runtime"
description: "A light ROCm runtime"
readmeQualityOk: true
url: "https://github.com/sott0n/light-rocm-runtime"
language: "C++"
languages: ["C++"]
languagePcts: [70]
stars: 11
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2026-06-08T12:55:10Z"
lastCommitAt: "2026-09-18T14:03:52Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 79
undervaluedScore: 41
maintainers: ["sott0n"]
openGraphImageUrl: "https://opengraph.githubassets.com/fa83d95b287f0a7504095a95023fc0577c17f84003e3702461dc368950814ff9/sott0n/light-rocm-runtime"
---

# light-rocm-runtime

A small experimental runtime for launching AMD GPU kernels from ROCm code
objects.

`light-rocm-runtime` aims to stay small while providing a low-overhead
dispatcher and predictable resource manager for compiler-generated AMD GPU
workloads. Compiler or executor layers are expected to own operator lowering,
kernel generation, scheduling, and tensor graph semantics; this runtime owns the
execution path for loading code objects, managing resources, dispatching
kernels, and synchronizing work.

The first target is intentionally narrow:

- Linux with AMDGPU and an installed ROCm stack
- load a pre-built `.hsaco`
- allocate device memory
- copy host/device buffers
- launch one kernel
- synchronize and copy results back

This project is not trying to replace the full HIP runtime. The implementation
uses the HSA/ROCr API directly and keeps a small public C ABI.

In the longer compiler-oriented stack, the runtime is the boundary between
generated kernel bundles and the AMD GPU. Its performance role is to keep
dispatch, code object, memory, and synchronization overhead predictable; kernel
math performance and pipeline scheduling remain the responsibility of compiler…
