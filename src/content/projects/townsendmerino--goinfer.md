---
repo: "townsendmerino/goinfer"
name: "goinfer"
description: "Pure-Go, no-cgo local LLM inference — run Gemma, Qwen, Llama and friends from safetensors or GGUF in a single static binary."
readmeQualityOk: true
url: "https://github.com/townsendmerino/goinfer"
language: "Go"
languages: ["Go"]
languagePcts: [89]
topics: ["cgo-free", "edge-ai", "gemma", "gguf", "go", "golang", "llama", "llm-inference", "local-lm", "mistral"]
stars: 7
forks: 4
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 3
recentReleases: 10
createdAt: "2026-06-04T14:16:16Z"
lastCommitAt: "2026-08-19T04:09:42Z"
lastReleaseAt: "2026-08-05T14:49:27Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 80
undervaluedScore: 61
maintainers: ["townsendmerino"]
openGraphImageUrl: "https://opengraph.githubassets.com/e2cd3b260226c42c132c97dbfbf1ce98c6c78165bc1cb4bd156be22a7bda41e6/townsendmerino/goinfer"
---

# goinfer

*An entire 1.5B LLM in one file — instant boot (~0.4s), <100 MB heap, runs offline. Writes correct generic Go and **cannot** emit invalid JSON. No cgo, no Python, no model download.*

**Run open-weight LLMs in pure Go — one cgo-free static binary, portable by default and
native-GPU-fast when you want it.** ~20 model architectures, HuggingFace-parity-gated, with
schema-constrained structured output. No Python, no llama.cpp, no CUDA toolkit.

goinfer is a pure-Go, no-cgo decoder-only LLM runtime that loads open-weight checkpoints
and runs them **in-process**. What makes it different — you don't have to choose:

- **One cgo-free static binary.** Pure Go, no cgo → cross-compiles to a single file
  (macOS / Linux / Windows, Intel + ARM). No Python, no llama.cpp `.so`, no CUDA toolkit,
  no provider API. The runtime *and*, if you want, the model in one file you `scp` and run
  offline.
- **Fast when you want it — still cgo-free.** The default build is pure-Go CPU
  (SIMD-accelerated, NEON / AVX2). Opt into a GPU backend and it *stays* `CGO_ENABLED=0`:
  **native CUDA** (cgo-free, driver-only — no toolkit; **14.6 MB** of binary against a bundled
  toolkit's gigabytes, decoding…
