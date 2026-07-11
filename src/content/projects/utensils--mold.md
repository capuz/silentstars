---
repo: "utensils/mold"
name: "mold"
description: "Local AI image generation CLI — FLUX, SD 1.5, SDXL & Z-Image diffusion models on your GPU"
readmeQualityOk: true
url: "https://github.com/utensils/mold"
homepage: "https://utensils.github.io/mold/"
language: "Rust"
languages: ["Rust"]
languagePcts: [84]
topics: ["ai", "candle", "cli", "cuda", "diffusion-models", "flux", "gpu", "image-generation", "machine-learning", "nix"]
stars: 29
forks: 0
openIssues: 0
closedIssues: 136
watchers: 0
contributors: 4
recentReleases: 0
createdAt: "2026-03-12T23:41:47Z"
lastCommitAt: "2026-07-11T05:57:37Z"
lastReleaseAt: "2026-04-04T15:22:06Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 98
undervaluedScore: 44
maintainers: ["jdilley", "jamesbrink", "release-plz-mold[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/d1bb0524a7cc992f8c8aa76cefe01f31ce5ae00d1dceb164ae643f6af45f220a/utensils/mold"
---

# mold

Generate images and short video clips on your own GPU. No cloud, no Python, no fuss.

**[Documentation](https://utensils.io/mold/)** | **[Getting Started](https://utensils.io/mold/guide/)** | **[Models](https://utensils.io/mold/models/)** | **[API](https://utensils.io/mold/api/)**

```bash
mold run "a cat riding a motorcycle through neon-lit streets"
```

That's it. Mold auto-downloads the model on first run and saves the image to your current directory.

## Install

```bash
curl -fsSL https://raw.githubusercontent.com/utensils/mold/main/install.sh | sh
```

This downloads the **latest tagged release** from
[releases/latest](https://github.com/utensils/mold/releases/latest) and
installs it to `~/.local/bin/mold`. On Linux, the installer auto-detects your
NVIDIA GPU and picks the right binary (RTX 40-series or RTX 50-series). macOS
builds include Metal support.

Pin a specific version with `MOLD_VERSION`:

```bash
curl -fsSL https://raw.githubusercontent.com/utensils/mold/main/install.sh | MOLD_VERSION=v0.10.0 sh
```

<details>
<summary>Other install methods</summary>

### Nix

```bash
nix run github:utensils/mold -- run "a cat"                   # Ada / RTX 40-series
nix…
