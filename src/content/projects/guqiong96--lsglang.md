---
repo: "guqiong96/Lsglang"
name: "Lsglang"
description: "Lsglang is a special extension of sglang that fully utilizes CPU and GPU computing resources with an efficient GPU parallel + NUMA parallel architecture, suitable for MOE model hybrid inference."
readmeQualityOk: true
url: "https://github.com/guqiong96/Lsglang"
homepage: "https://space.bilibili.com/625367168"
language: "Python"
languages: ["Python"]
languagePcts: [83]
topics: ["cpu", "decode", "gpu", "hybird", "inference", "model", "moe", "numa", "parallelism", "prefill"]
stars: 155
forks: 19
openIssues: 0
closedIssues: 22
watchers: 2
contributors: 1923
recentReleases: 2
createdAt: "2026-02-10T07:43:50Z"
lastCommitAt: "2026-10-23T08:46:21Z"
lastReleaseAt: "2026-07-28T13:52:25Z"
status: "thriving"
tags: []
healthScore: 99
undervaluedScore: 40
maintainers: ["guqiong96", "niehen6174", "ShangmingCai"]
openGraphImageUrl: "https://opengraph.githubassets.com/f5ec3f0465b1e6efb3c180b48a32f23b0e562819adc5914287ae46c9968815e1/guqiong96/Lsglang"
---

# Lsglang — lk_moe Hybrid Inference for sglang

Lsglang is a special extension of [sglang](https://github.com/sgl-project/sglang) that adds
**CPU-GPU hybrid (MOE) inference** on top of the latest sglang release version, fully compatible
with stock sglang.

The actual hybrid inference engine is **[lk_moe](https://pypi.org/project/lk-moe/)**, sglang/vllm
only provide the "GPU path", lk_moe provides the "hybrid path". Lsglang is the concrete integration
case of lk_moe into sglang.

> **Release policy:** Lsglang version updates are released **in sync with sglang releases** — on top of
> a fresh sglang tag we keep the code "as-is + lk_moe". We do **not** pile on extra features; unless a
> necessary bug-fix patch is required, the diff against upstream stays minimal (just the lk_moe layer).

---

Note 1: x86 CPUs with AVX2+ instruction sets and Nvidia GPUs with sm80+ architectures.

Note 2: **The first launch is slow because of JIT compilation.** Expect heavy compilation
during startup — you can see `cicc`, `cc1plus`, `ptxas` (and `nvcc`) processes in `top`.
The second launch reuses the JIT cache and starts much faster. Some models also JIT extra
kernel variants on their first request;…
