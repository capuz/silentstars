---
repo: "cryptopoly/ChaosEngineAI"
name: "ChaosEngineAI"
description: "Local AI workstation: chat by voice or text, transcribe, generate images and video (with sound on Apple Silicon), benchmark and serve open-weight models. MLX, llama.cpp, vLLM and MTPLX backends, DFlash/DDTree speculative decoding, TurboQuant and TriAttention cache compression."
readmeQualityOk: true
url: "https://github.com/cryptopoly/ChaosEngineAI"
homepage: "https://chaosengineai.com"
language: "Python"
languages: ["Python", "TypeScript"]
languagePcts: [60, 33]
topics: ["ai", "llama-cpp", "llm", "local-ai", "mlx", "stable-diffusion", "tauri", "apple-silicon", "cache-compression", "dflash"]
stars: 25
forks: 5
openIssues: 2
closedIssues: 2
watchers: 0
contributors: 1
recentReleases: 1
createdAt: "2026-04-10T08:23:29Z"
lastCommitAt: "2026-10-31T09:54:15Z"
lastReleaseAt: "2026-10-26T22:12:23Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 86
undervaluedScore: 46
maintainers: ["cryptopoly"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1206761381/ac2649ba-384d-424c-a720-1b39eaba2503"
---

Find, download, convert, serve, chat and talk with, benchmark, and generate images, video and speech from open-weight models — all on your own machine.

> ⚠️ **Work in progress.** ChaosEngineAI is under active development. Expect rough edges, breaking changes between versions, and features that appear (and occasionally disappear) from one release to the next. Feedback and issue reports are very welcome.

---

## Why ChaosEngineAI

ChaosEngineAI is a desktop control plane for running large language models locally. It pairs a fast Tauri + React shell with a Python backend that drives `llama.cpp`, Apple MLX, and (optionally) vLLM, so you get a single window for everything from "I want to try this Hugging Face model" to "show me tokens-per-second across three quantizations on this exact prompt."

- **One app, the whole pipeline.** Find models, download them, convert to MLX, load into a warm pool, serve over an OpenAI-compatible API, chat (by typing or by voice), benchmark, and generate images, video and speech.
- **Real local performance.** First-class support for `llama.cpp` GGUF and Apple Silicon MLX for LLMs, plus local Stable Diffusion for image generation, plus diffusion DiT…
