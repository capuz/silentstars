---
repo: "prayangshuuu/hummingbird"
name: "hummingbird"
description: "hummingbird is a lightweight, zero dependency runtime for massive open source Mixture of Experts (MoE) language models. It unifies SSD, RAM, and VRAM into a single intelligent memory hierarchy, enabling inference of models like GPT-OSS 120B, GLM, DeepSeek, Qwen, and more on consumer hardware"
readmeQualityOk: true
url: "https://github.com/prayangshuuu/hummingbird"
language: "C"
languages: ["C", "Makefile"]
languagePcts: [46, 42]
topics: ["c17", "ai-inference", "artificial-intelligence", "cross-platform", "deepseek", "glm", "gpt-oss", "inference-engine", "llm", "llm-runtime"]
stars: 51
forks: 11
openIssues: 0
closedIssues: 0
watchers: 6
contributors: 1
recentReleases: 0
createdAt: "2026-07-21T14:30:08Z"
lastCommitAt: "2026-07-31T06:29:59Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 89
undervaluedScore: 25
maintainers: ["prayangshuuu"]
openGraphImageUrl: "https://opengraph.githubassets.com/e630ee7f82b8a0cd274eb232aa5e706761b80652d42a8f3f6d7727cde8375e07/prayangshuuu/hummingbird"
---

</p>

</p>

  A zero-dependency C17 runtime for running massive open-source LLMs, <br/>
  both dense and Mixture of Experts, on consumer hardware.
</p>

---

## Acknowledgement

This project is heavily inspired by [Colibri](https://github.com/JustVugg/colibri). Hummingbird was never intended to be a direct copy of Colibri; rather, it aims to build upon those ideas with a completely different architecture and approach. The key difference is that while Colibri is a highly specialized engine allowing you to run massive models like GLM-5.2 (744B MoE) on a 25GB-RAM consumer machine via SSD streaming, Hummingbird provides a generalized, modular inference framework designed to run *any* model architecture through its flexible adapter interface.

## Why Hummingbird?

Frontier open-weight models have grown past the point where they fit in the memory of an ordinary machine. A model with hundreds of billions of parameters needs far more RAM than a laptop or a single consumer GPU can offer.

Hummingbird shifts the problem from fitting the model to **placing the model across the storage you already have**. It unifies SSD, RAM, and VRAM into a single managed hierarchy, keeping always-needed…
