---
repo: "gonsolo/Gonzales"
name: "Gonzales"
description: "Rendering Disney's Moana in Mojo"
readmeQualityOk: true
url: "https://github.com/gonsolo/Gonzales"
homepage: "https://gonsolo.github.io/Gonzales/"
language: "Mojo"
languages: ["Mojo"]
languagePcts: [86]
stars: 123
forks: 6
openIssues: 0
closedIssues: 2
watchers: 2
contributors: 2
recentReleases: 0
createdAt: "2021-01-13T09:56:08Z"
lastCommitAt: "2026-09-24T08:42:25Z"
lastReleaseAt: "2026-03-12T17:35:38Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 90
undervaluedScore: 47
maintainers: ["gonsolo"]
openGraphImageUrl: "https://opengraph.githubassets.com/84ad86648330d07fc8613ea6288aa6b9d208f588e6e004661f2093ef0eaae2af/gonsolo/Gonzales"
---

# Gonzales — Physically Based Renderer

A production-capable Monte Carlo path tracer written in **Mojo**, designed
for high-end light transport simulation. Gonzales renders complex scenes —
including Disney's Moana Island and all 32 Bitterli benchmark scenes — with
GPU-accelerated wavefront path tracing and an à-trous wavelet denoiser.

📖 Read the [Gonzales Book](https://gonsolo.github.io/gonzales/) for detailed
documentation with annotated source code.

## Architecture

The renderer is written entirely in **Mojo** (~10,700 lines) and organized
into focused modules:

| Module | Lines | Responsibility |
|--------|------:|---------------|
| `parsing.mojo` | 3,254 | PBRT-v4 scene parser — geometry, materials, lights, textures |
| `shading.mojo` | 2,225 | Material shading — diffuse, coated, conductor, dielectric |
| `gpu.mojo` | 1,553 | GPU kernels: wavefront path tracing, à-trous denoiser, film |
| `pipeline.mojo` | 697 | Batch and interactive rendering pipelines |
| `bvh.mojo` | 569 | BVH construction (SAH) and traversal |
| `geometry.mojo` | 566 | Ray, intersection, path state structs |
| `rendering.mojo` | 443 | CPU tile renderer, film accumulation, bilateral denoiser |
|…
