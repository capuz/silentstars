---
repo: "suvadityamuk/trellis2-cuda"
name: "trellis2-cuda"
description: "TRELLIS.2 image-to-3D in pure CUDA C++: bitwise parity with PyTorch, up to 9.1x faster on H200"
readmeQualityOk: true
url: "https://github.com/suvadityamuk/trellis2-cuda"
homepage: "https://huggingface.co/kernels/suvadityamuk/trellis2-cuda"
language: "Cuda"
languages: ["Cuda"]
languagePcts: [62]
topics: ["3d", "cuda", "hf-kernels", "huggingface", "image-to-3d", "nvidia", "trellis", "trellis2"]
stars: 38
forks: 2
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-10-07T07:32:07Z"
lastCommitAt: "2026-11-25T03:14:51Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 74
undervaluedScore: 19
maintainers: ["suvadityamuk"]
openGraphImageUrl: "https://opengraph.githubassets.com/bbd2f6d2b06d09dbf37693f32de5f4668d9d636f07070d39a0f998339b524c14/suvadityamuk/trellis2-cuda"
---

# TRELLIS.2 in CUDA C++

Image → textured GLB for [TRELLIS.2-4B](https://github.com/microsoft/TRELLIS.2) (`1024_cascade`, `example.py` `to_glb` settings),
with no Python at runtime. Two builds from one binary:

- **parity** (default): bitwise identical to the official PyTorch pipeline from the input image to the final mesh and attributes,
  and through the GLB writer (texture bake, TELEA inpaint, WebP, glTF bytes). The one exception is the vertex-normal buffer:
  CuMesh accumulates normals with atomics, so the official code is nondeterministic there too.
- **fast** (`T2_FAST=1`): tolerance-bounded; see below.

The full worklog (method, bugs, figures) is in [docs/blog.md](https://github.com/suvadityamuk/trellis2-cuda/blob/HEAD/docs/blog.md).

## Results (H200, 5 example images, warm process, 1 warmup, seconds)

Second benchmark session, after the end-to-end optimizations of the fast build (all six columns measured in one H200 job;
the first session's table is kept below):
