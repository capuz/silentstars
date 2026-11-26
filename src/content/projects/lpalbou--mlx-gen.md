---
repo: "lpalbou/mlx-gen"
name: "mlx-gen"
description: "Generative image and video runtimes for Apple Silicon (MLX): text/image-to-image, instruction editing, masked edit, text/image/reference-to-video, video editing, and restoration."
readmeQualityOk: true
url: "https://github.com/lpalbou/mlx-gen"
homepage: "http://www.lpalbou.info/mlx-gen/"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["abstractframework", "ai", "apple", "diffusers", "generative-ai", "image", "mflux", "mlx", "transformers", "video"]
stars: 49
forks: 11
openIssues: 4
closedIssues: 2
watchers: 0
contributors: 24
recentReleases: 0
createdAt: "2026-05-25T07:31:58Z"
lastCommitAt: "2026-11-26T23:38:13Z"
lastReleaseAt: "2026-06-04T06:15:28Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 79
undervaluedScore: 29
maintainers: ["lpalbou"]
openGraphImageUrl: "https://opengraph.githubassets.com/dd8186a76e0eec01adfdf31f0b6db8bd0c757354b3bccc60969aa2c16e809a97/lpalbou/mlx-gen"
---

# MLX-Gen

MLX-Gen is a local image and video generation runtime for Apple Silicon and MLX. It exposes
`mlxgen` for text-to-image, image-to-image, text-to-video, image-to-video, model download, model
preparation, SeedVR2 and SwiftVR image/video restoration and upscaling, optimized quantized model
variants, and application progress callbacks.

> **Important**
>
> MLX-Gen started as a fork of [mflux](https://github.com/filipstrand/mflux). Most credit for the
> current codebase goes to Filip Strand and the original mflux contributors. MLX-Gen keeps that
> foundation and focuses on making local generation predictable for real applications: users
> download or prepare models before running a job, then use one `mlxgen` command to generate,
> inspect supported modes, and compare generated examples and measured results.
