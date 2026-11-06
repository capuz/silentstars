---
repo: "sanchez-kim/trellis-silicon"
name: "trellis-silicon"
description: "TRELLIS.2 image-to-3D generation, native on Apple Silicon (PyTorch MPS + Metal)"
readmeQualityOk: true
url: "https://github.com/sanchez-kim/trellis-silicon"
language: "Python"
languages: ["Python"]
languagePcts: [96]
topics: ["3d-generation", "apple-silicon", "image-to-3d", "macos", "metal", "mps", "pytorch", "trellis"]
stars: 6
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-07-03T05:29:22Z"
lastCommitAt: "2026-11-06T13:20:42Z"
lastReleaseAt: "2026-07-03T09:29:18Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 73
undervaluedScore: 19
maintainers: ["sanchez-kim"]
openGraphImageUrl: "https://opengraph.githubassets.com/d669b6e257016ab3272dd54d33365c456b6c7aa056872e7e64d9b735fa5bd654/sanchez-kim/trellis-silicon"
---

# TRELLIS-Silicon

Run [TRELLIS.2](https://github.com/microsoft/TRELLIS.2) image-to-3D generation natively on Apple Silicon — no NVIDIA GPU required.

TRELLIS.2 is Microsoft Research's state-of-the-art image-to-3D model. It ships CUDA-only. This project runs it on Apple Silicon through PyTorch's MPS backend: a single image in, a textured GLB out, entirely on your Mac's GPU.

## TL;DR

- **One command**: `trellis-silicon photo.png` → GLB with baked PBR textures. Web UI: `trellis-silicon-web`.
- **Fast**: warm runs take **~20s load + ~1.6-2.0 min generation + ~22s GLB export** (default `512` pipeline, ~2.4 min wall, median of four runs on an M5/32GB). The performance pass over the base port cut load **5×** (~103s → ~20s) and total warm time roughly in half (~300s → ~145s; the base-port figure was measured on an earlier sample image); `--steps 8` fast mode trims generation by another ~20%.
- **Where the speed came from** (measured, not guessed): skipping a weight init that gets overwritten anyway, loading only the checkpoints the pipeline uses, batching the two CFG forwards, swapping MPS SDPA for a naive attention that is 3.3-4.1× faster at these shapes, running sparse convolution on…
