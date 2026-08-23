---
repo: "kekzl/imp"
name: "imp"
description: "From-scratch C++23/CUDA inference engine for the NVIDIA RTX 5090 (sm_120a). The best single-GPU backend for agentic AI: tool calling, long-context loops, reasoning and concurrent sub-agents. Decode beats llama.cpp b9976 by 42-48% on dense GGUF (measured 2026-07-12), at-or-ahead of vLLM on NVFP4. 100% written by Claude Code."
readmeQualityOk: true
url: "https://github.com/kekzl/imp"
language: "Cuda"
languages: ["Cuda", "C++"]
languagePcts: [47, 43]
topics: ["blackwell", "cpp", "cuda", "gguf", "llm", "mixture-of-experts", "quantization", "rtx-5090", "qwen", "gated-deltanet"]
stars: 36
forks: 2
openIssues: 40
closedIssues: 253
watchers: 1
contributors: 3
recentReleases: 2
createdAt: "2026-02-23T01:02:56Z"
lastCommitAt: "2026-08-23T04:09:09Z"
lastReleaseAt: "2026-06-09T13:53:09Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 97
undervaluedScore: 42
maintainers: ["kekzl"]
openGraphImageUrl: "https://opengraph.githubassets.com/443053f8f64658960a900175f50b5580a72fb916af4170f71e3f68faa80f1dd2/kekzl/imp"
---

</p>

</p>

---

**imp is an LLM inference engine that targets exactly one chip: the NVIDIA RTX 5090.**

**What it is**

- A from-scratch C++23/CUDA engine for consumer Blackwell (`sm_120a`), with its own GGUF and SafeTensors loaders, tokenizer, paged KV cache and kernels.
- A server that speaks **both** the OpenAI and the Anthropic APIs natively, so an agent stack written against either runs without a shim.
- Also a C library and a CLI, not only a server.

**What it is not**

- Portable. There is no CPU path, no other GPU, no fallback.
- A multi-GPU or datacenter-batching engine.
- A supported product. One author, no SLO, no support rotation.

## Is imp for you?

| Yes, if | No, if |
|---|---|
| you run an RTX 5090 / 5080 / 5070 Ti / PRO 6000 | you have anything else, including datacenter Blackwell ([why](https://github.com/kekzl/imp/blob/HEAD/docs/internals/ARCHITECTURE.md)) |
| you have one GPU and one user, or an agent loop | you serve high-concurrency batched traffic |
| you want NVFP4 weights served natively, without dequant | you need a portable engine across a fleet |
| you want an Anthropic-compatible endpoint without a proxy | you need SLOs, a support contract or a…
