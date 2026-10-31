---
repo: "nissymori/mahjax"
name: "mahjax"
description: "A GPU-Accelerated Mahjong Simulator for RL in JAX"
readmeQualityOk: true
url: "https://github.com/nissymori/mahjax"
homepage: "https://nissymori.github.io/mahjax/"
language: "Python"
languages: ["Python"]
languagePcts: [89]
topics: ["jax", "mahjong", "reinforcement-learning", "game", "mahjong-ai"]
stars: 74
forks: 11
openIssues: 0
closedIssues: 15
watchers: 2
contributors: 12
recentReleases: 6
createdAt: "2025-12-10T13:44:56Z"
lastCommitAt: "2026-10-31T15:58:41Z"
lastReleaseAt: "2026-10-31T13:21:54Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 100
undervaluedScore: 53
maintainers: ["nissymori", "Apricot-S", "Haor"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1113806637/cb803c8c-88b1-4405-bcce-ca94a9e3ff68"
---

# MahJax

**A GPU-Accelerated Mahjong Simulator for Reinforcement Learning in [JAX](https://github.com/google/jax)**

> [!NOTE]
> Japanese Riichi Mahjong is a challenging multi-agent RL environment with *imperfect information*, *stochastic dynamics*, *more than two players*, and *high-dimensional observations*.
> MahJax aims to make Mahjong research more accessible to a broader RL community.
> For newcomers, please see our [basic introduction](https://nissymori.github.io/mahjax/mahjong-basics/) and the *bilingual visualization*.

## Overview

- 🚀 **Vectorized Environment:** Extremely fast (approx. **1M+ steps/sec** on 8x A100 GPUs).
- 🎨 **Rich Visualization:** a browser UI that also plays states back in notebooks, with bilingual tiles **for those unfamiliar with Kanji**.
- 🎮 **Playable Interface:** A web-based UI allows you to play directly against the agents you train.
- 📚 **RL Examples:** Simple examples for Behavior Cloning + PPO in the [`examples/`](https://github.com/nissymori/mahjax/tree/main/examples).

For more details, please refer to the [Documentation](https://nissymori.github.io/mahjax/).

## Quick Start
### Install
MahJax is available on PyPI. Please make sure…
