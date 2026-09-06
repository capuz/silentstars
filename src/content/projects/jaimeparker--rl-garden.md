---
repo: "JaimeParker/rl-garden"
name: "rl-garden"
description: " PyTorch-native, GPU-first robot-learning framework — RL, imitation learning, and diffusion/flow policies, 55+ algorithms, sim-to-real backends."
readmeQualityOk: true
url: "https://github.com/JaimeParker/rl-garden"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["reinforcement-learning", "robotics"]
stars: 10
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 7
recentReleases: 0
createdAt: "2026-04-24T05:21:16Z"
lastCommitAt: "2026-09-06T04:03:14Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 88
undervaluedScore: 44
maintainers: ["JaimeParker"]
openGraphImageUrl: "https://opengraph.githubassets.com/fac282a202a9d14d6126df98c975000dbef0d3e03bf685260dfc298e945b1ad2/JaimeParker/rl-garden"
---

</p>

# rl-garden

`rl-garden` is a PyTorch-native robot-learning framework for online RL, offline RL,
imitation learning, and offline-to-online training. It provides reusable algorithm,
policy, encoder, replay-buffer, and environment-backend components for simulation,
offline datasets, and real-robot systems.

The framework keeps rollout, replay, inference, and update paths on torch tensors,
with GPU-vectorized execution as the preferred training path. Environment backends
are registered independently from algorithms so additional simulators and robot
platforms can be integrated without creating platform-specific training entrypoints.

## Capabilities

- **Online RL:** SAC, PPO, RLPD, RLPD-Hybrid, TD3, DrQ-v2, FlashSAC, TDMPC2,
  DPPO, SACFlow, ACRLPD, plus recurrent and transformer SAC/PPO variants. See
  the [Training Entrypoints](#training-entrypoints) table for the full list.
- **Offline RL and imitation:** BC, Diffusion BC, IQL, CQL, Cal-QL, BCQ, PLAS,
  EDAC, SPOT, ReBRAC, FQL, QGF, QAM, TD3+BC, AWAC, and multitask TDMPC2.
- **Offline-to-online:** WSRL, Cal-QL, IQL, AWAC, SPOT, and ACFQL pretraining,
  warm start, and online fine-tuning.
- **Observations:** flat state…
