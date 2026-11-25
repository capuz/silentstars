---
repo: "vanzll/DiffusionART"
name: "DiffusionART"
description: "Official Implementation of \"DiffusionART: Efficient, Stable and Scalable Reinforcement of Diffusion Models\""
readmeQualityOk: true
url: "https://github.com/vanzll/DiffusionART"
homepage: "https://arxiv.org/abs/2610.12572"
language: "Python"
languages: ["Python"]
languagePcts: [99]
topics: ["diffusion-models", "flow-matching", "image-to-video", "post-training", "reinforcement-learning", "text-to-image", "text-to-video", "video-generation", "diffusionart"]
stars: 245
forks: 4
openIssues: 0
closedIssues: 1
watchers: 2
contributors: 1
recentReleases: 0
createdAt: "2026-09-24T08:35:23Z"
lastCommitAt: "2026-11-25T13:19:57Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 93
undervaluedScore: 29
maintainers: ["vanzll", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/bc993ab5a9aea4ac7ab52de238a183d917ed26e74f1a749ab023ff9d0eb11acb/vanzll/DiffusionART"
---

## News
- 📰 **[2026.11.13]** Diffusion-ART is now supported by [RLinf](https://github.com/RLinf/RLinf) and [Flow-Factory](https://github.com/X-GenGroup/Flow-Factory)!

- 📰 **[2026.10.30]** Diffusion-ART is reported by [机器之心](https://mp.weixin.qq.com/s/i7VJo2lvycS6jppsJMcWjQ).

- ⚡ **[2026.10.25]** **[Diffusion-ART-Flash](#diffusionart-flash) is supported.** Training only high-noise timesteps achieves comparable performance to all-timesteps training with substantially less training time cost.

- 🎉 **[2026.10.22]** [MiniMax-H3](#minimax-h3) is now supported for **text-to-audio/video (omni)** training, with [DiffusionART post-training recipes](#training-recipes-by-gpu-count).

- 🥇 **[2026.10.12]** DiffusionART ranked **#1 on [Hugging Face Daily Papers](#paper)**!

- **2026.10.17:** ART now splits each prompt's trajectories evenly between its
  two update windows, retaining all prompts in each update to reduce gradient variance. Guidance still uses the full K-sample group.
