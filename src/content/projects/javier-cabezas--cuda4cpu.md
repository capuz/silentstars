---
repo: "javier-cabezas/cuda4cpu"
name: "cuda4cpu"
description: "Run CUDA and HIP programs on CPUs, unmodified, with GCC or Clang. No GPU or CUDA toolkit needed. Debug kernels with gdb, AddressSanitizer and Valgrind, and let AI agents compile, run and check them through an MCP server."
readmeQualityOk: true
url: "https://github.com/javier-cabezas/cuda4cpu"
language: "C++"
languages: ["C++"]
languagePcts: [55]
topics: ["cpp", "cpp23", "cpu", "cuda", "debugging", "gpu-programming", "hip", "hpc", "openmp", "parallel-computing"]
stars: 8
forks: 3
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 8
createdAt: "2014-08-13T11:42:59Z"
lastCommitAt: "2026-11-24T14:05:59Z"
lastReleaseAt: "2026-11-21T20:56:00Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero", "release_machine"]
healthScore: 89
undervaluedScore: 76
maintainers: ["javier-cabezas"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/22913615/33cad8d4-12a0-43af-8304-73fd88ef1ecc"
discussionCount: 0
---

**Run CUDA and HIP programs on your CPU, unmodified, with your regular C++
compiler.** No GPU, no `nvcc`, no CUDA toolkit: GCC or Clang compile your
`.cu` files, and the kernels run as native code on every core.

```console
$ cuda4cpu-c++ -O2 vecadd.cu -o vecadd
$ ./vecadd
c[42] = 126, computed on cuda4cpu: AMD Ryzen 7 8845HS w/ Radeon 780M Graphics
```

- **Test CUDA code where there's no GPU:** in CI on GitHub's hosted runners,
  on a laptop, or in a classroom.
- **Let AI agents test the kernels they write:** `cuda4cpu-mcp`, an MCP
  server for Claude Code, Cursor or any MCP client, compiles, runs and checks
  CUDA and HIP code, and reports wrong results, missing barriers and memory
  errors at their source lines.
- **Debug kernels with the tools you already use:** gdb stops in a single CUDA
  thread, and AddressSanitizer, UBSan and Valgrind point at the kernel's
  source line. A kernel that crashes is reported with its CUDA thread and
  block.
- **Catch the bugs a GPU hides:** missing `__syncthreads()`, threads of a
  block that reach different barriers, reads of memory never written, and
  allocations never freed.
