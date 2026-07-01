---
repo: "noahfarr/rlx"
name: "rlx"
description: "A reinforcement learning framework based on MLX."
url: "https://github.com/noahfarr/rlx"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 258
forks: 19
openIssues: 1
closedIssues: 1
watchers: 6
contributors: 4
recentReleases: 0
createdAt: "2024-01-22T20:41:59Z"
lastCommitAt: "2026-07-01T07:06:48Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 90
undervaluedScore: 28
maintainers: ["noahfarr"]
openGraphImageUrl: "https://opengraph.githubassets.com/ab72d6668ea735fe10e4bd9f14c05e2dff43d2220f229943a13cf145b3092556/noahfarr/rlx"
---

# 🦾 RLX

**Reinforcement learning that runs end-to-end on [MLX](https://github.com/ml-explore/mlx), Apple's array framework.**

Single-file, CleanRL-style algorithms and vectorized environments that live entirely on device: over a million environment steps per second on Apple silicon.

</div>

---

## Why RLX

- **On-device, end-to-end.** Environments, buffers, and the learner all run on the GPU, with no host round-trips between steps.
- **Fused updates.** Every update step is wrapped in `mx.compile`, fusing the training graph for maximum throughput.
- **Fast.** The bundled MLX-native environments reach well over a million environment steps per second on Apple silicon.
- **Readable.** Each algorithm is a single, self-contained, CleanRL-style file you can read top to bottom.
- **Portable.** The correct MLX backend (Metal on Apple silicon, CUDA on Linux) is selected automatically.

## Algorithms

| Algorithm | File | Action space |
| --- | --- | --- |
| DQN | `rlx/algorithms/dqn.py` | discrete |
| REINFORCE | `rlx/algorithms/reinforce.py` | discrete |
| A2C | `rlx/algorithms/a2c.py` | discrete |
| PPO | `rlx/algorithms/ppo.py` | discrete & continuous |
| SAC |…
