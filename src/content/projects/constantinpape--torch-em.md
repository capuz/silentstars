---
repo: "constantinpape/torch-em"
name: "torch-em"
description: "Deep-learning based semantic and instance segmentation for 3D Electron Microscopy and other bioimage analysis problems based on pytorch."
readmeQualityOk: true
url: "https://github.com/constantinpape/torch-em"
language: "Python"
languages: ["Python", "Jupyter Notebook"]
languagePcts: [61, 39]
stars: 128
forks: 31
openIssues: 34
closedIssues: 56
watchers: 2
contributors: 18
recentReleases: 0
createdAt: "2021-03-01T10:09:32Z"
lastCommitAt: "2026-09-02T08:04:57Z"
lastReleaseAt: "2023-07-28T21:10:17Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 89
undervaluedScore: 43
maintainers: ["anwai98", "constantinpape", "titusgriebel"]
openGraphImageUrl: "https://opengraph.githubassets.com/4fb3795f00f880385645a46382fcefa4c3604ec92e0b370f5c4df16dd77def81/constantinpape/torch-em"
---

# torch-em

Deep-learning based semantic and instance segmentation for 3D Electron Microscopy and other bioimage analysis problems based on PyTorch. Any feedback is highly appreciated, just open an issue!

**Important:** We recently migrated `torch_em` to [bioimage-cpp](https://github.com/computational-cell-analytics/bioimage-cpp). This enables installing `torch_em` via pip (in addition to conda) but changes dependencies and may still lead to some bugs. Please report any problems you encounter in an issue; you can pin `torch_em < 0.9` to install a version based on previous dependencies.

Highlights:
- Functional API with sensible defaults to train a state-of-the-art segmentation model with a few lines of code.
- Differentiable augmentations on GPU and CPU thanks to [kornia](https://github.com/kornia/kornia).
- Off-the-shelf logging with [tensorboard](https://www.tensorflow.org/tensorboard) or [wandb](https://wandb.ai/site).
- Export trained models to [bioimage.io](https://bioimage.io/#/) model format with one function call to deploy them in [ilastik](https://www.ilastik.org/documentation/nn/nn) or [deepimageJ](https://deepimagej.github.io/deepimagej/).

Design:
- All parameters…
