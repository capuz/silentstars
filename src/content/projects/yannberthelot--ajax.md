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
stars: 6
forks: 1
openIssues: 0
closedIssues: 2
watchers: 2
contributors: 3
recentReleases: 2
createdAt: "2025-04-18T17:21:42Z"
lastCommitAt: "2026-11-05T11:24:37Z"
lastReleaseAt: "2026-11-01T21:39:13Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 100
undervaluedScore: 88
maintainers: ["claude", "YannBerthelot"]
openGraphImageUrl: "https://opengraph.githubassets.com/1df0ed49a1a9355582ac45543d8189dff466066d1b46ce40825b47cfb2169173/YannBerthelot/Ajax"
---

The environment, the agent and every seed run together in one program, on a CPU or a GPU, and agents are built from parts that snap together.

Ajax has nineteen agents, each from a published paper. Compared with
[Stable-Baselines3](https://github.com/DLR-RM/stable-baselines3) and
[SBX](https://github.com/araffin/sbx), it offers:

- **[Fast and parallel](https://github.com/YannBerthelot/Ajax/blob/HEAD/docs/guide/performance.md)**: the environment steps beside the agent on a CPU or a GPU, with no Python in the loop, so many seeds and environment copies train at once on one device. The benchmarks run on a CPU; GPU speed is not yet measured.
- **[Modular](https://github.com/YannBerthelot/Ajax/blob/HEAD/docs/guide/extensions.md)**: GRU, LSTM, transformer and Mamba memories, CNN encoders, sequence replay with burn-in, a PID policy and thirty-four extensions, combined in the agent's constructor. The [compatibility table](https://github.com/YannBerthelot/Ajax/blob/HEAD/docs/guide/compatibility.md) shows which parts go together.
- **Multi-paradigm**: discounted and average-reward agents ([ASAC](https://github.com/YannBerthelot/Ajax/blob/HEAD/docs/algorithms/asac.md),…
