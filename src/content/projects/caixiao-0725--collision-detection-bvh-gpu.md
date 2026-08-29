---
repo: "caixiao-0725/collision-detection-bvh-GPU"
name: "collision-detection-bvh-GPU"
description: "use cuda to do collison detection with bvh."
readmeQualityOk: true
url: "https://github.com/caixiao-0725/collision-detection-bvh-GPU"
language: "C++"
languages: ["C++", "Cuda"]
languagePcts: [47, 32]
stars: 9
forks: 2
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2023-09-08T07:19:51Z"
lastCommitAt: "2026-08-29T10:21:33Z"
status: "thriving"
tags: []
healthScore: 80
undervaluedScore: 37
maintainers: ["caixiao-0725"]
openGraphImageUrl: "https://opengraph.githubassets.com/98b5859df9640d32858219cafc8e8176a40aa903b5793c4474aac8712830a3fe/caixiao-0725/collision-detection-bvh-GPU"
---

# GPU BVH Collision Detection

> **One tree. The same contacts. Up to 42% lower exact mesh self-collision query latency.**

On the validated RTX 5090 benchmark, the single edge-face hierarchy returns exactly the same `108,300` vertex-face and `296,873` edge-edge pairs as the conventional face-tree plus edge-tree pipeline, while delivering:

| Performance highlight | Measured result | Comparison |
| --- | ---: | --- |
| Exact VF+EE fixed query | **up to 42% lower latency** | Single EF tree vs. dual tree, same backend |
| Hierarchy build | **up to 2.2x faster** | Single EF tree vs. dual tree, same backend |
| Topology-preserving refit | **up to 2.5x faster** | Single EF tree vs. dual tree, same backend |
| Point fixed-slot query | **29% lower latency** | Quantized stackless vs. conventional CUDA LBVH |
| CUDA traversal-node size | **75% smaller** | 16-byte quantized node vs. 64-byte LBVH node |

These are Nsight Systems medians for the documented workloads, not universal claims. Every comparison uses identical inputs and validated outputs; allocation, input preparation, CPU/GPU result transfer, and validation are outside the timed ranges.

A readable CUDA/OptiX point-collision…
