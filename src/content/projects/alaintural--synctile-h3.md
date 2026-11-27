---
repo: "alaintural/synctile-h3"
name: "synctile-h3"
description: "MiniMax H3: seam-free 1080p to 4K via synchronized tiles (SyncTile). ComfyUI node + workflow, scene-file Studio, 4.9x faster generation, benchmarks."
readmeQualityOk: true
url: "https://github.com/alaintural/synctile-h3"
homepage: "https://pixedi.com/lab/minimax-h3-4k-synctile"
language: "Python"
languages: ["Python"]
languagePcts: [96]
topics: ["4k", "benchmark", "comfyui", "local-ai", "minimax-h3", "multidiffusion", "upscaling", "video-generation", "tiled-diffusion"]
stars: 28
forks: 2
openIssues: 0
closedIssues: 1
watchers: 2
contributors: 2
recentReleases: 5
createdAt: "2026-10-06T19:56:17Z"
lastCommitAt: "2026-11-27T16:26:31Z"
lastReleaseAt: "2026-11-27T16:26:42Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 82
undervaluedScore: 31
maintainers: ["alaintural"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1407856233/ade010cf-fe77-465f-9c35-81138e9b4d59"
---

# SyncTile for MiniMax H3

**Seam-free 1080p, 2K and 4K for local MiniMax H3 video, through synchronized tiles. A ComfyUI node, a ready workflow and a scene-file pipeline, on one RTX 4090.**

MiniMax H3 is an open-weights video model that also generates sound. On a 24 GB card it tops out around 1344 x 768. SyncTile takes that clip up to 4K (3840 x 2160). The MiniMax H3 latent upscaler enlarges the latent. Then overlapping tiles refine it, and their latents are **blended after every sampling step**. One decode makes the video. You get no seams, and the eyes agree between tiles.

## The current version is 0.3.1

This repository started in October 2026 with one script, `synctile_h3.py`. Since then the work moved on. The tile step is now a ComfyUI node, and a full pipeline, SyncTile Studio, is built around it. **If you want to use SyncTile today, use the current version.**
