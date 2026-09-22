---
repo: "lab-cosmo/flashmd"
name: "flashmd"
description: "A universal ML model to predict molecular dynamics trajectories with long time steps"
readmeQualityOk: true
url: "https://github.com/lab-cosmo/flashmd"
homepage: "https://papers.nips.cc/paper_files/paper/2025/file/7ffade093764c9a59a777c3cbe346b97-Paper-Conference.pdf"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["graph-neural-networks", "machine-learning", "molecular-dynamics"]
stars: 57
forks: 8
openIssues: 0
closedIssues: 2
watchers: 4
contributors: 13
recentReleases: 0
createdAt: "2025-04-25T07:44:37Z"
lastCommitAt: "2026-09-22T08:46:12Z"
lastReleaseAt: "2026-01-09T20:50:55Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 83
undervaluedScore: 40
maintainers: ["johannes-spies", "zyxwwxyz", "frostedoyster"]
openGraphImageUrl: "https://opengraph.githubassets.com/2793f29b04de0f7f0f21ea7cc2bd73f55dac98a429e11e559ccc3ddb6de07351/lab-cosmo/flashmd"
discussionCount: 1
---

FlashMD: universal long-stride molecular dynamics
=================================================

This repository contains custom integrators to run MD trajectories with FlashMD models. These models are
designed to learn and predict molecular dynamics trajectories using long strides, therefore allowing
very large time steps. When using this method, make sure you are aware of its limitations, which are
discussed in [this preprint](http://arxiv.org/abs/2505.19350).

The pre-trained models we make available are trained to reproduce ab-initio MD at the r2SCAN level of theory.

ASE Quickstart (see below for LAMMPS)
-------------------------------------

You can install the package with

```bash
  pip install flashmd
```

After installation, you can run accelerated molecular dynamics as follows:

```py
import ase.build
import ase.units
import torch
from ase.md.velocitydistribution import thermalize_momenta

from flashmd import get_pretrained
from flashmd.ase import EnergyCalculator
from flashmd.ase.langevin import Langevin

# Choose your time step (go for 10-30x what you would use in normal MD for your system)
time_step = 64  # 64 fs; also available: 1, 2, 4, 8, 16, 32, 128 fs

#…
