---
repo: "hetolin/PoseVLA"
name: "PoseVLA"
description: "Universal Pose Pretraining for Generalizable Vision-Language-Action Policies(RSS2026)"
url: "https://github.com/hetolin/PoseVLA"
homepage: "https://hetolin.github.io/PoseVLA"
language: "Python"
languages: ["Python"]
languagePcts: [98]
topics: ["co-training", "manipulation", "vla", "vlm"]
stars: 10
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-06-23T06:27:06Z"
lastCommitAt: "2026-07-04T06:11:14Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 79
undervaluedScore: 42
maintainers: ["hanyangyu1021"]
openGraphImageUrl: "https://opengraph.githubassets.com/29ba2abb1695933e9d358caa42f7d751e0f96de5454016923eb169c730c3280b/hetolin/PoseVLA"
---

# PoseVLA: Universal Pose Pretraining for Generalizable Vision-Language-Action Policies (RSS2026)

A unified framework that co-trains a **Vision-Language-Action (VLA)** policy with **3D object detection / 6D pose estimation**, built on top of **PaliGemma**. 🤗

[//]: # (Purely HuggingFace + Accelerate + DeepSpeed + Hydra based — concise code, multi-node ready, easy to extend.)

[\[🚀 Quick Start\]](#-quick-start) [\[🌟 Pre-train\]](docs/PRETRAIN.md) [\[🤖 Post-train (Robotwin)\]](docs/POSTTRAIN.md) [\[🕹 RoboTwin Eval\]](robotwin/PoseVLA/README.md) [\[🐛 Troubleshooting\]](docs/PRETRAIN.md#-troubleshooting)

</div>

---

## News 🚀🚀🚀
- `2026/06`: Initial release of **PoseVLA**: PaliGemma + π0 / π0.5 Action Expert, joint VLM + Action training with Knowledge Insulation, supports Omni3D / Omni6D / BOP / GraspClutter6D for 3D tasks and Agibot / Droid / RDT / UMI / xtrainer / InternData-A1 for robot actions.

---

## 📖 Documents

PoseVLA is split into two training stages, each with its own document:

| Stage | Entry script | Config | Doc |
| --- | --- | --- | --- |
| **Pre-train** (joint VLM + Action on large-scale data) | [train_pretrain.py](train_pretrain.py) |…
