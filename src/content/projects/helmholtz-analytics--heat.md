---
repo: "helmholtz-analytics/heat"
name: "heat"
description: "Distributed tensors and Machine Learning framework with GPU and MPI acceleration in Python"
url: "https://github.com/helmholtz-analytics/heat"
homepage: "https://heat.readthedocs.io/"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["gpu", "tensors", "machine-learning", "mpi", "numpy", "python", "pytorch", "array-api", "data-analytics", "data-science"]
stars: 241
forks: 66
openIssues: 71
closedIssues: 807
watchers: 7
contributors: 55
recentReleases: 0
createdAt: "2018-05-17T12:16:27Z"
lastCommitAt: "2026-06-25T06:40:57Z"
lastReleaseAt: "2021-09-14T07:27:53Z"
status: "thriving"
tags: ["needs_contributors", "legacy_hero"]
healthScore: 97
undervaluedScore: 43
maintainers: ["dependabot[bot]", "brownbaerchen", "pre-commit-ci[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/133808899/ee5caa80-ff48-11ea-8ace-1b541cb094a5"
discussionCount: 11
---

</div>

---

# Project Status

# Heat
**High-performance data analytics in Python, at scale.**

[Getting Started](https://heat.readthedocs.io/en/stable/quick_start.html) | [Tutorials](https://github.com/helmholtz-analytics/heat/tree/main/doc/source/tutorials/notebooks) | [Docs](https://heat.readthedocs.io/) | [Contributing](https://heat.readthedocs.io/en/stable/CONTRIBUTING.html)

---

### Why Heat?
Heat is a distributed tensor framework built on **PyTorch** and **mpi4py**. It provides highly optimized algorithms and data structures for tensor computations using CPUs, GPUs (CUDA/ROCm), and distributed cluster systems. It is designed to handle **massive arrays** that exceed the memory and computational limits of a single machine.

* **Seamless integration:** Port existing NumPy/SciPy code to multi-node clusters with minimal effort.
* **Hardware-agnostic:** Supports CPUs and GPUs (CUDA, ROCm, Apple MPS).
* **Efficient scaling:** Exploit the entire, cumulative RAM of your cluster for memory-intensive operations.

:point_left: Try Heat right in your browser without any installations!

### Requirements
* **Python:** >= 3.11
* **MPI:** OpenMPI, MPICH, or Intel MPI
* **Frameworks:**…
