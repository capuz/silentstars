---
repo: "cameronangliss/vgc-bench"
name: "vgc-bench"
description: "An AI benchmark for Pokémon VGC with agent implementations using multi-agent reinforcement learning, behavior cloning, LLMs, and heuristics"
url: "https://github.com/cameronangliss/vgc-bench"
homepage: "https://arxiv.org/abs/2506.10326"
language: "Python"
languages: ["Python"]
languagePcts: [95]
topics: ["game-theory", "multi-agent-learning", "pokemon", "reinforcement-learning"]
stars: 46
forks: 14
openIssues: 0
closedIssues: 4
watchers: 5
contributors: 4
recentReleases: 1
createdAt: "2024-06-12T05:36:12Z"
lastCommitAt: "2026-07-04T06:10:44Z"
lastReleaseAt: "2026-06-23T04:37:27Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 97
undervaluedScore: 54
maintainers: ["cameronangliss"]
openGraphImageUrl: "https://opengraph.githubassets.com/d377b3b50bc4f130dc6fd3ca95c911de756a70a0f00d7293ddd5a64254af66b9/cameronangliss/vgc-bench"
---

# VGC-Bench

This is the official code for [VGC-Bench: Towards Mastering Diverse Team Strategies in Competitive Pokémon](https://arxiv.org/abs/2506.10326).

This benchmark includes:
- multi-agent reinforcement learning (RL) with 4 Policy Space Response Oracle (PSRO) algorithms to fine-tune an agent initialized either randomly or with the output of the BC pipeline
- a behavior cloning (BC) pipeline to gather human demonstrations, process them into state-action pairs, and train a model to imitate human play
- a basic Large Language Model (LLM) player that any LLM can easily be plugged into
- 3 heuristic players from [poke-env](https://github.com/hsahovic/poke-env)

# 🛠️ Setup
Prerequisites:
1. Python (I use v3.13)
1. NodeJS and npm (whatever pokemon-showdown requires)

Run the following to ensure that pokemon showdown is configured:
```
git submodule update --init --recursive
cd pokemon-showdown
npm i
node pokemon-showdown start --no-security
```
Let that run until you see the following text:
```
RESTORE CHATROOM: lobby
RESTORE CHATROOM: staff
Worker 1 now listening on 0.0.0.0:8000
Test your server at http://localhost:8000
```
This shows that you can locally host the showdown…
