---
repo: "iron-mukakin/Animerge"
name: "Animerge"
description: "This is a comprehensive tool for merging, analyzing, and training Anima models (cosmos) in a hierarchical (layer-by-layer) manner.Multilingual support."
readmeQualityOk: true
url: "https://github.com/iron-mukakin/Animerge"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["cuda", "diffusion-models", "generative-ai", "kohya-ss", "lora-training", "model-editing", "python", "sd-scripts", "multilingual", "nvidia-cosmos"]
stars: 18
forks: 0
openIssues: 1
closedIssues: 3
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2026-05-25T20:35:52Z"
lastCommitAt: "2026-09-27T09:27:36Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 79
undervaluedScore: 21
maintainers: ["iron-mukakin"]
openGraphImageUrl: "https://opengraph.githubassets.com/7280ad8f6b9e5632cc83b08bd2e1641ca81506a514ab19202358b8511ddd3b33/iron-mukakin/Animerge"
---

# Animerge

日本語は→ [README_ja.md](https://github.com/iron-mukakin/Animerge/blob/HEAD/docs/README_ja.md).

- Since Anima 3.8B has a large text encoder, temporary high system loads may occur during tasks like sample generation.
- Please make sure to click "Detect Model" for accurate version identification.
- Merge functionality for different versions has been implemented.
- Changed the merge function to use the GPU.

| item | Supported Versions |
| :--- | :--- |
| Model Merge | Anima Base 1.0, Anima3.8B v1.0, Anima3.8B v1.1 |
| LoRA Merge| Anima Base 1.0,Anima3.8B v1.0, Anima3.8B v1.1 |
| Layer Analysis | Anima Base 1.0, Anima3.8B v1.0, Anima3.8B v1.1 |
| Detailed Analysis | Anima Base 1.0, Anima3.8B v1.0, Anima3.8B v1.1 |
| LoRA Training | Anima Base 1.0, Anima3.8B v1.0, Anima3.8B v1.1 |
| LECO Training | Anima Base 1.0, Anima3.8B v1.0, Anima3.8B v1.1 |
| ADDifT Training | Anima Base 1.0, Anima3.8B v1.0, Anima3.8B v1.1 |

Animerge is a desktop GUI tool for working with Anima model checkpoints and LoRA files. The current build is centered on `app/gui.py`, with merge, analysis, model I/O, and LoRA training support split into related modules under `app/`.

</p>

## Model / Model…
