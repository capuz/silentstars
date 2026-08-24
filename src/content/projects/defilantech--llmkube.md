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
stars: 196
forks: 30
openIssues: 96
closedIssues: 561
watchers: 1
contributors: 13
recentReleases: 0
createdAt: "2025-11-12T22:53:23Z"
lastCommitAt: "2026-08-24T04:22:54Z"
lastReleaseAt: "2025-11-26T18:46:05Z"
status: "thriving"
tags: ["funded"]
healthScore: 97
undervaluedScore: 37
maintainers: ["Defilan", "joryirving", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/37cbe5bb5abab34bc610e36dac81ac93a1ed203cc21990f97f64fe5b2d325dc6/defilantech/LLMKube"
fundingLinks: ["GITHUB:https://github.com/Defilan"]
discussionCount: 3
---

# LLMKube

  ### The Kubernetes operator for self-hosted LLM inference

  **Run models across NVIDIA, Apple Silicon, and AMD from one spec. Your models. Your hardware. Your rules.**

  *Plus [Foreman](#foreman): an agentic harness that runs coding agents on your own fleet. It has shipped real fixes to this repo.*

  <p>
    </a>
    </a>
    </a>
    </a>
    </a>
    </a>
    </a>
  </p>

  <p>
  </p>

</div>

---

## The Problem

You want to run LLMs on your own infrastructure. Maybe it's for data privacy, cost control, air-gapped compliance, or you just don't want to send every request to OpenAI.

So you set up llama.cpp. It works great on one machine. Then you need to scale it, monitor it, manage model versions, handle GPU scheduling across nodes, expose an API, and somehow make your Mac's Metal GPU and your Linux server's NVIDIA cards work together. And the moment you want any of that traffic to *sometimes* hand off to Claude or GPT, you're building another routing layer.

Suddenly you're building an entire platform instead of shipping your product.

**LLMKube is a Kubernetes operator that turns LLM deployment into a two-line YAML problem.** Define a `Model` and an…
