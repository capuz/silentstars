---
repo: "ggml-org/llama-install.sh"
name: "llama-install.sh"
description: "Build and install script for llama.app"
readmeQualityOk: true
url: "https://github.com/ggml-org/llama-install.sh"
language: "Python"
languages: ["Python"]
languagePcts: [60]
stars: 30
forks: 7
openIssues: 0
closedIssues: 9
watchers: 3
contributors: 8
recentReleases: 0
createdAt: "2026-05-21T20:04:02Z"
lastCommitAt: "2026-09-08T08:15:43Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 98
undervaluedScore: 43
maintainers: ["angt", "pcuenca", "ggerganov"]
openGraphImageUrl: "https://opengraph.githubassets.com/0f7c329d35b505de38a66e46d3baca25e834185ad4e174d31223a7762ecb2cd7/ggml-org/llama-install.sh"
---

# llama-install.sh

Build and install scripts for [llama.app](https://llama.app)

This repository provides `install.sh` and `install.ps1` scripts that download and set up a prebuilt `llama` binary for your system.
It automatically detects your OS, architecture, and GPU capabilities, so you can start using `llama.cpp` in seconds.

## Features

- Supported architectures: `x86_64`, `aarch64`.
- Supported OS: `Linux`, `macOS`, `FreeBSD`, `Windows`.
- **Automatic detection** for **CPU acceleration**.
- **Automatic detection** for **GPU acceleration**: `CUDA`, `ROCm`, `Vulkan`, `Metal`.
- Builds are kept as **lightweight** as possible without compromising performance.

See the full list of supported hardware and build configurations in [PRESETS.md](https://github.com/ggml-org/llama-install.sh/blob/HEAD/PRESETS.md).
Check [REQUIREMENTS.md](https://github.com/ggml-org/llama-install.sh/blob/HEAD/REQUIREMENTS.md) for the detailed requirements, including minimum OS versions and runtime library dependencies.

## Installation & Usage

### POSIX systems

Run the following command in your terminal:

    curl https://llama.app/install.sh | sh

Launch the server:

    ~/.llama-app/llama serve -hf…
