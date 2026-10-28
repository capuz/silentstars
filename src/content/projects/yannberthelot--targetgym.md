---
repo: "YannBerthelot/TargetGym"
name: "TargetGym"
description: "TargetGym: Fast Setpoint tracking environments in Jax."
readmeQualityOk: true
url: "https://github.com/YannBerthelot/TargetGym"
homepage: "https://yannberthelot.github.io/TargetGym/"
language: "Python"
languages: ["Python"]
languagePcts: [99]
topics: ["gymnasium-environment", "jax", "reinforcement-learning-environments", "gymnax"]
stars: 12
forks: 1
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2023-11-08T15:01:44Z"
lastCommitAt: "2026-10-28T09:57:51Z"
lastReleaseAt: "2025-09-18T20:38:51Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 88
undervaluedScore: 67
maintainers: ["YannBerthelot", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/58170052e6f445ab8167e89179aab144d8cbb38ab0d09d64e1c15a22fbb83841/YannBerthelot/TargetGym"
---

24 JAX environments for setpoint tracking,<br/>
  with tuned PID and MPC baselines.

TargetGym provides reinforcement learning environments for **target MDPs**:
tasks where the objective is to reach a setpoint and hold it against
disturbances, rather than to reach a goal state once. The environments model
real plants, including an A320-like aircraft, a glass furnace, a nuclear
reactor, a cement kiln, a grid battery and a wind turbine.

- **Baselines included.** Every environment ships a tuned PID and an MPC
  with full state access, which serves as an upper bound. Both are recorded
  over ten seeds in `src/target_gym/data/baseline_returns.json`.
- **Validated physics.** Each environment carries a `PHYSICS.md` with a sourced
  parameter table, published validation targets asserted by tests, and its
  documented approximations.
- **JAX throughout.** `jit`, `vmap` and `scan` compatible, end-to-end GPU,
  0.6 M to 700 M steps/s on CPU depending on the plant.
- **gymnax API**, with a Gymnasium wrapper for non-JAX libraries and a JaxMARL
  interface for the multi-agent formation task.

Learned-policy results are not published yet. The measurement protocol is
defined in…
