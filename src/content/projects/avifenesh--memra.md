---
repo: "avifenesh/memra"
name: "memra"
description: "Memra is a Rust + CUDA LLM inference engine with hand-written kernels, NVFP4 and mixed-precision execution, and correctness gates scoped to each model and GPU"
readmeQualityOk: true
url: "https://github.com/avifenesh/memra"
homepage: "https://tiyuvta.ai"
language: "Rust"
languages: ["Rust", "OpenEdge ABL"]
languagePcts: [30, 30]
topics: ["blackwell", "cuda", "deepseek", "gguf", "glm", "inference", "inference-engine", "llm", "llm-serving", "mixture-of-experts"]
stars: 5
forks: 1
openIssues: 90
closedIssues: 216
watchers: 1
contributors: 2
recentReleases: 10
createdAt: "2026-09-01T13:22:37Z"
lastCommitAt: "2026-11-12T05:08:41Z"
lastReleaseAt: "2026-09-07T13:43:48Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine", "under_pressure"]
healthScore: 94
undervaluedScore: 65
maintainers: ["avifenesh"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1353598712/51f10136-e0b2-461a-9579-a61b50ee8412"
---

# memra

**Memra is an LLM inference engine in Rust and CUDA for NVIDIA Blackwell: RTX PRO 6000, RTX
50-series and DGX Spark.** One binary, `memra-server`, serves the OpenAI and Anthropic APIs from
hand-written NVFP4 and mixed-precision kernels, with no Python between the request and the GPU.
Built by [Avi Fenesh](https://github.com/avifenesh) at [tiyuvta](https://tiyuvta.ai).

[Project status](#project-status) · [Quick start](#quick-start) · [What runs where](#what-runs-where) ·
[How it works](#how-it-works) · [Evidence and limits](#evidence-and-limits) ·
[Documentation](#documentation) · [Contributing](#contributing) · [License](#license)

- **Defaults per device.** Where an interleaved A/B on a card finds a different winner, a plain
  `memra-server` on that card runs it. For example, a cold prompt of 1,024 tokens or more drafts at
  K=2 on the RTX 5090 Laptop GPU and the RTX PRO 6000 Max-Q, and at K=3 elsewhere
  ([decision](https://github.com/avifenesh/memra/blob/HEAD/docs/decisions/SPEC-K-COLD-LONG-K2.md)).
- **Exactness gates per model and card.** Before every tag, and for every push that reaches
  `sm_120a` or `sm_121a`, speculative decoding on the gated checkpoints must…
