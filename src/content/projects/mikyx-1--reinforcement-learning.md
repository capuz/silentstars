---
repo: "Mikyx-1/Reinforcement-Learning"
name: "Reinforcement-Learning"
description: "Reinforcement Learning Playground - A place to tryout and test new algorithms"
url: "https://github.com/Mikyx-1/Reinforcement-Learning"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 95
forks: 0
openIssues: 5
closedIssues: 22
watchers: 2
contributors: 2
recentReleases: 0
createdAt: "2023-09-10T14:31:39Z"
lastCommitAt: "2026-07-02T06:32:37Z"
status: "thriving"
tags: []
healthScore: 90
undervaluedScore: 43
maintainers: ["Mikyx-1"]
openGraphImageUrl: "https://opengraph.githubassets.com/4295dc9e954b36b093e240e2b5fcfd550cb437acc5407c5b4caeb3a02f7cbec0/Mikyx-1/Reinforcement-Learning"
---

# Reinforcement Learning Zoo

Clean, well-documented implementations of core RL algorithms, built to demonstrate scientific rigour: reproducible experiments, structured evaluation, and clear learning curves.

### Contents

- [Demos](#demos)
- [Algorithms](#algorithms)
- [Repo structure](#repo-structure)
- [Quick start](#quick-start)
- [Design principles](#design-principles)

---

## Demos

<table>
<tr>
<td align="center" width="50%">
<b>DQN</b> · CartPole-v1 · greedy eval, return 500/500
</td>
<td align="center" width="50%">
<b>SAC</b> · Hopper-v5 (MuJoCo, 3D) · greedy eval, return ≈3565, full 1000-step episode
</td>
</tr>
</table>

GIFs are generated straight from a saved checkpoint with [`scripts/record_video.py --format gif`](scripts/record_video.py) (no manual editing) — MuJoCo scenes need `--width`/`--height` and `--gif_colors` to keep the file size sane (a raw-resolution, full-palette GIF of Hopper hit 15MB; downscaled + palette-quantized it's ~1.5-2MB). See that script's usage examples for the exact command.

**Humanoid-v5 (17 DOF) is training** — the genuinely hard 3D benchmark, typically needs several million steps for a real walking gait. It's running in the background;…
