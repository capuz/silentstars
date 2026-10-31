---
repo: "Atlas-Inf/atlas"
name: "atlas"
description: "Atlas Inference is a dependency free lightweight inference engine meant to run LLMs on YOUR compute seamlessly. Supports GB10 and Strix Halo at the moment, hoping to expand to more!"
readmeQualityOk: true
url: "https://github.com/Atlas-Inf/atlas"
homepage: "https://atlasinference.dev"
language: "Rust"
languages: ["Rust", "Cuda"]
languagePcts: [68, 22]
topics: ["ai", "inference", "inference-engine", "llm"]
stars: 37
forks: 12
openIssues: 21
closedIssues: 22
watchers: 0
contributors: 12
recentReleases: 4
createdAt: "2026-08-24T21:31:47Z"
lastCommitAt: "2026-10-31T19:01:56Z"
lastReleaseAt: "2026-09-03T18:48:11Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 88
undervaluedScore: 46
maintainers: ["AzeezIsh", "data-angel", "devin-ai-integration[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/9b99090dd21b35fa62dbc319be7667e3d2ab03ec70de48c2d705c4d1b1f213a3/Atlas-Inf/atlas"
---

---

## ⚡ What is Atlas?

Atlas is a high-performance, pure Rust & CUDA LLM inference engine purpose-built for prosumer workstations (NVIDIA DGX Spark / GB10 SM121 and AMD Strix Halo). No Python, no PyTorch, no bloated dependency trees—just one compact binary with hand-tuned micro-kernels.

- **Sub-90s First Token**: Boots in seconds with cached weights; zero JIT compile or Python startup lag.
- **Default Flagship Qwen 3.8 27B**: Dense hybrid GDN + Attention running at 23.59 tok/s single-stream with MTP speculative decoding on a single GB10.
- **Nemotron 3.5 Lightning + DSpark**: Full bring-up of hybrid Mamba-2 SSM + MoE paired with DSpark speculative decoding drafters for sub-10ms token decode latencies.
- **Qwen 3.8 Flash-Next Support**: Stream massive ~180B hybrid MoE models inside ~90 GB resident VRAM using direct parallel `pread` NVMe offloading.
- **Turnkey Sparkrun Integration**: Launch any verified model recipe instantly with `sparkrun run @atlas/<recipe>`.
- **OpenAI & Anthropic Compatible**: Drop-in API endpoint supporting streaming, tool calling, and reasoning traces.
- **MLPerf Proven**: Official contributor to the MLPerf Inference v6.1 Edge Agentic benchmark.

---

##…
