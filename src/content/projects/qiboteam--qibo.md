---
repo: "qiboteam/qibo"
name: "qibo"
description: "A full-stack framework for quantum computing."
readmeQualityOk: true
url: "https://github.com/qiboteam/qibo"
homepage: "https://qibo.science"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["quantum", "quantum-circuit", "quantum-computing", "quantum-algorithms", "gpu", "quantum-annealing"]
stars: 366
forks: 102
openIssues: 94
closedIssues: 528
watchers: 32
contributors: 69
recentReleases: 0
createdAt: "2020-02-18T08:21:10Z"
lastCommitAt: "2026-09-29T10:03:58Z"
lastReleaseAt: "2021-04-12T11:51:42Z"
status: "thriving"
tags: ["needs_contributors", "legacy_hero", "community_hub"]
healthScore: 96
undervaluedScore: 39
maintainers: ["scarrazza", "renatomello", "pre-commit-ci[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/660ec83f8f45a0677981f059e7e4b098668987793f529d2929b2fd07d90e156f/qiboteam/qibo"
discussionCount: 21
---

Qibo is an open-source full stack API for quantum simulation and quantum hardware control.

Some of the key features of Qibo are:
- Definition of a standard language for the construction and execution of quantum circuits with device agnostic approach to simulation and quantum hardware control based on plug and play backend drivers.
- A continuously growing code-base of quantum algorithms applications presented with examples and tutorials.
- Efficient simulation backends with GPU, multi-GPU and CPU with multi-threading support.
- Simple mechanism for the implementation of new simulation and hardware backend drivers.

## Documentation

Qibo documentation is available [here](https://qibo.science).

## Minimum Working Examples

A simple [Quantum Fourier Transform (QFT)](https://en.wikipedia.org/wiki/Quantum_Fourier_transform) example to test your installation:
```python
from qibo.models import QFT

# Create a QFT circuit with 15 qubits
circuit = QFT(15)

# Simulate final state wavefunction default initial state is |00>
final_state = circuit()
```

Here another example with more gates and shots simulation:

```python
import numpy as np
from qibo import Circuit, gates

circuit =…
