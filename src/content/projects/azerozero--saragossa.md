---
repo: "azerozero/saragossa"
name: "saragossa"
description: "Fast pure-Rust Metal LLM inference engine for Apple Silicon — beats mlx_lm on MoE"
readmeQualityOk: true
url: "https://github.com/azerozero/saragossa"
language: "Rust"
languages: ["Rust"]
languagePcts: [87]
stars: 8
forks: 0
openIssues: 13
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-06-11T20:03:38Z"
lastCommitAt: "2026-11-05T08:06:05Z"
lastReleaseAt: "2026-07-31T07:30:22Z"
status: "thriving"
tags: ["solo_builder", "under_pressure"]
healthScore: 80
undervaluedScore: 36
maintainers: ["Destynova2"]
openGraphImageUrl: "https://opengraph.githubassets.com/60b61c274d310147c85bd3e567cd57263bdb7f35930c96afab3f91e164474c2b/azerozero/saragossa"
---

# saragossa

**Pure-Rust Metal inference engine for Apple Silicon.** Raw `metal-rs` kernels,
no Python, no MLX, no CoreML. LLM, speech-to-text and text-to-speech in a single
binary — usable as a library or behind the OpenAI-compatible HTTP server
`saragossa serve`.

## Where it fits

Among inference backends (Ollama, llama.cpp, vLLM, SGLang…), saragossa occupies
the **single-user latency × Apple Silicon** quadrant:

- vLLM / SGLang / TGI / LMDeploy require an NVIDIA GPU; here everything is native
  Metal.
- Ollama and llama.cpp are general-purpose and cross-platform; saragossa is tuned
  for **one** target (the Apple Silicon GPU, resident decode). On MoE **decode**
  at comparable quantization it is competitive with — and can exceed — `mlx_lm`
  (measured; benchmark on your own hardware).
- Optimized for local latency (agents, copilots, voice loops), not multi-tenant
  throughput: the server is single-threaded by design.
- A block-wise warm prefix cache with GPU snapshots (same family of ideas as
  SGLang's RadixAttention): multi-turn sessions don't re-pay for their history.

## Capabilities

| Domain | Details |
|---|---|
| LLM | Qwen3.5 / 3.6 / 3.8 dense and MoE (27B / 30B /…
