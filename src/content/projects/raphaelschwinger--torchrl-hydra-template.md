---
repo: "raphaelschwinger/torchrl-hydra-template"
name: "torchrl-hydra-template"
description: "Flexible and scalable template based on torch/rl + Hydra. Fostering rapid and reproducible RL development and research!"
readmeQualityOk: true
url: "https://github.com/raphaelschwinger/torchrl-hydra-template"
language: "Python"
languages: ["Python"]
languagePcts: [95]
stars: 5
forks: 5
openIssues: 1
closedIssues: 1
watchers: 0
contributors: 5
recentReleases: 0
createdAt: "2026-04-16T08:44:41Z"
lastCommitAt: "2026-08-27T10:31:48Z"
status: "thriving"
tags: ["fork_magnet"]
healthScore: 81
undervaluedScore: 64
maintainers: ["raphaelschwinger", "The-Mats", "BahneTP"]
openGraphImageUrl: "https://opengraph.githubassets.com/b6cffcbb3c0c3efd6f0a055709701e76e95f5ef11740bc9d8985d8cee93ead9d/raphaelschwinger/torchrl-hydra-template"
---

# TorchRL Hydra Template

A clean, modular template for deep reinforcement learning research.<br>
Click on [<kbd>Use this template</kbd>](https://github.com/raphaelschwinger/torchrl-hydra-template/generate) to initialize a new repository.

_Suggestions are always welcome!_

</div>

## Philosophy

Reinforcement learning code tends to become monolithic — training loop, environment
setup, network construction, replay buffer, and update rule all tangled together.
This template enforces a hard split into five components, inspired by how
[PyTorch Lightning](https://github.com/Lightning-AI/pytorch-lightning) structures
deep learning code:

| Component       | Owns                                                                  | Lightning analogy        |
|-----------------|-----------------------------------------------------------------------|--------------------------|
| **Algorithm**   | Everything that affects learning: network, replay buffer, loss, optimiser, exploration, target-net schedule, collector config. **All hyperparameters live here.** | `LightningModule`        |
| **Trainer**     | The loop. Device placement, data collection, logging, callbacks, checkpointing. **No…
