---
repo: "YannBerthelot/Ajax"
name: "Ajax"
description: "End-To-End Jax Deep RL agents, including average-reward versions"
readmeQualityOk: true
url: "https://github.com/YannBerthelot/Ajax"
homepage: "https://yannberthelot.github.io/Ajax/"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 7
forks: 1
openIssues: 0
closedIssues: 2
watchers: 2
contributors: 3
recentReleases: 2
createdAt: "2025-04-18T17:21:42Z"
lastCommitAt: "2026-11-22T02:11:39Z"
lastReleaseAt: "2026-11-01T21:39:13Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 100
undervaluedScore: 86
maintainers: ["YannBerthelot"]
openGraphImageUrl: "https://opengraph.githubassets.com/6d904d2b5107f474b2f93335ee69779849d61765593dd746bebbd3397c520fb2/YannBerthelot/Ajax"
---

The environment, the agent and every seed run together in one program, on a CPU or a GPU, and agents are built from parts that snap together.

## Install

```bash
pip install ajax-rl                 # imports as ajax; Python 3.12 or newer
pip install "ajax-rl[playground]"   # adds Brax and MuJoCo Playground environments
pip install "ajax-rl[cuda]"         # adds CUDA, on Linux with an NVIDIA GPU
```

`ajax-rl[brax]` adds Brax alone; [Installation](https://github.com/YannBerthelot/Ajax/blob/HEAD/docs/getting-started/installation.md)
covers the other extras and `uv sync` from a clone.

## Quickstart

```python
from ajax import PPO

agent = PPO("CartPole-v1", n_envs=8, n_steps=128)
state, evaluations = agent.train(seed=[1, 2, 3], n_timesteps=40_960)

print(evaluations.timesteps)  # when each evaluation ran
print(evaluations.returns)    # one row per seed, one column per evaluation
print(agent.evaluate(state, episodes=20).mean(axis=1))  # each seed's score now
```

`train` prints a line per evaluation, with the mean return over the seeds.
The three seeds train together, in under a minute on a laptop CPU,
compilation included.
