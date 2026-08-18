---
repo: "LostBeard/SpawnDev.ILGPU"
name: "SpawnDev.ILGPU"
description: ".Net GPU compute for the browser and desktop. Write once, run on WebGPU, WebGL, Wasm, CUDA, OpenCL, and CPU"
readmeQualityOk: true
url: "https://github.com/LostBeard/SpawnDev.ILGPU"
homepage: "https://lostbeard.github.io/SpawnDev.ILGPU/"
language: "C#"
languages: ["C#"]
languagePcts: [92]
topics: ["blazor", "blazor-webassembly", "gpgpu-computing", "ilgpu", "parallel-processing", "transpilers", "webgpu", "webworkers", "webassembly", "multithreading"]
stars: 28
forks: 5
openIssues: 0
closedIssues: 1
watchers: 1
contributors: 3
recentReleases: 2
createdAt: "2026-02-07T18:09:14Z"
lastCommitAt: "2026-08-18T04:07:37Z"
lastReleaseAt: "2026-06-20T13:27:30Z"
status: "thriving"
tags: ["solo_builder", "funded"]
healthScore: 98
undervaluedScore: 51
maintainers: ["LostBeard"]
openGraphImageUrl: "https://opengraph.githubassets.com/d317b038b6bd3271f724150d3be14aad13c316ce91efd94ef96a82011a5f3137/LostBeard/SpawnDev.ILGPU"
fundingLinks: ["GITHUB:https://github.com/LostBeard", "CUSTOM:https://github.com/LostBeard#donate-with-crypto"]
discussionCount: 2
---

# SpawnDev.ILGPU

> 💜 **Built and maintained by one independent developer** — no company, no overhead, just code. If SpawnDev.ILGPU saves you time, please consider [**sponsoring its development »**](https://github.com/sponsors/LostBeard). Sponsorship is what keeps it alive and maintained.

**Run [ILGPU](https://github.com/m4rs-mt/ILGPU) C# kernels on WebGPU, WebGL, Wasm, Cuda, OpenCL, and CPU - from a single codebase.**  
Write parallel compute code in C# and let the library pick the best available backend automatically. In the browser, three backends (WebGPU, WebGL, Wasm) bring GPU-accelerated compute to virtually every modern browser. On desktop and server, ILGPU's native Cuda and OpenCL backends are available alongside CPU. The same async extension methods work everywhere.

> **Your existing ILGPU kernels run in the browser with zero changes to the kernel code - and the same code runs on desktop too.**

## Recent Highlights

**4.16.2 (newest):** **WebGPU register-class per-query attention is now possible.** Two WGSL codegen fixes unblock a kernel that keeps its per-thread accumulator in registers (a compile-time-const `new float[T]` that scalar-replaces) and reduces a partial…
