---
repo: "shakfu/cyllama"
name: "cyllama"
description: "A thin cython wrapper around llama.cpp, whisper.cpp and stable-diffusion.cpp"
readmeQualityOk: true
url: "https://github.com/shakfu/cyllama"
homepage: "https://shakfu.github.io/cyllama/"
language: "Python"
languages: ["Python"]
languagePcts: [65]
topics: ["cython", "cython-wrapper", "python3", "llama-cpp", "stable-diffusion-cpp", "whisper-cpp", "agents", "rag", "ggml"]
stars: 33
forks: 22
openIssues: 2
closedIssues: 10
watchers: 5
contributors: 3
recentReleases: 0
createdAt: "2024-10-25T15:44:36Z"
lastCommitAt: "2026-08-29T10:20:22Z"
lastReleaseAt: "2026-04-15T10:17:59Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "fork_magnet"]
healthScore: 94
undervaluedScore: 64
maintainers: ["shakfu", "shakeeb"]
openGraphImageUrl: "https://opengraph.githubassets.com/2619f306dbd41b741d9e4cbf6ac5e2782d9c8d80ed2a6722ddf440aef7ae6ad2/shakfu/cyllama"
---

# cyllama - Fast, Pythonic AI Inference

cyllama is a no-dependencies Python library for local AI inference built on the `.cpp` inference stack:

- **[llama.cpp](https://github.com/ggml-org/llama.cpp)** - Text generation, chat, embeddings, and text-to-speech

- **[whisper.cpp](https://github.com/ggerganov/whisper.cpp)** - Speech-to-text transcription and translation

- **[stable-diffusion.cpp](https://github.com/leejet/stable-diffusion.cpp)** - Image and video generation

It combines the performance of compiled Cython wrappers with a simple, high-level Python API for cross-modal AI inference.

**[Documentation](https://shakfu.github.io/cyllama/)** | **[PyPI](https://pypi.org/project/cyllama/)** | **[Changelog](https://github.com/shakfu/cyllama/blob/HEAD/CHANGELOG.md)**

## Features

- High-level API -- `complete()`, `chat()`, `LLM` class for quick prototyping / text generation.

- Streaming -- token-by-token output with callbacks

- Batch processing -- process multiple prompts in parallel

- GPU acceleration -- Metal (macOS), CUDA (NVIDIA), ROCm (AMD), Vulkan (cross-platform), SYCL (Intel)

- Speculative decoding -- 2-3x speedup with draft models

- Agent framework -- ReActAgent,…
