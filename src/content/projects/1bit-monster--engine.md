---
repo: "1bit-MONSTER/engine"
name: "engine"
description: "1bit engine: local LLM inference for AMD Ryzen AI (Strix Halo) inside Lemonade. HRX with our Loom kernels on the Radeon iGPU, plus the XDNA 2 NPU; OpenAI-compatible API. Runs Qwen3.8, Zyphra ZAYA1, ternary Bonsai."
readmeQualityOk: true
url: "https://github.com/1bit-MONSTER/engine"
homepage: "https://1bit.gg/"
language: "C++"
languages: ["C++", "Python", "Shell"]
languagePcts: [48, 20, 20]
topics: ["amd", "gguf", "llama-cpp", "llm-inference", "local-llm", "npu", "openai-api", "quantization", "qwen", "ryzen-ai"]
stars: 5
forks: 2
openIssues: 5
closedIssues: 47
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-09-22T18:48:20Z"
lastCommitAt: "2026-10-23T08:46:32Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 98
undervaluedScore: 65
maintainers: ["bong-water-water-bong", "Copilot"]
openGraphImageUrl: "https://opengraph.githubassets.com/188448535b0a2478fb855769e40782c3484aa17796f2c743022285f33998b996/1bit-MONSTER/engine"
discussionCount: 7
---

# 1bit engine

**Documentation:** [1bit.gg](https://1bit.gg/) · **Measured results:** [wiki](https://github.com/1bit-MONSTER/engine/wiki) · **Community:** [Discord](https://discord.gg/fa5m4Vawpa)

**Site:** [github.com/1bit-MONSTER/site](https://github.com/1bit-MONSTER/site) (builds 1bit.gg from this repository's README.md and docs/)

**The 1bit engine is AMD's HRX runtime, our own HIP kernels on the Strix Halo GPU, and our NPU
engine, all inside [Lemonade](https://github.com/lemonade-sdk/lemonade).** On a Ryzen AI Max+ 395,
every graph node of every model and mode we test runs on the GPU: 43 of 43 configurations in the
census, with 0 nodes on the CPU ([#476](https://github.com/1bit-MONSTER/engine/pull/476),
[#480](https://github.com/1bit-MONSTER/engine/pull/480),
[#481](https://github.com/1bit-MONSTER/engine/pull/481)). Qwen3.8-27B (UD-Q4_K_XL) with MTP
speculative decoding decodes at 36.0 / 26.8 / 29.9 tok/s on code / prose / short chats
([#487](https://github.com/1bit-MONSTER/engine/pull/487)).

Lemonade stays the server you talk to (its catalog, downloads, router and UI). For the models it
hands to 1bit, it runs the engine as one of its backends, behind an OpenAI-compatible…
