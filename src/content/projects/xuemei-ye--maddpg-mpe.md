---
repo: "xuemei-ye/maddpg-mpe"
name: "maddpg-mpe"
description: "Transplant a implementation of MADDPG to the environment provided by openAI (multiagent-particle-envs)."
readmeQualityOk: true
url: "https://github.com/xuemei-ye/maddpg-mpe"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["rl", "drl"]
stars: 20
forks: 4
openIssues: 0
closedIssues: 1
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2017-11-29T04:37:17Z"
lastCommitAt: "2026-11-11T11:19:01Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 90
undervaluedScore: 37
maintainers: ["xuemei-ye"]
openGraphImageUrl: "https://opengraph.githubassets.com/f3121ed4abea258fd8e750030f37d3416edd308ce3d990fa62174da7ec93a1b1/xuemei-ye/maddpg-mpe"
---

# maddpg-mpe
Transplant a implementation of MADDPG to the environment provided by openAI (multiagent-particle-envs).

## Introduction

Transplant a pytorch implementation [pytorch-maddpg](https://github.com/xuehy/pytorch-maddpg]) of MADDPG.

paper : [multi-agent deep deterministic policy gradient algorithm](https://arxiv.org/abs/1706.02275).

environment : [multiagent-particle-envs](https://github.com/openai/multiagent-particle-envs). 
(tested it with the simple tag environment and didn't use communication property c).

## Dependency

- [pytorch](https://github.com/pytorch/pytorch)
- [visdom](https://github.com/facebookresearch/visdom)
- python 3 (recommend using the anaconda/miniconda)

## Install

- git clone and there are a number of other requirements which can be found in multiagent-particle-envs/environment.yml file if using anaconda distribution.
- add directories to PYTHONPATH: 
      
       export PYTHONPATH=$(pwd):$(pwd)/multiagent
- python main.py

## Result

：

Trained 1000 episodes：

Two purple spots are agents, red spots are poison, and green spots are food. It can be seen that before the training, the movement of the agent is random. After 1000 iterations, the…
