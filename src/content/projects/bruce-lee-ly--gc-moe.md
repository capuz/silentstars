---
repo: "Bruce-Lee-LY/gc-moe"
name: "gc-moe"
description: "GC MoE is a CuTe DSL implementation of FP8/FP4 mixture-of-experts inference with CUDA Green Contexts for NVIDIA Hopper and Blackwell GPUs."
readmeQualityOk: true
url: "https://github.com/Bruce-Lee-LY/gc-moe"
language: "Python"
languages: ["Python"]
languagePcts: [98]
topics: ["blackwell-gpu", "cuda", "moe", "nvidia", "gc-moe", "green-context", "mega-moe", "hopper-gpu"]
stars: 27
forks: 3
openIssues: 2
closedIssues: 0
watchers: 0
contributors: 7
recentReleases: 0
createdAt: "2026-10-21T11:54:33Z"
lastCommitAt: "2026-11-11T11:20:38Z"
status: "newborn"
tags: ["hidden_gem"]
healthScore: 79
undervaluedScore: 22
maintainers: ["Bruce-Lee-LY", "moui0", "lengrongfu"]
openGraphImageUrl: "https://opengraph.githubassets.com/85c292d0f0c953ee714570e3181adf44135b46794ed0613018f2f6a2a8b1fc0c/Bruce-Lee-LY/gc-moe"
---

# GC MoE

GC MoE is a CuTe DSL implementation of FP8/FP4 mixture-of-experts inference
with CUDA Green Contexts for NVIDIA Hopper and Blackwell GPUs. It overlaps
expert-parallel token dispatch with
Tensor Core computation, then combines the expert outputs through a CUDA Graph
with three kernel nodes (four or five for SM90 fused SE).
The operator supports routed experts and optional fused shared
experts (SE), with FP8 activations, packed FP4 routed weights, FP8 shared
weights and BF16 outputs.

GPU kernels are JIT compiled on first use. Installation builds a Python wheel;
it does not compile CUDA kernels. The current package version is `0.6.1`.

## Performance

Decode latency comparing GC MoE with Mega MoE using CUDA Graph replay on eight
or 32 GPUs. Each point uses 1–256 tokens per rank; total tokens equal eight or
32 times the per-rank count. The figures use the measurements recorded in the
linked reports.

### Hopper

#### H20

DSV4.1-Flash on eight NVIDIA H20 GPUs.

##### Routed experts (non-SE)

[Full H20 non-SE accuracy and performance data](https://github.com/Bruce-Lee-LY/gc-moe/blob/HEAD/docs/h20_gc_moe.md).

##### Fused shared experts (SE)

[Full H20 SE accuracy and…
