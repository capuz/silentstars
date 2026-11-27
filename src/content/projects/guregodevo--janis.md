---
repo: "guregodevo/janis"
name: "janis"
description: "Open LLM inference in Go: an OpenAI-compatible server on MLX (Apple silicon) / ggml (Linux, CUDA) / pure Go"
readmeQualityOk: true
url: "https://github.com/guregodevo/janis"
language: "Go"
languages: ["Go"]
languagePcts: [94]
topics: ["apple-silicon", "cuda", "ggml", "golang", "inference", "llm", "local-llm", "mlx", "openai-api", "qwen"]
stars: 5
forks: 0
openIssues: 3
closedIssues: 8
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-10-03T10:38:13Z"
lastCommitAt: "2026-11-27T12:56:53Z"
lastReleaseAt: "2026-11-04T11:09:27Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 94
undervaluedScore: 59
maintainers: ["guregodevo"]
openGraphImageUrl: "https://opengraph.githubassets.com/8cfcd0560ca1b27214b307965fcb27944c58f18ede0e2cfccfa858afe6bd189e/guregodevo/janis"
---

## Why janis, next to Ollama and llama.cpp

Each row is one machine, one server at a time, 4-bit weights, versions and
commands in [bench/mlx.md](https://github.com/guregodevo/janis/blob/HEAD/bench/mlx.md) and [docs/backends.md](https://github.com/guregodevo/janis/blob/HEAD/docs/backends.md):

| | janis | llama.cpp | Ollama |
|---|---:|---:|---:|
| Qwen3-8B, M4 Mac 16 GB: prefill 600 tokens | 224.2 tok/s | 219.5 tok/s | 216.4 tok/s |
| Qwen3-8B, M4 Mac 16 GB: prefill 9,000 tokens | 195.0 tok/s | 174.4 tok/s | 154.5 tok/s |
| Qwen3-8B, M4 Mac 16 GB: decode | 22.8 tok/s | 19.9 tok/s | 20.3 tok/s |
| Qwen3.5-9B, M4 Mac 16 GB: decode | 19.9 tok/s | 18.5 tok/s | not measured |
| Qwen3-8B, GitHub runner, 4 vCPU: prefill / decode | 12 / 5.6 tok/s | not measured | 12.6 / 4.45 tok/s |
| Qwen3-8B, NVIDIA L4: decode | 43.2 tok/s | 47.0 tok/s | not measured |
| Qwen3.8-27B, NVIDIA A100: decode | 55.2 tok/s | 51.2 tok/s | not measured |
| Qwen3.8-27B, NVIDIA A100: prefill 1,500 tokens | 1,106 tok/s | 1,170 tok/s | not measured |
| Qwen3-8B, NVIDIA A100: decode | 146.0 tok/s | 138.5 tok/s | not measured |
| Inkling 2 Mini, RTX 5000 Ada 32 GB: decode | 62.0 tok/s | not measured | 58.3 tok/s |
