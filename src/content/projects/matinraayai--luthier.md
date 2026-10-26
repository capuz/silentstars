---
repo: "matinraayai/Luthier"
name: "Luthier"
description: "Luthier, a GPU binary instrumentation tool for AMD GPUs"
readmeQualityOk: true
url: "https://github.com/matinraayai/Luthier"
language: "C++"
languages: ["C++"]
languagePcts: [86]
stars: 30
forks: 7
openIssues: 33
closedIssues: 34
watchers: 7
contributors: 19
recentReleases: 0
createdAt: "2022-03-24T22:42:28Z"
lastCommitAt: "2026-10-26T18:05:56Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "hidden_gem"]
healthScore: 85
undervaluedScore: 54
maintainers: ["matinraayai", "Iasonaskrpr"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/473795568/4b0d99a1-190e-465c-8cbe-4561ef7a5016"
discussionCount: 1
---

# Luthier

Luthier is a dynamic binary instrumentation framework for writing tools targeting AMD GPUs.
It supports (or aims to support):

- Analyzing the content of the code objects loaded on the GPU at runtime; This includes kernels, device functions,
  static variables, etc.
- Inserting calls to (multiple) device instrumentation functions.
- Removal/modification/addition of instructions.
- Querying/modification of the GPU's ISA visible state.

## What AMD GPU Applications Luthier Supports?

Luthier supports any [ROCm](https://www.amd.com/en/products/software/rocm.html)-backed application on Linux.
This includes any applications that uses HIP, OpenMP, OpenCL, or even the 
[ROCM runtime](https://github.com/RadeonOpenCompute/ROCR-Runtime/) directly to load and launch kernels on the GPU,
regardless of how their module (code object) was created and loaded.

Luthier does not support the [Platform Abstraction Layer (PAL)](https://github.com/GPUOpen-Drivers/pal)-based 
applications or Windows.

## How Can I get started?

For more information on how to build, get started, and contribute, see the [documentation](https://github.com/matinraayai/Luthier/blob/HEAD/docs) folder.
To report…
