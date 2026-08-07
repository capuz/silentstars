---
repo: "Qiskit/qiskit-ibm-runtime"
name: "qiskit-ibm-runtime"
description: "IBM Client for Qiskit Runtime"
readmeQualityOk: true
url: "https://github.com/Qiskit/qiskit-ibm-runtime"
homepage: "https://docs.quantum.ibm.com/api/qiskit-ibm-runtime"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["qiskit"]
stars: 235
forks: 217
openIssues: 126
closedIssues: 1040
watchers: 11
contributors: 114
recentReleases: 0
createdAt: "2021-11-05T15:27:26Z"
lastCommitAt: "2026-08-07T05:09:05Z"
lastReleaseAt: "2022-07-07T02:47:17Z"
status: "thriving"
tags: ["needs_contributors", "fork_magnet"]
healthScore: 97
undervaluedScore: 48
maintainers: ["TsafrirA", "diego-plan9", "apchytr"]
openGraphImageUrl: "https://opengraph.githubassets.com/68400f0e27573203e4fab5e1293c0c33afa248a8e45cb17371268c2074776f49/Qiskit/qiskit-ibm-runtime"
---

# IBM Quantum Compute (formerly Qiskit Runtime) client

**Qiskit** is an open-source SDK for working with quantum computers at the level of extended quantum circuits, operators, and primitives.

**IBM Quantum Compute** (formerly Qiskit Runtime) is a new environment offered by IBM Quantum that streamlines quantum computations and provides optimal
implementations of the Qiskit primitives `sampler` and `estimator` for IBM Quantum hardware. It is designed to use additional classical compute resources to execute quantum circuits with more efficiency on quantum processors, by including near-time computations such as error suppression and error mitigation. Examples of error suppression include dynamical decoupling, noise-aware compilation, error mitigation including readout mitigation, zero-noise extrapolation (ZNE), and probabilistic error cancellation (PEC).

This module provides the interface to access the IBM Quantum Compute service on IBM Quantum Platform.

## Installation

You can install this package using pip:

```sh
pip install qiskit-ibm-runtime
```

Optional dependencies that provide additional features can be install by specifying the package
extras `performance` and…
