---
repo: "townsendmerino/goinfer"
name: "goinfer"
description: "Pure-Go, no-cgo local LLM inference — run Gemma, Qwen, Llama and friends from safetensors or GGUF in a single static binary."
readmeQualityOk: true
url: "https://github.com/townsendmerino/goinfer"
language: "Go"
languages: ["Go"]
languagePcts: [86]
topics: ["cgo-free", "edge-ai", "gemma", "gguf", "go", "golang", "llama", "llm-inference", "local-lm", "mistral"]
stars: 22
forks: 5
openIssues: 1
closedIssues: 2
watchers: 2
contributors: 3
recentReleases: 1
createdAt: "2026-06-04T14:16:16Z"
lastCommitAt: "2026-10-24T00:15:15Z"
lastReleaseAt: "2026-08-05T14:49:27Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 93
undervaluedScore: 43
maintainers: ["townsendmerino"]
openGraphImageUrl: "https://opengraph.githubassets.com/9392a321aced16cbf37f016851fda692aaf9243187b94c4c2acf4d4b4024b405/townsendmerino/goinfer"
---

# goinfer

**Run an open-weight LLM inside your Go program.** Pure Go, no cgo: `go get` it, import it,
cross-compile it like anything else. No Python, no llama.cpp, no C toolchain, no daemon.

- **Output your types guarantee** — constrain generation to a Go struct or a JSON Schema; an
  invalid token is unreachable, not retried.
- **One static binary** — and, if you want, the model baked into it.
- **43 model families**, each behind a HuggingFace logit-parity gate.
- **CPU, CUDA and Metal**, cgo-free; **WebGPU** as an opt-in cgo build.

Also ships as a ready-made server (`goinfer-serve`: OpenAI and Anthropic APIs, web UI) and a
single-shot chat binary (`goinfer-chat`).

**[goinfer.dev](https://goinfer.dev)** — [models](https://goinfer.dev/models/) ·
[download](https://goinfer.dev/download/) · [docs](https://goinfer.dev/docs/) ·
[an inference primer for Go engineers](https://goinfer.dev/book/)

*A 1.5B model and its runtime in one file: boots in about 0.4 s, under 100 MB of heap, runs
offline. Recorded on an Apple M1 Pro (the `linux-amd64` filename on screen is left over from the
tape's usual render target; a `darwin-arm64` binary is what ran). Details and the x86 figures are in…
