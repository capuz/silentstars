---
repo: "townsendmerino/goinfer"
name: "goinfer"
description: "Pure-Go, no-cgo local LLM inference — run Gemma, Qwen, Llama and friends from safetensors or GGUF in a single static binary."
readmeQualityOk: true
url: "https://github.com/townsendmerino/goinfer"
language: "Go"
languages: ["Go"]
languagePcts: [87]
topics: ["cgo-free", "edge-ai", "gemma", "gguf", "go", "golang", "llama", "llm-inference", "local-lm", "mistral"]
stars: 25
forks: 5
openIssues: 2
closedIssues: 2
watchers: 2
contributors: 3
recentReleases: 1
createdAt: "2026-06-04T14:16:16Z"
lastCommitAt: "2026-11-02T15:17:30Z"
lastReleaseAt: "2026-08-05T14:49:27Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 40
maintainers: ["townsendmerino"]
openGraphImageUrl: "https://opengraph.githubassets.com/af5cda742024abe569638bbe3774ae293b8f4ca601558524536acd4caa38202e/townsendmerino/goinfer"
---

# goinfer

**Run an open-weight LLM inside your Go program.** Pure Go, no cgo: `go get` it, import it,
cross-compile it like anything else. No Python, no llama.cpp, no C toolchain, no daemon.

- **Output your types guarantee** — constrain generation to a Go struct or a JSON Schema; an
  invalid token is unreachable, not retried.
- **One static binary** — and, if you want, the model baked into it.
- **43 model families**, each behind a HuggingFace logit-parity gate.
- **CPU, CUDA and Metal**, cgo-free; **WebGPU** as an opt-in cgo build.
- **Runs offline** — no telemetry, no update check, no account. The one thing that reaches the network is fetching a
  model when you ask for one, from HuggingFace: `pull`, an `hf:` or `demo:` model reference, or the web UI's search and
  download. A model already on disk, or baked into the binary, needs no network at all.

Also ships as a ready-made server (`goinfer-serve`: OpenAI and Anthropic APIs, web UI) and a
single-shot chat binary (`goinfer-chat`).

**[goinfer.dev](https://goinfer.dev)** — [models](https://goinfer.dev/models/) ·
[download](https://goinfer.dev/download/) · [docs](https://goinfer.dev/docs/) ·
[an inference primer for Go…
