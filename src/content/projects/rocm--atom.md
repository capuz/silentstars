---
repo: "ROCm/ATOM"
name: "ATOM"
description: "AiTer Optimized Model"
readmeQualityOk: true
url: "https://github.com/ROCm/ATOM"
language: "Python"
languages: ["Python"]
languagePcts: [82]
stars: 168
forks: 139
openIssues: 88
closedIssues: 155
watchers: 5
contributors: 2223
recentReleases: 4
createdAt: "2025-11-07T03:22:41Z"
lastCommitAt: "2026-08-31T09:53:36Z"
lastReleaseAt: "2026-07-04T17:22:35Z"
status: "thriving"
tags: ["fork_magnet"]
healthScore: 90
undervaluedScore: 44
maintainers: ["ZhangLirong-amd", "PerryZhang01", "valarLip"]
openGraphImageUrl: "https://opengraph.githubassets.com/b7833df13ee37447e74d2d3a369797e6a3d9d1c418f6eadccdd6319c07cc5553/ROCm/ATOM"
---

</div>

--------------------------------------------------------------------------------

**ATOM** (AiTer Optimized Model) is a lightweight vLLM-like implementation, focusing on integration and optimization based on [AITER](https://github.com/ROCm/aiter).

## 📢 News

- **[2026/08]** ATOM now supports **Qwen3.8** (`Qwen3_5MoeForCausalLM`, text-only MoE). The [amd/Qwen3.8-2.4T-A95B-Quark-MXFP4](https://huggingface.co/amd/Qwen3.8-2.4T-A95B-Quark-MXFP4) checkpoint, whose MoE (expert) weights are quantized to MXFP4, runs directly on a single 8-rank MI355 machine.
- **[2026/07] Featured AMD Developer Article:** [Day 0 Kimi-K3 Inference Deployment with ATOM on AMD Instinct MI355X GPUs](https://www.amd.com/en/developer/resources/technical-articles/2026/kimi-k3-on-amd-instinct-gpus.html) walks through Day 0 deployment of the 2.78T-parameter Kimi-K3 (KDA + Gated MLA) on a single 8x MI355X node with TP8 — why the ~1.56 TB checkpoint fits, how the weights are distributed under TP8, and how to bring the model up with ATOM and run a minimal correctness check. See [Kimi-K3 recipe](https://github.com/ROCm/ATOM/blob/HEAD/recipes/Kimi-K3.md).
- **[2026/07]** ATOM now supports **DeepSeek-V4-Pro…
