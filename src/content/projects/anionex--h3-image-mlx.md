---
repo: "Anionex/h3-image-mlx"
name: "h3-image-mlx"
description: "Local MiniMax H3 Image generation and editing on Apple Silicon with MLX, minimal ram usage"
readmeQualityOk: true
url: "https://github.com/Anionex/h3-image-mlx"
language: "Python"
languages: ["Python"]
languagePcts: [97]
topics: ["apple-silicon", "diffusion-transformer", "image-editing", "local-inference", "mlx", "quantization", "text-to-image", "minimax-h3-image"]
stars: 9
forks: 2
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 2
recentReleases: 3
createdAt: "2026-11-10T19:21:35Z"
lastCommitAt: "2026-11-12T05:39:53Z"
lastReleaseAt: "2026-11-12T05:40:21Z"
status: "newborn"
tags: ["hidden_gem"]
healthScore: 90
undervaluedScore: 45
maintainers: ["Anionex", "arielfikru"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1453093603/4f18bc93-acfd-4be4-a0e5-7326a499df48"
---

# H3 Image MLX
**English** · [简体中文](https://github.com/Anionex/h3-image-mlx/blob/HEAD/README.zh-CN.md)

[Quick start](#generate-your-first-image) · [Image editing](#edit-with-reference-images) · [How it works](#how-it-works) · [Benchmarks](#benchmark-results) · [Usage](https://github.com/Anionex/h3-image-mlx/blob/HEAD/docs/USAGE.md) · [Performance](https://github.com/Anionex/h3-image-mlx/blob/HEAD/docs/PERFORMANCE.md)

Generate and edit images on an Apple Silicon Mac with MiniMax H3 Image. Optimized for fast inference, with 4K generation using around 7 GB of peak inference-process memory. Available through a CLI and Python API, ready to use out of the box.

If you find this repository useful, feel free to 🌟 & fork~

## Highlights

- **Native Apple Silicon inference.** Built on MLX to take advantage of your Mac's compute capabilities, H3 Image runs locally with text-to-image generation and multi-image editing.
- **W8A8 quantization and Metal acceleration.** Reduce weight memory usage with a portable MLX inference path, plus W8A8 Metal TensorOps acceleration on supported chips. Compatible with M1–M4.
- **Staged inference with on-demand block loading.** Each stage runs in a separate…
