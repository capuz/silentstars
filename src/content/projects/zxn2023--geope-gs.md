---
repo: "zxn2023/GeoPE-GS"
name: "GeoPE-GS"
description: "Code for GeoPE-GS: Geometry-Conditioned Pseudo-Enhancement for Low-Light 3D Gaussian Splatting"
readmeQualityOk: true
url: "https://github.com/zxn2023/GeoPE-GS"
language: "Cuda"
languages: ["Cuda", "Python"]
languagePcts: [58, 37]
stars: 5
forks: 0
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-10-14T07:55:24Z"
lastCommitAt: "2026-11-11T11:22:53Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 63
undervaluedScore: 11
maintainers: ["zxn2023"]
openGraphImageUrl: "https://opengraph.githubassets.com/ccc24791e081c4194ae9ca4ef8982481e2a6a9241de84ef889541fb332092a69/zxn2023/GeoPE-GS"
---

# GeoPE-GS: Geometry-Conditioned Pseudo-Enhancement for Low-Light 3D Gaussian Splatting

Official code for **GeoPE-GS: Geometry-Conditioned Pseudo-Enhancement for Low-Light 3D Gaussian Splatting**. The training entry point is [`examples/simple_trainer_ours.py`](https://github.com/zxn2023/GeoPE-GS/blob/HEAD/examples/simple_trainer_ours.py).

> **Release status:** Code is available. Datasets and results will be shared separately. Pretrained weights are not currently available.

## Installation and Usage

The following instructions use **AutoDL / Ubuntu 22.04 / Python 3.10 / CUDA 11.8** as an example environment. An NVIDIA GPU, a compatible driver, and a CUDA toolkit that includes `nvcc` are required.

### 1. Check Your Environment

```bash
python --version
nvidia-smi
nvcc --version
```

Ensure that Python, the NVIDIA GPU driver, and the CUDA compiler are available.

### 2. Clone the Repository

The commands below use AutoDL's `/root/autodl-tmp` directory. On other servers, replace this path with your working directory.

```bash
cd /root/autodl-tmp
git clone --recurse-submodules https://github.com/zxn2023/GeoPE-GS.git
cd GeoPE-GS
```

If you have already cloned the repository,…
