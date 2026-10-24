---
repo: "defilantech/LLMKube"
name: "LLMKube"
description: "Kubernetes operator for self-hosted LLM inference across a heterogeneous GPU fleet: NVIDIA CUDA, AMD Vulkan, and Apple Silicon Metal. Runtimes: llama.cpp, vLLM, TGI, mlx-server. Multi-GPU sharding, model caching, OpenAI-compatible endpoints. Apache-2.0, run across homelab and on-prem fleets, actively developed."
readmeQualityOk: true
url: "https://github.com/defilantech/LLMKube"
homepage: "https://llmkube.com"
language: "Go"
languages: ["Go"]
languagePcts: [97]
topics: ["ai", "gguf", "gpu", "inference", "kubernetes", "kubernetes-operator", "llama-cpp", "llm", "local-llm", "nvidia"]
stars: 243
forks: 40
openIssues: 118
closedIssues: 776
watchers: 3
contributors: 20
recentReleases: 0
createdAt: "2025-11-12T22:53:23Z"
lastCommitAt: "2026-10-24T08:20:10Z"
lastReleaseAt: "2025-11-26T18:46:05Z"
status: "thriving"
tags: ["funded"]
healthScore: 97
undervaluedScore: 39
maintainers: ["Defilan", "dependabot[bot]", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/f5986334db7f84e98e1ee582d2d0351d37659cc41a20a9048a064430d7b2c004/defilantech/LLMKube"
fundingLinks: ["GITHUB:https://github.com/Defilan"]
discussionCount: 4
---

# LLMKube

  ### The Kubernetes operator for self-hosted LLM inference

  **Run models across NVIDIA, Apple Silicon, and AMD from one spec. Your models. Your hardware. Your rules.**

  Three things no other Kubernetes LLM operator combines: Apple Silicon inference as **native macOS processes, not containers** (the [Metal Agent](#the-metal-agent) runs `llama-server`, `mlx-server`, and `vllm-swift` with full Metal GPU access); **heterogeneous fleets** of NVIDIA, AMD (Vulkan), Intel, and Apple Silicon hosts under one operator and one set of CRDs; and **fail-closed policy routing** between local and external models via [ModelRouter](#composition-modelrouter).

  **Who it's for:** platform and AI-ops teams running on-prem, mixed-hardware, or air-gapped inference. If you want one model on one laptop, Ollama is simpler.

  *Plus [Foreman](#foreman): an agentic harness that runs coding agents on your own fleet. It has shipped real fixes to this repo.*

---

## The Problem

You want to run LLMs on your own infrastructure. Maybe it's for data privacy, cost control, air-gapped compliance, or you just don't want to send every request to OpenAI.

So you set up llama.cpp. It works great on one…
