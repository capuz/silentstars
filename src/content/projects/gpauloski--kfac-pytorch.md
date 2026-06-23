---
repo: "gpauloski/kfac-pytorch"
name: "kfac-pytorch"
description: "Distributed K-FAC preconditioner for PyTorch"
url: "https://github.com/gpauloski/kfac-pytorch"
language: "Python"
languages: ["Python"]
languagePcts: [98]
topics: ["pytorch", "optimizer", "kfac", "distributed", "second-order-optimization", "deep-learning"]
stars: 98
forks: 27
openIssues: 6
closedIssues: 37
watchers: 2
contributors: 2
recentReleases: 0
createdAt: "2020-02-16T22:30:17Z"
lastCommitAt: "2026-06-23T23:26:57Z"
lastReleaseAt: "2025-02-07T20:14:45Z"
status: "thriving"
tags: ["needs_contributors", "hidden_gem", "legacy_hero"]
healthScore: 95
undervaluedScore: 44
maintainers: ["gpauloski", "pre-commit-ci[bot]", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/fb0e7c754b97b29d10d73370b9265aaa68798b109ebf440cb199291d62148b07/gpauloski/kfac-pytorch"
---

# Distributed K-FAC Preconditioner for PyTorch

K-FAC, Kronecker-factored Approximate Curvature, is a second-order optimization method based on an efficient approximation of the Fisher information matrix (see the [original paper](https://arxiv.org/abs/1503.05671)).
This repository provides a PyTorch implementation of K-FAC as a preconditioner to standard PyTorch optimizers with support for single-device or distributed training.
The distributed strategy is implemented using KAISA, a K-FAC-enabled, Adaptable, Improved, and Scalable second-order optimizer framework, where the placement of the second-order computations and gradient preconditioning is controlled by the *gradient worker fraction* parameter (see the [paper](https://arxiv.org/abs/2107.01739) for more details).
KAISA has been shown to reduce time-to-convergence in [PyTorch distributed training](https://pytorch.org/tutorials/intermediate/ddp_tutorial.html) applications such as ResNet-50, Mask R-CNN, and BERT.

## Publications

- J. G. Pauloski, L. Huang, W. Xu, K. Chard, I. T. Foster and Z. Zhang, "[Deep Neural Network Training With Distributed K-FAC](https://ieeexplore.ieee.org/document/9739867)," in IEEE Transactions on…
