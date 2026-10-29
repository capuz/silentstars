---
repo: "Bahia-Software/polypus"
name: "polypus"
description: "Polypus is a distributed quantum computing library designed to optimize the execution of quantum algorithms by distributing computation across available hardware resources."
readmeQualityOk: true
url: "https://github.com/Bahia-Software/polypus"
homepage: "https://bahia-software.github.io/polypus/"
language: "Rust"
languages: ["Rust", "Python"]
languagePcts: [72, 20]
stars: 16
forks: 0
openIssues: 41
closedIssues: 194
watchers: 0
contributors: 5
recentReleases: 3
createdAt: "2025-05-26T12:05:23Z"
lastCommitAt: "2026-10-29T10:20:47Z"
lastReleaseAt: "2026-09-30T14:07:42Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 96
undervaluedScore: 75
maintainers: ["DBFerPra", "claude", "KevinPGBahia"]
openGraphImageUrl: "https://opengraph.githubassets.com/d3ef8a7b464e1912ec8d6a69aa79e4e2ccc1480a81d371da014545d58df5780c/Bahia-Software/polypus"
---

---

Polypus is a quantum computing library with a **Rust core** and **Python bindings**. It splits shots and optimizer populations across `n_qpus` and runs them on a local simulator, on CESGA's [CUNQA](https://github.com/CESGA-Quantum-Spain/cunqa) distributed QPUs or on CESGA's QMIO quantum processor. Changing the target means changing one argument, not the algorithm code.

## Highlights

| Feature | |
|---|---|
| **Multi-QPU execution** | Shots and populations are split across `n_qpus`; results come back per QPU and merged. |
| **Variational training** | Differential Evolution, Particle Swarm, Quantum Natural Gradient, CMA-ES, Adam (or momentum), SPSA and Rotosolve behind one `train()` call, or an ask/tell optimizer from Optuna, Nevergrad, pycma or your own code through `polypus.External`. Quantum machine learning either with your own Qiskit circuits (`qml.train`, `qml.predict`) or with native models (`qml.Model`) that get exact gradients, exact simulation, minibatches and save/load. |
| **Native cost observables** | QUBO and Ising costs are evaluated in Rust, without a Python call per bitstring. |
| **Rust circuit engine** | `polypus.Circuit` imports and exports OpenQASM 2 and…
