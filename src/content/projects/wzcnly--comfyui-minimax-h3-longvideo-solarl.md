---
repo: "wzcnly/comfyui-minimax-h3-longvideo-solarL"
name: "comfyui-minimax-h3-longvideo-solarL"
description: "MiniMax H3 long-video samplers and reference loaders by solarL"
originalDescription: "MiniMax H3 long-video samplers and reference loaders by solarL"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/wzcnly/comfyui-minimax-h3-longvideo-solarL"
language: "Python"
languages: ["Python", "JavaScript"]
languagePcts: [77, 23]
stars: 6
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 2
createdAt: "2026-10-13T20:33:46Z"
lastCommitAt: "2026-11-13T11:25:40Z"
lastReleaseAt: "2026-11-13T11:27:13Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 74
undervaluedScore: 23
maintainers: ["wzcnly"]
openGraphImageUrl: "https://opengraph.githubassets.com/856f8c5eba3facba5e157c4e35ca9eecfaabbc4a92ed4d27e65d69608270ca3c/wzcnly/comfyui-minimax-h3-longvideo-solarL"
---

# comfyui-minimax-h3-longvideo-solarL

MiniMax H3 long-video sampling, segment planning, stage caching, and experimental local-editing node pack.

Current version: **v0.2.0**. Download from [Releases](https://github.com/wzcnly/comfyui-minimax-h3-longvideo-solarL/releases). [v0.1.0](https://github.com/wzcnly/comfyui-minimax-h3-longvideo-solarL/releases/tag/v0.1.0) keeps the pre-update online version for easy rollback. For detailed changes, see the [CHANGELOG](https://github.com/wzcnly/comfyui-minimax-h3-longvideo-solarL/blob/HEAD/CHANGELOG.md).

## New in this version and entry points

| Purpose | Entry point |
| --- | --- |
| Fixed segment length or full-frame generation, enhancement after a complete first pass | Regular long-video loop Sampler; segment_frames=0 means full frame |
| High/low two-stage standard second pass | Regular Sampler's second_pass_mode=split_sigmas |
| Low-resolution segmentation, whole-video SelfLift post-segments | SelfLift Sampler |
| Different segment lengths, per-segment prompts, cache restore | [Segment plan and cache guide](https://github.com/wzcnly/comfyui-minimax-h3-longvideo-solarL/blob/HEAD/examples/segment_plan_and_cache.md) |
| Replacing,…
