---
repo: "fengyungithub/dsh-short-video-studio"
name: "dsh-short-video-studio"
description: "AI video creation workbench based on DeepSeek Harness and ComfyUI"
originalDescription: "基于deepseek harness和ComfyUI的AI视频创作工作台"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/fengyungithub/dsh-short-video-studio"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [96]
topics: ["comfyui", "deepseek-harness", "deepseek-harness-plugin", "deepseek-harness-plugins", "dsh-plugin", "minimax-h3"]
stars: 15
forks: 3
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 8
createdAt: "2026-08-25T08:37:55Z"
lastCommitAt: "2026-09-29T08:10:47Z"
lastReleaseAt: "2026-09-29T08:12:01Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 69
undervaluedScore: 49
maintainers: ["fengyungithub"]
openGraphImageUrl: "https://opengraph.githubassets.com/fa642eb8b2a5478f7efce8b093b1ae410702ac2226025986d48127497acca0a3/fengyungithub/dsh-short-video-studio"
---

# dsh-short-video-studio

**Completely local · Free · Zero cloud dependencies** **short drama / animation canvas studio**, running as a dual-sided plugin for [DeepSeek Harness](https://github.com/deepseek-ai). All generation runs on **local ComfyUI** – no need for any paid cloud API, no quota consumption, ready to use out of the box, one generation, unlimited output.

**Image quality can now reach 2K / 4K delivery**: On the generation side, there are **two-stage latent space upscaling** (hires: first pass 896×512 → latent ×1.5 → second pass reconstruction, delivery 1344×768) and **learning-based 3D latent upscaling** (`...-2k` family: ×2 → delivery **2688×1536**); on the post-processing side, there is an independent **video super-resolution** capability `video.upscale` (frame-by-frame CNN ×2 / ×4, **original audio track preserved**) – native clips in one pass ×4 reach **4032×2304** (124 frames tested **241.3s**), or 2K then ×2 to same resolution (**261.6s**). See [Resolution and Image Quality (2K / 4K)](#分辨率与画质2k--4k) for which path to choose.

> In a nutshell: **Agent orchestrates workflows according to the skills you define, dispatches generation requests to local ComfyUI for…
