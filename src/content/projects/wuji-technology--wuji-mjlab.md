---
repo: "wuji-technology/wuji-mjlab"
name: "wuji-mjlab"
description: "In-hand reorientation RL: PPO training and sim-to-real deployment for the Wuji Hand, built on mjlab."
readmeQualityOk: true
url: "https://github.com/wuji-technology/wuji-mjlab"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 181
forks: 9
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 11
recentReleases: 1
createdAt: "2026-05-15T08:14:46Z"
lastCommitAt: "2026-07-17T05:59:05Z"
lastReleaseAt: "2026-05-29T15:30:06Z"
status: "thriving"
tags: []
healthScore: 81
undervaluedScore: 11
maintainers: ["AsahelLee", "yuanyuanxin"]
openGraphImageUrl: "https://opengraph.githubassets.com/0d3980c56391ec486bef8827e2dda8899f500440979f902d001e9621a0002ec1/wuji-technology/wuji-mjlab"
---

# wuji-mjlab

wuji-mjlab is an in-hand cube reorientation RL project for the Wuji Hand. It trains PPO policies in [mjlab](https://github.com/mujocolab/mjlab) that cover the full SO(3) goal space, and deploys them on the physical hand through a sim-to-real bridge. The repo ships pretrained checkpoints, deployment scripts, and hardware guides so you can reproduce the demo end to end.

**Get started with [Quick Start](#quick-start). For detailed documentation, please refer to [Wuji MJLab](https://docs.wuji.tech/docs/en/wuji-mjlab/latest/) on Wuji Docs Center.**

</p>

## Repository Structure

```text
wuji-mjlab/
├── src/
│   ├── wuji_mjlab/        // task package (tasks/reorient/, assets/, utils/, rl/)
│   └── wuji_rl_libs/      // vendored rsl-rl PPO backend
├── deploy/reorient/       // sim-to-real bridge (vision, ZMQ, hand driver)
├── scripts/               // train / play / tools entry points
├── docs/                  // architecture + sim-to-real setup
├── pixi.toml              // canonical install + task runner
└── pyproject.toml         // package metadata
```

## Quick Start

### Installation

Requirements: Linux x86_64, an NVIDIA GPU with CUDA 12.8, and…
