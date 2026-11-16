---
repo: "Illuminus7/ComfyUI-AppleSilicon-int8-Fast"
name: "ComfyUI-AppleSilicon-int8-Fast"
description: "Fast int8 on Apple Silicon for Comfy"
readmeQualityOk: true
url: "https://github.com/Illuminus7/ComfyUI-AppleSilicon-int8-Fast"
language: "Python"
languages: ["Python"]
languagePcts: [92]
topics: ["apple-silicon", "comfyui", "custom-nodes", "int8", "metal", "mps"]
stars: 9
forks: 0
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 2
recentReleases: 7
createdAt: "2026-10-09T06:47:25Z"
lastCommitAt: "2026-11-16T11:50:50Z"
lastReleaseAt: "2026-11-16T11:51:03Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 87
undervaluedScore: 40
maintainers: ["Illuminus7"]
openGraphImageUrl: "https://opengraph.githubassets.com/9d5131bbf22de6688d188205e0e960613f1df8e31a40960119de44a63719f17d/Illuminus7/ComfyUI-AppleSilicon-int8-Fast"
---

This custom node is based on the original work of Paweł Mazurkiewicz ([ComfyUI-AppleSilicon-FP8](https://github.com/pawel-mazurkiewicz/ComfyUI-AppleSilicon-FP8)).

A lot of speed-up ideas were taken from the amazing work of Liu Liu on Draw Things. Open source repos:
- [draw-things-community](https://github.com/drawthingsai/draw-things-community) (Draw Things CLI)
- [ccv](https://github.com/liuliu/ccv)
- [s4nnc](https://github.com/liuliu/s4nnc)

Proudly vibe-coded using Claude.

# ComfyUI-AppleSilicon-int8-Fast

Fast int8 support in ComfyUI on Apple Silicon.

Copy this folder into `ComfyUI/custom_nodes/` and restart ComfyUI.

Alternative: Open the terminal, cd to your custom nodes folder, type git clone https://github.com/Illuminus7/ComfyUI-AppleSilicon-int8-Fast

The kernels are tuned on an M5 Max. Smaller M5 chips run the same kernels with fewer GPU cores; they should get the same relative speedups, but the large models (MiniMax H3 needs about 40 GB) won't fit in their memory.

This was tested with ComfyUI v0.43 and PyTorch 2.13 to 2.15. Future updates may break compatibility.

No startup arguments are needed (Comfy Desktop's default `--enable-manager` is fine). Memory-related…
