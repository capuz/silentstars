---
repo: "XJTU-RL/PowerZoo"
name: "PowerZoo"
description: "A Reinforcement Learning framework for Electrical Engineering "
originalDescription: "A Reinforcement Learning framework for Electrical Engineering "
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/XJTU-RL/PowerZoo"
homepage: "https://xjtu-rl.github.io/PowerZoo/"
language: "Python"
languages: ["Python"]
languagePcts: [99]
stars: 5
forks: 0
openIssues: 2
closedIssues: 5
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2024-03-18T12:37:14Z"
lastCommitAt: "2026-11-12T05:40:00Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 91
undervaluedScore: 78
maintainers: ["sheldon123z", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/ab8a64549fbff2c1591fd5b71cf21c02ea89aa3f2463c64a8a474e895018e823/XJTU-RL/PowerZoo"
---

# PowerZoo

[**Open the interactive showcase**](https://xjtu-rl.github.io/PowerZoo/): explore the 13-node feeder topology, replay 54 traceable OpenDSS steady-state operating conditions, and learn about six research tasks. [Showcase data and reproduction notes](https://github.com/XJTU-RL/PowerZoo/blob/HEAD/docs/showcase/data/README.md).

PowerZoo is a power-system reinforcement learning research framework based on Python, PyTorch, and OpenDSS.
The codebase includes a self-developed multi-agent trainer and a single-agent interface for Stable-Baselines3.

Current main environments:

| Environment parameter | Code directory | Purpose |
| --- | --- | --- |
| `vvc` | `envs/vvc/` | Classic voltage-var control; 13/34/123 share the native physical layer and have passed short training acceptance |
| `smartgrid` | `envs/smartgrid/` | Modular grid control, including PV, reward, and logging components |
| `dsr / dsr_13bus` | `envs/dsr/` | Small-network / IEEE13-derived active restoration; real switches, faults, supply metering, and HAPPO/PPO acceptance |
| `stackelberg / stackelberg_13bus` | `envs/stackelberg/` | Real price precedes load response, with per-agent settlement; sequential…
