---
repo: "tibidefengzi/ComfyUI-AD-Segmented-Loop"
name: "ComfyUI-AD-Segmented-Loop"
description: "ComfyUI segmented-loop plugin: material timeline, per-segment generation, preview review, and video merging."
originalDescription: "ComfyUI 分段循环插件：素材时间线、逐段生成、预览审核与视频合并。"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/tibidefengzi/ComfyUI-AD-Segmented-Loop"
language: "Python"
languages: ["Python", "JavaScript"]
languagePcts: [61, 39]
stars: 16
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 10
createdAt: "2026-10-29T02:15:19Z"
lastCommitAt: "2026-11-13T05:39:10Z"
lastReleaseAt: "2026-11-06T20:29:21Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 80
undervaluedScore: 38
maintainers: ["tibidefengzi"]
openGraphImageUrl: "https://opengraph.githubassets.com/607895716382e50c593f23471a32c3b0006e2e5223f7bb6578e1a90c1525c92a/tibidefengzi/ComfyUI-AD-Segmented-Loop"
---

# AD-分段循环 · ComfyUI-AD-Segmented-Loop

A material timeline and segmented-loop plugin for ComfyUI. It links material preparation, per-segment generation, preview comparison, and result saving into one workflow, suited to long-video segmented generation, latent bridge continuation, and shot-level redo.

## Four Core Nodes

1. **AD-素材准备**: Batch import and drag-and-drop for images, videos, and audio. Videos and audio each have a 3-track timeline supporting drag, trim, cut, splice, merge, multi-select move, and undo/redo. Smart splitting by bar, beat, shot, or breath point. Outputs reference images, reference video frames, reference video audio, reference audio, source video/audio, start frames, and mask-specific frames per segment.
2. **AD-分段生成**: Organizes segments by material duration or segment count. Strict 24 FPS frame locking, adapting to H3's 17k+5 generated frame count. Per-segment control of width, height, prompts, reference materials, and reference ranges. Built-in latent bridge continuation (with re-anchoring, seam exposure transition, and quality correction).
3. **AD-分段预览**: Per-segment playback, A/B comparison, re-rolling specified segments, stop-and-standby with…
