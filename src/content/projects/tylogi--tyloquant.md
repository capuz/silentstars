---
repo: "Tylogi/TyloQuant"
name: "TyloQuant"
description: "Get more intelligence from every bit. Better quantization formats and smarter calibration let larger, stronger models run smoothly on the hardware you already own."
readmeQualityOk: true
url: "https://github.com/Tylogi/TyloQuant"
language: "Python"
languages: ["Python", "C++"]
languagePcts: [50, 31]
topics: ["apple-silicon", "cuda", "deepseek", "gemma", "gguf", "llm", "llm-inference", "llm-quantization", "local-llm", "low-bit"]
stars: 69
forks: 5
openIssues: 1
closedIssues: 1
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-07-24T16:57:46Z"
lastCommitAt: "2026-08-20T03:55:50Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 30
maintainers: ["DisOOM", "xrj-com", "Value99"]
openGraphImageUrl: "https://opengraph.githubassets.com/a42e90b2a521dd560cad208b1e75a1485cf4c186ea63097f0162380195e51104/Tylogi/TyloQuant"
---

# TyloQuant MFQ

**Neuron-anchored mixed-format quantization and high-fidelity LLM inference**

**Every Bit. Maximum Fidelity.**

**Carry more intelligence in fewer bits, enabling frontier models to run efficiently across hardware and on every device.**

NINT · NVQ/NPQ · NEPQ · TPQ · Expert-Wise MoE · CUDA/C++ Runtime

</div>

  <strong>English</strong> | <a href="./README.zh-CN.md">中文</a>
</p>

</p>

## Result at a Glance

### DeepSeek-V4-Flash-0731

The official-0731 WikiText-2 evaluation covers 573 chunks and 146,115 scored
tokens at `ctx=512`. The released 77.519 GiB S tier records `0.313576` Mean
KLD and `82.2913%` same-top. The 88.007 GiB M and 98.007 GiB L tiers record
`0.244488` / `84.5300%` and `0.201444` / `86.0753%`, respectively. Across the
three nearest-size UD comparisons, MFQ reduces Mean KLD by **34.24–51.42%**.

### Qwen3.5-9B: disk size vs. Mean KLD

The full WikiText-2 evaluation uses 145 chunks and 148,335 scored tokens
against the same BF16 reference. MFQ improves raw Mean KLD at every matched
precision tier shown above.

### Qwen3.6-27B: disk size vs. quality

The aligned `ubatch=2048` evaluation compares current, matched-size MFQ files
with their Unsloth…
