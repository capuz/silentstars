---
repo: "tibidefengzi/ComfyUI-AD-Segmented-Loop"
name: "ComfyUI-AD-Segmented-Loop"
description: "ComfyUI segmented loop plugin: asset timeline, per-segment generation, preview review, and video merging."
originalDescription: "ComfyUI 分段循环插件：素材时间线、逐段生成、预览审核与视频合并。"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/tibidefengzi/ComfyUI-AD-Segmented-Loop"
language: "Python"
languages: ["Python", "JavaScript"]
languagePcts: [61, 39]
stars: 18
forks: 1
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 10
createdAt: "2026-10-29T02:15:19Z"
lastCommitAt: "2026-11-16T04:29:08Z"
lastReleaseAt: "2026-11-06T20:29:21Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 70
undervaluedScore: 31
maintainers: ["tibidefengzi"]
openGraphImageUrl: "https://opengraph.githubassets.com/1e11de101ec213e62c2585a9ecd9b99513e1f7fc284f5f0e34f82aba83cc6e15/tibidefengzi/ComfyUI-AD-Segmented-Loop"
---

# AD-Segmented Loop · ComfyUI-AD-Segmented-Loop

An asset timeline and segmented loop plugin for ComfyUI. It connects asset preparation, per-segment generation, preview comparison, and result saving into one workflow, suitable for segmented long-video generation, latent bridge continuation, and shot-level redo.

## Four Core Nodes

1. **AD-Asset Preparation**: Batch import and drag-and-drop of images, videos, and audio. Video and audio each have a 3-track timeline supporting dragging, trimming, cutting, splicing, merging, multi-select group move, and undo/redo. Supports smart splitting by section, beat, shot, or breath pause. Outputs per-segment reference images, reference video frames, reference video audio, reference audio, source video/source audio, start frames, and mask-dedicated frames.
2. **AD-Segment Generation**: Organizes segments by asset duration or segment count, strictly locks to 24 FPS, and adapts to H3's 17k+5 generation frame count. Controls width, height, prompts, reference assets, and reference ranges per segment. Built-in latent bridge continuation (including re-anchoring, seam exposure transition, and quality correction).
3. **AD-Segment Preview**: Per-segment…
