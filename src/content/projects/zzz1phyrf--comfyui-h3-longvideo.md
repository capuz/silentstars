---
repo: "Zzz1phyrf/ComfyUI-H3-LongVideo"
name: "ComfyUI-H3-LongVideo"
description: "ComfyUI long-video controller for MiniMax H3 Ref2VA singing and speaking workflows"
originalDescription: "ComfyUI long-video controller for MiniMax H3 Ref2VA singing and speaking workflows"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/Zzz1phyrf/ComfyUI-H3-LongVideo"
language: "Python"
languages: ["Python"]
languagePcts: [79]
topics: ["comfyui", "digital-human", "minimax", "video-generation"]
stars: 178
forks: 8
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-08-31T12:14:10Z"
lastCommitAt: "2026-11-06T13:19:34Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 62
undervaluedScore: 20
maintainers: ["Zzz1phyrf", "MUJUN-2025"]
openGraphImageUrl: "https://opengraph.githubassets.com/2ec900035e4ac9e255d274587a025639c75074d269f467d0a3b177d7ed290b71/Zzz1phyrf/ComfyUI-H3-LongVideo"
---

# ComfyUI H3 Long Video

A MiniMax H3 long-audio segmented generation plugin with two independent control nodes: **MiniMax H3 · MV Generator** and **MiniMax H3 · Talking Avatar**. Both support local / RunningHub, segment review, generation, single-segment redo, preview, and merging.

**The repository and install package include two complete example workflows**: [MV](https://github.com/Zzz1phyrf/ComfyUI-H3-LongVideo/blob/HEAD/examples/MiniMaxH3MV数字人工作流%20By%20像素幻想Lab.json), [Talking Avatar](https://github.com/Zzz1phyrf/ComfyUI-H3-LongVideo/blob/HEAD/examples/MiniMaxH3口播数字人工作流%20By%20像素幻想Lab.json). Both let you choose local / RunningHub in the node. For the RH single-segment compute workflow, you must import it separately into your own RH workspace and fill in new IDs. The Talking Avatar and MV model conditioning chains differ, so each uses its own canvas. This plugin does not wrap all generation nodes into a single black box for you.

## Installation

1. Put the plugin in `ComfyUI/custom_nodes/ComfyUI-H3-LongVideo`, avoiding duplicate installs or an extra nested directory.
2. Use ComfyUI's Python to install `requirements.txt`, and prepare `ffmpeg` and `ffprobe`.
3. Install the…
