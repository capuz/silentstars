---
repo: "liusong-0086/serl-plus-plus"
name: "serl-plus-plus"
description: "A PyTorch implementation of serl/hilserl with RGB/PointCloud"
url: "https://github.com/liusong-0086/serl-plus-plus"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 11
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 1
createdAt: "2026-06-04T15:20:56Z"
lastCommitAt: "2026-06-30T06:51:22Z"
lastReleaseAt: "2026-06-18T09:25:06Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 75
undervaluedScore: 17
maintainers: ["liusong-0086"]
openGraphImageUrl: "https://opengraph.githubassets.com/79817223efd6c30343a416e013e219f413fbc9df0432a7cf0a5484c206b73382/liusong-0086/serl-plus-plus"
---

# SERL-Plus-Plus

> This repository is built upon a fork of [HIL-SERL](https://github.com/rail-berkeley/hil-serl).

## Requirements

- Python 3.10
- CUDA 12.4+ (recommended for GPU acceleration)
- PyTorch 2.4.1+
- MuJoCo 2.3.7+
- See `pyproject.toml` for full dependency list

## Installation

```bash
# clone repo
git clone <repository-url>
# cd folder
cd serl-torch
# create venv by uv
uv sync
# source venv
source .venv/bin/activate
```

## Quick Start
### 1. Peg insert sim with RGB

```bash
# cd peg_insert_sim
cd demos/experiments/peg_insert_sim
# Download demo data
mkdir demo_data && cd demo_data
wget https://github.com/liusong-0086/serl-plus-plus/releases/download/demo_data/peg_insert_sim_20_demos.pkl
cd ..
# Start learner node
bash run_learner.sh
# Open new terminal, start actor node
bash run_actor.sh
```

### 2. Peg insert sim with PointCloud

```bash
# cd peg_insert_sim
cd demos/experiments/peg_insert_sim
# Download demo data
mkdir demo_data && cd demo_data
wget https://github.com/liusong-0086/serl-plus-plus/releases/download/demo_data/peg_insert_pointcloud_sim_20_demos.pkl
cd ..
# Start learner node
bash run_learner.sh
# Open new terminal, start actor node
bash run_actor.sh…
