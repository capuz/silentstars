---
repo: "DeformX/DeformX"
name: "DeformX"
description: "The official source code for \"DeformX: A Versatile Co-Simulation Framework for Deformable Linear Objects\" (IROS 2026)"
readmeQualityOk: true
url: "https://github.com/DeformX/DeformX"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 35
forks: 1
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 5
recentReleases: 0
createdAt: "2026-06-01T22:23:31Z"
lastCommitAt: "2026-11-04T07:31:35Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 65
undervaluedScore: 4
maintainers: ["yiyang-23", "Lehong-Wang", "EdgarFx"]
openGraphImageUrl: "https://opengraph.githubassets.com/c597d3282432edd5d37145eb1741a5da46ee3f3b36cc4a7865b01add9a486d06/DeformX/DeformX"
---

# DeformX: Deformable Linear Objects Simulation

### [🌐 Project Page](https://deformx.github.io/) | [📄 Paper](https://arxiv.org/abs/2606.22116) | [🤗 WireSeg-36k Dataset](https://huggingface.co/datasets/DeformX/WireSeg-36K) | [🤗 Render Assets](https://huggingface.co/datasets/DeformX/DeformX-Assets) | [🎥 Video](https://www.youtube.com/watch?v=CQvS8lQYSS8)

DeformX is a co-simulation framework for deformable linear objects (DLOs) such as wires, cables, and ropes. It couples a dedicated **Cosserat rod physics engine** with **NVIDIA Isaac Sim** to deliver DLO simulation that is **physically faithful** and **visually realistic** at the same time, while remaining directly compatible with scalable synthetic data generation and robot-learning pipelines.

> **Note**
> The **GPU/CUDA Stable Cosserat Rods solver** is here: the `Cosserat-Rod-Solver-CUDA` submodule (Python module `ropesim`), with Isaac Lab demos and the rope-swing RL task under `demo/`. See [The GPU rod solver](#the-gpu-rod-solver).

## 🔥 Updates

* **\[Nov 2026\]** We released the **GPU/CUDA Stable Cosserat Rods solver** ([Cosserat-Rod-Solver-CUDA](https://github.com/DeformX/Cosserat-Rod-Solver-CUDA)): thousands of ropes…
