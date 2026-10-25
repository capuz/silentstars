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
stars: 5
forks: 1
openIssues: 0
closedIssues: 1
watchers: 2
contributors: 3
recentReleases: 1
createdAt: "2025-04-18T17:21:42Z"
lastCommitAt: "2026-10-25T22:10:54Z"
lastReleaseAt: "2026-10-21T18:03:21Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 100
undervaluedScore: 87
maintainers: ["YannBerthelot"]
openGraphImageUrl: "https://opengraph.githubassets.com/386d1720f7b78fe947cf09c74a00399aa6a9efa108820b54a8dab3a031ebc0ab/YannBerthelot/Ajax"
---

The environment, the agent and every seed run together on the GPU, and agents are built from parts that snap together.

Ajax has eighteen agents, each from a published paper. Compared with
[Stable-Baselines3](https://github.com/DLR-RM/stable-baselines3) and
[SBX](https://github.com/araffin/sbx), it offers:

- **[Fast and parallel](https://github.com/YannBerthelot/Ajax/blob/HEAD/docs/guide/performance.md)**: the environment steps on the GPU beside the agent, with no Python in the loop, so many seeds and environment copies train at once on one device.
- **[Modular](https://github.com/YannBerthelot/Ajax/blob/HEAD/docs/guide/extensions.md)**: GRU, LSTM, transformer and Mamba memories, CNN encoders, sequence replay with burn-in, a PID policy and twenty-four extensions, combined in the agent's constructor. The [compatibility table](https://github.com/YannBerthelot/Ajax/blob/HEAD/docs/guide/compatibility.md) shows which parts go together.
- **Multi-paradigm**: discounted and average-reward agents ([ASAC](https://github.com/YannBerthelot/Ajax/blob/HEAD/docs/algorithms/asac.md), [APO](https://github.com/YannBerthelot/Ajax/blob/HEAD/docs/algorithms/apo.md)), model-free and model-based,…
