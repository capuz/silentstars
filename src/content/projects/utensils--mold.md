---
repo: "utensils/mold"
name: "mold"
description: "CLI-native local AI image and video generation for people, scripts, and agents — CUDA on Linux, Metal on macOS, plus desktop, web, TUI, iPhone, REST/SSE, and MCP."
readmeQualityOk: true
url: "https://github.com/utensils/mold"
homepage: "https://utensils.io/mold/"
language: "Rust"
languages: ["Rust"]
languagePcts: [67]
topics: ["ai", "candle", "cli", "cuda", "diffusion-models", "flux", "gpu", "image-generation", "machine-learning", "nix"]
stars: 40
forks: 1
openIssues: 35
closedIssues: 342
watchers: 0
contributors: 5
recentReleases: 0
createdAt: "2026-03-12T23:41:47Z"
lastCommitAt: "2026-09-02T08:03:38Z"
lastReleaseAt: "2026-04-04T17:14:16Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "hidden_gem"]
healthScore: 98
undervaluedScore: 40
maintainers: ["jamesbrink", "release-plz-mold[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/68dbab215f48c8173b7beeb5818ef2fb817937650f07197e1e0f3634cd004cfc/utensils/mold"
---

# mold

Local AI image and video generation on your own GPU. Mold supports NVIDIA CUDA
and Apple Silicon Metal, with a CLI, native desktop app, web studio, TUI, mobile
companions, Discord bot, and REST/SSE API built on the same engine.

**[Documentation](https://utensils.io/mold/)** ·
**[Models](https://utensils.io/mold/models/)** ·
**[Desktop guide](https://utensils.io/mold/guide/desktop)** ·
**[API](https://utensils.io/mold/api/)**

## Install

Stable release:

```bash
curl -fsSL https://raw.githubusercontent.com/utensils/mold/main/install.sh | sh
```

Nightly CLI from the latest published `main` build:

```bash
curl -fsSL https://raw.githubusercontent.com/utensils/mold/main/install.sh | MOLD_CHANNEL=nightly sh
```

The installer selects a compatible build and verifies its checksum. See the
[installation guide](https://utensils.io/mold/guide/installation) for Nix,
Arch, Windows, Android, and source builds.
GH200, GB200, and GB300 require future linux/arm64 artifacts and are unsupported.

## Quick start

```bash
# Generate with the default model
mold run "a cat riding a motorcycle through neon-lit streets"

# Choose a model and reproducible seed
mold run flux-dev:q4 "a sunset…
