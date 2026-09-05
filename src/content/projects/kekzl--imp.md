---
repo: "kekzl/imp"
name: "imp"
description: "An LLM server for a single RTX 5090, built for agent workloads: tool calls, long conversations, reasoning, and many requests at once. One of the fastest engines on this card, at batch 1 and at dozens of concurrent streams, with the numbers in the repo."
readmeQualityOk: true
url: "https://github.com/kekzl/imp"
language: "Cuda"
languages: ["Cuda", "C++"]
languagePcts: [47, 43]
topics: ["blackwell", "cpp", "cuda", "gguf", "llm", "mixture-of-experts", "quantization", "rtx-5090", "qwen", "gated-deltanet"]
stars: 39
forks: 3
openIssues: 0
closedIssues: 302
watchers: 1
contributors: 3
recentReleases: 1
createdAt: "2026-02-23T01:02:56Z"
lastCommitAt: "2026-09-05T07:48:41Z"
lastReleaseAt: "2026-06-09T13:53:09Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 100
undervaluedScore: 42
maintainers: ["kekzl"]
openGraphImageUrl: "https://opengraph.githubassets.com/ffd4927c25c5a474627c237cf32f56aadbaea36fbb2a1ffa39885b4afb926479/kekzl/imp"
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
| you have one GPU: one user, an agent loop, or a few dozen concurrent streams | you need more than one GPU, or a fleet of them |
| you want NVFP4 weights served natively, without dequant | you need a portable engine across a fleet |
| you want an Anthropic-compatible endpoint without a proxy | you need…
