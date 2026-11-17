---
repo: "IonDen/mlx-teacache"
name: "mlx-teacache"
description: "TeaCache step-skipping for FLUX, Qwen-Image & Z-Image diffusion on Apple Silicon, in pure MLX"
readmeQualityOk: true
url: "https://github.com/IonDen/mlx-teacache"
homepage: "https://pypi.org/project/mlx-teacache/"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["apple-silicon", "diffusion", "flux", "image-generation", "inference-acceleration", "mflux", "mlx", "step-skipping", "teacache", "qwen-image"]
stars: 7
forks: 1
openIssues: 24
closedIssues: 2
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-05-15T11:07:03Z"
lastCommitAt: "2026-11-17T14:34:02Z"
lastReleaseAt: "2026-05-27T22:28:00Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded", "under_pressure"]
healthScore: 76
undervaluedScore: 45
maintainers: ["IonDen", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/70c5ba8f78f6c23b1bfdcf46107ce83c8a83bf61b9fa7e8a1d86260d80c68765/IonDen/mlx-teacache"
fundingLinks: ["GITHUB:https://github.com/IonDen"]
discussionCount: 0
---

# mlx-teacache

**Faster image generation on Apple Silicon: TeaCache skips the denoising steps that barely change the picture. For Qwen-Image, FLUX.2 Klein base, Z-Image and FLUX.1 on mflux.**

mlx-teacache makes image generation on an Apple Silicon Mac faster. It plugs into [mflux](https://github.com/mflux-community/mflux), which runs open image models on MLX, Apple's machine-learning framework. You wrap the model in one call, `apply_teacache(flux)`, and keep your prompt, seed and settings. At each model's default setting the image stays very close to what plain mflux makes; it just arrives sooner. Nothing is retrained and nothing extra is downloaded.

Measured on an M1 Max with 32 GB, against plain mflux, at each model's default threshold. The FLUX.1 dev row was measured on mflux 0.24.0 and MLX 0.32.2; the other rows on mflux 0.18.0. Qwen-Image ran at 768×768 with 4-bit weights, Z-Image base at 512×512 with 8-bit weights, the others at 512×512 with 4-bit weights. None of the other records names its MLX version; the lock files at the commits involved resolve MLX 0.31.2 (macOS entry). Each row has a note under [Benchmarks](#benchmarks) that says what its record does and does not…
