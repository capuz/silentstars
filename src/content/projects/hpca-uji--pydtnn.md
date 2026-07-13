---
repo: "hpca-uji/PyDTNN"
name: "PyDTNN"
description: "PyDTNN - Python Distributed Training of Neural Networks"
readmeQualityOk: true
url: "https://github.com/hpca-uji/PyDTNN"
language: "Python"
languages: ["Python"]
languagePcts: [91]
topics: ["neural-networks", "stochastic-gradient-descent", "convolutional-neural-networks", "mlp-networks"]
stars: 14
forks: 4
openIssues: 0
closedIssues: 2
watchers: 2
contributors: 8
recentReleases: 0
createdAt: "2019-05-30T14:42:56Z"
lastCommitAt: "2026-07-13T06:19:27Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 100
undervaluedScore: 71
maintainers: ["Pluijter-UJI"]
openGraphImageUrl: "https://opengraph.githubassets.com/40272352b9e4756c82e22d697d575448ee96ab6250832249b645540ffae19399/hpca-uji/PyDTNN"
---

# Python Distributed Training of Neural Networks

## Introduction
PyDTNN is a lightweight library developed at Universitat Jaume I (Spain)
for distributed and federated deep learning training and inference of
convolutional and transformer-based neural networks, intended as an initial
starting point for interacting with training and inference processes.
PyDTNN prioritizes simplicity over peak performance, offering an approachable
user interface that enables a gentle learning curve. To carry out training
and inference, PyDTNN exploits inter-process parallelism (via MPI) and
intra-process parallelism (via multithreading), leveraging the capabilities
of multicore processors and GPUs at the node level. For this purpose,
PyDTNN relies on mpi4py/pympi/NCCL for message passing, BLAS routines
accessed through NumPy/Cython for multicore processors,
and PyCUDA/CuPy/cuDNN/cuBLAS for GPU acceleration.

Supported layers:
- Fully-connected
- Convolutional 2D
- Max pooling 2D
- Average pooling 2D
- Dropout
- Flatten
- Feed Forward
- Multi-head attention
- Batch normalization
- Encoder & Decoder (for transformer nets, e.g., Bert)
- Addition block (for residual nets, e.g., ResNet)
- Concatenation…
