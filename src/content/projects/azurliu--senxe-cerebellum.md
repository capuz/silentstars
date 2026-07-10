---
repo: "AzurLiu/Senxe-Cerebellum"
name: "Senxe-Cerebellum"
description: "Biologically-grounded motor control for industrial robotics using Cortical Labs CL1."
readmeQualityOk: true
url: "https://github.com/AzurLiu/Senxe-Cerebellum"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 7
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-04-13T14:23:58Z"
lastCommitAt: "2026-07-10T07:00:59Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 68
undervaluedScore: 35
maintainers: ["AzurLiu"]
openGraphImageUrl: "https://opengraph.githubassets.com/b082ac2e685650fd1b0b1ff984161abd979fb24e9f1dd2950460a039524b87b8/AzurLiu/Senxe-Cerebellum"
---

# Senxe Cerebellum: Biologically-Grounded Robotic Motor Control

Senxe Cerebellum is an open-source research framework that interfaces living biological neural networks (via the **Cortical Labs CL1** microelectrode array platform) with high-precision industrial robotic manipulators. 

The framework maps multi-modal physical sensor readings (force, torque, kinematics) into closed-loop electrical stimulation patterns and decodes biological firing outputs (spikes) into continuous action trajectories to solve force-sensitive assembly tasks (such as the RoboSuite NutAssembly benchmark).

> [!NOTE]
> **Hardware Fallback**: This framework is built directly on the official Cortical Labs `cl-sdk`. It automatically detects physical hardware; when a CL1 device is not present, it gracefully falls back to the SDK's official Poisson simulation server, enabling developers and researchers to run the entire pipeline locally.

---

## Core Scientific Modules

### 1. Neuromorphic Event-Driven Sparse Coding (VIE)
The **Virtual Interference Encoding (VIE)** module ([core/vie.py](https://github.com/AzurLiu/Senxe-Cerebellum/blob/HEAD/file:///Users/azur/Desktop/github_repo/core/vie.py)) maps continuous…
