---
repo: "utensils/mold"
name: "mold"
description: "CLI-native local AI image and video generation for people, scripts, and agents — CUDA on Linux, Metal on macOS, plus desktop, web, iPhone, REST/SSE, and MCP."
readmeQualityOk: true
url: "https://github.com/utensils/mold"
homepage: "https://utensils.io/mold/"
language: "Rust"
languages: ["Rust"]
languagePcts: [58]
topics: ["ai", "candle", "cli", "cuda", "diffusion-models", "flux", "gpu", "image-generation", "machine-learning", "nix"]
stars: 54
forks: 2
openIssues: 32
closedIssues: 394
watchers: 0
contributors: 5
recentReleases: 0
createdAt: "2026-03-12T23:41:47Z"
lastCommitAt: "2026-10-21T08:49:48Z"
lastReleaseAt: "2026-04-04T17:14:16Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 98
undervaluedScore: 42
maintainers: ["jamesbrink", "release-plz-mold[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/bd31299843f6363ac5d1276dd424b14670fae92d453f1ba4c34281423a568191/utensils/mold"
---

# mold

Local AI image and video generation on your own GPU. Mold supports NVIDIA CUDA
and Apple Silicon Metal, with a CLI, native desktop app, web studio, mobile
companions, Discord bot, and REST/SSE API built on the same engine.

**[Documentation](https://utensils.io/mold/)** ·
**[Models](https://utensils.io/mold/models/)** ·
**[Desktop guide](https://utensils.io/mold/guide/desktop)** ·
**[API](https://utensils.io/mold/api/)**

The generation composer offers **Edit prompt** for spacious long-text editing,
recent-prompt search and Clear with Undo. Native iOS and macOS Library Settings
also let you hide date separators for a continuous grid.

## Install

Stable release:

```bash
curl -fsSL https://raw.githubusercontent.com/utensils/mold/main/install.sh | sh
```

Nightly CLI from the latest published `main` build:

```bash
curl -fsSL https://raw.githubusercontent.com/utensils/mold/main/install.sh | MOLD_CHANNEL=nightly sh
```

Automatic cloud provisioning uses a verified container digest for the client’s exact
source revision. Nightly/source builds wait for their matching container readiness
manifest; an unpublished image fails before creating a paid host.

The installer selects a…
