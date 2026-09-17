---
repo: "mark9009/ComfyUI-H3-LongTake"
name: "ComfyUI-H3-LongTake"
description: "Long MiniMax H3 videos clip by clip with continuity: motion/identity transfer and style transfer/retexture, resumable, one clip in VRAM at a time"
readmeQualityOk: true
url: "https://github.com/mark9009/ComfyUI-H3-LongTake"
language: "Python"
languages: ["Python"]
languagePcts: [98]
stars: 12
forks: 0
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-09-14T15:02:37Z"
lastCommitAt: "2026-09-17T08:35:23Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 23
maintainers: ["Mark900900"]
openGraphImageUrl: "https://opengraph.githubassets.com/b530d3fc7b7b72f5853272489da23b8153d21647fcfb884195d6d606f73300e5/mark9009/ComfyUI-H3-LongTake"
---

# ComfyUI-H3-LongTake

Long videos with **MiniMax H3** (Ref2VA), rendered clip by clip with continuity between clips,
on consumer GPUs: VRAM and RAM only ever hold **one clip**. Two use cases, one node:

- **Motion / identity transfer** — a reference video drives the performance, one or more pictures define who
  is in it (Ref2VA).
- **Style transfer and retexture** — the source video is re-rendered in a new style (Ghibli, Van Gogh, GTA,
  pop-art, The Simpsons…) or an outfit's material/colour is changed, keeping motion, framing and scene, with
  NRDX's *StyleTransfer* LoRA.

Every clip is written to disk as soon as it is done: you can stop, resume, redo a single clip, and assemble the
final video with the original audio. The full workflow is stored inside the project folder and inside the
final mp4, so any output can be dropped back onto ComfyUI to reopen the graph.

Depends on **ComfyUI core ≥ 0.34** only (no other node packs). Tested on a 16 GB GPU (RTX 4080-class) with
25 GB of Qwen text-encoder weights staged in system RAM.

## Examples

Source on the left, result on the right (8 s excerpts, 10 fps GIFs; full clips with audio in…
