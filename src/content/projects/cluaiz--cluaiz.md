---
repo: "cluaiz/cluaiz"
name: "cluaiz"
description: "Local AI engine in Rust: run GGUF and ONNX models for chat, vision, speech and embeddings on your own GPU, RAM and CPU, with automatic placement and OpenAI-compatible APIs."
readmeQualityOk: true
url: "https://github.com/cluaiz/cluaiz"
homepage: "https://cluaiz.com"
language: "Rust"
languages: ["Rust"]
languagePcts: [93]
topics: ["ai", "local-ai", "gguf", "rust", "ai-runtime", "llama-cpp", "local-llm", "cluaiz", "ai-agents", "hardware-aware"]
stars: 28
forks: 6
openIssues: 0
closedIssues: 0
watchers: 3
contributors: 3
recentReleases: 2
createdAt: "2026-04-27T23:24:17Z"
lastCommitAt: "2026-11-04T11:28:14Z"
lastReleaseAt: "2026-11-01T03:57:12Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 80
undervaluedScore: 45
maintainers: []
openGraphImageUrl: "https://repository-images.githubusercontent.com/1223004534/78b69c3e-cc50-4aa2-b978-a2120ad5c0fd"
fundingLinks: ["GITHUB:https://github.com/cluaiz-ai"]
discussionCount: 0
---

A local AI engine in Rust: chat, vision, speech and embeddings on your own hardware, with the placement on GPU, RAM and CPU decided for you</h3>

> [!WARNING]
> **Pre-release.** v0.1.0 is the first public build. Expect breaking changes in settings, APIs and file layout
> until the stable release.

## About Cluaiz

Cluaiz is one engine process that runs local models and serves them to apps, scripts and agents:

- **GGUF models** through a fork of [llama.cpp](https://github.com/ggml-org/llama.cpp) linked into the engine:
  chat, vision, audio input, embeddings.
- **ONNX models** through ONNX Runtime: text-to-speech (Kokoro and others), speech-to-text (Whisper), embeddings
  and vision encoders.
- **A placement planner** that measures the free GPU memory and RAM on every load and chooses where the model
  runs, how large the context is and which KV cache type fits. You can override any of it.
- **MoE models larger than the GPU, and larger than free RAM:** attention stays on the GPU, the experts sit in
  RAM, and whatever does not fit RAM is read from the SSD when it is used.
- **APIs** that existing clients already speak (OpenAI-compatible and Ollama-style routes), plus CEP, one…
