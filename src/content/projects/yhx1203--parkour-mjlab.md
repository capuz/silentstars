---
repo: "yhx1203/parkour_mjlab"
name: "parkour_mjlab"
description: "Reinforcement learning codebase built on MJLab for Unitree G1 Parkour."
readmeQualityOk: true
url: "https://github.com/yhx1203/parkour_mjlab"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 7
forks: 2
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-07-21T07:09:13Z"
lastCommitAt: "2026-07-23T06:16:29Z"
status: "thriving"
tags: []
healthScore: 79
undervaluedScore: 19
maintainers: ["yhx1203"]
openGraphImageUrl: "https://opengraph.githubassets.com/88a5f3309b9b366e01696b0abf4ca6d0fd82b015011ba7cd0c5111173e190e08/yhx1203/parkour_mjlab"
---

# Parkour_mjlab

`parkour_mjlab` is a reinforcement learning project built upon
[MJLab](https://github.com/mujocolab/mjlab.git), using MuJoCo as its physics
simulation backend for **G1 Parkour** on the Unitree G1 robot.

MJLab combines [Isaac Lab](https://github.com/isaac-sim/IsaacLab)'s proven API
with best-in-class [MuJoCo](https://github.com/google-deepmind/mujoco_warp)
physics to provide lightweight, modular abstractions for reinforcement learning
robotics research and sim-to-real deployment.

## Installation
**Conda environment**

```bash
conda create -n mjlab python=3.11
conda activate mjlab
```

**Install dependencies**
```bash
sudo apt install -y libyaml-cpp-dev libboost-all-dev libeigen3-dev libspdlog-dev libfmt-dev
```

**Install parkour_mjlab**
```bash
git clone https://github.com/yhx1203/parkour_mjlab.git
```

```bash
cd parkour_mjlab
python -m pip install -e . 
```

## unitree_mujoco SDK2 sim2sim

**Preparation**

[unitree_sdk2_python](https://github.com/unitreerobotics/unitree_sdk2_python)

```bash
conda activate mjlab

cd ~
sudo apt install python3-pip
git clone https://github.com/unitreerobotics/unitree_sdk2_python.git
cd unitree_sdk2_python
pip3 install -e .
```…
