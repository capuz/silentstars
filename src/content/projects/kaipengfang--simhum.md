---
repo: "kaipengfang/SimHum"
name: "SimHum"
description: "[CoRL 2026] Official code for Sim-and-Human Co-training for Data-Efficient and Scene-Generalizable Bimanual Manipulation."
readmeQualityOk: true
url: "https://github.com/kaipengfang/SimHum"
homepage: "https://kaipengfang.github.io/sim-and-human/"
language: "Python"
languages: ["Python"]
languagePcts: [88]
stars: 36
forks: 0
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 2
recentReleases: 0
createdAt: "2026-01-28T04:35:19Z"
lastCommitAt: "2026-11-19T12:01:55Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 59
undervaluedScore: 22
maintainers: ["kaipengfang"]
openGraphImageUrl: "https://opengraph.githubassets.com/a7abb794611ecbe4f2ec6a435df708e2db3174a0f19d1e1891c47ebcb89e7fc6/kaipengfang/SimHum"
---

SimHum co-trains a bimanual manipulation policy on **simulated robot trajectories** and **real-world human demonstrations**, then fine-tunes it on a small real-robot dataset. Simulation supplies robot-valid actions, and human data supplies real-world observations. With only **80 real-robot episodes per task**, SimHum reaches **62.5% success on held-out OOD scenes** across four bimanual tabletop tasks, **53.7% higher than Real only** in absolute success rate. Under matched data-collection time, it improves over the best single-source pre-training baseline by **35.0%** in absolute success rate.

---

## Installation

```bash
git clone https://github.com/kaipengfang/SimHum.git
cd SimHum
conda env create -f env.yml
conda activate dit
```

## Data Preparation

Convert raw HDF5 episodes to replay buffer format:
