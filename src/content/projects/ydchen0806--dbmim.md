---
repo: "ydchen0806/dbMiM"
name: "dbMiM"
description: "An official implement of IJCAI23 Self-supervised Neuron Segmentation with Multi-Agent Reinforcement Learning"
url: "https://github.com/ydchen0806/dbMiM"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 46
forks: 1
openIssues: 1
closedIssues: 3
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2023-05-18T08:57:26Z"
lastCommitAt: "2026-07-03T12:36:50Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 85
undervaluedScore: 52
maintainers: ["ydchen0806"]
openGraphImageUrl: "https://opengraph.githubassets.com/f32564c629c3f121cd2d8cbd6756c2555a59fca82cda0adf8364cbb99d0c3d19/ydchen0806/dbMiM"
---

# dbMiM Neuron Segmentation

[中文](README_zh.md) | [Hugging Face weights](https://huggingface.co/cyd0806/dbmim-neuron-segmentation)

Official implementation for dbMiM pretraining and CREMI neuron segmentation.
The maintained workflow is:

1. prepare unlabeled EM volumes for self-supervised pretraining;
2. run dbMiM / MAE-style masked-image pretraining;
3. finetune an anisotropic 3D UNETR affinity model on CREMI;
4. evaluate full CREMI A/B/C volumes with VOI and adapted Rand error (ARAND);
5. decode instances with the reference waterz post-processing backend.

Learnable / differentiable post-processing is developed separately at
https://github.com/ydchen0806/nnEM-Seg-diff-postprocess.

## Method

The segmentation model is `UNETRAnisotropicAffinityNet`.

- Input crop: `32 x 160 x 160`
- Patch size: `(4, 16, 16)`
- Output: z/y/x nearest-neighbor affinity logits
- Backbone: ViT encoder initialized from dbMiM pretraining
- Decoder: UNETR-style staged upsampling with an anisotropic z transition
- Finetuning loss: MSE + membrane-aware spatial weighting (MAWS)
- Evaluation: full-volume CREMI A/B/C inference, `ignore_label=0`, boundary ignore `xy=1, z=0`

dbMiM pretraining masks 3D ViT…
