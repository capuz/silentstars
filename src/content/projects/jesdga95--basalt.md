---
repo: "jesdga95/basalt"
name: "basalt"
description: "Local inference engine for Qwen3.8-Flash-Next on NVIDIA Blackwell"
readmeQualityOk: true
url: "https://github.com/jesdga95/basalt"
language: "C++"
languages: ["C++"]
languagePcts: [64]
stars: 305
forks: 49
openIssues: 28
closedIssues: 23
watchers: 1
contributors: 50
recentReleases: 1
createdAt: "2026-10-06T22:17:02Z"
lastCommitAt: "2026-10-29T21:23:47Z"
lastReleaseAt: "2026-10-29T15:15:42Z"
status: "newborn"
tags: ["funded"]
healthScore: 81
undervaluedScore: 24
maintainers: ["jesdga95", "giveen", "xyehya"]
openGraphImageUrl: "https://opengraph.githubassets.com/e9a61eaf0886654340d6525cc6de3f4ab71f32c06213e89703a9ee325b5dbfd8/jesdga95/basalt"
fundingLinks: ["GITHUB:https://github.com/jesdga95"]
---

Basalt is a local inference engine for the **Qwen3.8-Flash-Next** mixture-of-experts model.
It runs on Linux and Windows with an NVIDIA Blackwell GPU (sm_120); see [platforms](https://github.com/jesdga95/basalt/blob/HEAD/docs/platforms.md) for limitations.

Experts that do not fit in VRAM live in system RAM, and optionally on a second GPU used as a peer expert tier.
A large MoE model runs on one workstation, behind an OpenAI- and Anthropic-compatible API.

**Help wanted:** have some spare compute to lend for testing? See [Contributing](https://github.com/jesdga95/basalt/blob/HEAD/CONTRIBUTING.md#other-ways-to-help).

## Requirements

- Linux x86-64 with AVX2 (AVX-512 is used when present), and an NVIDIA Blackwell GPU (compute capability 12.0) with CUDA 13.
- CMake 3.24 or newer, a C++20 compiler, and Python 3.10 or newer.
- Enough system RAM to hold the experts that do not fit in VRAM.

## Quick start

```sh
git clone https://github.com/jesdga95/basalt && cd basalt
cmake -S . -B build -DCMAKE_BUILD_TYPE=Release
cmake --build build -j                  # bin/basalt, bin/basalt-bench, bin/basalt-probe, bin/basalt-vision
pip install -r requirements.txt
hf download…
