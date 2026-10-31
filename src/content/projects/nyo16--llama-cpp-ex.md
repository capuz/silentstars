---
repo: "nyo16/llama_cpp_ex"
name: "llama_cpp_ex"
description: " Elixir bindings for llama.cpp — run LLMs locally with Metal, CUDA, Vulkan, or CPU. Streaming, chat templates, embeddings, structured output, and concurrent batched    inference."
readmeQualityOk: true
url: "https://github.com/nyo16/llama_cpp_ex"
language: "Elixir"
languages: ["Elixir", "C++"]
languagePcts: [72, 22]
topics: ["cuda", "elixir", "llamacpp", "llm"]
stars: 9
forks: 2
openIssues: 0
closedIssues: 6
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2026-02-23T21:42:20Z"
lastCommitAt: "2026-10-31T15:58:55Z"
lastReleaseAt: "2026-03-12T00:32:29Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 98
undervaluedScore: 61
maintainers: ["nyo16", "github-actions[bot]", "dai-yamashita"]
openGraphImageUrl: "https://opengraph.githubassets.com/3c7e8fd02793c55fae1a5d8a477c251bc4f7ba3b80aa8545724e878f8d2af835/nyo16/llama_cpp_ex"
---

# LlamaCppEx

Elixir bindings for [llama.cpp](https://github.com/ggml-org/llama.cpp) — run LLMs locally with Metal, CUDA, Vulkan, or CPU acceleration.

Built with C++ NIFs using [fine](https://github.com/elixir-nx/fine) for ergonomic resource management and [elixir_make](https://hex.pm/packages/elixir_make) for the build system.

## Features

- Load and run GGUF models directly from Elixir
- **HuggingFace Hub integration** — search, list, and download GGUF models
- GPU acceleration: Metal (macOS), CUDA (NVIDIA), Vulkan, or CPU
- Streaming token generation via lazy `Stream`
- Jinja chat templates with `enable_thinking` support (Qwen3, Qwen3.5, etc.)
- **Tool calling** — OpenAI-shaped `tools` / `tool_choice` on `chat_completion/3` and `stream_chat_completion/3`, using each model's own chat template, grammar and parser
- Message content and decision inputs are tokenized as text: special-token markup in them (`<|im_start|>`, `[INST]`, ...) cannot forge turns or control tokens
- RAII resource management — models, contexts, and samplers are garbage collected by the BEAM
- Configurable sampling: temperature, top-k, top-p, min-p, repetition penalty, frequency & presence penalty
-…
