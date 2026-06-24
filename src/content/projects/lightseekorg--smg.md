---
repo: "lightseekorg/smg"
name: "smg"
description: "Engine-agnostic LLM gateway in Rust. Full OpenAI & Anthropic API compatibility across vLLM, TRT-LLM, TokenSpeed, SGLang, OpenAI, Gemini & more. Industry-first gRPC pipeline, KV cache-aware routing, chat history, tokenization caching, Responses API, embeddings, WASM plugins, MCP, and multi-tenant auth."
url: "https://github.com/lightseekorg/smg"
homepage: "https://lightseek.org/smg"
language: "Rust"
languages: ["Rust"]
languagePcts: [83]
topics: ["anthropic", "claude", "gemini", "inference-gateway", "llm", "openai", "routing", "sglang", "vllm", "tensorrtllm"]
stars: 354
forks: 104
openIssues: 51
closedIssues: 221
watchers: 1
contributors: 129
recentReleases: 3
createdAt: "2025-11-22T05:17:14Z"
lastCommitAt: "2026-06-24T06:39:58Z"
lastReleaseAt: "2026-06-12T02:44:08Z"
status: "thriving"
tags: []
healthScore: 96
undervaluedScore: 34
maintainers: ["slin1237", "key4ng", "XinyueZhang369"]
openGraphImageUrl: "https://opengraph.githubassets.com/b110e570f57821b0bbaab86517f26b5f9a597b5c70fed98135b028c16f044c26/lightseekorg/smg"
discussionCount: 2
---

</p>

<h1 align="center">Shepherd Model Gateway</h1>

</p>

Engine-agnostic, high-performance model-routing gateway for large-scale LLM deployments. Centralizes worker lifecycle management, balances traffic across HTTP/gRPC/OpenAI-compatible backends, and provides enterprise-ready control over history storage, MCP tooling, and privacy-sensitive workflows.

</p>

## Why SMG?

|                                 |                                                                                                                                                                  |
|:--------------------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **🚀 Maximize GPU Utilization** | Cache-aware routing understands your inference engine's KV cache state—whether vLLM, TensorRT-LLM, TokenSpeed, or SGLang—to reuse prefixes and reduce redundant computation. |
| **🔌 One API, Any Backend**     | Route to self-hosted models (vLLM, TensorRT-LLM, TokenSpeed, SGLang) or cloud providers (OpenAI, Anthropic, Gemini, Bedrock, and more) through a single unified endpoint. |
|…
