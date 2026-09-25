---
repo: "SimoneGasperini/qiskit-symb"
name: "qiskit-symb"
description: "Symbolic evaluation of parameterized quantum circuits in Qiskit"
readmeQualityOk: true
url: "https://github.com/SimoneGasperini/qiskit-symb"
homepage: "https://pypi.org/project/qiskit-symb/"
language: "Jupyter Notebook"
languages: ["Jupyter Notebook", "Python"]
languagePcts: [54, 46]
topics: ["qiskit", "quantum-computing", "symbolic-computation", "sympy"]
stars: 40
forks: 3
openIssues: 1
closedIssues: 7
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2023-05-15T13:21:48Z"
lastCommitAt: "2026-09-25T09:01:48Z"
lastReleaseAt: "2025-07-24T02:32:49Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 97
undervaluedScore: 33
maintainers: ["SimoneGasperini"]
openGraphImageUrl: "https://opengraph.githubassets.com/65b889917481a2083cd47a5d285132e51aaf99a1512d1c97650185ff398b29b4/SimoneGasperini/qiskit-symb"
discussionCount: 0
---

</p>

</p>

# Table of contents
- [Introduction](#introduction)
- [Installation](#installation)
    - [User-mode](#user-mode)
    - [Dev-mode](#dev-mode)
- [Usage examples](#usage-examples)
    - [_Sympify_ a Qiskit circuit](#sympify-a-qiskit-circuit)
    - [_Lambdify_ a Qiskit circuit](#lambdify-a-qiskit-circuit)
- [Qiskit Medium](#qiskit-medium)
- [Contributors](#contributors)

# Introduction
The `qiskit-symb` package is meant to be a Python tool to enable the symbolic evaluation of parametric quantum states defined by [Qiskit](https://github.com/Qiskit/qiskit) by parameterized quantum circuits.

A Parameterized Quantum Circuit (PQC) is a quantum circuit where we have at least one free parameter (e.g. a rotation angle $\theta$). PQCs are particularly relevant in Quantum Machine Learning (QML) models, where the values of these parameters can be learned during training to reach the desired output.

In particular, `qiskit-symb` can be used to create a symbolic representation of a parametric quantum state directly from the Qiskit quantum circuit. This has been achieved through the re-implementation of some basic classes defined in the…
