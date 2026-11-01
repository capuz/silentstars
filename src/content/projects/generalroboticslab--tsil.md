---
repo: "generalroboticslab/TSIL"
name: "TSIL"
description: "Temporal Self-imitation Learning"
readmeQualityOk: true
url: "https://github.com/generalroboticslab/TSIL"
language: "Python"
languages: ["Python", "HTML"]
languagePcts: [60, 28]
stars: 18
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 4
recentReleases: 0
createdAt: "2026-06-16T00:33:24Z"
lastCommitAt: "2026-11-01T21:34:27Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 80
undervaluedScore: 8
maintainers: ["Ys-Jia"]
openGraphImageUrl: "https://opengraph.githubassets.com/8ca761f35afc47289e1ba3891373f4d935d2399b913230f08c8b44726f7a1a17/generalroboticslab/TSIL"
---

## Temporal Self-Imitation Learning (TSIL)

    Temporal Self-Imitation Learning (TSIL) is a reinforcement learning framework that uses self-generated fast-success trajectories as self-supervision for long-horizon robot manipulation. By deriving adaptive temporal targets and replaying efficient behaviors, TSIL helps policies mitigate reward hacking, exploit rare fast-success experience, and improve both task completion and efficiency.

    This repository includes TSIL training and evaluation for MetaWorld and MiniGrid environments.

## 5-minute Mini Demo

The fastest way to understand TSIL is through the mini demo:

- Open in Colab:
  [notebooks/TSIL_demo.ipynb](https://colab.research.google.com/github/generalroboticslab/TSIL/blob/main/notebooks/TSIL_demo.ipynb)
- Read in GitHub:
  [notebooks/TSIL_demo.ipynb](https://github.com/generalroboticslab/TSIL/blob/HEAD/notebooks/TSIL_demo.ipynb)

The demo uses a tiny maze to show how fast rollout successes can become self-supervisory signals. It then illustrates how these signals, adaptive temporal targets and fast-success replay, change learning behavior before scaling to long-horizon manipulation tasks.

Saved outputs let you read…
