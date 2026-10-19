---
repo: "Roboparty/UFO"
name: "UFO"
description: "An open-source unsupervised RL framework for humanoid control with FB/TeCH training, robot-aware motion import, and real-world teleoperation."
readmeQualityOk: true
url: "https://github.com/Roboparty/UFO"
homepage: "https://roboparty.github.io/UFO/"
language: "Python"
languages: ["Python"]
languagePcts: [99]
topics: ["mjlab", "teleoperation", "unsupervised-learning", "humanoid-control"]
stars: 327
forks: 38
openIssues: 3
closedIssues: 6
watchers: 3
contributors: 4
recentReleases: 0
createdAt: "2026-07-13T08:01:01Z"
lastCommitAt: "2026-10-19T09:13:27Z"
status: "thriving"
tags: []
healthScore: 77
undervaluedScore: 13
maintainers: ["Xuewang01", "liyitang22"]
openGraphImageUrl: "https://opengraph.githubassets.com/4d5ca888bcc00a15849cb2fbf1d93521b3b3c4ea8316411d53f6a62a173bad18/Roboparty/UFO"
---

UFO: A General <b>U</b>nsupervised Reinforcement Learning <b>F</b>ramework for Humanoid C<b>O</b>ntrol

  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

UFO is an unsupervised reinforcement learning framework for humanoid control, built on **mjlab**. It supports **Unitree G1 / RoboParty RP1.3**, **FB-CPR-Aux / TeCH**, multi-GPU training, and tracking, reward and goal inference.

**The RP1 TeCH policy has not been tested on the physical robot.**

**[G1 / RP1 training data](https://huggingface.co/datasets/xuewang/UFO-MotionData) and the [G1 FB policy tested on hardware](https://huggingface.co/xuewang/ufo-g1-policy) are available.**

## News

**2026-10-15 — Training performance and multi-robot update**

**192M-step FB / mjlab training:** all runs below use **8 × NVIDIA H20**, **BF16 mixed precision**, and **1024-wide networks with shared critics**.

| Experiment | Global training FPS | Last EMD ↓ | Time to 192M steps |
| --- | ---: | ---: | ---: |
| G1: original DR + original reward | **12,440** | **0.6655** | **4 h 45 min** |
| G1: extended DR + original reward | **12,467** | **0.7406** | **≈4 h 51 min** |
| G1: extended DR + updated reward | **12,217** | **0.7554** | **4 h 55 min** |
| RP1:…
