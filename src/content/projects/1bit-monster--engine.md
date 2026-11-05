---
repo: "1bit-MONSTER/engine"
name: "engine"
description: "One binary to rule them all: model-agnostic local LLM inference for AMD Strix Halo (Ryzen AI MAX+ 395) on Linux. Radeon 8060S iGPU (gfx1151) via HRX + our HIP kernels, XDNA 2 NPU via our NPU runtime, inside Lemonade Server with an OpenAI-compatible API. Qwen3.8, ZAYA1, BitNet b1.58, any GGUF. Apache-2.0."
readmeQualityOk: true
url: "https://github.com/1bit-MONSTER/engine"
homepage: "https://1bit.gg/"
language: "C++"
languages: ["C++", "Shell"]
languagePcts: [42, 26]
topics: ["amd", "gguf", "llm-inference", "local-llm", "npu", "openai-api", "quantization", "ryzen-ai", "strix-halo", "hrx"]
stars: 6
forks: 2
openIssues: 40
closedIssues: 155
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-09-22T18:48:20Z"
lastCommitAt: "2026-11-05T00:21:59Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "under_pressure"]
healthScore: 96
undervaluedScore: 60
maintainers: ["bong-water-water-bong"]
openGraphImageUrl: "https://opengraph.githubassets.com/5c2a04a09d4fd78d7b67c436f660ea6b9536b65a9c31158a6d74d65357bba4f5/1bit-MONSTER/engine"
discussionCount: 8
---

# 1bit engine: local LLM inference on AMD Strix Halo (Ryzen AI MAX+ 395)

One binary to rule them all: the 1bit engine is a model-agnostic local LLM inference engine for the
AMD Ryzen AI MAX+ 395 (Strix Halo) on Linux. It serves any GGUF on the Radeon 8060S iGPU (`gfx1151`)
through HRX with our own HIP kernels, and models on the XDNA 2 NPU through our own NPU runtime, as a
backend of AMD's [Lemonade Server](https://github.com/lemonade-sdk/lemonade) and its OpenAI-compatible API.
Boot a USB stick, and the machine serves local LLMs on its GPU and NPU. That is the whole setup.

## Get started

1. Download `1bit-os-<version>.img.zst` from the [releases page](https://github.com/1bit-MONSTER/engine/releases).
2. Write it to a USB stick (8 GB or more).
3. Boot the machine from the stick. Secure Boot can stay on; the image is signed.
4. Lemonade comes up with its catalog and web UI. Try it from the live session; to keep it, run `1bit-install <disk> --yes` there and the 1bit appliance is on the disk ([os/v2/README.md](https://github.com/1bit-MONSTER/engine/blob/HEAD/os/v2/README.md#the-live-medium-and-what-an-install-writes)).

Already running Lemonade on Ubuntu? The `lemonade-onebit`…
