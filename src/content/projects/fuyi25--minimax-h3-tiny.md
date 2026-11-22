---
repo: "fuyi25/MiniMax-H3-Tiny"
name: "MiniMax-H3-Tiny"
description: "H3-Tiny: pruned MiniMax-H3 (33B → 17B → 14B) for video + audio generation, with ComfyUI support"
readmeQualityOk: true
url: "https://github.com/fuyi25/MiniMax-H3-Tiny"
homepage: "https://fuyi25.github.io/MiniMax-H3-Tiny/"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["audio-generation", "comfyui", "diffusers", "minimax-h3", "model-compression", "pruning", "video-generation"]
stars: 35
forks: 3
openIssues: 2
closedIssues: 0
watchers: 2
contributors: 4
recentReleases: 0
createdAt: "2026-11-19T11:18:11Z"
lastCommitAt: "2026-11-22T11:52:20Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 70
undervaluedScore: 12
maintainers: ["fuyi25", "Curley-G"]
openGraphImageUrl: "https://opengraph.githubassets.com/10d509631d9989c7d4c2f808b0b4a12750e96cfe6a1cc0219e77d791c9d7b228/fuyi25/MiniMax-H3-Tiny"
---

# H3-Tiny

**Structured pruning of MiniMax H3 Ref2VA: 33B → 17B → 14B**

Joint video + audio generation from text and reference images, at about half the size of the original, with recovered
and few-step checkpoints.

🧩 **Using ComfyUI?** Every checkpoint also comes as a single file in
[MiniMax-H3-Tiny-ComfyUI](https://huggingface.co/H3-Tiny/MiniMax-H3-Tiny-ComfyUI); see [ComfyUI](#comfyui).

## News

- **[2026/11/22]** The checkpoints are renamed to `MiniMax-H3-Tiny-*` on Hugging Face (old links redirect), and the
  ComfyUI files to `minimax_h3_tiny_*.safetensors`.
- **[2026/11/21]** ComfyUI support: single-file checkpoints in
  [`MiniMax-H3-Tiny-ComfyUI`](https://huggingface.co/H3-Tiny/MiniMax-H3-Tiny-ComfyUI) load with ComfyUI's native MiniMax H3 nodes
  (17B Ref2VA, 17B FL2VA / T2VA, 14B OKD Ref2VA, and 17B FewStep with our nodes). See [ComfyUI](#comfyui).
- **[2026/11/20]** We release [`MiniMax-H3-Tiny-17B-Pruned-FL2VA`](https://huggingface.co/H3-Tiny/MiniMax-H3-Tiny-17B-Pruned-FL2VA),
  the H3 FL2VA / T2VA transformer pruned to 17B with no training.
