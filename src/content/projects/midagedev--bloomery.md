---
repo: "midagedev/bloomery"
name: "bloomery"
description: "Hybrid GPU + CPU inference for mixture-of-experts models, written in Rust down to the CUDA kernels. A drop-in llama-server."
readmeQualityOk: true
url: "https://github.com/midagedev/bloomery"
language: "Rust"
languages: ["Rust"]
languagePcts: [82]
topics: ["cuda", "deepseek", "gguf", "glm", "inference", "llama-cpp", "llm", "moe", "qwen", "rust"]
stars: 54
forks: 5
openIssues: 41
closedIssues: 164
watchers: 0
contributors: 6
recentReleases: 10
createdAt: "2026-09-19T12:45:54Z"
lastCommitAt: "2026-10-27T12:40:16Z"
lastReleaseAt: "2026-10-09T09:08:41Z"
status: "newborn"
tags: ["solo_builder", "needs_contributors", "hidden_gem", "release_machine"]
healthScore: 96
undervaluedScore: 40
maintainers: ["midagedev", "juliankang4", "Burntgogi"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1377146773/b8f76f4e-44bf-41ac-a749-86d8513f1bee"
discussionCount: 1
---

Rust from the HTTP server down to the CUDA kernels. NVIDIA cards, and Apple Silicon through Metal.<br>
  A drop-in <a href="https://github.com/ggml-org/llama.cpp/blob/master/tools/server">llama-server</a>.

```sh
brew install midagedev/tap/bloomery        # Linux x86-64 with NVIDIA sm_86+, or an Apple Silicon Mac
bloomery-serve --hf unsloth/Qwen3-30B-A3B-Instruct-2507-GGUF:Q4_K_M --port 8080
```

## What it does

- **Models larger than the cards, and larger than the host's RAM.** The routed experts live on the cards and in host
  RAM, and the engine moves the experts it calls most onto the card while it runs. 0.3.9 serves Muse Spark Open
  816B-A42B (225.6 GB of weights) and MiniMax-M3.1-Flash (250.1 GB) on two cards with 72 GB between them. When the RAM
  cannot hold the host's share either, Qwen3.8, GLM-5.3-Flash and DeepSeek-V4.1-Flash page the rest from NVMe.
- **Checkpoint folders as downloaded.** MiniMax-M3.1-Flash loads from its vendor's NVFP4 safetensors folder, and
  Qwen3.8 from its NVFP4 or FP4-Local folder, with no conversion and no requant. Everything else loads from GGUF.
- **Apple Silicon.** A Metal backend serves Qwen3.6-35B-A3B on a Mac GPU, from an MLX 4-bit…
