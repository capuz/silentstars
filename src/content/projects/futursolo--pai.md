---
repo: "futursolo/pai"
name: "pai"
description: "Collection of AI Containers - Prebuilt and Ready-to-Use"
readmeQualityOk: true
url: "https://github.com/futursolo/pai"
language: "Dockerfile"
languages: ["Dockerfile", "Shell"]
languagePcts: [67, 26]
topics: ["comfyui", "koboldcpp", "rocm", "docker", "ai", "llm", "ollama", "containers", "llamacpp"]
stars: 5
forks: 1
openIssues: 1
closedIssues: 11
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2025-08-15T10:13:31Z"
lastCommitAt: "2026-11-02T11:35:51Z"
lastReleaseAt: "2025-08-23T12:24:56Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 92
undervaluedScore: 67
maintainers: ["futursolo", "dependabot[bot]", "Copilot"]
openGraphImageUrl: "https://opengraph.githubassets.com/f13873c5c5b9b1e9dc8f7670f3f0e68378993c85337795a2ba7c3f6bade63321/futursolo/pai"
---

# Pai - Portable Artificial Intelligence

The Pai (Portable Artificial Intelligence) Project is an initiative to produce a AI containers that can be run with a single command.

### Rationale

The primary purpose of this project is to reduce the burden to manage dependencies.
Since different application may require different ROCm or One-API versions,
this creates compatibility issues when trying to run multiple applications on the same machine.

This project solves this issue by packaging all necessary dependencies in the container and provides images
that can be executed with a single `docker run` command.

Unless specified otherwise, it should work with the `xe` or `amdgpu` driver from the mainline linux kernel.
Vendor drivers are optional.

### Supported Variants

The following variants are usually provided:

- `vulkan` (Any Vulkan Compatible GPUs)
- `intel` / `ipex` (Intel Arc)
- `rocm` (AMD Radeon)

\* CUDA is not supported because I currently do not have any NVIDIA Graphics Cards to test CUDA-based images
and CUDA-based images are usually already available from other sources.

### Supported Apps

-…
