---
repo: "vast-ai/base-image"
name: "base-image"
description: "Base Docker image suitable for extension.  Simplifies TLS, Authentication and instance setup "
readmeQualityOk: true
url: "https://github.com/vast-ai/base-image"
language: "Python"
languages: ["Python", "Shell"]
languagePcts: [53, 35]
stars: 55
forks: 69
openIssues: 4
closedIssues: 5
watchers: 3
contributors: 8
recentReleases: 0
createdAt: "2024-12-09T17:07:54Z"
lastCommitAt: "2026-11-10T14:49:03Z"
lastReleaseAt: "2026-06-05T13:09:46Z"
status: "thriving"
tags: ["solo_builder", "fork_magnet"]
healthScore: 89
undervaluedScore: 58
maintainers: ["robballantyne", "wbrennan899"]
openGraphImageUrl: "https://opengraph.githubassets.com/c852701dd27f50c109db903785f9db190da50f281af538aed82d7977fbb4208d/vast-ai/base-image"
---

# Vast.ai Base Docker Image

A feature-rich base image designed for GPU computing on [Vast.ai](https://vast.ai). This image extends large, commonly-used base images to maximize Docker layer caching benefits, resulting in faster instance startup times.

## Why This Image?

### Optimized for Fast Startup Through Layer Caching

Vast.ai host machines cache commonly-used Docker image layers. By building on top of large, popular base images like `nvidia/cuda` and `rocm/dev-ubuntu`, most of the image content is already present on host machines before you even start your instance.

**How it works:**
- Base images (NVIDIA CUDA, AMD ROCm, Ubuntu) are multi-gigabyte images commonly used across the platform
- These base layers are frequently cached on Vast.ai hosts
- Our image adds development tools, security features, and convenience utilities as additional layers
- When you start an instance, only the smaller top layers need to be downloaded
- Result: Fast startup times despite having a comprehensive development environment

### CUDA Compatibility

#### Minor Version Compatibility

NVIDIA's [minor version…
