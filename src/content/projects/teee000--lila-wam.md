---
repo: "teee000/LiLa-WAM"
name: "LiLa-WAM"
description: "LiLa-WAM: Lightweight Latent Reasoning World-Action Model for Robotic Manipulation"
readmeQualityOk: true
url: "https://github.com/teee000/LiLa-WAM"
language: "Python"
languages: ["Python"]
languagePcts: [97]
stars: 7
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-08-04T13:50:02Z"
lastCommitAt: "2026-08-05T06:07:36Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 80
undervaluedScore: 18
maintainers: ["teee000"]
openGraphImageUrl: "https://opengraph.githubassets.com/3e4d793d77533c8edce06ff05372c7de5547a5aa4ea55ef916e86faacb0814ac/teee000/LiLa-WAM"
---

# LiLa-WAM: Lightweight Latent Reasoning World-Action Model for Robot Manipulation

Official implementation of **LiLa-WAM**, a lightweight world-action model that is trainable on a **single consumer-grade GPU (24 GB)**.

&gt; 📄 Paper: [arXiv](https://arxiv.org/pdf/2608.03701). | 🌐 Project Page: [teee000.github.io/LiLa-WAM-page](https://teee000.github.io/LiLa-WAM-page/)

## Overview

LiLa-WAM achieves an average success rate of **90.48%** on the 50 RoboTwin 2.0 tasks under the clean setting, while remaining trainable on a **single RTX 5090** (~110 GPU hours for joint training on all 50 tasks). The full model contains **0.5B parameters**, of which only 0.2B are trainable.

Key features:

- 🪶 **Lightweight**: 0.5B parameters (0.2B trainable), trainable on a single 24 GB GPU
- 🔮 **World-action modeling**: latent future-state prediction coupled with action generation
- 🎯 **Visual Transition Tokens (VTT)**
- 🤖 **Evaluated on**: RoboTwin 2.0 (50 tasks), LIBERO, and real-robot experiments

</p>
  <em>Success rate vs. model parameters on RoboTwin 2.0 (left) and LIBERO (right).
  Bubble size denotes the number of parameters.</em>
</p>

</p>
  <em>LiLa-WAM Framework.</em>
</p>

##…
