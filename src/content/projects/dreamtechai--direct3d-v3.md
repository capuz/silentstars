---
repo: "DreamTechAI/Direct3D-V3"
name: "Direct3D-V3"
description: "[ACM TOG (SIGGRAPH Asia 2026)] Direct3D-V3: Latent-Free Diffusion Transformers in the Native Voxel Domain"
readmeQualityOk: true
url: "https://github.com/DreamTechAI/Direct3D-V3"
language: "Python"
languages: ["Python"]
languagePcts: [77]
stars: 34
forks: 3
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 1
recentReleases: 0
createdAt: "2026-11-18T15:10:10Z"
lastCommitAt: "2026-11-21T11:33:12Z"
status: "newborn"
tags: ["hidden_gem"]
healthScore: 79
undervaluedScore: 9
maintainers: ["shuangw98"]
openGraphImageUrl: "https://opengraph.githubassets.com/275c75118f68071d8bc9cbafab097cd03082478f73a229c62a92622bedb78ae2/DreamTechAI/Direct3D-V3"
---

# Direct3D-V3: Latent-Free Diffusion Transformers in the Native Voxel Domain

**ACM Transactions on Graphics (SIGGRAPH Asia 2026)**

Shuang Wu<sup>1,2</sup>, Jiachen Qian<sup>2,3</sup>, Youtian Lin<sup>1</sup>, Feihu Zhang<sup>2</sup>, Philip Torr<sup>4</sup>, Yao Yao<sup>1</sup>, and Xun Cao<sup>1</sup>

Direct3D-V3 generates diverse, high-fidelity 3D meshes by modeling raw SDF voxel grids directly with latent-free diffusion transformers, removing the VAE bottleneck used by latent diffusion pipelines.

> **The released model generates meshes with substantially finer surface detail than the version evaluated in the paper.** For image conditioning, we now combine features from four DINOv3 layers. Switching to the Muon optimizer both accelerated training convergence and improved the quality of the generated meshes.

## News

- **2026.11.19**: Inference code and models are released.
- **2026.11.19**: The [project page](https://dreamtechai.github.io/Direct3D-V3) and [paper](https://dl.acm.org/doi/10.1145/3842524) are released.
- **2026.08.25**: Direct3D-V3 is accepted to ACM Transactions on Graphics (SIGGRAPH Asia 2026).
