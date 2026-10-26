---
repo: "lucidrains/contrastive-rl"
name: "contrastive-rl"
description: "Contrastive Reinforcement Learning"
readmeQualityOk: true
url: "https://github.com/lucidrains/contrastive-rl"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["artificial-intelligence", "contrastive-learning", "deep-learning", "reinforcement-learning"]
stars: 73
forks: 5
openIssues: 0
closedIssues: 1
watchers: 2
contributors: 1
recentReleases: 0
createdAt: "2025-08-29T19:44:31Z"
lastCommitAt: "2026-10-26T20:59:26Z"
lastReleaseAt: "2025-09-02T13:32:27Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 85
undervaluedScore: 36
maintainers: ["lucidrains"]
openGraphImageUrl: "https://opengraph.githubassets.com/17ecb12d7a206437e708f2a14d8d432b522fa6a6062c8dc757c2a3a6f2703d86/lucidrains/contrastive-rl"
---

## contrastive-rl

For following a [new line of research](https://arxiv.org/abs/2206.07568) that started in 2022 from [Eysenbach](https://ben-eysenbach.github.io/) et al.

This is important not because of contrastive learning, but because it happens to be a special case where the RL and SSL algorithm is one. It reveals how "traditional" RL is unable to build up representations alone.

*Update: Finally seeing it, at about 3-5k steps*

## install

```shell
$ pip install contrastive-rl-pytorch
```

## usage

```python
import torch
from contrastive_rl_pytorch import ContrastiveRLTrainer

from x_mlps_pytorch import AttnResidualNormedMLP

encoder = AttnResidualNormedMLP(dim = 256, dim_in = 16, dim_out = 128, depth = 4, use_rmsnorm = True)

trainer = ContrastiveRLTrainer(encoder)

trajectories = torch.randn(256, 512, 16)

trainer(trajectories, 100)

# train for 100 steps and save

torch.save(encoder.state_dict(), './trained.pt')
```

## discount conditioning (multi-horizon)

You can condition both the critic and actor on discount factor $\gamma$ to learn across multiple timescales simultaneously (multi-horizon conditioning / Geometric Horizon Models).

Following [Farebrother et…
