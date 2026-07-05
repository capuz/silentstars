---
repo: "alez007/modelship"
name: "modelship"
description: "Self-hosted, OpenAI-compatible inference for the agentic era: reasoning LLMs, universal tool calling, and the Responses API alongside embeddings, speech, and image models — many models sharing your GPUs, one gateway. Powered by Ray Serve."
readmeQualityOk: true
url: "https://github.com/alez007/modelship"
language: "Python"
languages: ["Python"]
languagePcts: [95]
topics: ["diffusers", "embeddings", "image-generation", "llm", "self-hosted", "vllm", "agentic", "gpu", "inference-server", "llama-cpp"]
stars: 36
forks: 4
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 4
recentReleases: 0
createdAt: "2025-08-05T13:01:43Z"
lastCommitAt: "2026-07-05T20:54:17Z"
lastReleaseAt: "2026-04-06T04:35:05Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 47
maintainers: ["alez007"]
openGraphImageUrl: "https://opengraph.githubassets.com/e323bc1e775b0973a33d801d4bb6b4f9a1c4a0ac4c0298d12673f333cf258aa8/alez007/modelship"
discussionCount: 1
---

# Modelship

Self-hosted, OpenAI-compatible inference for the agentic era. Modelship runs your whole AI stack — reasoning LLMs with universal tool calling and the Responses API, plus embeddings, speech-to-text, text-to-speech, and image generation — as many models sharing your GPUs (or CPU) behind a single gateway. Built on [Ray Serve](https://docs.ray.io/en/latest/serve/index.html) with pluggable inference backends: [vLLM](https://github.com/vllm-project/vllm) for high-throughput GPU or CPU inference, [llama.cpp](https://github.com/ggml-org/llama.cpp) for high-efficiency GGUF models on CPU or GPU, [Diffusers](https://github.com/huggingface/diffusers) for image generation, and a plugin system for custom backends.

## Why Modelship?

Most self-hosted inference tools focus on running a single model. Modelship is for when you need **multiple models running simultaneously** — an LLM, a TTS engine, a speech-to-text model, an embedding model, and an image generator — all behind a single OpenAI-compatible API, with fine-grained control over GPU memory allocation across them.

- **One server, many models** — run a full AI stack (chat + TTS + STT + embeddings + image gen) on a single…
