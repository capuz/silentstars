---
repo: "NVlabs/COMPASS"
name: "COMPASS"
description: "Cross-embOdiment Mobility Policy via ResiduAl RL and Skill Synthesis"
url: "https://github.com/NVlabs/COMPASS"
language: "Python"
languages: ["Python"]
languagePcts: [90]
stars: 122
forks: 11
openIssues: 3
closedIssues: 10
watchers: 8
contributors: 10
recentReleases: 1
createdAt: "2025-02-21T21:25:39Z"
lastCommitAt: "2026-06-26T23:41:05Z"
lastReleaseAt: "2026-05-18T19:22:21Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 85
undervaluedScore: 28
maintainers: ["nv-liuw"]
openGraphImageUrl: "https://opengraph.githubassets.com/883b7fee0567ed6cc6d5a178088fff192d16636a7f986892f14ac280ebe131cf/NVlabs/COMPASS"
---

<h1 align="center"> COMPASS: Cross-Embodiment Mobility Policy via Residual RL and Skill Synthesis </h1>

[[Website]](https://nvlabs.github.io/COMPASS/)
[[Documentation]](https://nvlabs.github.io/COMPASS/docs/)
[[arXiv]](https://arxiv.org/abs/2502.16372)
</div>

## Overview

This repository provides the official PyTorch implementation of [COMPASS](https://nvlabs.github.io/COMPASS/).

</p>

COMPASS is a framework for cross-embodiment mobility that combines:

- Imitation Learning (IL) for strong baseline performance
- Residual Reinforcement Learning (RL) for embodiment-specific adaptation
- Policy distillation to create a unified, generalist policy

## Quick start

> Requires Docker + the [NVIDIA Container Toolkit](https://docs.nvidia.com/datacenter/cloud-native/container-toolkit/install-guide.html), and an NVIDIA GPU + driver that meet the [Isaac Lab system requirements](https://isaac-sim.github.io/IsaacLab/v3.0.0-beta/source/setup/installation/index.html#system-requirements).

```bash
git clone https://github.com/NVlabs/COMPASS.git && cd COMPASS

export HF_TOKEN=hf_xxx                    # https://huggingface.co/settings/tokens
./docker/run.sh assets                    # USDs +…
