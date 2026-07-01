---
repo: "wi2trier/gpu-server"
name: "gpu-server"
description: "System configuration for a CUDA-based GPU server using Nix"
url: "https://github.com/wi2trier/gpu-server"
language: "Nix"
languages: ["Nix", "Python"]
languagePcts: [76, 24]
topics: ["cuda", "gpu", "nix", "server", "system-config", "ubuntu"]
stars: 9
forks: 0
openIssues: 1
closedIssues: 0
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2023-12-04T19:00:36Z"
lastCommitAt: "2026-07-01T07:05:12Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 77
undervaluedScore: 58
maintainers: ["mirkolenz", "github-actions[bot]", "renovate[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/3c12e42fc3c948b372344978da3c7bb23849bede5640a042a973a12b5069172a/wi2trier/gpu-server"
---

# WI2 GPU Server

## Overview

Our GPU server is provided for research in the field of machine learning and deep learning.
Please do not run/host CPU-based applications, we will happily provide you with a virtual machine for that.
It shall also not be used as a development machine, please test your code locally and only use the server for training and evaluation.

The server has the following hardware configuration:

- CPU: 2x Intel Xeon Gold 6138 @ 2.00GHz (20 cores, 40 threads)
- GPU: 8x NVIDIA Tesla V100 (32 GB VRAM)
- RAM: 12x Micron 64 GB DDR4-2666 ECC

To run your code on the server, we provide two container runtimes:
[Podman](https://podman.io) (a general-purpose Docker replacement) and [Apptainer](https://apptainer.org) (aimed specifically at scientific computing).
Due to its ease of use, we generally recommend Apptainer for users unfamiliar with container engines like Docker.
Among others, it automatically forwards ports form your applications and makes sure that your files on the server are accessible in the container without any configuration (unlike Podman).

> [!important]
> Even users with sudo permissions shall not install additional software through `apt` or other…
