---
repo: "Schaka/rocm-gfx803"
name: "rocm-gfx803"
description: "ROCm for gfx803 aka RX 460, RX 470, RX 480, RX 550, RX 560, RX 570, RX 580 and RX 590 with custom patches, kernel fixes, etc"
readmeQualityOk: true
url: "https://github.com/Schaka/rocm-gfx803"
language: "C++"
languages: ["C++", "Dockerfile"]
languagePcts: [49, 25]
stars: 12
forks: 2
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-08-10T11:05:08Z"
lastCommitAt: "2026-08-28T15:36:32Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 79
undervaluedScore: 36
maintainers: ["Schaka"]
openGraphImageUrl: "https://opengraph.githubassets.com/66dd5787098362a336bcad0a5427982893b7a171ca68ab7dc1a20c13eb008b93/Schaka/rocm-gfx803"
---

# rocm-gfx803

AMD Polaris (gfx803: RX 460/470/480/560/570/580/590 and friends) support for
the MIGraphX + ONNX Runtime + PyTorch stack, split out from
[`rocm-migraphx-ort-builder`](https://github.com/Schaka/rocm-gfx803/blob/HEAD/../rocm-migraphx-ort-builder) into its own
repository.

## Prebuilt images -- don't build this yourself

CI already builds and pushes the final image to GHCR. You do not need to
build the Dockerfile locally unless you're patching something. Pull it:

```bash
# rocm7 (main line, ROCm 7.14) -- versioned tag
docker pull ghcr.io/schaka/rocm-migraphx-ort-torch-builder:rocm7.14-gfx803

# rocm7 -- always the newest successful rocm7 build
docker pull ghcr.io/schaka/rocm-migraphx-ort-torch-builder:latest-gfx803

# rocm6.4.4 (older, hardware-verified line) -- versioned tag
docker pull ghcr.io/schaka/rocm-migraphx-ort-torch-builder:rocm6.4.4-gfx803
```

See "Repository layout" and `.github/workflows/gfx803-component.yml` for
the full tag scheme (per-component images, cache tags, dated tags).

## Why a separate repo

gfx803 is unsupported upstream as of ROCm 6.0 -- AMD stopped building for it,
and ROCm 7 rejects the card outright at HSA agent creation. Everything…
