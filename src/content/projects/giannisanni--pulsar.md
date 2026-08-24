---
repo: "giannisanni/pulsar"
name: "pulsar"
description: "SSD-streaming inference engine for giant MoE models (Rust + CUDA). GLM 5.2 743B at 2 tok/s and Hy3 295B at 7 tok/s on two consumer 16GB GPUs. Zero-config multi-GPU: measures PCIe bandwidth, places attention and hot experts where they fit."
readmeQualityOk: true
url: "https://github.com/giannisanni/pulsar"
language: "Rust"
languages: ["Rust"]
languagePcts: [59]
topics: ["cuda", "gguf", "glm", "inference-engine", "llm", "local-llm", "mixture-of-experts", "moe", "multi-gpu", "quantization"]
stars: 211
forks: 27
openIssues: 5
closedIssues: 5
watchers: 1
contributors: 5
recentReleases: 0
createdAt: "2026-07-13T04:08:14Z"
lastCommitAt: "2026-08-24T04:23:05Z"
status: "newborn"
tags: ["solo_builder"]
healthScore: 89
undervaluedScore: 25
maintainers: ["giannisanni", "FearL0rd"]
openGraphImageUrl: "https://opengraph.githubassets.com/487bb52973f971292c97a1da5963f9a78bb000dd1e3a3abca994c635e3cc5971/giannisanni/pulsar"
---

# Pulsar

An inference engine for giant Mixture-of-Experts models on hardware that
has no business running them. The routed experts live on NVMe and stream
per token; everything that makes decisions stays resident in VRAM. No
llama.cpp anywhere in the stack.

Successor to [NeutronStar](https://github.com/giannisanni/neutronstar),
rebuilt as its own engine in Rust + CUDA instead of a C fork. A pulsar is
a neutron star that spins fast and emits beams.

## What it does today

Eleven model architectures running on consumer GPUs: **Hy3 295B**
(hy-v3, GQA), **GLM-5.2 743B** (glm-dsa, MLA + DSA sparse attention),
**Kimi K2.7 1T** (deepseek2, MLA + YaRN), **MiniMax M3** (partial
rotary, swiglu_oai), **Gemma 4 26B-A4B** (interleaved sliding-window
attention, dual GELU FFN), **TML Inkling 1T** (no rope, learned
relative-position bias, shortconv streams, sink router; supported the
day after release), **Qwen3-235B-A22B** (qwen3moe, softmax router;
correct output on its first-ever run), **DeepSeek-V4-Flash 284B**
(deepseek4: 4-stream hyper-connection residual with Sinkhorn gates,
sink attention over a sliding window plus streaming compressed KV,
fp8/fp4 cache quantization-aware sims, token-id…
