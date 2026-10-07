---
repo: "RobTand/prismaquant"
name: "prismaquant"
description: "Mixed-precision quantization for LLMs. Every layer refracts into a different format based on its sensitivity. Native compressed-tensors export, validated on Qwen3.6-35B-A3B MoE with MTP speculative decoding."
readmeQualityOk: true
url: "https://github.com/RobTand/prismaquant"
language: "Python"
languages: ["Python"]
languagePcts: [98]
stars: 103
forks: 17
openIssues: 86
closedIssues: 1151
watchers: 2
contributors: 8
recentReleases: 10
createdAt: "2026-04-12T07:47:05Z"
lastCommitAt: "2026-10-07T10:31:16Z"
lastReleaseAt: "2026-08-02T09:57:17Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 98
undervaluedScore: 37
maintainers: ["RobTand"]
openGraphImageUrl: "https://opengraph.githubassets.com/2d4f138b8c6a200de0d0338c02b651f0cb4f8fa24e4130f888c5e1bef131291e/RobTand/prismaquant"
---

# PrismaQuant

**Mixed-precision LLM quantization that chooses the right format for every weight matrix, selected on real end-to-end KL — shipped as artifacts that stock inference engines serve on an unforked runtime.**

PrismaQuant's allocator is **AURA** (*Production-Faithful KL–Fisher Allocation*): a per-Linear cost model built from KL-Fisher probes of the full model multiplied against the *production-rendered* weight error — the exact bytes that ship — solved as a multi-choice knapsack, and gated by real KL measured on a held-out split before anything is published. Three output containers:

- **`compressed-tensors`** — vanilla vLLM serves it natively (`vllm serve $WORK_DIR/exported`), no custom kernels. NVFP4 / FP8 / BF16 per Linear, CUTLASS kernels on Blackwell.
- **GGUF** — llama.cpp *and* vLLM (via the GGUF plugin) serve the same file, again with no PrismaQuant kernels. Full k-quant + IQ menu, per-tensor mixed, imatrix-weighted. This is how a 295B MoE fits on one 128 GB box.
- **Tessera** — the Tessera trellis wire, served by **Tessera's own** out-of-tree vLLM plugin (`tessera.serving`, `quant_method = "tessera"`), using native kernels only. Still an unforked vLLM: install…
