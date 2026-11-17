---
repo: "Robot-Nav/SuperMimic-Agent-WFArm"
name: "SuperMimic-Agent-WFArm"
description: "Exploratory open-source project: a training scheme combining SuperMimic and MimicAgent for unified coordinated control and hierarchical control of a four-wheel-legged robotic arm. Discussion and joint exploration are welcome."
originalDescription: "探索类开源：SuperMimic与MimicAgent联动用于四轮足机械臂的统一协同控制与分层控制的训练方案。欢迎交流与共同探索。"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/Robot-Nav/SuperMimic-Agent-WFArm"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["mobile-manipulation", "model-based-rl", "mujoco", "pytorch", "robotics", "whole-body-control", "world-model"]
stars: 19
forks: 2
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-11-05T03:45:10Z"
lastCommitAt: "2026-11-17T12:18:29Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 78
undervaluedScore: 15
maintainers: ["Robot-Nav"]
openGraphImageUrl: "https://opengraph.githubassets.com/a02087324fddcdd92e9a19036e5b2da1459ce165258bce705595ac2e8f83a4b4/Robot-Nav/SuperMimic-Agent-WFArm"
---

# SuperMimic-Agent-WFArm

**English · [简体中文](https://github.com/Robot-Nav/SuperMimic-Agent-WFArm/blob/HEAD/README_CN.md)**

An exploratory open-source project on **wheel-legged mobile manipulation**. It studies how a four-wheel, four-leg platform and a six-joint arm can share a learned dynamics model, how a fixed-base arm can learn pose reaching and trajectory tracking, and how generated references can support that learning. Discussion, experiments and contributions are welcome.

The main learning mechanism comes from [SuperMimic](https://arxiv.org/abs/2610.28480): fit a differentiable world model to real simulator transitions, then optimize the policy through short imagined rollouts. A [MimicAgent](https://arxiv.org/abs/2609.24145)-style frontend proposes reference motions and checks them before they enter training.

This repository distributes training and evaluation code. Robot descriptions, meshes, calibration, datasets, checkpoints, videos and internal experiment reports are supplied separately or kept private. Full WF-Arm simulation requires authorized robot assets. The asset-free tests run without them.

---

**png**：

**video**：…
